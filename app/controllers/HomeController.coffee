Spine = require('spine')

class HomeController extends Spine.Controller
  className: 'wrapper'

  constructor: ->
    super
    @render()
  
  render:=>
    @append require('views/home/header')()
    @append require('views/home/splash')()
    @append require('views/home/stats')()
    @append require('views/home/content')()
    @append require('views/footer')()


module.exports = HomeController