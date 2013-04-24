class Site extends Spine.Controller

  @preload: (images) ->
    unless Array.isArray images
      images = [images]

    for image in images
      img = new Image
      img.src = image

  activate: ->
    super
    @setTitle()

    # Only mess with stack if within a sub-stack
    if @stack.stack?
      # Activate the parent stack and deactivate the parent stack's siblings.
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
      
  formatNumber: (n) ->
    return n unless n
    n.toString().replace /(\d)(?=(\d{3})+(?!\d))/g, '$1,'


module.exports = Site