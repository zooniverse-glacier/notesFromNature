Spine = require('spine')
Archive = require('models/Archive')
Institute = require('models/Institute')

class HomeController extends Spine.Controller
  # className: 'wrapper'
  className: "HomeController"

  constructor: ->
    super
    @render()
    Institute.bind 'refresh',  =>
      @render()

  render:=>
    

    totalStats = Institute.allStats()
    @html   require('views/home/splash')()
    @append require('views/home/stats')
      archiveCount : Archive.count()
      subjects     : totalStats.total
      progress     : totalStats.complete/totalStats.total 
    @append require('views/home/content')()


module.exports = HomeController