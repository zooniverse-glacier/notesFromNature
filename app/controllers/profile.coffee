User  = require 'zooniverse/models/user'
Badge = require 'models/Badge'
Archive = require 'models/Archive'

class Profile extends Spine.Controller
  className: 'profile'

  constructor: ->
    super
    Badge.bind 'badgesLoaded', @render
    Archive.bind 'refresh', @render
    User.on 'change', @render

  active: ->
    super
    document.title = "Notes From Nature - Profile"
    User.fetch()
    @render()

  render: =>
    @html require('views/profile')
      user: User.current
      archives: Archive.records
    
module.exports = Profile
