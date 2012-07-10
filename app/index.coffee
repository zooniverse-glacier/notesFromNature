require('lib/setup')

Spine = require('spine')

HomeController= require("controllers/HomeController")
ArchivesIndexController= require("controllers/ArchivesIndexController")
ArchivesShowController= require("controllers/ArchivesShowController")
TranscriptionController= require("controllers/TranscriptionController")
InstituteShowController= require("controllers/InstituteShowController")
LoginController= require('controllers/LoginController')
ProfileController= require('controllers/ProfileController')
AboutController= require('controllers/AboutController')



Archive = require('models/Archive')
Institute = require('models/Institute')

require('lib/fakeData')

class App extends Spine.Stack

  controllers:
    home                      : HomeController
    archivesIndex             : ArchivesIndexController
    archivesShow              : ArchivesShowController
    transcribe                : TranscriptionController
    instituteShow             : InstituteShowController
    login                     : LoginController
    profile                   : ProfileController
    about                     : AboutController

  routes:
    '/'                                  : 'home'
    '/archives'                          : 'archivesIndex'
    '/archives/'                         : 'archivesIndex'
    '/archives/type/:type'               : 'archivesIndex'
    '/archives/:id'                      : 'archivesShow'
    '/archives/:archiveID/transcribe'    : 'transcribe'

    '/collections'                           : 'archivesIndex'
    '/collections/'                          : 'archivesIndex'
    '/collections/type/:type'                : 'archivesIndex'
    '/collections/:id'                       : 'archivesShow'
    '/collections/:collectionID/transcribe'  : 'transcribe'

    '/transcribe/:id'             : 'transcribe'
    '/transcribe'                 : 'transcribe'
    '/transcribe/'                : 'transcribe'
    '/institutes/:id'             : 'instituteShow'
    '/login'                      : 'login'
    '/profile'                    : 'profile'
    '/about'                      : 'about'
    '/about/:section'             : 'about'

  default : 'home'

  constructor: ->
    super
    
    Archive.trigger('refresh')
    Institute.fetch()
    Spine.Route.setup()
    Spine.Route.bind "change", =>
      if Spine.Route.path.indexOf("transcribe") == -1
        $("body").removeClass('transcribingScreen')
module.exports = App
    