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
    @renderSeciton("project")

  renderSeciton: (section="project")=>
    @content.html require("views/faq/#{section}")

  active:(params)=>
    super
    document.title = "Notes From Nature - about"

    @renderSeciton params.section
    @selectNav params.section

  selectNav:(section="project")=>
    @navLinks.removeClass('selected')
    console.log "selecting .#{section}"
    $(".#{section}").addClass('selected')

module.exports = FAQController