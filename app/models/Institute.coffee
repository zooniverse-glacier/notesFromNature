Spine = require('spine')
Archive = require ("models/Archive")
API = require('zooniverse/lib/api')


class Institute extends Spine.Model
  @configure 'Institute', 'name', 'metadata'
  @hasMany "archives", 'models/Archive'


  @fetch: =>
    API.get '/projects/notes_from_nature/groups/', (data)=>
      window.inst = data

      institutes =  (group for group in data  when group.type == 'institution' and group.name != 'The Natural History Museum')
      archives   =  (group for group in data  when group.type == 'archive')
      
      for institute in institutes
        inst = Institute.create institute
        instArchives = (archive for archive in archives when archive.group_id == inst.id)
        inst.setupArchives instArchives
        
      Archive.trigger("refresh")
      Institute.trigger("refresh")



  setupArchives:(archives)=>
    console.log "setting up archives ", archives
    for archive in archives
      @archives().create(archive) 

  @findBySlug:(slug)=>
    @select (institute)=>
      institute.slug() is slug

  slug:->
    @name.replace /\s/g, "_"


  stats :=>
    total_stats = 
      active : 0
      complete : 0
      inactive: 0
      total : 0

    for archive in @archives().all()
      for type in ['active', 'complete', 'inactive', 'total']
        total_stats[type]+=archive.stats[type]
    total_stats

  @allStats: ->
    total_stats = 
      active : 0
      complete : 0
      inactive: 0
      total : 0

    for institute in @all()
      for type in ['active', 'complete', 'inactive', 'total']
        total_stats[type]+=institute.stats()[type]
    total_stats      
module.exports = Institute