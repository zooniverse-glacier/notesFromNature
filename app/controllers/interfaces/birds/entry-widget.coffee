FieldBox = require './field-box'
InputField = require './input-field'
MultiField = require './multi-field'

class EntryWidget extends Spine.Controller
  className: 'data-entry'
  template: require '../../../views/transcription/interfaces/birds/entry_widget'

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
    data = @record?.load(@currentField) || []
    field = @fields[@currentField]

    switch field.type
      when 'input' then FieldType = InputField
      when 'multi' then FieldType = MultiField

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
    @trigger 'data', {id: @currentField, data: fieldData}
    @record?.save {id: @currentField, data: fieldData}

    if field = @fields[@currentField + 1]
      @currentField += 1
      @trigger 'next', @currentField
      @renderField()
    else
      if @record?.isComplete()
        @trigger 'done'
      else
        @currentField = 0
        @trigger 'next', @currentField
        @renderField()

      @trigger 'done'

module.exports = EntryWidget
