BaseTool = require 'lib/tools/BaseTool'

BOX_OFFSET_LEFT = 100
BOX_OFFSET_TOP = 150

class Cursor extends BaseTool
  actions: [
      key: 'delete'
      display: 'Delete'
      callback: 'deleteBox'
      shortcut: 8706
    ,
      key: 'same'
      display: 'Same as Above'
      callback: 'sameBox'
      shortcut: 223
    ,
      key: 'next'
      display: 'Next'
      callback: 'nextBox'
      shortcut: 8776
    ,
      key: 'previous'
      display: 'Previous'
      callback: 'previousBox'
      shortcut: 937
  ]

  constructor: (opts) ->
    super(opts)

  clickBox: (box) =>
    unless box.hasClass 'selected'
      if $('.box').hasClass 'selected'
        @clickImage()
        @clickBox box
      else
        box.addClass('selected').resizable('enable').draggable()
        $('body').scrollTop box.position().top - ($(window).height() / 2) + (box.height() / 2)
        $('body').scrollLeft box.position().left - ($(window).width() / 2) + (box.width() / 2)
        @interface.startDataEntry box
        @currentBox = box

  clickImage: (e) ->
    if $('.box').hasClass 'selected'
      $('.box').removeClass('selected').resizable('disable')
      delete @currentBox
      @interface.disableInput()
    else
      box = document.createElement 'div'
      $(box).addClass('box').data('id', @interface.counter).css({
        top: e.offsetY
        left: e.offsetX
        })
      @interface.counter += 1

      @interface.boxes.append box
      $('#boxes').on 'mouseup.createBox', {box: box}, @onDoneCreateBox
      $('#boxes').on 'mousemove.createBox', (de) =>
        if de.pageX > e.pageX and de.pageY > e.pageY
          $(box).width de.pageX - e.pageX
          $(box).height de.pageY - e.pageY
        else if de.pageX > e.pageX and de.pageY <= e.pageY
          $(box).width de.pageX - e.pageX
          $(box).css
            top: de.pageY - BOX_OFFSET_TOP
            height: e.pageY - de.pageY
        else if de.pageX <= e.pageX and de.pageY > e.pageY
          $(box).height de.pageY - e.pageY
          $(box).css
            left: de.pageX - BOX_OFFSET_LEFT
            width: e.pageX - de.pageX
        else if de.pageX <= e.pageX and de.pageY <= e.pageY
          $(box).css
            left: de.pageX - BOX_OFFSET_LEFT
            width: e.pageX - de.pageX
          $(box).css
            top: de.pageY - BOX_OFFSET_TOP
            height: e.pageY - de.pageY
        else
          console.log 'something funky'
        
  onDoneCreateBox: (e) =>
    box = $(e.data.box)
    $('#boxes').off 'mousemove.createBox mouseup.createBox'

    # Don't actually create the box if it's really really small.
    if box.width() < 3 or box.height() < 3 then box.remove() else @clickBox box


  # Actions
  deleteBox: (e) =>
    unless @currentBox then return

    boxToDelete = @currentBox
    if @interface.preferences.auto_move
      if boxToDelete.next().length
        @clickBox boxToDelete.next()
      else
        @clickBox $('.box').first()

    $(boxToDelete).remove()

  nextBox: (opts = {}) =>
    unless @currentBox then return

    if $('#field').val()
      @currentBox.data('value', $('#field').val()).addClass('green')

      if opts.onData
        opts.onData @currentBox.data('value')

    if @interface.preferences?.auto_move
      if @currentBox.next().length
        @clickBox @currentBox.next()
      else
        @clickBox $('.box').first()

  previousBox: (e) =>
    unless @currentBox then return

    @clickBox $(@currentBox).prev()

  sameBox: (e) =>
    unless @currentBox then return
    
    @currentBox.data 'value', 'same'
    $('#field').val 'same'
    @nextBox() if @interface.preferences.auto_move

module.exports = Cursor