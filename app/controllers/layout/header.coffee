User = require 'zooniverse/models/user'

class HeaderController extends Spine.Controller
  tag: 'header'
  
  constructor: ->
    super
    @render()
    
    User.on 'change', (e, user) =>
      @render()

    Spine.Route.bind 'change', =>
      @render()

  render: =>
    @html require('views/header')
      user: User.current

module.exports = HeaderController