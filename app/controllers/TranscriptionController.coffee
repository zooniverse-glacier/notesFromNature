Spine = require('spine')

Archive= require('models/Archive')
Classification = require('models/Classification')
EOL = require('models/EOL')
Subject= require('models/Subject')
Institute= require('models/Institute')

BugsTranscriptionController = require('controllers/BugsTranscriptionController')
DoubleTranscriptionController = require('controllers/DoubleTranscriptionController')
SernacTranscriptionController = require('controllers/SernacTranscriptionController')

class TranscriptionController extends Spine.Controller
  className: "TranscriptionController"

  transcriptionControllers: 
    'double' : new DoubleTranscriptionController()
    'sernac' : new SernacTranscriptionController()
    'bugs' : new BugsTranscriptionController()

  constructor: ->
    super
    $("body").bind "doneClassification", (data) =>
      @saveAnnotation data.values

    Spine.bind 'nextSubject', @nextSubject

  saveAnnotation: (values) =>
    for key,value of values
      @classification.annotate(key,value)
    @classification.save()

  saveTranscription: (data) =>
    @classification.send()
    @nextSubject()

  render: =>
    console.log 'rendering TranscriptionController', @currentSubject
    if @currentSubject?
      transcriptionType = @currentSubject.metadata.workflow_type
      @transcriptionControllers[transcriptionType].startWorkflow(@currentSubject)
      @html @transcriptionControllers[transcriptionType].el
      $("body").addClass(transcriptionType)
      $("body").addClass("transcribingScreen")
    else 
      @html require('views/transcription/outOfSubjects')

  # nextSubject: =>
  #   console.log 'nextSubject'
  #   if @currentSubject?
  #     archive = Archive.find(@currentSubject.archive_id)
      
  #     @archive.nextSubject (subject) =>
  #       @classification = Classification.create 
  #         subject_id : subject.id
  #         workflow_id: subject.workflow_id

  #       $("div.transcribing.sernac img").attr("src", subject.location.standard)

  active: (params) =>
    super
    console.log 'TranscriptionController active', params
    # $("body .transcriber").show()
    
    if Institute.count() == 0 
      Institute.bind 'refresh', =>
        @active params

    # if params.id
    #   @currentSubject = Subject.find(params.id)

    #   $("body .transcriber").remove()
    #   @render()
    if params.archiveID
      @archive = Archive.findBySlug(params.archiveID)
      console.log 'params has an archiveID', @archive

      if @archive?
        console.log 'archive exists', @currentSubject
        # unless @currentSubject?
        #   console.log 'currentSubject doesnt exist, get one'

        # Get the nextSubject regardless
        @archive.nextSubject (subject) =>
          @currentSubject = subject
          $("body .transcriber").remove()
          @render()

    # else if !@currentSubject?
    #   console.log 'currentSubject', @currentSubject
    #   @currentSubject = Subject.random()
    #   @render()
    
    if @archive?
      $(".transcriber .left .title").html("#{@archive?.name} Collection!!!")
      document.title = "Notes From Nature - #{@archive.institute().name} - #{@archive.name} - transcribe"

module.exports = TranscriptionController