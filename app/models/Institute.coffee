Spine = require 'spine'
Archive = require 'models/Archive'
API = require 'zooniverse/lib/api'

InstituteStem = require 'lib/institutes'
ArchiveStem = require 'lib/archives'

class Institute extends Spine.Model
  @configure 'Institute', 'name', 'metadata'
  @hasMany 'archives', 'models/Archive'

  # Class methods
  @fetch: =>
    API.get '/projects/notes_from_nature/groups/', (data) =>
      window.inst = data

      institutes =  (group for group in data  when group.type == 'institution')
      archives   =  (group for group in data  when group.type == 'archive')
      
      institutes.push InstituteStem
      archives.push ArchiveStem

      for institute in institutes
        inst = Institute.create institute
        instArchives = (archive for archive in archives when archive.group_id == inst.id)
        inst.setupArchives instArchives

      Archive.trigger 'refresh'
      Institute.trigger 'refresh'

  @findBySlug: (slug) =>
    result = @select (institute) =>
      institute.slug() is slug
    result[0]

  @allStats: ->
    total_stats = 
      active: 0
      complete: 0
      inactive: 0
      total: 0

    for institute in @all()
      for type in ['active', 'complete', 'inactive', 'total']
        total_stats[type] += institute.stats()[type]
    total_stats

  # Instance methods
  setupArchives: (archives) =>
    for archive in archives
      @archives().create(archive) 

  slug: ->
    @name.replace /\s/g, "_"

  stats: =>
    total_stats = 
      active: 0
      complete: 0
      inactive: 0
      total: 0

    for archive in @archives().all()
      for type in ['active', 'complete', 'inactive', 'total']
        total_stats[type] += archive.stats[type]
    total_stats


module.exports = Institute