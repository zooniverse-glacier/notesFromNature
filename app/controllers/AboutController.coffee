SubPage = require 'controllers/PageController'

class AboutController extends Spine.Stack
  className: 'page-stack about-content'

  controllers:
    index: class extends SubPage
      content: require 'views/about/index'
      title: 'About'
    project: class extends SubPage then content: require 'views/about/project'

  routes:
    '/about': 'index'
    '/about/project': 'project'

  default: 'index'

module.exports = AboutController