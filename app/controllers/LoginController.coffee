User = require 'zooniverse/lib/models/user'
LoginForm = require 'zooniverse/lib/controllers/login_form'

class LoginController extends Spine.Controller
  className: 'LoginController'

  constructor: ->
    super
    @render()

  active: ->
    super 
    if User.current?
      Spine.Route.navigate '/profile'

  render: ->
    @append new LoginForm()

module.exports = LoginController