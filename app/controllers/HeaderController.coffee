Spine = require('spine')
User  = require('models/User')

class HeaderController extends Spine.Controller
  events:
    "click .title" : 'home'

  constructor:->
    super
    @render()

    User.bind "create", =>
      @render()

    Spine.Route.bind "change", =>
      @render()

  home:=>
    Spine.Route.navigate("/")

  render:=>
    
    if Spine.Route.path? and Spine.Route.path.indexOf("transcribe") !=-1
      @html require("views/transcription/header")

    else if Spine.Route.path is "/"
      @html require('views/home/header')
        user : User.first()
    else
      @html require('views/header')
        user : User.first()


module.exports = HeaderController