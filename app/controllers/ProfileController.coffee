Spine = require('spine')
User  = require('zooniverse/lib/models/user')
Badge = require('models/Badge')
class ProfileController extends Spine.Controller
  className: "ProfileController"

  constructor: ->
    super
    Badge.bind "badgesLoaded", @render

  active:->
    super 
    document.title = "Notes From Nature - profile"
    @render()
    User.bind 'sign-in', =>
      @render()

  render:=>
    if User.current?
      @html require('views/profile/profile')
        user : User.current
    else
      @html require('views/profile/notLoggedIn')
    
module.exports = ProfileController