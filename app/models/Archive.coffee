Api = require 'zooniverse/lib/api'
badgeDefinitions = require 'lib/badge-definitions'

Subject = require 'zooniverse/models/subject'
User = require 'zooniverse/models/user'

{ formatNumber } = require 'lib/utils'

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
      if badge.collection is @slug() or 'collection' not of badge
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
    (@stats.total - @stats.paused) * @COMPLETION_FACTOR

  # progress_strict calculates progress using raw complete and total values from the API
  progress_strict: =>
    unless @stats? then return 0
    Math.floor(@stats.complete / (@stats.total) * 100)

  recordsComplete: =>
    formatNumber @stats.complete

  isComplete: =>
    unless @stats? then return 0
    @stats.complete >= (@stats.total - @stats.paused)

  transcription_count: =>
    @metadata.rows_transcribed || @classification_count || 0

module.exports = Archive
