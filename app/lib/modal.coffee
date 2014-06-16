BaseController = require 'zooniverse/controllers/base-controller'

class Modal extends BaseController
  template: require 'views/widgets/modal'

  eolMediaURL: ''

  rightsHolder: null
  license: null
  agents: []

  constructor: (params) ->
    @reset()

    @[key] = value for own key, value of params when key of @

    @provider = @agents.filter((agent) -> agent.role is 'provider').shift()
    @photographer = @agents.filter((agent) -> agent.role in ['photographer', 'creator']).shift()
    
    @render()

    @modal.on 'click', @close

  render: =>
    $('body').append @template @

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

  reset: =>
    @eolMediaURL = ''

    @rightsHolder = null
    @license = null
    @agents = []

module.exports = Modal