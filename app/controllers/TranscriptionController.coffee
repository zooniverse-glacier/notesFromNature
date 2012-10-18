Spine = require('spine')
Subject= require('models/Subject')
Archive= require('models/Archive')
EOL = require('models/EOL')

Classification = require('models/Classification')


SernacTranscriptionController = require('controllers/SernacTranscriptionController')
DoubleTranscriptionController = require('controllers/DoubleTranscriptionController')

class TranscriptionController extends Spine.Controller
  className: "TranscriptionController"

  transcriptionControllers: 
    'double' : new DoubleTranscriptionController()
    'sernac' : new SernacTranscriptionController()

  constructor:->
    super

    $("body").bind "doneClassification", (data)=>
      @saveAnnotation data.values

    $("body.transcribingScreen .wrapper .right .button").on 'click', =>
      alert("HERE")

    Spine.bind("nextSubject", @nextSubject)

  saveAnnotation:(values)=>
    for key,value of values
      @classification.annotate(key,value)
    @classification.save()

  saveTranscription:(data)=>
    @classification.send()
    @nextSubject()

  render:=>
    if @currnetSubject
      transcriptionType = @currnetSubject.metadata.workflow_type
      @transcriptionControllers[transcriptionType].startWorkflow(@currnetSubject)
      @html @transcriptionControllers[transcriptionType].el
      $("body").addClass(transcriptionType)
      $("body").addClass("transcribingScreen")
    else 
      @html require('views/transcription/outOfSubjects')

  nextSubject:=>
    if @currnetSubject?
      
      archive = Archive.find(@currnetSubject.archive_id)
      
      @archive.nextSubject (subject)=>
        @classification =  Classification.create 
          subject_id : subject.id
          workflow_id: subject.workflow_id

        $("div.transcribing.sernac img").attr("src", subject.location.standard)
          


  active:(params)=>
    super

    $("body .transcriber").show()
    
    if Archive.count() ==0 
      Archive.bind 'refresh', =>
        @active params
    if params.id
      @currnetSubject = Subject.find(params.id)
      console.log " from id"
      $("body .transcriber").remove()
      @render()
    else if params.archiveID
      @archive = Archive.findBySlug(params.archiveID)
      console.log " from archive id", @archive, params.archiveID
      if @archive?
        unless @currnetSubject?
          @archive.nextSubject (subject)=>
            @currnetSubject=subject
            $("body .transcriber").remove()
            @render()

    else if !@currnetSubject?
      @currnetSubject = Subject.random()
      console.log " from random subject"
      @render()

    $(".transcriber .left .title").html("#{@archive?.name} Collection!!!")
    document.title = "Notes From Nature - #{@archive.institute().name} - #{@archive.name} - transcribe"


  
    
module.exports = TranscriptionController