RowBox = require './row-box'

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

    @html ''

    lastRowPosition = $('#rows').find('.row').last().position()?.top || 100

    @rowBox = new RowBox
    @rowBox.el.css 'top', (lastRowPosition + 35)
    @append @rowBox.el

    @constructor.instances.push @

    @select()

  select: =>
    return if @selected
    @constructor.resetRecords()

    @rowBox.el.addClass 'selected'
    @selected = true
    @trigger 'select', @

  save: (newFieldData) =>
    for datum, i in @data when newFieldData.id is datum.id
      @data[i].data = newFieldData.data
      return

    @data.push newFieldData

  load: (id) =>
    recordToLoad = []
    for datum in @data
      recordToLoad = datum if id is datum.id

    recordToLoad

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

    if completedData.length is @fields.length
      return true
    else
      return false

module.exports = Record
