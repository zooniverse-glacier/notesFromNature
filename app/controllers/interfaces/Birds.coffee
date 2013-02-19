Classification = require 'models/Classification'

InterfaceController = require 'controllers/InterfaceController'

ROW_HEIGHT = 50

class BirdsTranscriptionController extends InterfaceController
  className: 'birds-interface'
  elements:
    '#photo': 'photo'
    '#data-entry': 'dataEntry'
    '#group': 'group'
    '#year': 'year'
    '#code': 'code'
    '#table': 'table'
    '#keeper': 'keeper'
  events:
    'mousedown #keeper': 'onMoveKeeper'
    'click #add-row': 'addRow'
    'click #submit': 'onSubmit'
  rowTemplate: require 'views/transcription/interfaces/birds-row'
  template: require 'views/transcription/interfaces/birds'

  constructor: ->
    super

  startWorkflow: (@archive) =>
    @render({rowTemplate: @rowTemplate})
    @nextSubject()

  nextSubject: =>
    @archive.nextSubject (@currentSubject) =>
      @render({rowTemplate: @rowTemplate})
      @photo.append '<img src="' + @currentSubject.location.standard + '">'

      @photo.imagesLoaded =>
        domImage = $('#photo img').first()
        width = domImage.width()
        height = domImage.height()
        domImage.data('scale', 1)
        # imageX = 0
        # imageY = 0

        # Dragging
        doDrag = (d) ->
          $(domImage).addClass 'no-transition'

          d.x = d3.event.x
          d.y = d3.event.y

          d3.select(@)
            .attr('style', "top: #{d3.event.y}px; left: #{d3.event.x}px")

        doDragEnd = (d) ->
          $(domImage).removeClass 'no-transition'

        drag = d3.behavior.drag()
          .origin((d, i) ->
            {x: @.offsetLeft, y: @.offsetTop}
            )
          .on('drag', doDrag)
          .on('dragend', doDragEnd)

        # Zooming
        doZoom = (d) ->
          if d.z is d3.event.scale then return
          # mouseX = d3.event.sourceEvent.clientX - @.offsetLeft
          # mouseY = d3.event.sourceEvent.clientY - @.offsetTop

          # imageX = imageX + (mouseX / d.z)
          # imageY = imageY + (mouseY / d.z)

          # console.log 'mouse', mouseX, mouseY, imageX, imageY, d.z
          # console.log 'do Zoom', d, @, d3.event

          # d.z = d3.event.scale
          # d.x = imageX - mouseX / d.z
          # d.y = imageY - mouseY / d.z

          # d3.select(@)
          #   .attr('width', width * d.z)
          #   .attr('height', height * d.z)
          #   .attr('style', "top: #{d.y}px; left: #{d.x}px")

          # Simple
          d.z = d3.event.scale

          $(@).data('scale', d.z)
          d3.select(@)
            .attr('width', width * d.z)
            .attr('height', height * d.z)

        zoom = d3.behavior.zoom()
          .on('zoom', doZoom)

        image = d3.select('#photo img')
          .datum({x: 0, y: 0, z: 1})
          .attr('width', (d) ->
            @.offsetWidth
            )
          .attr('height', (d) ->
            @.offsetHeight
            )
          .attr('style', (d) ->
            "top: #{d.y}px; left: #{d.x}px"
            )
          .call(drag)
          .call(zoom)

  onSubmit: (e) =>
    e.preventDefault()
    classification = Classification.create({subject_id: @currentSubject.id, workflow_id: @currentSubject.workflow_ids[0]})

    data =
      year: @year.val()
      code: @code.val()
      records: []

    fields = []
    obj = []

    @table.find('th').each ->
      fields.push $(@).html()

    clean = (field) ->
      field.replace('_', ' ').toLowerCase()

    clean(field) for field in fields

    @table.find('tr').each (i) ->
      unless i then return
      line = {}
      for field, i in fields
        line[field] = $(@).children().eq(i).find('input').val()
      data.records.push line

    classification.saveData data
    @currentSubject.retire()
    classification.send()
    @nextSubject()

  addRow: (e) =>
    e.preventDefault() if e

    image = @photo.find('img')
    tBody = @table.find('tbody')

    scaledHeight = image.data('scale') * ROW_HEIGHT
    image.css
      top: parseInt(image.css('top').slice(0, image.css('top').length - 2)) - scaledHeight
    tBody.append(@rowTemplate).scrollTop tBody[0].scrollHeight

  # Keeper
  onMoveKeeper: (e) =>
    @movingKeeper = true
    e.preventDefault()
    $('body').addClass 'no-select'

    startY = e.pageY

    $(document).on 'mouseup', @stopMoveKeeper
    $(document).on 'mousemove', (d_e) =>
      if @movingKeeper
        unless d_e.pageY + @group.height() > $(document).height()
          @group.css
            top: d_e.pageY
        else
          @group.css
            top: $(document).height() - @group.height()

  stopMoveKeeper: (e) =>
    @movingKeeper = false
    $('body').removeClass 'no-select'
    @photo.find('img').removeClass 'no-transition'

    $(document).off 'mousemove mouseup'

module.exports = BirdsTranscriptionController