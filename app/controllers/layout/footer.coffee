class FooterController extends Spine.Controller
  tag: 'footer'
  template: require 'views/footer'

  constructor: ->
    super
    @html @template @

module.exports = FooterController