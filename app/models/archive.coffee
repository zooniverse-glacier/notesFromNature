Api = require 'zooniverse/lib/api'
badgeDefinitions = require '../lib/badge-definitions'

Institute = require './institute'
Badge = require './badge'

Subject = require 'zooniverse/models/subject'
User = require 'zooniverse/models/user'

{ formatNumber } = require '../lib/utils'

class Archive extends Spine.Model
  @configure 'Archive', 'group_id', 'classification_count', 'name', 'metadata', 'complete', 'stats', 'categories', 'badges'

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

  constructor: ->
    super
    @badges = []

  addBadges: =>
    for badge in badgeDefinitions
      continue unless 'collection' of badge
      continue unless badge.collection is @slug()
      badge['archive'] = @
      @badges.push new Badge badge

  checkBadges: =>
    notAwardedYet = _.reject @badges, (badge) ->
      return _.some(User.current.badges, (userBadge) -> userBadge.name is badge.name)

    for badge in notAwardedYet
      badge.checkAward()

  transcriptionUrl: =>
    if @metadata.transcribe_url
        @metadata.transcribe_url
    else
        "#/archives/#{@slug()}/transcribe"

  slug: ->
    (@name.replace /\s/g, "_").toLowerCase()

  progress: =>
    unless @stats? then return 0
    Math.floor(@stats.complete / (@stats.total) * 100)

  recordsComplete: =>
    formatNumber @stats.complete

  isComplete: =>
    @stats.active < 1

  transcription_count: =>
    @metadata?.rows_transcribed or @classification_count or 0

module.exports = Archive
