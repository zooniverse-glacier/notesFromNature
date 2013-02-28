BaseTool = require 'lib/tools/BaseTool'

class MultiSelect extends BaseTool
  actions: [
    key: 'delete'
    displayName: 'Delete'
    callback: 'deleteBoxes'
  ]

  constructor: (opts) ->
    super(opts)

  clickBox: (e) =>
    box = $(e.currentTarget)

    box.addClass 'selected'

  deleteBoxes: (e) =>
    console.log $('.box.selected')
    $('.box.selected').remove()

module.exports = MultiSelect