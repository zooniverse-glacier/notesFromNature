Spine   = require 'spine'

class BaseTool extends Spine.Controller
  actions: []
  itemTemplate: require 'views/transcription/interfaces/birds/action'
  constructor: (opts) ->
    @interface = opts.interface
    @addActions()

  addActions: =>
    list = ''
    events = {}

    for action in @actions when @actions.length
      list += @itemTemplate({key: action.key, displayName: action.displayName})
      $('#actions').on 'click', "[data-action=#{action.key}]", @[action.callback]

    @interface.actions.html list
    
  clickBox: (e) ->
    # Ensure this exists. Implemented by tools.

  clickImage: (e) ->
    # Ensure this exists. Implemented by tools.

module.exports = BaseTool