Spine = require('spine')

class Museum extends Spine.Model
  @configure 'Museum', 'name', 'location', 'collectionTypes', 'description', 'url', 'image_url', 'logo_url'
  @hasMany "collections", "models/Collection"

  @findBySlug:(slug)=>
    @select (museum)=>
      museum.slug() is slug

  slug:->
    @name.replace /\s/g, "_"
module.exports = Museum