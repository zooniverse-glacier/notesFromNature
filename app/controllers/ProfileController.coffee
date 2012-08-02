Spine = require('spine')
User  = require('models/User')

class ProfileController extends Spine.Controller
  className: "ProfileController"

  constructor: ->
    super

  active:->
    super 
    if User.count()==0
      Spine.Route.navigate('/') 
    else
      @render()

  render:=>
    @html require('views/profile/profile')
      user : User.first()
    
module.exports = ProfileController