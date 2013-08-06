class SubPage extends Spine.Site
  content: ''
  template: require 'views/layout/outer'

  constructor: ->
    super
    @html @template
    	content: @content()

module.exports = SubPage
