Spine = require('spine')
Collection = require('models/Collection')
class CollectionsShowController extends Spine.Controller
  className : "wrapper"

  constructor: ->
    super
    @render()

  active:(params)=>
    super 
    collection = Collection.find_by_slug(params.id)
    @render(collection[0])

  render:(collection=undefined)=>
    if collection?
      @replace require('/views/collections/collectionShow')(collection)
    else
      @replace require('/views/collections/collectionNotFound')()


module.exports = CollectionsShowController