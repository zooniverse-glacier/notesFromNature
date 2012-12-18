Spine = require('spine')

class FAQController extends Spine.Controller

  className: "FAQController"

  elements:
    ".about_content" : "content"
    ".list-links li a" : "navLinks"

  constructor: ->
    super
    @render()

  render:=>
    @html require('views/faq/outer')
    @renderSection("general")

  renderSection: (section="general")=>
    @content.html require("views/faq/#{section}")

  active:(params)=>
    super
    document.title = "Notes From Nature - Frequenty Asked Questions"

    @renderSection params.section
    @selectNav params.section

  selectNav:(section="general")=>
    @navLinks.removeClass('selected')
    $(".#{section}").addClass('selected')

module.exports = FAQController