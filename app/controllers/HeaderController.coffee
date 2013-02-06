Spine = require 'spine'
User  = require 'zooniverse/lib/models/user'

class HeaderController extends Spine.Controller
  constructor: ->
    super
    User.bind 'sign-in', =>
      @render()

    Spine.Route.bind 'change', =>
      @render()

  render: =>
    if Spine.Route.path?
      if Spine.Route.path is "/"
        @html require('views/home/header')
          user: User.current
      else
        @html require('views/header')
          user: User.current

module.exports = HeaderController