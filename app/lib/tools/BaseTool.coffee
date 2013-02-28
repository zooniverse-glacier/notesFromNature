class BaseTool
  constructor: (opts) ->
    @interface = opts.interface
    console.log 'creating tool', opts

  clickBox: (e) ->
    # Ensure this exists. Implemented by tools.

  clickImage: (e) ->
    # Ensure this exists. Implemented by tools.

module.exports = BaseTool