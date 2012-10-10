Spine = require('spine')
User  = require('zooniverse/lib/models/user')

class ProfileController extends Spine.Controller
  className: "ProfileController"

  constructor: ->
    super

  active:->
    super 
    document.title = "Notes From Nature - profile"

    if not User.current? 
      Spine.Route.navigate('/') 
    else
      @render()

  render:=>
    @html require('views/profile/profile')
      user : User.current
    
module.exports = ProfileController