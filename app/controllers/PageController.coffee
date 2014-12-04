Site = require '../lib/site'

class SubPage extends Site
  content: ''
  template: require '../views/layout/outer'

  constructor: ->
    super
    @html @template
    	content: @content()

module.exports = SubPage
