Spine = require 'spine'
Subject= require 'models/Subject'
API = require 'zooniverse/lib/api'

class Archive extends Spine.Model
  @configure 'Archive', 'name', 'metadata', 'complete', 'stats', 'categories'
  @belongsTo 'institute', 'models/Institute'
  @hasMany   'subjects', Subject

  # @fetch:=>
  #   $.getJSON "#{OuroborusBase}/groups/categories/archive", (data)=>
  #     for archive in data
  #       Archive.create(archive)

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

  nextSubject: (callback = null) =>
    if @subjects().first()
      callback @subjects().first() if callback?
    else
      if @id is '5008eb88ba40af06f10000016'
        # Archive is bugs. Fake it for now.
        BugsSubjects = require 'lib/BugsSubjects'
        for subject in BugsSubjects
          @subjects().create subject
        callback @subjects().first() if callback?
      else
        API.get "/projects/notes_from_nature/groups/#{@id}/subjects?limit=10", (subjects) =>
          for subject in subjects
            if subject?
              @subjects().create subject 
          callback @subjects().first() if callback?

  transcriptionUrl: =>
    "#/archives/#{@slug()}/transcribe"

  slug: ->
    @name.replace /\s/g, "_"

  complete: =>
    @progress() is 100
  
  progress: =>
    if @stats?.total > 0 then (parseInt((100.0*@stats?.complete)/@stats?.total)+"") else 0

module.exports = Archive