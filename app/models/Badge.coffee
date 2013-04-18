Api = require 'zooniverse/lib/api'
User = require 'zooniverse/models/user'

class Badge extends Spine.Model
  @configure 'Badge', 'name', 'url', 'description', 'collection', 'awardText', 'condition'
  @belongsTo 'archive', 'models/Archive'
  
  @getUserBadges: ->
    if User.current?
      Api.get('/projects/notes_from_nature/badges').onSuccess (badges) =>
        if badges is null then return
        
        badges = ([name,created_at] for name, created_at of badges.badges)
        badges = _(badges).sortBy (badge) -> moment().diff(moment(badge[1]))
        User.current.badges = []
        for badge in badges
          @insertIntoUser(badge[0], badge[1])
        Badge.update_weekly_report()
        @trigger 'badgesLoaded'

  @insertIntoUser: (name, created_at) ->
    if name.indexOf('weekly_report') > -1
      @process_weekly_report(name, created_at)
    else
      badge = @findByName(name)
      if badge? 
        badge.created_at = created_at
        User.current.badges.push badge

  @process_weekly_report: (name, created_at) ->
    number = parseInt(name.replace('weekly_report_',''))
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
      Api.post('/project/notes_from_nature/badges', {badge: {name: "weekly_report_#{moment().format('d-MM-YYYY')}"}}).onSuccess (data) =>
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

  slug: => @name.replace /\s/g, "_"

  checkAward: =>
    if User.current and @condition.func({user: User.current, archive: @archive()}) then @award()

  award: =>
    if User.current?
      Badge.trigger 'badgeAwarded', @
      Api.post('/project/notes_from_nature/badges', {badge: {name: @name}}).onSuccess (data) =>
        Badge.getUserBadges()

module.exports = Badge