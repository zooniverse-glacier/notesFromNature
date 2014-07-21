Api = require 'zooniverse/lib/api'
User = require 'zooniverse/models/user'

class Badge extends Spine.Model
  @configure 'Badge', 'name', 'url', 'description', 'collection', 'awardText', 'condition'
  @belongsTo 'archive', 'models/Archive'
  
  @getUserBadges: ->
    if User.current
      Api.current.get '/projects/notes_from_nature/badges', (badges) =>
        if badges is null then return
        
        badges = ([name, created_at] for name, created_at of badges.badges)
        User.current.badges = []

        for badge in badges
          @insertIntoUser badge[0], badge[1]

        Badge.updateReport()

        User.current.badges = _(User.current.badges).sortBy (badge) -> moment().diff(moment(badge.created_at))

        @trigger 'badgesLoaded'

  @insertIntoUser: (name, created_at) ->
    if !!~name.indexOf 'summary'
      @processReport(name, created_at)

    else if !!~name.indexOf 'weekly'
      # do nothing
    else
      badge = @findByName name
      if badge?
        badge.created_at = created_at
        User.current.badges.push badge

  @processReport: (name, created_at) ->
    classificationsAtMoment = parseInt name.replace 'summary_', ''
    User.current.badges.push
      name: 'summary'
      number: classificationsAtMoment
      created_at: created_at

  @updateReport: ->
    reports = (moment(badge.created_at).diff(moment(), 'weeks') for badge in User.current.badges when badge.name is 'summary')

    if reports.length is 0
      @postReport()
    else 
      if reports.indexOf(0) is -1
        @postReport()

  @postReport: ->
    badge = 
      name: "summary_#{ User.current.project.classification_count }"

    Api.current.post '/projects/notes_from_nature/badges', { badge: badge }, (data) ->
      Badge.getUserBadges()

  @findBySlug: (slug) ->
    result = @select (b) ->
      b.slug() is slug 
    result[0]

  @badgesForProject: (projectSlug) ->
    @select (b) ->
      b.collection is projectSlug

  @findByName: (name) ->
    result = @select (d) ->
      d.name is name
    result[0]

  slug: => @name.replace /\s/g, "_"

  checkAward: =>
    archive = @archive() || null
    if User.current and @condition.func { user: User.current, archive: archive }
      @award()

  award: =>
    if User.current
      Badge.trigger 'badgeAwarded', @
      @condition.func = -> return false
      Api.current.post '/projects/notes_from_nature/badges', {badge: {name: @name}}, (data) =>
        Badge.getUserBadges()

module.exports = Badge
