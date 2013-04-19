if typeof console is 'undefined'
  @console =
    log: (message) ->
      # Do Nothing

require 'spine'
require 'spine/lib/local'
require 'spine/lib/ajax'
require 'spine/lib/manager'
require 'spine/lib/route'
require 'spine/lib/relation'

Spine.Site = require 'lib/site'

Archives = require 'controllers/archives'
AboutController = require 'controllers/AboutController'
BadgesController = require 'controllers/BadgesController'
FAQController = require 'controllers/FAQController'
HomeController = require 'controllers/HomeController'
InstituteShowController = require 'controllers/InstituteShowController'
LoginController = require 'controllers/LoginController'
ProfileController = require 'controllers/ProfileController'

Api = require 'zooniverse/lib/api'
Subject = require 'zooniverse/models/subject'
User = require 'zooniverse/models/user'
ZooniverseBar = require 'zooniverse/controllers/top-bar'

Archive = require 'models/Archive'
Badge = require 'models/Badge'
Institute = require 'models/Institute'

Header = require 'controllers/layout/header'
Footer = require 'controllers/layout/footer'
Notifications = require 'controllers/notifications'

class topBar extends ZooniverseBar
  constructor: ->
    super 
    $(".buttons button[name=signup]").click =>
      Spine.Route.navigate('/login')

if window.location.port > 1024
  host = 'https://dev.zooniverse.org'
else
  host = 'https://dev.zooniverse.org'

new Api project: 'notes_from_nature', host: host

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
    '/badges/:id': 'badges'

    '/about': 'about'
    '/login': 'login'
    '/profile': 'profile'

  default: 'home'

app.stack.el.appendTo app.container

app.notifications = new Notifications
app.notifications.el.prependTo app.container

app.footer = new Footer
app.footer.el.appendTo app.container

app.topBar = new topBar
  app: 'notes_from_nature'
  appName: 'Notes From Nature'
app.topBar.el.prependTo 'body'

User.on 'change', (e, user) =>
  Badge.getUserBadges() if user

Institute.fetch()
User.fetch()
Subject.queueLength = 2

Spine.Route.setup()

images = [
  'images/archives/calbugBg.jpg'
  'images/archives/sernecBg.jpg'
  'images/archives/birdsBg.jpg'
  'images/bg-green.jpg'
]
Spine.Site.preload images

module.exports = app