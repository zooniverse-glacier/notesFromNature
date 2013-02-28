BaseTool = require 'lib/tools/BaseTool'

class MultiSelect extends BaseTool
  actions: [
    key: 'delete'
    display: 'Delete'
    callback: 'deleteBoxes'
  ]

  constructor: (opts) ->
    super(opts)

  clickBox: (e) =>
    $(e.currentTarget).addClass 'selected'

  deleteBoxes: (e) =>
    console.log $('.box.selected')
    $('.box.selected').remove()

module.exports = MultiSelect