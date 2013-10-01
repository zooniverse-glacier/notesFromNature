Archive = require 'models/Archive'
Institute = require 'models/Institute'
Subject = require 'zooniverse/models/subject'

Birds = require 'controllers/interfaces/birds'
BugsTranscriptionController = require 'controllers/interfaces/bugs'
SernacTranscriptionController = require 'controllers/interfaces/plants'
Fungi = require 'controllers/interfaces/fungi'

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
      when 'ornithological' then @transcriptionController = new Birds()
      when 'macrofungi' then @transcriptionController = new Fungi()
      else
        Spine.Route.navigate '/archives' # Rather abrupt, but at least a user doesn't sit at a blank page.

    @transcriptionController.startWorkflow(@archive)

    $(document).on 'keydown.nfn keypress.nfn', (e) ->
      if e.which is 8 and not (e.target.tagName is 'INPUT')
        e.preventDefault()

    @render()

  deactivate: =>
    super
    if @archive? then $('body').removeClass("transcribingScreen #{ @archive.slug() }")
    $('.transcriber').remove()
    Subject.destroyAll()
    Spine.unbind 'finishedTranscription'
    Spine.unbind 'skipTranscription'
    $(document).off 'keydown.nfn keypress.nfn'

module.exports = TranscriptionController