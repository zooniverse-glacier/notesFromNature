User = require 'zooniverse/models/user'

class HeaderController extends Spine.Controller
  tag: 'header'
  template: require '../../views/header'
  
  constructor: ->
    super
    @render()
    
    User.on 'change', @render
    Spine.Route.bind 'change', @render

  render: =>
    @html @template()

module.exports = HeaderController
