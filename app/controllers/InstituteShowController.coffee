Spine = require('spine')
Institute = require('models/Institute')

class InstituteShowController extends Spine.Controller
  # className: 'wrapper'
  className: "InstituteShowController"
  
  constructor: ->
    super
    @institutesLoadad = false

    Institute.bind 'refresh', =>
      @institutesLoadad = true
      @loadInstitute()
      @setTitle()
      @render()

  loadInstitute:(name=null)=>
    @instituteName = name if name? 
    console.log "institute name is ", @instituteName, Institute.all()
    @currentInstitute = Institute.findBySlug(@instituteName)
    

  setTitle:=>
    if @institutesLoadad 
      if @currentArchive?
        document.title = "Notes From Nature - #{@currentInstitute.name} "     
      else
        document.title = "Notes From Nature - Could not find institute"
    else
      document.title = "Notes From Nature - Loading"

  active:(params)=>
    super

    @instituteName = params.id
    console.log "institute name is ", @instituteName
    if @institutesLoadad 
      @loadInstitute()
      @setTitle()
      @render()
    else
      document.title = "Notes From Nature - Loading"

  render:()=>

    if @currentInstitute?
      @html require("views/institutes/instituteShow")
        institute: @currentInstitute
        archiveTemplate : require('views/institutes/archiveDetails')
    else
      @html require("views/institutes/instituteNotFound")()

    
module.exports = InstituteShowController
