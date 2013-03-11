Api = require 'zooniverse/lib/api'
badgeDefinitions = require 'lib/BadgeDefinitions'

class Archive extends Spine.Model
  @configure 'Archive', 'name', 'metadata', 'complete', 'stats', 'categories'
  @belongsTo 'institute', 'models/Institute'
  @hasMany 'subjects', 'models/Subject'
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

  nextSubject: (callback = null) =>
    if @subjects().findByAttribute('active', true)
      callback @subjects().findByAttribute('active', true) if callback?
    else
      Api.get "/projects/notes_from_nature/groups/#{@id}/subjects?limit=10", (subjects) =>
        for subject in subjects
          if subject?
            @subjects().create subject 
        callback @subjects().findByAttribute('active', true) if callback?

  transcriptionUrl: =>
    "#/archives/#{@slug()}/transcribe"

  slug: ->
    (@name.replace /\s/g, "_").toLowerCase()

  complete: =>
    @progress() is 100
  
  progress: =>
    if @stats?.total > 0 then (parseInt((100.0*@stats?.complete)/@stats?.total)+"") else 0

module.exports = Archive