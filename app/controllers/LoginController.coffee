Spine = require('spine')
User  = require('models/User')

class LoginController extends Spine.Controller

  elements:
    "form" : 'form'
    ".username" : 'username'
    ".password" : 'password'

  events:
    'submit form' : 'login'

  className: "LoginController"

  constructor: ->
    super
    @host = 'http://zooniverse-login.s3.amazonaws.com/stuartlynn_notes_from_nature_development.html'
    @render()

    # Not sure when we have to delay this but it looks like we have to.
    @delay =>
      zooApi.checkCurrent {project : "notes_from_nature"} , (reply)=>
        if reply.success
          Spine.trigger("userLoggedIn")
          @setUser(reply)
    ,300

  active:->
    super 
    if User.first()
      Spine.Route.navigate '/profile'

  render:->
    @append require('views/login/login')


  login:(e) =>
    e.preventDefault()
    details = @form.serializeArray()
    zooApi.logIn {project: 'notes_from_nature', username: details[0].value, password: details[1].value}, (response) =>
      if response.success
        @setUser(response)    
        Spine.Route.navigate '/'    
   
  setUser: (response) =>
    $(".zooniverse-sign-in").remove()
    $(".zooniverse-signin").html response.name
    User.create
      id: response.zooniverse_id
      name: response.name
      key: response.api_key


module.exports = LoginController