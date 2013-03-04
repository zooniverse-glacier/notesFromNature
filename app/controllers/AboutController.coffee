Spine = require 'spine'

class AboutController extends Spine.Controller
  className: 'AboutController'
  elements:
    '.about_content': 'content'
    '.list-links li a': 'navLinks'

  constructor: ->
    super

  render: (section = "project") =>
    @html require('views/about/outer')
    @content.html require("views/about/#{section}")

    # @navLinks.removeClass('selected')
    # $('[data-section="' + section + '"]').addClass('selected')

  active: (params) =>
    super
    document.title = 'About - Notes from Nature'
    @render 'project' # params.section

module.exports = AboutController