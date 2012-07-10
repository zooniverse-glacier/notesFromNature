Spine = require('spine')

class AboutController extends Spine.Controller
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
    @renderSeciton params.section
    @selectNav params.section

  selectNav:(section="project")=>
    @navLinks.removeClass('selected')
    console.log "selecting .#{section}"
    $(".#{section}").addClass('selected')

module.exports = AboutController