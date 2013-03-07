require 'lib/setup'

HomeController = require("controllers/HomeController")

Archives = require 'controllers/archives'

InstituteShowController = require("controllers/InstituteShowController")
LoginController = require('controllers/LoginController')
ProfileController = require('controllers/ProfileController')
AboutController = require('controllers/AboutController')
FAQController = require('controllers/FAQController')
BadgesController = require('controllers/BadgesController')
NotificationController = require('controllers/NotificationController')

Config = require 'lib/config'

Api = require('zooniverse/lib/api')
User = require('zooniverse/lib/models/user')
ZooniverseBar = require('zooniverse/lib/controllers/top_bar')

Archive = require 'models/Archive'
Badge = require 'models/Badge'
Institute = require 'models/Institute'

Header = require 'controllers/HeaderController'
Footer = require 'controllers/FooterController'

class topBar extends ZooniverseBar
  constructor: ->
    super 
    $(".buttons button[name=signup]").click =>
      Spine.Route.navigate('/login')

    # var notificationController = require("controllers/NotificationController") 
    # new notificationController({el:$(".NotificationController")})

Api.init host: Config.apiHost

app = {}
app.container = '#app'

app.header = new Header
app.header.el.prependTo app.container

app.stack = new Spine.Stack
  controllers:
    home: HomeController
    archives: Archives
    instituteShow: InstituteShowController
    login: LoginController
    profile: ProfileController
    about: AboutController
    badges: BadgesController

  routes:
    '/': 'home'
    '/archives': 'archives'

    '/institutes/:id': 'instituteShow'

    '/login': 'login'
    '/profile': 'profile'
    '/about': 'about'

    '/badges/:id': 'badges'

  default: 'home'

app.stack.el.appendTo app.container

app.footer = new Footer
app.footer.el.appendTo app.container

app.topBar = new topBar
  app: 'notes_from_nature'
  appName: 'Notes From Nature'
app.topBar.el.prependTo 'body'

Badge.loadDefinitions()

# # @append new NotificationController()
User.bind 'sign-in', =>
  if User.current?
    Badge.getUserBadges()

setTimeout (-> Institute.fetch()), 300

Spine.Route.setup()

module.exports = app