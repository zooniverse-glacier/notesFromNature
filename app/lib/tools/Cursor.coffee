BaseTool = require 'lib/tools/BaseTool'

class Cursor extends BaseTool
  clickBox: (e) =>
    console.log 'clicked a box', $(e.currentTarget)
    box = $(e.currentTarget)

    unless box.hasClass 'resizable'
      if $('.box').hasClass 'resizable'
        @clickImage()
        @clickBox e
      else
        console.log 'do things with box'
        box.addClass('resizable').resizable('enable').draggable()
        $('body').scrollTop box.position().top - ($(window).height() / 2) + (box.height() / 2)
        $('body').scrollLeft box.position().left - ($(window).width() / 2) + (box.width() / 2)
        @interface.startDataEntry e.currentTarget
        @resizing = true

  clickImage: (e) =>
    if $('.box').hasClass 'resizable'
      $('.box').removeClass('resizable').resizable('disable')
      delete @currentBox
      @interface.dataEntry.empty().removeClass('active')
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

module.exports = Cursor
