Spine = require 'spine'

class RowBox extends Spine.Controller
  className: 'row'
  tag: 'span'

  events:
    'mousedown': 'onStartDrag'

  constructor: ->
    super
    @html ''

  onStartDrag: (e) =>
    e.preventDefault()

    @dragging = true
    $(document).on 'mouseup.moveRow', @onEndDrag
    $(document).on 'mousemove.moveRow', (de) =>
      if @dragging
        @el.css
          top: de.pageY + $('#transcription-area').scrollTop() - (@el.height() / 2) - 110

  onEndDrag: (e) =>
    @dragging = false
    $(document).off 'mousemove.moveRow mouseup.moveRow'

module.exports = RowBox
