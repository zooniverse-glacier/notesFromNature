User = require 'zooniverse/models/user'
LoginForm = require 'zooniverse/controllers/login-form'

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