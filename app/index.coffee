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
Home = require 'controllers/home'
LoginController = require 'controllers/LoginController'
Profile = require 'controllers/profile'

Api = require 'zooniverse/lib/api'

Project = require 'zooniverse/models/project'
Project::groups = null
Subject = require 'zooniverse/models/subject'
User = require 'zooniverse/models/user'

TopBar = require 'zooniverse/controllers/top-bar'
Footer = require 'zooniverse/controllers/footer'

Archive = require 'models/Archive'
Badge = require 'models/Badge'
Institute = require 'models/Institute'

Header = require 'controllers/layout/header'
Notifications = require 'controllers/notifications'

new Api project: 'notes_from_nature'

app = {}
app.container = '#app'

app.models = {}
app.models.Archive = Archive
app.models.Badge = Badge
app.models.Institute = Institute

app.header = new Header
app.header.el.prependTo app.container

app.stack = new Spine.Stack
  controllers:
    home: Home
    archives: Archives
    login: LoginController
    profile: Profile
    about: AboutController
    badges: BadgesController

  routes:
    '/': 'home'
    '/archives': 'archives'

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

app.topBar = new TopBar
app.topBar.el.prependTo 'body'

User.on 'change', (e, user) =>
  Badge.getUserBadges() if user

Institute.fetch()
Project.fetch()
User.fetch()
Subject.queueLength = 3

Spine.Route.setup()

module.exports = app