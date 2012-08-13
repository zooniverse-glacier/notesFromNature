Spine = require('spine')
Subject= require('models/Subject')
EOL = require('models/EOL')

class DoubleTranscriptionController extends Spine.Controller
  className: "DoubleTranscriptionController"
  elements:
    "div.transcribing"   : "transcriptionSubject"
    "#transcriber"       : "transcriptionBox"
    "ul.steps"           : "steps"
    "div.tooltip.skip"   : "skipConfirmation"
    "div.tooltip.right"  : "finishRecordCheck"
    ".transcribing img"  : "transcriptionImage"


  # events:
    # "submit #transcriber form"              : "record"
    # "click ul.steps li a"                   : "goToEntity"
    # "click a.choose_step"                   : "showSteps"
    # "click a.skip"                          : "showSkipConfimation"
    # "click div.tooltip.skip .cancel"        : "hideSkipConfimation"
    # "click div.tooltip.skip .continue"      : "nextEntity"
    # "click .button.checkRecord"             : "checkDone"
    # "click .tooltip.right .button.cancel"   : "hideDone" 
    # "click .tooltip.right .button.continue" : "finishRecord" 

  constructor: ->
    super
    # @resetClassification()
    # @currentEntityNo=0
    # @eol = new EOL()

 
  startWorkflow:(subject)=>
    @currentSubject=subject
    @render()

  render:=>
    @html("")
    
    @append require("views/transcription/main")
      subject: @currentSubject

    @delay =>
      @transcriptionSubject.transcriber() 
      $("input[name='species']").on "keyup", @autofillSpecies

    ,200
    # # @transcriptionSubject.prepend require("views/transcription/transcriptionBox")
    # #   entityTemplate       : require('views/transcription/entity')
    # #   currentEntityNo      : @currentEntityNo
    # #   noOfEntities         : entities.length
    # #   currentEntity        : entities[@currentEntityNo]
    # #   entities             : entities


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

  fetchSpeciesInfo:(species)=>
    console.log "searching for ", species
    @eol.search species, (result)=>
      console.log result
      @eol.getMediaForSpecies result[0], ['text','videos','images','sound'], (media)=>
        alert(@transcriptionBox)
        @transcriptionBox.append require('views/transcription/speciesInfo')
          species: result[0]
          media : media

  grabData:(target)=>
    result = {}
    for field in target.serializeArray()
      result[field.name] = field.value
    result

  checkDone:(e)=>
    e.preventDefault()
    @finishRecordCheck.show()

  hideDone:(e)=>
    e.preventDefault()
    @finishRecordCheck.hide()

  showSkipConfimation:(e)=>
    e.preventDefault()
    @skipConfirmation.css {left : '0px'}
    @skipConfirmation.show()

  hideSkipConfimation:(e)=>
    e.preventDefault()
    @skipConfirmation.hide()

  showSteps:(e)=>
    e.preventDefault()
    @steps.toggle()

  goToEntity:(e)=>
    e.preventDefault() if e?
    @currentEntityNo = $(e.currentTarget).data().stepNo 
    @setUpEntity()


  autofillSpecies:(e)=>
    searchText = $(e.currentTarget).val();
    @eol.search searchText, (result)=>
      console.log result

  nextEntity:=>
    @currentEntityNo += 1
    @setUpEntity()

  setUpEntity:=>
    if @currentEntityNo == entities.length
      @finishRecord() 
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
    e.preventDefault() if e?
    @transcriptionSubject.append require("views/transcription/marker")
      annotation : @currentAnnotation
      
    @annotations.push @currentAnnotation
    @currentAnnotation=[]

    @currentEntityNo=0

    @transcriptionBox.animate {top:"+=200"}, 200, =>
      @setUpEntity() 
  
module.exports = DoubleTranscriptionController