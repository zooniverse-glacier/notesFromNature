InterfaceController = require 'controllers/InterfaceController'

data = require 'lib/ocr-data'

class BirdsTranscriptionController extends InterfaceController
  canCreateBox: true
  className: 'birds-interface'
  elements:
    '.boxes': 'boxes'
  events:
    'mousedown .box': 'clickBox'
    'mousedown .boxes': 'clickBoxes'
  template: require 'views/transcription/interfaces/birds'

  constructor: ->
    super

  startWorkflow: (@archive) =>
    @render()
    @nextSubject()

  nextSubject: =>
    boxes = []
    @counter = 1
    lastMid = 0
    colors = ['red', 'green', 'blue']
    c = 0

    for datum, i in data when i < 100
        box = datum.split(',')
        y = parseInt(box[1])
        x = parseInt(box[0])
        width = parseInt(box[2] - box[0])
        height = parseInt(box[3] - box[1])
        mid = y + (height / 2)

        style = "top: #{box[1]}px; left: #{box[0]}px; width: #{width}px; height: #{height}px"
        # console.log x, y, width, height, mid, colors, c
        unless width > 600 or height > 100 or box[0] is "0" or box[1] < 50 or width < 3 or height < 3
          @boxes.append('<div data-id='+@counter+' class="box red" style="' + style + '"></div>')
          @counter += 1
          lastMid = mid
    @$('.box').resizable({
      handles: 'all'
      disabled: true
    })
    # @$('.box').draggable({
    #   addClasses: false
    # })

  clickBoxes: (e) =>
    console.log 'createBox ccb', @canCreateBox
    if @canCreateBox
      e.stopPropagation()
      e.preventDefault()
      @boxing = true

      style = "top: #{e.pageY}px; left: #{e.pageX}px"
      @boxes.append('<div class="box red" data-id="'+@counter+'" style="'+style+'"></div>')
      box = @boxes.find('[data-id="'+@counter+'"]')

      $(document).on 'mouseup', @saveBox
      $(document).on 'mousemove', (mm) =>
        console.log 'mm', @boxing
        if @boxing
          box.width(mm.pageX - e.pageX)
          box.height(mm.pageY - e.pageY)
    else
      @canCreateBox = true
      @$('.box').resizable('disable')

  saveBox: (e) =>
    @boxing = false

    @counter += 1
    $(document).off 'mouseup mousemove'

  clickBox: (e) =>
    e.stopPropagation()
    if $(e.currentTarget).hasClass 'resizable'
      $(e.currentTarget).removeClass 'resizable'
    else
      $(e.currentTarget).addClass 'resizable'

module.exports = BirdsTranscriptionController