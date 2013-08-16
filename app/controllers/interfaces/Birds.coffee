Api = require 'zooniverse/lib/api'
Classification = require 'zooniverse/models/classification'
Subject = require 'zooniverse/models/subject'
User = require 'zooniverse/models/user'

data_fields = require 'lib/birds_fields'

Interfaces = require 'controllers/interfaces'

$.fn.center = ->
  @css
    top: (@parent().height() / 2) - (@height() / 2)
    left: (@parent().width() / 2) - (@width() / 2)

$.fn.pixels = (property) ->
  parseInt(@css(property).slice(0, -2))

DEBUG = true

log = (args...) ->
  if DEBUG then console.log args...



class Field extends Spine.Controller

  events:
    'click #done': 'done'
    'click #next': 'next'
    'keypress': 'onKeypress'

  constructor: (opts) ->
    super
    @id = opts.id if opts?.id?
    @opField = opts.field if opts?.field?
    @data = opts.data if opts?.data?

    @preRenderHook()

    @html @template({id: @id, field: @opField})
    @setValue()
    
  done: =>
    @trigger 'done', {name: @opField.name, value: @getValue()}

  next: =>
    @trigger 'next', {name: @opField.name, value: @getValue()}

  preRenderHook: =>
    # no-op

  onKeypress: (e) =>
    console.log 'here'
    switch e.which
      when 13
        @next()

class MultiField extends Field
  className: 'field multi'
  template: require 'views/transcription/interfaces/birds/fields/multi'

  constructor: (opts) ->
    throw new Error('Must provide sub fields for MultiField') unless opts.field.sub_fields
    super

    opField = @opField
    @el.find('input, select').each (i) ->
      $(@).focus ->
        $(@).removeClass 'focus-text'
        if $(@).val() is opField.sub_fields[i].helper_text
          $(@).val ''

      $(@).blur ->
        if $(@).val() is ''
          $(@).addClass 'focus-text'
          $(@).val opField.sub_fields[i].helper_text

  getValue: =>
    data = []
    opField = @opField

    log 'getting value of multi field', @el, @el.find('input, select')

    @el.find('input, select').each (i) ->
      log 'field val', $(@).val()
      if $(@).val() is opField.sub_fields[i].helper_text
        data.push ''
      else
        data.push $(@).val()
    return data

  setValue: =>
    data = @data
    opField = @opField

    @el.find('input, select').each (i) ->
      log 'setValue', data, i
      if data?.data?.value?[i]?
        log 'data exists at i', data.data.value[i]
        $(@).val data.data.value[i]
      else
        $(@).val opField.sub_fields[i].helper_text
        $(@).addClass 'focus-text'


class InputField extends Field
  className: 'field input'
  template: require 'views/transcription/interfaces/birds/fields/input'

  elements:
    '#field': 'field'

  getValue: =>
    @field.val()

  setValue: =>
    if @data?.data?.value?
      @field.val @data.data.value
    else
      log ''

  preRenderHook: =>
    log @opField

    fieldClass = []

    switch @opField.size
      when 'large'
        fieldClass.push 'large'
      when 'medium'
        fieldClass.push 'medium'
      when 'small'
        fieldClass.push 'small'
      else
        fieldClass.push 'medium'

    @opField.class = fieldClass.join(' ')

class FieldBox extends Spine.Controller
  className: 'field-box'
  template: require 'views/transcription/interfaces/birds/field_box'

  elements:
    'ul': 'fieldList'

  events:
    'click li': 'onClickField'

  fields: {}

  constructor: (opts) ->
    super
    @fields = opts.fields
    @render()

    opts.widget.bind 'next', (currentField) =>
      @fieldList.css
        top: -(currentField * 60)

    opts.widget.bind 'data', ({id, data}) =>
      # Hmmm
      dataString = @squashDatum data

      log 'data triggered in field box', id, dataString, @el.find("[data-field-id=#{ id }] .data")
      @el.find("[data-field-id=#{ id }] .data").html dataString

  render: (rawData) ->
    @data = @squashData rawData
    log 'DATA', @data
    @html @template({fields: @fields, data: @data})

  onClickField: (e) ->
    @trigger 'select-field', $(e.currentTarget).index()

  squashData: (data = []) ->
    for datum in data
      datum = @squashDatum datum.data

  squashDatum: (datum) ->
    if Array.isArray datum.value
      dataString = datum.value.join '-'
    else
      dataString = datum.value

    return dataString


class EntryWidget extends Spine.Controller
  className: 'data-entry'
  template: require 'views/transcription/interfaces/birds/entry_widget'

  data: {}

  elements:
    '#entity': 'entity'
    '#helper-box': 'helperBox'
    '#finish': 'finish'

  @loadFormat: (fields) ->
    @::fields = fields

  constructor: (opts) ->
    super
    @fields = opts.fields if opts?.fields?

    @currentField = 0

    @html @template({fields: @fields})

    @fieldBox = new FieldBox {fields: @fields, widget: @}
    @prepend @fieldBox.el

    @fieldBox.bind 'select-field', (id) =>
      @currentField = id
      @renderField()

  # Public
  load: (@record) =>
    log 'record', @record
    @currentField = 0
    @fieldBox.render(@record.data)
    @renderField()

  start: => @renderField()
  next: => @saveAndContinue({})
  destroy: =>
    @el.fadeOut =>
      @el.remove()

  # Private
  renderField: =>
    log 'Fields:', @fields, @record

    data = @record?.load(@currentField) || []
    field = @fields[@currentField]

    switch field.type
      when 'input' then FieldType = InputField
      when 'multi' then FieldType = MultiField

    log 'data im passing into the field', data, field, @id
    the_field = new FieldType {id: @id, field: field, data: data}
    the_field.bind 'next done', @saveAndContinue

    @entity.html the_field.el

    if field.description
      @helperBox.html field.description()
      @helperBox.addClass 'shown'
    else
      @helperBox.removeClass 'shown'

    setTimeout =>
      @entity.find('input, select, textarea').first().focus()
    , 15

  saveAndContinue: (fieldData) =>
    log 'save and continue', @
    @trigger 'data', {id: @currentField, data: fieldData}
    @record?.save {id: @currentField, data: fieldData}

    if field = @fields[@currentField + 1]
      log 'Another field to collect data for!'
      @currentField += 1
      @trigger 'next', @currentField
      @renderField()
    else
      log 'No more fields.'
      if @record?.isComplete()
        log 'all fields have valid data.'
        @trigger 'done'
      else
        log 'there is a gap somewhere.'
        @currentField = 0
        @trigger 'next', @currentField
        @renderField()

      @trigger 'done'


class RowBox extends Spine.Controller
  className: 'row'
  tag: 'span'

  events:
    'mousedown': 'onStartDrag'

  constructor: ->
    super
    @html ''

  onStartDrag: (e) =>
    e.preventDefault()

    @dragging = true
    $(document).on 'mouseup.moveRow', @onEndDrag
    $(document).on 'mousemove.moveRow', (de) =>
      if @dragging
        @el.css
          top: de.pageY + $('#transcription-area').scrollTop() - (@el.height() / 2) - 110

  onEndDrag: (e) =>
    @dragging = false
    $(document).off 'mousemove.moveRow mouseup.moveRow'

class Record extends Spine.Controller
  @instances: []

  @resetRecords: ->
    for record in @instances
      record.selected = false
      record.rowBox.el.removeClass 'selected'

  className: 'record'
  tag: 'div'

  events:
    'click': 'select'

  constructor: (opts) ->
    super
    @constructor.resetRecords()

    @id = _.uniqueId()
    @data = []
    @fields = opts.fields
    log 'record opts', opts

    @html ''

    lastRowPosition = $('#rows').find('.row').last().position()?.top || 100
    log 'LRP', $('#rows').find('.row').last()

    @rowBox = new RowBox
    @rowBox.el.css 'top', (lastRowPosition + 35)
    @append @rowBox.el

    @constructor.instances.push @

    @select()

  select: =>
    if @selected
      log 'already selected'
    else
      log 'Selecting the row.'
      @constructor.resetRecords()

      @rowBox.el.addClass 'selected'
      @selected = true
      @trigger 'select', @

  save: (newFieldData) =>
    log 'Record: save: data', newFieldData, @data
    for datum, i in @data when newFieldData.id is datum.id
      @data[i].data = newFieldData.data
      return

    @data.push newFieldData

  load: (id) =>
    log 'loading data id #', id
    for datum in @data when id is datum.id
      log 'datum', datum
      return datum

    log 'no data found'
    return []

  remove: =>
    for r, i in @constructor.instances when r.id is @id
      @constructor.instances.splice i, 1

  collect: =>
    # Reduces record data down to something manageable.
    collectedData = {}
    collectedData["top_percent"] = @rowBox.el.pixels("top") / $("#standard").pixels("height")
    for datum in @data
      datumData = datum.data
      if Array.isArray datumData.value
        collectedData[datumData.name] = datumData.value.join("-")
      else
        collectedData[datumData.name] = datumData.value

    collectedData

  isComplete: =>
    completedData = []

    for datum in @data
      completed = true
      if Array.isArray datum.data.value
        for value in datum.data.value
          if value is '' then completed = false
      else
        if datum.data.value is '' then completed = false

      if completed then completedData.push datum

    # if completedData.length is @fields.length then return true else return false
    if completedData.length is @fields.length
      return true
    else
      return false


class Birds extends Interfaces
  className: 'birds-interface'
  template: require 'views/transcription/interfaces/birds'

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

    log 'CLASSIFICATION', @classification
    @classification.send()
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
      # log 'record', record, @
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
    log @
    @next()

  exit: =>
    Spine.Route.navigate window.location.hash.split('/').slice(0,3).join('/')


module.exports = Birds
