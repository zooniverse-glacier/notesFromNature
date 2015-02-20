Institutte = window.Institute = require './models/institute'
Badge = window.Badge = require './models/badge'

Api = require 'zooniverse/lib/api'

Project = require 'zooniverse/models/project'
Project::groups = null
Subject = require 'zooniverse/models/subject'
User = require 'zooniverse/models/user'

Badge = require './models/badge'
Institute = require './models/institute'

new Api project: 'notes_from_nature'

app = {}
app.container = '#app'

Header = require './controllers/layout/header'
app.header = new Header
app.header.el.prependTo app.container

SubPage = require './controllers/PageController'
app.stack = new Spine.Stack
  controllers:
    home: require './controllers/home'
    archives: require './controllers/collections'
    archiveDetails: require './controllers/archive-details'
    transcriptions: require './controllers/TranscriptionController'
    about: class extends SubPage
      content: require './views/about/index'
      title: 'About'
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
