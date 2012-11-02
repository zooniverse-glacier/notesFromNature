Spine = require('spine')
Institute = require('models/Institute')

class InstituteShowController extends Spine.Controller
  # className: 'wrapper'
  className: "InstituteShowController"
  
  constructor: ->
    super

  active:(params)=>
    super
    institute = Institute.findBySlug(params.id)[0]
    document.title = "Notes From Nature - #{institute().name}"

    @render(institute)

  render:(institute=undefined)=>
    if institute?
      @html require("views/institutes/instituteShow")
        institute: institute
        archiveTemplate : require('views/institutes/archiveDetails')
    else
      @html require("views/institutes/instituteNotFound")()

    
module.exports = InstituteShowController
