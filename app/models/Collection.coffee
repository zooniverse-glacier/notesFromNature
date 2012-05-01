Spine = require('spine')

class Collection extends Spine.Model
  @configure 'Collection', 'name'

  @fetch:=>
    $.getJSON '/collections/', (data)=>
      for collection in data
        Collection.create(data)

  @find_by_slug:(slug)=>
    @select (collection)=>
      collection.slug() is slug

  slug:->
    @name.replace /\s/g, "_"

  
module.exports = Collection