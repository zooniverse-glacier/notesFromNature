require('lib/setup')

Spine = require('spine')
HomeController= require("controllers/HomeController")
CollectionsIndexController= require("controllers/CollectionsIndexController")
CollectionsShowController= require("controllers/CollectionsShowController")
TranscriptionController= require("controllers/TranscriptionController")
Collection = require('models/Collection')

class App extends Spine.Stack

  controllers:
    home: HomeController
    collectionsIndex:  CollectionsIndexController
    collectionsShow: CollectionsShowController
    transcribe: TranscriptionController

  routes:
    '/'                       : 'home'
    '/collections'            : 'collectionsIndex'
    '/collections/type/:type' : 'collectionsIndex'
    '/collections/:id'        : 'collectionsShow'
    '/transcribe/:id'         : 'transcribe'
    '/transcribe'             : 'transcribe'

  default : 'home'

  constructor: ->
    super
    c = Collection.create({name:"this is a test"})
    Collection.trigger('refresh')
    Spine.Route.setup()

module.exports = App
    