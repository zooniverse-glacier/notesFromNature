Api = require 'zooniverse/lib/api'
badgeDefinitions = require 'lib/BadgeDefinitions'

Subject = require 'zooniverse/models/subject'
User = require 'zooniverse/models/user'

class Archive extends Spine.Model
  @configure 'Archive', 'group_id', 'classification_count', 'name', 'metadata', 'complete', 'stats', 'categories'
  @belongsTo 'institute', 'models/Institute'
  @hasMany 'badges', 'models/Badge'
  COMPLETION_FACTOR: 4
  classification_count: 0

  @findBySlug: (slug) ->
    result = @select (archive) ->
      archive.slug() is slug
    result[0]

  @filter: (params) ->
    if params? and params.type?
      @select (archive) ->
        archive.categories.indexOf(params.type) != -1 or archive.categories.indexOf(_.str.capitalize(params.type)) != -1
    else
      @all()
  
  addBadges: =>
    for badge in badgeDefinitions
      if badge.collection is @slug()
        @badges().create badge

  checkBadges: =>
    notAwardedYet = _.reject @badges().all(), (badge) ->
      return _.some(User.current.badges, (userBadge) -> userBadge.name is badge.name)

    for badge in notAwardedYet
      badge.checkAward()

  transcriptionUrl: =>
    "#/archives/#{@slug()}/transcribe"

  slug: ->
    (@name.replace /\s/g, "_").toLowerCase()

  transcriptions_needed: =>
    @stats.total * @COMPLETION_FACTOR

  # progress_strict reflects that historically the completion criteria changed 
  # from 10 to 4 transcriptions per image
  progress_strict: =>
    unless @stats? then return 0
    Math.ceil ( (@stats.complete / @stats.total) * 100)

    # however in order to display a number that prgress reflects real time transcriptions
  # we are displaying this number
  progress: =>
    unless @stats? then return 0
    result = Math.ceil ( (@classification_count / @transcriptions_needed() ) * 100)
    if result > 100
      return 100
    else
      return result

  recordsComplete: =>
    @formatNumber @stats.complete

  total: =>
    @formatNumber @stats.total

  complete: =>
    unless @stats? then return 0
    (@stats.complete is @stats.total)

  # Private
  formatNumber: (n) ->
    return n unless n
    n.toString().replace /(\d)(?=(\d{3})+(?!\d))/g, '$1,'

module.exports = Archive
