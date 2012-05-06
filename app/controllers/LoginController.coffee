Spine = require('spine')
User  = require('models/User')

class LoginController extends Spine.Controller

  elements:
    '#login-frame' : 'loginFrame'
    "#login" : 'form'

  events:
    'submit #login' : 'login'

  className : 'wrapper'

  constructor: ->
    super
    @host = 'http://zooniverse-login.s3.amazonaws.com/stuartlynn_notes_from_nature_development.html'
    @setup()
    @render()

  active:->
    super 

  render:->
    @append require('views/login/login')
      host : @host
    @loginFrame.load @frameLoaded


  login:(e) =>
    e.preventDefault()
    data =
      type: 'login'
      message: @form.serialize()
    
    @frame.postMessage data, @host
    false

  frameLoaded:=>
    @frame = @loginFrame[0].contentWindow
    @frame.postMessage { type: 'current_user' }, @host

  setup:=>
    $(window).bind 'message', (ev) =>
      console.log "have message ", ev
      ev = ev.originalEvent
      response = ev.data.message
      switch ev.data.type
        when 'login'
          if response.success
            @setUser response
            @form.hide()
          else
            alert response.message
        
        when 'current_user'
          if response.success
            @setUser response
          else
            @form.show()
  
  setUser: (response) =>
    User.create
      id: response.zooniverse_id
      name: response.name
      key: response.api_key

module.exports = LoginController