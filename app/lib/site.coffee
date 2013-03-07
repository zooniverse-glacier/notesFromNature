class Site extends Spine.Controller

  activate: ->
    super
    @setTitle()

    # Only mess with stack if within a sub-stack
    if @stack.stack?
      for controller of @stack.stack.controllers
        controller = @stack.stack[controller]
        return unless controller?

        if controller is @stack
          controller.activate()
        else
          controller.deactivate()
        
  setTitle: (title = null) =>
    @title = title if title

    if @title?
      document.title = "#{@title} - Notes from Nature"
    else
      document.title = 'Notes from Nature'

module.exports = Site