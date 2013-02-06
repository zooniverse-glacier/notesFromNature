Spine = require 'spine'

Archive = require 'models/Archive'
Classification = require 'models/Classification'
Institute = require 'models/Institute'
Subject = require 'models/Subject'

EOL = require 'models/EOL'

BugsTranscriptionController = require 'controllers/BugsTranscriptionController'
DoubleTranscriptionController = require 'controllers/DoubleTranscriptionController'
SernacTranscriptionController = require 'controllers/SernacTranscriptionController'

class TranscriptionController extends Spine.Controller
  className: 'TranscriptionController'

  transcriptionControllers: 
    'nhm_birds': new DoubleTranscriptionController()
    'herbarium': new SernacTranscriptionController()
    'bugs_and_such': new BugsTranscriptionController()

  constructor: ->
    super

  render: =>
    @html @transcriptionController.el

  active: (params) =>
    super
    
    if Institute.count() == 0 
      Institute.bind 'refresh', =>
        @active params
    else

      # Left in, but I don't think this is used.
      # if params.id
      #   @currentSubject = Subject.find(params.id)
      #   $('body .transcriber').remove()
      #   @render()

      # What archive are we looking at?
      if params.archiveID
        @archive = Archive.findBySlug(params.archiveID)

        console.log @archive

        unless @archive
          # Archive doesn't exist. Navigate away.
          Spine.Route.navigate '/'
          return

        # Adjust page attributes for archive.
        $('body').addClass("transcribingScreen #{@archive.slug()}")
        document.title = "Notes From Nature - #{@archive.institute().name} - #{@archive.name} - Transcribe"

        # Set the appropriate transcription controller and start it up.
        @transcriptionController = @transcriptionControllers[@archive.slug()]
        @transcriptionController.startWorkflow(@archive)
        @render()

  deactivate: =>
    super
    if @archive? then $('body').removeClass("transcribingScreen #{@archive.slug()}")
    $('.transcriber').remove()

module.exports = TranscriptionController