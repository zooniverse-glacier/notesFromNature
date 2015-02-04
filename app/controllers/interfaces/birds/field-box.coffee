Spine = require 'spine'

class FieldBox extends Spine.Controller
  className: 'field-box'
  template: require '../../../views/transcription/interfaces/birds/field_box'

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
      @el.find("[data-field-id=#{ id }] .data").html dataString

  render: (rawData) ->
    @data = @squashData rawData
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

module.exports = FieldBox
