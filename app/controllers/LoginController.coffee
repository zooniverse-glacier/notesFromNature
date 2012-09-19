Spine = require('spine')
User  = require('zooniverse/lib/models/user')
LoginForm = require('zooniverse/lib/controllers/login_form')
class LoginController extends Spine.Controller
  elements:
    "form" : 'form'
    ".username" : 'username'
    ".password" : 'password'


  className: "box-general LoginController"

  constructor: ->
    super
    @render()
    @el.css "height", 500


  active:->
    super 
    if User.current?
      Spine.Route.navigate '/profile'

  render:->

    @append new LoginForm()


module.exports = LoginController