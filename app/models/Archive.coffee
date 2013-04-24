Api = require 'zooniverse/lib/api'
badgeDefinitions = require 'lib/BadgeDefinitions'

Subject = require 'zooniverse/models/subject'

class Archive extends Spine.Model
  @configure 'Archive', 'group_id', 'classification_count', 'name', 'metadata', 'complete', 'stats', 'categories'
  @belongsTo 'institute', 'models/Institute'
  @hasMany 'badges', 'models/Badge'

  @findBySlug: (slug) =>
    result = @select (archive) =>
      archive.slug() is slug
    result[0]

  @filter: (params) =>
    if params? and params.type?
      @select (archive) =>
        archive.categories.indexOf(params.type) != -1 or archive.categories.indexOf(_.str.capitalize(params.type)) != -1
    else
      @all()

  addBadges: =>
    for badge in badgeDefinitions
      if badge.collection is @slug()
        @badges().create badge

  checkBadges: =>
    for badge in @badges().all()
      badge.checkAward()

  transcriptionUrl: =>
    "#/archives/#{@slug()}/transcribe"

  slug: ->
    (@name.replace /\s/g, "_").toLowerCase()

  complete: =>
    @progress() is 100
  
  progress: =>
    if @stats?.total > 0 then Math.min(100, (parseInt((@classification_count / @stats.total) * 10))) else 0

module.exports = Archive