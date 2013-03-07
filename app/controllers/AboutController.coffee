Page = require 'controllers/PageController'

class AboutController extends Spine.Stack
  className: 'page-stack about-content'

  controllers:
    index: class extends Page
      content: require 'views/about/index'
      title: 'About'
    project: class extends Page then content: require 'views/about/project'

  routes:
    '/about': 'index'
    '/about/project': 'project'

  default: 'index'

module.exports = AboutController

#   className: 'AboutController'
    
#   elements:
#     '.about_content': 'content'
#     '.list-links li a': 'navLinks'

#   constructor: ->
#     super

#   render: (section = "project") =>
#     @html require('views/about/outer')
#     @content.html require("views/about/#{section}")

#   active: (params) =>
#     super
#     document.title = 'About - Notes from Nature'
#     $('body').scrollTop 0
#     @render 'project' # params.section

# module.exports = AboutController