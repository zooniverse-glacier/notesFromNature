badgeDefinitions = require 'lib/BadgeDefinitions'

Api = require 'zooniverse/lib/api'
User = require 'zooniverse/lib/models/user'

class Badge extends Spine.Model
  @configure 'Badge', 'name', 'url', 'description', 'collection', 'awardText'
  
  @loadDefinitions: ->
    for name, badgeDefinition of badgeDefinitions
      badgeDefinition.name = name
      @create badgeDefinition
    @trigger 'badgesLoaded'

  @getUserBadges: ->
    if User.current?
      Api.get("/users/#{User.current.id}/badges").onSuccess (badges) =>
        console.log badges
        badges = ([name,created_at] for name, created_at of badges.badges)
        badges = _(badges).sortBy (badge) -> moment().diff(moment(badge[1]))
        User.current.badges = []
        for badge in badges
          @insertIntoUser(badge[0], badge[1])
        Badge.update_weekly_report()
        @trigger 'badgesLoaded'
    else
      throw 'Need user logged in to award badges'

  @insertIntoUser: (name, created_at) ->
    if name.indexOf('weekly_report') > -1
      @process_weekly_report(name, created_at)
    else
      badge = @findByName(name)
      if badge? 
        badge.created_at = created_at
        User.current.badges.push badge

  @process_weekly_report: (name, created_at) ->
    console.log 'name', name, 'created_at', created_at
    number = parseInt(name.replace('weekly_report_',''))
    console.log 'number', number
    User.current.badges.push {name: 'weekly_report', number: number, created_at: created_at}

  @update_weekly_report: ->
    reports = (moment(badge.created_at).diff(moment(), 'weeks') for badge in User.current.badges when badge.name == 'weekly_report')

    if reports.length == 0
      @post_weekly_report()
    else 
      if reports.indexOf(0) == -1
        @post_weekly_report()
      
  @post_weekly_report: =>
    if User.current?
      Api.post("/users/#{User.current.id}/badges", {badge: {name: "weekly_report_#{moment().format('d-MM-YYYY')}"}}).onSuccess (data) =>
        Badge.getUserBadges()

  @findBySlug: (slug) =>
    result = @select (b) ->
      b.slug() is slug 
    result[0]

  @badgesForProject: (projectSlug) =>
    @select (b) =>
      b.collection is projectSlug

  @findByName: (name) =>
    result = @select (d) ->
      d.name is name
    result[0]

  constructor: ->
    super

  slug: =>
    @name.replace /\s/g, "_"

  checkAward: =>
    result = badgeDefinitions[@name].condition
      user: User.current
    if result
      @award()

  award: =>
    if User.current?
      Badge.trigger('badgeAwarded', @)
      Api.post("/users/#{User.current.id}/badges", { badge:{name: @name} }).onSuccess (data) =>
        Badge.getUserBadges()
    else
      throw 'Need user logged in to award badge'

module.exports = Badge