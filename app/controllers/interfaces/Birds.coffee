InterfaceController = require 'controllers/InterfaceController'

data = require 'lib/ocr-data'

class BirdsTranscriptionController extends InterfaceController
  canCreateBox: true
  className: 'birds-interface'
  elements:
    '.boxes': 'boxes'
    '#entry': 'entry'
    '#actions': 'actions'
    '#tools-list': 'toolsList'
  events:
    'keypress': 'onKeyPress'
    'mousedown .box': 'onClickBox'
    'mousedown .boxes': 'onClickImage'
    'click #done': 'onDoneBox'
    'click #autoMove': 'toggleAutoMove'
    'click #tools-list li': 'onSelectTool'
    'mouseenter .options button': 'keepHover'
  dataTemplate: require 'views/transcription/interfaces/birds/data'
  template: require 'views/transcription/interfaces/birds/main'
  tools:
    'cursor': require 'lib/tools/Cursor'
    'multi-select': require 'lib/tools/MultiSelect'

  constructor: ->
    super
    @autoMove = true

  startWorkflow: (@archive) =>
    @render({archive: @archive, autoMove: @autoMove})
    @selectTool 'cursor'
    @nextSubject()

  nextSubject: =>
    @counter = 1
    lastMid = 0

    for datum, i in data
        box = datum.split(',')
        y = parseInt(box[1])
        x = parseInt(box[0])
        width = parseInt(box[2] - box[0])
        height = parseInt(box[3] - box[1])
        mid = y + (height / 2)

        style = "top: #{box[1]}px; left: #{box[0]}px; width: #{width}px; height: #{height}px"

        unless width > 600 or height > 100 or box[0] is "0" or box[1] < 50 or width < 3 or height < 3
          @boxes.append('<div data-id='+@counter+' class="box" style="' + style + '"></div>')
          @counter += 1
          lastMid = mid

    @$('.box').resizable({
      handles: 'all'
      disabled: true
    })


  # Events
  onClickBox: (e) =>
    e.preventDefault()
    e.stopPropagation()
    @tool.clickBox $(e.currentTarget)

  onClickImage: (e) =>
    e.preventDefault()
    e.stopPropagation()
    @tool.clickImage e

  onDoneBox: (e) =>
    e.preventDefault()
    $(@currentBox).data 'value', @entry.find('#field').val()
    @clickNextBox() if @autoMove

  onKeyPress: (e) ->
    console.log 'key', e

  onSelectTool: (e) =>
    @selectTool $(e.currentTarget).attr 'id'


  # Settings
  toggleAutoMove: (e) =>
    @autoMove = e.target.checked


  # "API"
  selectTool: (tool) =>
    @toolsList.find('li').removeClass 'selected'
    @toolsList.find("##{tool}").addClass 'selected'
    @tool = new @tools[tool]({interface: @})

  startDataEntry: (el) =>
    id = $(el).data('id')
    value = $(el).data('value') || ''

    @currentBox = el

    @entry.addClass 'active'
    @entry.html @dataTemplate({id: id, value: value})
    defer = =>
      field = @entry.find('#field')
      field.val(value).focus()
    setTimeout defer, 0


  # Generic UI
  keepHover: (e) ->
    $(e.currentTarget).addClass 'selected'
    $(e.currentTarget).parent().mouseleave ->
      $(e.currentTarget).removeClass 'selected'

module.exports = BirdsTranscriptionController