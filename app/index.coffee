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
FAQController  = require('controllers/FAQController')
BadgesController = require('controllers/BadgesController')

NotificationController = require('controllers/NotificationController')
Api = require('zooniverse/lib/api')
Config = require('lib/config')

ZooniverseBar = require('zooniverse/lib/controllers/top_bar')


Archive = require('models/Archive')
Institute = require('models/Institute')
Badge = require('models/Badge')
User  = require('zooniverse/lib/models/user')

require('lib/fakeData')

class customTopBar extends ZooniverseBar
  constructor:->
    super 
    $(".buttons button[name=signup]").click =>
      Spine.Route.navigate('/login')



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
    faq                       : FAQController
    badges                    : BadgesController

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
    '/faq'                        : 'faq'
    '/faq/:section'               : 'faq'
    '/FAQ'                        : 'faq'
    '/FAQ/:section'               : 'faq'
    '/badges/:id'                 : 'badges'

  default : 'home'

  constructor: ->
    super
    
    Api.init host: Config.apiHost
    
    topBar = new customTopBar
      el: '.zooniverseTopBar'
      languages:
        en: 'English'
      app: 'notes_from_nature'
      appName:'Notes From Nature'

    Spine.Route.setup()

    Badge.loadDefinitions()

    @append new NotificationController()
    User.bind 'sign-in', =>
      if User.current?
        console.log "current"
        Badge.getUserBadges()

    Spine.Route.bind "change", =>
      if Spine.Route.path.indexOf("transcribe") == -1
        $("body").removeClass()
        $("body .transcriber").hide()

    setTimeout ->
        Institute.fetch()
    ,300
        
     
module.exports = App
    