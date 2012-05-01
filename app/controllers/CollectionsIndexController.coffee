Spine = require('spine')

Collection = require('models/Collection')
class CollectionIndexController extends Spine.Controller

  className: "wrapper"

  constructor: ->
    super
    Collection.bind "refresh", @render

  active:(params)=>
    super 
    @render()

  render:=>
    @html ""
    @append require('views/header')()
    @append require('views/collections/topBar')()
    @append require('views/collections/collectionList')
      collections : Collection.all()
      collectionTemplate: require("views/collections/collection")
    @append require('views/footer')()

module.exports = CollectionIndexController