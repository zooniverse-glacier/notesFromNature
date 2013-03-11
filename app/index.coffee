require 'lib/setup'

Archives = require 'controllers/archives'
AboutController = require 'controllers/AboutController'
BadgesController = require 'controllers/BadgesController'
FAQController = require 'controllers/FAQController'
HomeController = require 'controllers/HomeController'
InstituteShowController = require 'controllers/InstituteShowController'
LoginController = require 'controllers/LoginController'
ProfileController = require 'controllers/ProfileController'

Api = require 'zooniverse/lib/api'
User = require 'zooniverse/lib/models/user'
ZooniverseBar = require 'zooniverse/lib/controllers/top_bar'

Archive = require 'models/Archive'
Badge = require 'models/Badge'
Institute = require 'models/Institute'

Header = require 'controllers/layout/header'
Footer = require 'controllers/layout/footer'
Notifications = require 'controllers/NotificationController'

class topBar extends ZooniverseBar
  constructor: ->
    super 
    $(".buttons button[name=signup]").click =>
      Spine.Route.navigate('/login')

if window.location.port > 1024
  Api.init host: 'https://dev.zooniverse.org'
else
  Api.init host: 'https://dev.zooniverse.org'

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

Institute.fetch()

User.bind 'sign-in', =>
  if User.current?
    Badge.getUserBadges()

Spine.Route.setup()

images = [
  'images/archives/calbugBg.jpg'
  'images/archives/sernecBg.jpg'
  'images/archives/birdsBg.jpg'
  'images/bg-green.jpg'
]
Spine.Site.preload images

module.exports = app