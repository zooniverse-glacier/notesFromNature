require('lib/setup')

Spine = require('spine')

HomeController= require("controllers/HomeController")
CollectionsIndexController= require("controllers/CollectionsIndexController")
CollectionsShowController= require("controllers/CollectionsShowController")
TranscriptionController= require("controllers/TranscriptionController")
MuseumShowController= require("controllers/MuseumShowController")
LoginController= require('controllers/LoginController')
ProfileController= require('controllers/ProfileController')


Collection = require('models/Collection')
Museum = require('models/Museum')

require('lib/fakeData')

class App extends Spine.Stack

  controllers:
    home                      : HomeController
    collectionsIndex          : CollectionsIndexController
    collectionsShow           : CollectionsShowController
    transcribe                : TranscriptionController
    museumShow                : MuseumShowController
    login                     : LoginController
    profile                   : ProfileController

  routes:
    '/'                           : 'home'
    '/collections'                : 'collectionsIndex'
    '/collections/'               : 'collectionsIndex'
    '/collections/type/:type'     : 'collectionsIndex'
    '/collections/:id'            : 'collectionsShow'
    '/collections/:collectionID/transcribe' : 'transcribe'

    '/transcribe/:id'             : 'transcribe'
    '/transcribe'                 : 'transcribe'
    '/transcribe/'                : 'transcribe'
    '/museums/:id'                : 'museumShow'
    '/login'                      : 'login'
    '/profile'                    : 'profile'

  default : 'home'

  constructor: ->
    super
    
    Collection.trigger('refresh')
    Museum.trigger('refresh')
    Spine.Route.setup()
    Spine.Route.bind "change", =>
      if Spine.Route.path.indexOf("transcribe") == -1
        $("body").removeClass('transcribingScreen')
module.exports = App
    