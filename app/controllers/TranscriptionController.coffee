Spine = require('spine')
Subject= require('models/Subject')

class TranscriptionController extends Spine.Controller
  # className: "wrapper"
  elements:
    "div.transcribing": "transcriptionSubject"
    "#transcriber" : "transcriptionBox"
    "ul.steps" : "steps"

  events:
    "submit #transcriber form"     : "record"
    "click .button .checkRecord "  : "finishRecord"
    "click ul.steps li a"          : "goToEntity"
    "click a.choose_step"          : "showSteps"


  constructor: ->
    super
    @resetClassification()
    @currentEntityNo=0

  resetClassification:->
    @annotations = []

  active:(params)=>
    super 
    @render()
    $("body").addClass("transcribingScreen")

  startWorkflow:=>
    @render()

  render:=>
    @html("")
    
    @append require("views/transcription/main")()
    @transcriptionSubject.append require("views/transcription/transcriptionBox")
      entityTemplate       : require('views/transcription/entity')
      currentEntityNo      : @currentEntityNo
      noOfEntities         : entities.length
      currentEntity        : entities[@currentEntityNo]
      entities             : entities


    @refreshElements()

    @transcriptionBox.draggable
        scroll: true
        containment: ".transcribing"
        enabled : false 

  record:(e)=>
    e.preventDefault()
    @annotations.push $(e.currentTarget).serializeArray()
    @nextEntity()

  showSteps:(e)=>
    e.preventDefault()
    @steps.toggle()

  goToEntity:(e)=>
    e.preventDefault() if e?
    @currentEntityNo = $(e.currentTarget).data().stepNo 
    @setUpEntity()

  nextEntity:=>
    @currentEntityNo += 1
    @setUpEntity()

  setUpEntity:=>
    if entities[@currentEntityNo].draggable
      @transcriptionBox.draggable( "enable" )
    else
      @transcriptionBox.draggable( "disable" )


    @transcriptionBox.html require("views/transcription/transcriptionBox")
      entityTemplate       : require('views/transcription/entity')
      currentEntityNo      : @currentEntityNo
      noOfEntities         : entities.length
      currentEntity        : entities[@currentEntityNo]
      entities             : entities

    @refreshElements()

  finishRecord:(e)=>
    console.log annotations 
    e.preventDefault if e?
    @resetClassification()

module.exports = TranscriptionController