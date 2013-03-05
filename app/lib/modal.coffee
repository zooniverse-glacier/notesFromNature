Spine = require 'spine'

# Making an assumption the content is an image. 
class Modal extends Spine.Controller
  template: require 'views/widgets/modal'

  constructor: (@image) ->
    super
    @render()

    @modal.on 'click', @close

  render: =>
    $('body').append @template(image: @image)

    @modal = $('#modal')
    @modalImage = $('#modal-image')

    @modal.fadeIn()

    spin = new Spinner({color: '#fff'}).spin(document.getElementById('modal'))

    @modal.imagesLoaded =>
      spin.stop()
      @modalImage.fadeIn()
      @modalImage.css
        top: -(@modalImage.height() / 2)
        left: -(@modalImage.width() / 2)

  close: =>
    @modal.fadeOut =>
      @modal.remove()

module.exports = Modal