User  = require 'zooniverse/models/user'
Badge = require 'models/Badge'

class ProfileController extends Spine.Controller
  className: 'ProfileController'

  constructor: ->
    super
    Badge.bind 'badgesLoaded', @render
    User.on 'change', (e, user) =>
      @render()
      Spine.Route.navigate '/' unless user

  active: ->
    super
    Spine.Route.navigate '/' unless User.current
    document.title = "Notes From Nature - Profile"
    @render()

  render: =>
    if User.current
      @html require('views/profile/profile')
        user: User.current
    else
      @html require('views/profile/notLoggedIn')
    
module.exports = ProfileController