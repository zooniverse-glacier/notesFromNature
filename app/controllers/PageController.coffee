Site = require '../lib/site'

class SubPage extends Site
  className: 'subpage'
  content: ''
  template: require '../views/layout/outer'

  constructor: ->
    super
    @html @template
    	content: @content()

module.exports = SubPage
