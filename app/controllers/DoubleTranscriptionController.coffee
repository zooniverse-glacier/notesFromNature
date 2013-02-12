Spine = require 'spine'

Archive = require 'models/Archive'
Classification = require 'models/Classification'
Subject = require 'models/Subject'
EOL = require 'models/EOL'

class DoubleTranscriptionController extends Spine.Controller
  className: 'DoubleTranscriptionController'
  # elements:
  #   "div.transcribing"   : "transcriptionSubject"
  #   "#transcriber"       : "transcriptionBox"
  #   "ul.steps"           : "steps"
  #   "div.tooltip.skip"   : "skipConfirmation"
  #   "div.tooltip.right"  : "finishRecordCheck"
  #   ".transcribing img"  : "transcriptionImage"

  # events:
  #   "submit #transcriber form"              : "record"
  #   "click ul.steps li a"                   : "goToEntity"
  #   "click a.choose_step"                   : "showSteps"
  #   "click a.skip"                          : "showSkipConfimation"
  #   "click div.tooltip.skip .cancel"        : "hideSkipConfimation"
  #   "click div.tooltip.skip .continue"      : "nextEntity"
  #   "click .button.checkRecord"             : "checkDone"
  #   "click .tooltip.right .button.cancel"   : "hideDone" 
  #   "click .tooltip.right .button.continue" : "finishRecord" 

  constructor: ->
    super
    @eol = new EOL()
    Spine.bind("finishedBirdsTranscription", @saveClassification)

  render: =>
    @html require("views/transcription/main")

  startWorkflow: (@archive) =>
    @render()

    go = =>
      window.GOD = new nfn.ui.view.GOD({
        model: new nfn.ui.model.GOD()
      })

      transcriberModel = new nfn.ui.model.DoublePage()
      @transcriber = new nfn.ui.view.DoublePage({
        model: transcriberModel
        Spine: Spine
      })

      $(".btn.close").attr("href", "#/archives/#{@archive.slug()}")

      @nextSubject()
      window.transcriber = @transcriber

    @delay go, 200

  nextSubject: =>
    @archive.nextSubject (@currentSubject) =>
      callback = =>
        @transcriber.spinner.hide => 
          $(".photos img").animate({ marginLeft: "0" }, 500)
          @transcriber.transcriberWidget.show()
          @transcriber.transcriberWidget.setDraggable(true)
          @transcriber.transcriberWidget.setResizable(true)
          @transcriber.startTranscribing()

      @transcriber.loadPhoto(@currentSubject.location.standard, callback)

  saveClassification: (data) =>
    console.log 'data', data

    classification = Classification.create({subject_id: @currentSubject.id, workflow_id: @currentSubject.workflow_ids[0]})
    for line, i in data.models
      classification.annotateLine line, i

    # for annotation in data.toJSON()
    #   classification.annotate annotation.step, annotation.value

    classification.save()
    @currentSubject.retire()
    classification.send()
    @nextSubject()

    # @transcriptionSubject.prepend require("views/transcription/transcriptionBox")
    #   entityTemplate       : require('views/transcription/entity')
    #   currentEntityNo      : @currentEntityNo
    #   noOfEntities         : entities.length
    #   currentEntity        : entities[@currentEntityNo]
    #   entities             : entities


    # @refreshElements()
    
    # @transcriptionImage.draggable
    #     scroll:true
    #     enabled:true
        
    # @transcriptionBox.draggable
    #     scroll: true
    #     containment: ".transcribing"
    #     enabled : false 
 
  # record:(e)=>
  #   e.preventDefault()
  #   data = @grabData  $(e.currentTarget)
  #   @currentAnnotation.push (data)
  #   if entities[@currentEntityNo].name=="GENUS & SPECIES"
  #     @fetchSpeciesInfo(data.collector)
    
  #   @nextEntity()








  # fetchSpeciesInfo:(species)=>
  #   @eol.search species, (result)=>
  #     @eol.getMediaForSpecies result[0], ['text','videos','images','sound'], (media)=>
  #       alert(@transcriptionBox)
  #       @transcriptionBox.append require('views/transcription/speciesInfo')
  #         species: result[0]
  #         media : media

  # grabData:(target)=>
  #   result = {}
  #   for field in target.serializeArray()
  #     result[field.name] = field.value
  #   result

  # checkDone:(e)=>
  #   e.preventDefault()
  #   @finishRecordCheck.show()

  # hideDone:(e)=>
  #   e.preventDefault()
  #   @finishRecordCheck.hide()

  # showSkipConfimation:(e)=>
  #   e.preventDefault()
  #   @skipConfirmation.css {left : '0px'}
  #   @skipConfirmation.show()

  # hideSkipConfimation:(e)=>
  #   e.preventDefault()
  #   @skipConfirmation.hide()

  # showSteps:(e)=>
  #   e.preventDefault()
  #   @steps.toggle()

  # goToEntity:(e)=>
  #   e.preventDefault() if e?
  #   @currentEntityNo = $(e.currentTarget).data().stepNo 
  #   @setUpEntity()


  # autofillSpecies:(e)=>
  #   searchText = $(e.currentTarget).val();
  #   @eol.search searchText, (result)=>
  #     result

  # nextEntity:=>
  #   @currentEntityNo += 1
  #   @setUpEntity()

  # setUpEntity:=>
  #   if @currentEntityNo == entities.length
  #     @finishRecord() 
  #   if entities[@currentEntityNo].draggable
  #     @transcriptionBox.draggable( "enable" )
  #   else
  #     @transcriptionBox.draggable( "disable" )

  #   @transcriptionBox.html require("views/transcription/transcriptionBox")
  #     entityTemplate       : require('views/transcription/entity')
  #     currentEntityNo      : @currentEntityNo
  #     noOfEntities         : entities.length
  #     currentEntity        : entities[@currentEntityNo]
  #     entities             : entities

  #   @refreshElements()

  # finishRecord:(e)=>
  #   e.preventDefault() if e?
  #   @transcriptionSubject.append require("views/transcription/marker")
  #     annotation : @currentAnnotation
      
  #   @annotations.push @currentAnnotation
  #   @currentAnnotation=[]

  #   @currentEntityNo=0

  #   @transcriptionBox.animate {top:"+=200"}, 200, =>
  #     @setUpEntity() 
  
module.exports = DoubleTranscriptionController
