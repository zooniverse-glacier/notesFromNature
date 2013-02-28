BaseTool = require 'lib/tools/BaseTool'

class Cursor extends BaseTool
  actions: [
      key: 'delete'
      display: 'Delete'
      callback: 'deleteBox'
    ,
      key: 'same'
      display: 'Same as Above'
      callback: 'sameBox'
    ,
      key: 'next'
      display: 'Next'
      callback: 'nextBox'
    ,
      key: 'previous'
      display: 'Previous'
      callback: 'previousBox'
  ]

  constructor: (opts) ->
    super(opts)
  clickBox: (box) =>
    unless box.hasClass 'resizable'
      if $('.box').hasClass 'resizable'
        @clickImage()
        @clickBox box
      else
        box.addClass('resizable').resizable('enable').draggable()
        $('body').scrollTop box.position().top - ($(window).height() / 2) + (box.height() / 2)
        $('body').scrollLeft box.position().left - ($(window).width() / 2) + (box.width() / 2)
        @interface.startDataEntry box
        @resizing = true
        @currentBox = box

  clickImage: (e) =>
    if $('.box').hasClass 'resizable'
      $('.box').removeClass('resizable').resizable('disable')
      delete @currentBox
      @interface.entry.empty().removeClass('active')
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

      @interface.boxes.append box
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

  deleteBox: (e) =>
    boxToDelete = @currentBox
    if @interface.autoMove
      if boxToDelete.next().length
        @clickBox boxToDelete.next()
      else
        @clickBox $('.box').first()

    $(boxToDelete).remove()

  nextBox: =>
    if @currentBox.data('value')?
      @currentBox.addClass 'green'

    if @currentBox.next().length
      @clickBox @currentBox.next()
    else
      @clickBox $('.box').first()

  previousBox: (e) =>
    @clickBox $(@currentBox).prev()

  sameBox: (e) =>
    $(@currentBox).data 'value', 'same'
    @nextBox() if @interface.autoMove

module.exports = Cursor