Spine = require 'spine'
require 'spine/lib/manager'
require 'spine/lib/relation'
require 'spine/lib/route'

require './models/Institute'
require './models/Archive'
require './models/Badge'

Api = require 'zooniverse/lib/api'

Project = require 'zooniverse/models/project'
Project::groups = null
Subject = require 'zooniverse/models/subject'
User = require 'zooniverse/models/user'

Badge = require './models/Badge'
Institute = require './models/Institute'

new Api project: 'notes_from_nature', host: 'http://localhost:3000'

app = {}
app.container = '#app'

Header = require './controllers/layout/header'
app.header = new Header
app.header.el.prependTo app.container

SubPage = require './controllers/PageController'
app.stack = new Spine.Stack
  controllers:
    home: require './controllers/home'
    archives: require './controllers/archives/list'
    archiveDetails: require './controllers/archive-details'
    transcriptions: require './controllers/TranscriptionController'
    about: class extends SubPage
      content: require './views/about/index'
      title: 'About'
    aboutProject: class extends SubPage then content: require './views/about/project'
    badges: require './controllers/BadgesController'
    login: require './controllers/LoginController'
    profile: require './controllers/profile'

  routes:
    '/': 'home'
    '/archives': 'archives'
    '/archives/:id': 'archiveDetails'
    '/archives/:id/transcribe': 'transcriptions'

    '/badges/:id': 'badges'

    '/about': 'about'
    '/about/project': 'aboutProject'

    '/login': 'login'
    '/profile': 'profile'

  default: 'home'

app.stack.el.appendTo app.container

Notifications = require './controllers/notifications'
app.notifications = new Notifications
app.notifications.el.prependTo app.container

Footer = require 'zooniverse/controllers/footer'
app.footer = new Footer
app.footer.el.appendTo app.container

TopBar = require 'zooniverse/controllers/top-bar'
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
