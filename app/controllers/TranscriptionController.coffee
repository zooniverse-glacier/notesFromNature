Archive = require 'models/Archive'
Institute = require 'models/Institute'
Subject = require 'zooniverse/models/subject'

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
    
    if Institute.count() is 0 
      Institute.bind 'refresh', =>
        @active params
      return

    unless params.id then return

    # What archive are we looking at?
    @archive = Archive.findBySlug(params.id)

    unless @archive
      # Archive doesn't exist. Navigate away.
      Spine.Route.navigate '/'
      return

    # Adjust page attributes for archive.
    $('body').addClass("transcribingScreen #{ @archive.slug() }")
    document.title = "Notes From Nature - #{ @archive.institute().name } - #{ @archive.name } - Transcribe"

    # Set the appropriate transcription controller and start it up.
    switch @archive.slug()
      when 'calbug' then @transcriptionController = new BugsTranscriptionController()
      when 'herbarium' then @transcriptionController = new SernacTranscriptionController()
      else
        Spine.Route.navigate '/archives' # Rather abrupt, but at least a user doesn't sit at a blank page.

    @transcriptionController.startWorkflow(@archive)
    @render()

  deactivate: =>
    super
    if @archive? then $('body').removeClass("transcribingScreen #{ @archive.slug() }")
    $('.transcriber').remove()
    Subject.destroyAll()
    Spine.unbind 'finishedTranscription'
    Spine.unbind 'skipTranscription'

module.exports = TranscriptionController