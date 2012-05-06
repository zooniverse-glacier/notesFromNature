Spine = require('spine')

class Collection extends Spine.Model
  @configure 'Collection', 'name', 'description', 'mainImage', 'logo', 'complete', 'progress', 'taxonomy', 'regions','startDate', 'endDate','userCount', 'difficulty'
  
  @belongsTo 'museum', "models/Museum"

  @fetch:=>
    $.getJSON "#{OuroborusBase}/groups/categories/collection", (data)=>
      for collection in data
        Collection.create(data)

  @find_by_slug:(slug)=>
    @select (collection)=>
      collection.slug() is slug

  @filter:(params)=>
    if params? and params.type?
      @select (collection)=>
        collection.taxonomy.indexOf(params.type) != -1 or collection.taxonomy.indexOf(_.str.capitalize(params.type)) != -1
    else 
      @all()

  
  transcriptionUrl:=>
    "/#/collections/#{@slug()}/transcribe"

  slug:->
    @name.replace /\s/g, "_"

  
module.exports = Collection