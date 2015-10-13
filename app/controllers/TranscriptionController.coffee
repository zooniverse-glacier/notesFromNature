Site = require '../lib/site'
Archive = require '../models/archive'
Institute = require '../models/institute'
Subject = require 'zooniverse/models/subject'

Birds = require './interfaces/birds'
Fungi = require './interfaces/fungi'
BugsTranscriptionController = require './interfaces/bugs'
SernacTranscriptionController = require './interfaces/plants'

class TranscriptionController extends Site
  className: 'TranscriptionController'

  render: =>
    @html @transcriptionController.el

  activate: (params) =>
    super

    if Institute.count() is 0
      Institute.bind 'refresh', =>
        @active params
      return

    unless params.id then return

    # What archive are we looking at?
    @archive = Archive.findBySlug(params.id)

    unless @archive or @archive.progress_strict() is 100
      Spine.Route.navigate '/'
      return

    # Adjust page attributes for archive.
    $('body').addClass("transcribingScreen #{ @archive.slug() }")
    document.title = "Notes From Nature - #{ @archive.metadata.institute } - #{ @archive.name } - Transcribe"

    # Set the appropriate transcription controller and start it up.
    switch @archive.metadata.controller
      when 'bugs' then @transcriptionController = new BugsTranscriptionController()
      when 'birds' then @transcriptionController = new Birds()
      when 'fungi' then @transcriptionController = new Fungi()
      when 'plants' then @transcriptionController = new SernacTranscriptionController()
      else
        Spine.Route.navigate '/archives' # Rather abrupt, but at least a user doesn't sit at a blank page.

    @transcriptionController.startWorkflow(@archive)

    $(document).on 'keydown.nfn keypress.nfn', (e) ->
      if e.which is 8 and not (e.target.tagName is 'INPUT')
        e.preventDefault()
      else if e.which is 77 and e.ctrlKey and $(".ui-autocomplete:visible").length == 0
        # ditto functionality
        $(".ui-autocomplete-input").first().autocomplete("search","")
        $(".ui-autocomplete > li").parent().css("width", $(".ui-autocomplete-input").first().css("width"));
        $(".ui-autocomplete > li").parent().css("padding", "0px");
        e.stopImmediatePropagation()
        e.preventDefault()
      else if $(".ui-autocomplete:visible").length > 0
      	# if menu is open and we press any key that has no meaning for jquery autocomplete menus (arrows, enter, escape, etc), close the menu
        $(".ui-autocomplete-input").autocomplete("close") if jQuery.inArray(e.which, [17,27,38,40,13,9,33,34]) == -1
        e.preventDefault()

    @render()

  deactivate: =>
    super
    if @archive? then $('body').removeClass("transcribingScreen #{ @archive.slug() }")
    $('.transcriber').remove()
    Subject.destroyAll()
    $(document).off 'keydown.nfn keypress.nfn'

module.exports = TranscriptionController
