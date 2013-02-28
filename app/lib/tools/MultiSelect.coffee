BaseTool = require 'lib/tools/BaseTool'

class MultiSelect extends BaseTool
  actions: [
    key: 'delete'
    display: 'Delete'
    callback: 'deleteBoxes'
  ]

  constructor: (opts) ->
    super(opts)

  clickBox: (box) =>
    box.addClass 'selected'

  deleteBoxes: (e) =>
    $('.box.selected').remove()

module.exports = MultiSelect