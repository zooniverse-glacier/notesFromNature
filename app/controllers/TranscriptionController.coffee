Spine = require 'spine'

Archive = require 'models/Archive'
Classification = require 'models/Classification'
Institute = require 'models/Institute'
Subject = require 'models/Subject'

EOL = require 'models/EOL'

BugsTranscriptionController = require 'controllers/interfaces/BugsTranscriptionController'
DoubleTranscriptionController = require 'controllers/interfaces/DoubleTranscriptionController'
SernacTranscriptionController = require 'controllers/interfaces/SernacTranscriptionController'

class TranscriptionController extends Spine.Controller
  className: 'TranscriptionController'

  constructor: ->
    super

  render: =>
    @html @transcriptionController.el

  active: (params) =>
    super
    
    if Institute.count() == 0 
      Institute.bind 'refresh', =>
        @active params
      return
      
    # Left in, but I don't think this is used.
    # if params.id
    #   @currentSubject = Subject.find(params.id)
    #   $('body .transcriber').remove()
    #   @render()

    # What archive are we looking at?
    if params.archiveID
      @archive = Archive.findBySlug(params.archiveID)

      unless @archive
        # Archive doesn't exist. Navigate away.
        Spine.Route.navigate '/'
        return

      # Adjust page attributes for archive.
      $('body').addClass("transcribingScreen #{@archive.slug()}")
      document.title = "Notes From Nature - #{@archive.institute().name} - #{@archive.name} - Transcribe"

      # Set the appropriate transcription controller and start it up.
      switch @archive.slug()
        when 'calbug' then @transcriptionController = new BugsTranscriptionController()
        when 'nhm_birds' then @transcriptionController = new DoubleTranscriptionController()
        when 'herbarium' then @transcriptionController = new SernacTranscriptionController()
        else
          console.log 'No transcription interface for that archive is available.'

      console.log @transcriptionController
      @transcriptionController.startWorkflow(@archive)
      @render()

  deactivate: =>
    super
    if @archive? then $('body').removeClass("transcribingScreen #{@archive.slug()}")
    $('.transcriber').remove()
    Spine.unbind 'finishedTranscription'

module.exports = TranscriptionController