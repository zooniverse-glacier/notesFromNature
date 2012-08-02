Spine = require('spine')
Archive = require ("models/Archive")

class Institute extends Spine.Model
  @configure 'Institute', 'name', 'metadata'
  @hasMany "archives", 'models/Archive'

  @fetch: =>
   zooApi.fetchGroup {project: 'notes_from_nature', type:"institution"}, (data)=>
      for institute in data
        inst = Institute.create institute
        inst.fetchArchives()
      Institute.trigger("refresh")

  fetchArchives:=>
    zooApi.fetchSubGroup {project: 'notes_from_nature', parentGroupID: @id }, (data)=>
      console.log "archive data is ", data
      for archive in data
        console.log @archives().create(archive) , @
        
      Archive.trigger("refresh") 

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