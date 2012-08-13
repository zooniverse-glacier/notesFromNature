Spine = require('spine')
User  = require('models/User')

class HeaderController extends Spine.Controller
  events:
    "click .title" : 'home'
    "click .nextSubject" : 'nextSubject'
  elements:
    ".noOfRecordsDone" : "recordCount"


  constructor:->
    super
    @render()


    User.bind "create", =>
      @render()

    Spine.Route.bind "change", =>
      @render()

    $("body").bind "doneClassification", (data)=>
      newNumber = @recordCount.html()*1.0 +1 
      @recordCount.html newNumber


  home:=>
    Spine.Route.navigate("/")

  nextSubject:(e)=>
    e.preventDefault()
    window.location.reload()
    Spine.trigger("nextSubject")

  render:=>
    
    if Spine.Route.path? and Spine.Route.path.indexOf("transcribe") !=-1
      @html require("views/transcription/header")
      @el.css('padding-top', '25px')

    else if Spine.Route.path is "/"
      @html require('views/home/header')
        user : User.first()
    else
      @html require('views/header')
        user : User.first()


module.exports = HeaderController