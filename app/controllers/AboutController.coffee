Spine = require('spine')

class AboutController extends Spine.Controller

  className: "AboutController"

  elements:
    ".about_content" : "content"
    ".list-links li a" : "navLinks"

  constructor: ->
    super
    @render()

  render:=>
    @html require('views/about/outer')
    @renderSeciton("project")

  renderSeciton: (section="project")=>
    @content.html require("views/about/#{section}")

  active:(params)=>
    super
    document.title = "Notes From Nature - about"

    @renderSeciton params.section
    @selectNav params.section

  selectNav:(section="project")=>
    @navLinks.removeClass('selected')
    $(".#{section}").addClass('selected')

module.exports = AboutController