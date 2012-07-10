Spine = require('spine')

class Institute extends Spine.Model
  @configure 'Institute', 'name', 'metadata'
  @hasMany "archives", 'models/Archive'

  @fetch: =>
    $.getJSON "#{OuroborusGroupBase}/categories/institution", (data)=>
      for institute in data
        inst = Institute.create institute
        inst.fetchArchives()
      Institute.trigger("refresh")

  fetchArchives:=>
    $.getJSON "#{OuroborusGroupBase}/#{@id}/groups", (data)=>
      for archive in data
        console.log @archives().create(archive) , @
        
      # Archive.trigger("refresh") 

  @findBySlug:(slug)=>
    @select (institute)=>
      institute.slug() is slug

  slug:->
    @name.replace /\s/g, "_"

module.exports = Institute