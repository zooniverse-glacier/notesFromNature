Spine = require 'spine'

class FAQController extends Spine.Controller
  className: 'FAQController'
    
  elements:
    '.about_content': 'content'
    '.list-links li a': 'navLinks'

  constructor: ->
    super

  render: (section = "general") =>
    @html require('views/faq/outer')
    @content.html require("views/faq/#{section}")

    @navLinks.removeClass('selected')
    $('[data-section="' + section + '"]').addClass('selected')

  active: (params) =>
    super
    document.title = 'Notes From Nature - Frequenty Asked Questions'
    @render params.section

module.exports = FAQController