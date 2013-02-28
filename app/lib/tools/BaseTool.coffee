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
      list += @itemTemplate({key: action.key, display: action.display})
      @interface.actions.on 'click', "[data-action=#{action.key}]", @[action.callback]

    @interface.actions.html list

  clean: =>
    for action in @actions
      @interface.actions.off 'click', "[data-action=#{action.key}]"

  clickBox: (e) ->
    # Ensure this exists. Implemented by tools.

  clickImage: (e) ->
    # Ensure this exists. Implemented by tools.

  nextBox: (e) ->
    # Ensure this exists. Implemented by tools.

  shortcut: (keyCode) =>
    action = _.find @actions, (action) ->
      action.shortcut is keyCode

    if action.callback then @[action.callback]()

module.exports = BaseTool