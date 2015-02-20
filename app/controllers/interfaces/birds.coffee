Api = require 'zooniverse/lib/api'
Classification = require 'zooniverse/models/classification'
Subject = require 'zooniverse/models/subject'
User = require 'zooniverse/models/user'

Institute = require '../../models/institute'
Project = require 'zooniverse/models/project'

data_fields = require '../../lib/birds_fields'

Interfaces = require '../interfaces'
EntryWidget = require './birds/entry-widget'
Record = require './birds/record'

$.fn.center = ->
  @css
    top: (@parent().height() / 2) - (@height() / 2)
    left: (@parent().width() / 2) - (@width() / 2)

$.fn.pixels = (property) ->
  parseInt(@css(property).slice(0, -2))

class Birds extends Interfaces
  className: 'birds-interface'
  template: require '../../views/transcription/interfaces/birds'

  records: []

  elements:
    '#buttons': 'buttons'
    '#entry-widget': 'entryWidget'
    '#images': 'images'
    '#rows': 'rows'
    '#transcription-area': 'workspace'
    '#post-finish': 'postFinish'
    '#next-button': 'nextButton'
    '#discuss': 'discuss'
    '#back': 'back'

  events:
    'click #new-row': 'onCreateNewRow'
    'click #finish': 'onFinish'
    'click #power': 'exit'
    'click #next-button': 'onNext'
    'click #discuss': 'onDiscuss'
    'click #back': 'onBack'

  startWorkflow: (@archive) =>
    @render({archive: @archive, preferences: @preferences})

    @delay =>
      @workspace.height ($(window).height() - @workspace.pixels('margin-top'))
      Subject.group = @archive.id
      Subject.next()

  nextSubject: =>
    loadingIndicator = new Spinner({color: '#fff', shadow: true, width: 4}).spin(document.getElementsByClassName(@className)[0])
    @classification = new Classification subject: Subject.current

    for type, source of Subject.current.location
      img = new Image
      img.src = source
      img.id = type

      @images.append img

    # subject will have type of record on it. For now, pick one
    EntryWidget.loadFormat [{name: 'page_number', display: 'Page Number', helper_text: 'Page Number', type: 'input'}]

    @images.imagesLoaded =>
      loadingIndicator.stop()
      $('#corner').center().fadeIn()

      # Get page number
      numberWidget = new EntryWidget
      numberWidget.el.appendTo @workspace
      numberWidget.finish.hide()
      numberWidget.start()

      numberWidget.bind 'data', (annotation) =>
        @classification.annotate {page_number: annotation.data.value}

      numberWidget.bind 'done', =>
        numberWidget.destroy()

        $('#corner').fadeOut()
        $('#standard').fadeIn()

        @buttons.fadeIn()

        @pageWidget = new EntryWidget {fields: data_fields.new_format}
        @pageWidget.el.hide()
        @pageWidget.el.appendTo @workspace

  next: =>
    for record in @records
      @classification.annotate record.collect()

    done = =>
      setTimeout =>
        Institute.fetch()
        Project.fetch()
        
        unless User.current then return
        badges = User.current.badges
        userFetch = User.fetch()

        userFetch.done =>
          User.current.badges = badges
          @archive?.checkBadges()
        
      , 500

    @classification.send done, ->
    @reset()
    Subject.next()

  reset: =>
    @pageWidget?.destroy()
    @buttons.fadeOut()
    @images.empty()
    @rows.empty()

    record.unbind() for record in @records
    @records = []

  # Events
  onCreateNewRow: (e) =>
    record = new Record {fields: @pageWidget.fields}
    record.el.appendTo @rows
    @records.push record

    @pageWidget.el.show()
    @pageWidget.load record

    record.bind 'select', =>
      @pageWidget.load record

    record.trigger 'start'

  onFinish: (e) =>
    $('#finish').fadeOut()
    $('#entry').fadeOut()
    $('#actions').fadeOut()
    $('#helper-box').fadeOut()
    $('.field-box').fadeOut()

    setTimeout ->
      $('.post-finish').show()
    , 400

  onDiscuss: =>
    window.location = Subject.current.talkHref()

  onBack: =>
    $('.post-finish').fadeOut()

    setTimeout ->
      $('#finish').fadeIn()
      $('#entry').fadeIn()
      $('#actions').fadeIn()
      $('#helper-box').fadeIn()
      $('.field-box').fadeIn()
    , 400

  onNext: =>
    @next()

  exit: =>
    Spine.Route.navigate window.location.hash.split('/').slice(0,3).join('/')

module.exports = Birds
