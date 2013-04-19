Archive = require 'models/Archive'
Institute = require 'models/Institute'
Subject = require 'zooniverse/models/subject'

# BirdsTranscriptionController = require 'controllers/interfaces/birds'
BugsTranscriptionController = require 'controllers/interfaces/bugs'
SernacTranscriptionController = require 'controllers/interfaces/plants'

class TranscriptionController extends Spine.Site
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
    if params.id
      @archive = Archive.findBySlug(params.id)

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
        # when 'ornithological' then @transcriptionController = new BirdsTranscriptionController()
        when 'herbarium' then @transcriptionController = new SernacTranscriptionController()
        else
          console.log 'No transcription interface for that archive is available.'
          Spine.Route.navigate '/archives' # Rather abrupt, but at least a user doesn't sit at a blank page.

      @transcriptionController.startWorkflow(@archive)
      @render()

  deactivate: =>
    super
    if @archive? then $('body').removeClass("transcribingScreen #{@archive.slug()}")
    $('.transcriber').remove()
    $(document).off 'keypress'
    Subject.destroyAll()
    Spine.unbind 'finishedTranscription'

module.exports = TranscriptionController