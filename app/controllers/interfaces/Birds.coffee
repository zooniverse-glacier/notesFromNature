InterfaceController = require 'controllers/InterfaceController'

data = require 'lib/ocr-data'

class BirdsTranscriptionController extends InterfaceController
  canCreateBox: true
  className: 'birds-interface'
  elements:
    '.boxes': 'boxes'
    '#data-entry': 'dataEntry'
  events:
    'mousedown .box': 'onClickBox'
    'mousedown .boxes': 'clickImage'
    'click [data-action="delete"]': 'deleteBox'
    'click [data-action="same"]': 'sameBox'
    'click [data-action="next"]': 'clickNextBox'
    'click [data-action="prev"]': 'clickPreviousBox'
    'click .data-entry': 'onClickDataEntry'
    'click #done': 'onDoneBox'
  dataTemplate: require 'views/transcription/interfaces/birds/data'
  template: require 'views/transcription/interfaces/birds/main'

  constructor: ->
    super

  startWorkflow: (@archive) =>
    @render()
    @nextSubject()

  nextSubject: =>
    boxes = []
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

  onClickBox: (e) =>
    e.preventDefault()
    e.stopPropagation()

    @clickBox e.currentTarget

  onClickDataEntry: (e) ->
    e.stopPropagation()

  clickBox: (el) =>
    console.log 'clicked a box', $(el)
    box = $(el)

    unless box.hasClass 'resizable'
      if $('.box').hasClass 'resizable'
        @clickImage()
        @clickBox el
      else
        console.log 'do things with box'
        box.addClass('resizable').resizable('enable').draggable()
        $('body').scrollTop box.position().top - ($(window).height() / 2) + (box.height() / 2)
        $('body').scrollLeft box.position().left - ($(window).width() / 2) + (box.width() / 2)
        @startDataEntry el
        @resizing = true

  deleteBox: (e) =>
    boxToDelete = @currentBox
    if $(boxToDelete).next().length
      @clickBox $(boxToDelete).next()
    else
      @clickBox $('.box').first()

    $(boxToDelete).remove()

  sameBox: (e) =>
    $(@currentBox).data 'value', 'same'
    @clickNextBox()

  clickNextBox: =>
    if $(@currentBox).data('value')?
      $(@currentBox).addClass 'green'

    if $(@currentBox).next().length
      @clickBox $(@currentBox).next()
    else
      @clickBox $('.box').first()

  clickPreviousBox: =>
    @clickBox $(@currentBox).prev()

  startDataEntry: (el) =>
    id = $(el).data('id')
    value = $(el).data('value') || ''

    @currentBox = el

    @dataEntry.addClass 'active'
    @dataEntry.html @dataTemplate({id: id, value: value})
    defer = =>
      field = @dataEntry.find('#field')
      field.val(value).focus()
    setTimeout defer, 0

  clickImage: (e) =>
    console.log 'clickImage'
    if $('.box').hasClass 'resizable'
      $('.box').removeClass('resizable').resizable('disable')
      delete @currentBox
      @dataEntry.empty().removeClass('active')
      @resizing = false
      console.log 'there was a box selected'
    else
      console.log 'there wasnt a box selected'

      box = document.createElement 'div'
      $(box).addClass('box').data('id', @counter).css({
        top: e.pageY
        left: e.pageX
        })
      @counter += 1
      @creating = true

      @boxes.append box
      $(document).on 'mouseup', {box: box}, @onDoneCreateBox
      $(document).on 'mousemove', (de) =>
        if @creating
          $(box).width de.pageX - e.pageX
          $(box).height de.pageY - e.pageY

  onDoneCreateBox: (e) =>
    @creating = false

    $(e.data.box).resizable({
      handles: 'all'
      disabled: true
    })

    $(document).off 'mousemove mouseup'

  onDoneBox: (e) =>
    e.preventDefault()
    $(@currentBox).data 'value', @dataEntry.find('#field').val()
    @clickNextBox()

module.exports = BirdsTranscriptionController