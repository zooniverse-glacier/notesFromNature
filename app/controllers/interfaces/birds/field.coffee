Spine = require 'spine'

class Field extends Spine.Controller
  events:
    'click #done': 'done'
    'click #next': 'next'
    'keypress': 'onKeypress'

  constructor: (opts) ->
    super
    @id = opts.id if opts?.id?
    @opField = opts.field if opts?.field?
    @data = opts.data if opts?.data?

    @preRenderHook()

    @html @template({id: @id, field: @opField})
    @setValue()
    
  done: =>
    @trigger 'done', {name: @opField.name, value: @getValue()}

  next: =>
    @trigger 'next', {name: @opField.name, value: @getValue()}

  preRenderHook: =>
    # no-op

  onKeypress: (e) =>
    switch e.which
      when 13
        @next()

module.exports = Field
