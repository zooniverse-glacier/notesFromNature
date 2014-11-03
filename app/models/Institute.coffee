Archive = require 'models/Archive'

Api = require 'zooniverse/lib/api'

Groups = require 'lib/groups'

class Institute extends Spine.Model
  @configure 'Institute', 'name', 'metadata'
  @hasMany 'archives', 'models/Archive'

  # Class methods
  @fetch: ->
    Api.current.get '/projects/notes_from_nature/groups/', (data) ->
      window.inst = data

      institutes = (group for group in data  when group.type == 'institution')
      institutes = (institute for institute in institutes)
      archives = (group for group in data  when group.type == 'archive')

      for institute in institutes
        inst = Institute.create $.extend true, {}, institute, Groups[institute.name]
        instArchives = (archive for archive in archives when archive.group_id == inst.id)
        inst.setupArchives instArchives

      Archive.trigger 'refresh'
      Institute.trigger 'refresh'

  @findBySlug: (slug) ->
    result = @select (institute) ->
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
      archive = @archives().create $.extend true, {}, archive, Groups[archive.name]
      archive.addBadges()

  slug: ->
    @name.replace /\s/g, "_"

  stats: =>
    total_stats =
      active: 0
      complete: 0
      inactive: 0
      paused: 0
      total: 0

    for archive in @archives().all()
      for type in ['active', 'complete', 'inactive', 'total']
        total_stats[type] += archive.stats[type]
    total_stats

module.exports = Institute