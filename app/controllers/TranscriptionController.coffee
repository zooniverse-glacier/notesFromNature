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
      else if e.which is 80 and e.ctrlKey and $(".ui-autocomplete:visible").length == 0
        $(".ui-autocomplete-input").first().autocomplete("search","")       
        $(".ui-autocomplete > li").parent().css("width", $(".ui-autocomplete-input").first().css("width"));
        $(".ui-autocomplete > li").parent().css("padding", "0px");
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
    Spine.unbind 'finishedTranscription'
    Spine.unbind 'skipTranscription'
    $(document).off 'keydown.nfn keypress.nfn'

module.exports = TranscriptionController