User = require('zooniverse/lib/models/user')
badgeDefinitions=  require('lib/BadgeDefinitions')
Api= require('zooniverse/lib/api')

class Badge extends Spine.Model
  @configure 'Badge', 'name', 'url', 'description','collection'
  
  constructor: ->
    super
  
  @loadDefinitions:->
    for name, badgeDefinition of badgeDefinitions
      badgeDefinition.name =name
      @create badgeDefinition
    @trigger 'badgesLoaded'

  @getUserBadges:->
    if  User.current?
      Api.get("/users/#{User.current.id}/badges").onSuccess (badges)=>
        
        badges = ([name,created_at]  for name,created_at of badges.badges)
        badges =  _(badges).sortBy (el)-> moment().diff(moment(el[1]))
        User.current.badges =[]
        for badge in badges
          @insertIntoUser(badge[0], badge[1])
        Badge.update_weekly_report()
        @trigger 'badgesLoaded'
    else
      throw "Need user logged in to award badges"

  @insertIntoUser:(name,created_at)->
    if name.indexOf("weekly_report") >-1
      @process_weekly_report(name, created_at)
    else
      b = @findByName(name)
      b.created_at = created_at
      User.current.badges.push b

  @process_weekly_report:(name,created_at)->
    number = parseInt(name.replace('weekly_report_',''))
    User.current.badges.push {name: 'weekly_report' , number: number, created_at: created_at}

  @update_weekly_report:->
    reports =  ( moment(badge.created_at).diff(moment(),'weeks') for badge in User.current.badges when badge.name == 'weekly_report')
    console.log reports, reports.length, reports.indexOf(0)
    if reports.length==0
      @post_weekly_report()
    else 
      if reports.indexOf(0) == -1
        @post_weekly_report()
      
  @post_weekly_report:=>
    if User.current?
      Api.post("/users/#{User.current.id}/badges", {badge: {name: "weekly_report_#{User.current.project.classification_count}"} }).onSuccess (data)=>
        console.log "here"
        Badge.getUserBadges()


  @findBySlug: (slug)=>
    result = @select (b)->
      b.slug() == slug 
    result[0]

  slug :=>
    @name.replace /\s/g, "_"

  @findByName:(name)=>
    result = @select (d)->
      d.name == name
    result[0]

  checkAward:=>
    result = badgeDefinitions[@name].condition
      user    : User.current
    if result
      @award()

  award:=>
    if User.current?
      Api.post("/users/#{User.current.id}/badges", { badge:{name: @name} }).onSuccess (data)=>
        Badge.getUserBadges()
    else 
      throw 'Need user logged in to award badge'
  


module.exports = Badge