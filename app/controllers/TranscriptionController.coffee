Spine = require('spine')
Subject= require('models/Subject')

class TranscriptionController extends Spine.Controller
  className: "wrapper"
  constructor: ->
    super

  active:(params)=>
    super 
    # Subject.getNextForCollection(params.id)
    @render()
    # Subject.bind 'gotNext', @startWorkflow

  startWorkflow:=>
    render()

  render:=>
    @html("")
    @append require("views/header")
    @append require("views/transcription/main")
    @append require("views/footer")
module.exports = TranscriptionController