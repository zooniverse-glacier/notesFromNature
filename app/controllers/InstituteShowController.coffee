Institute = require 'models/Institute'

class InstituteShowController extends Spine.Site
  className: 'InstituteShowController'
  
  constructor: ->
    super
    @institutesLoadad = false

    Institute.bind 'refresh', =>
      @institutesLoadad = true
      @loadInstitute()
      @setTitle()
      @render()

  loadInstitute: (name=null) =>
    @instituteName = name if name? 
    @currentInstitute = Institute.findBySlug(@instituteName)
    
  setTitle: =>
    if @institutesLoadad 
      if @currentArchive?
        @title = "#{@currentInstitute.name}"
      else
        @title = "Could not find institute"
    else
      @title = "Loading"

  active: (params) =>
    super

    @instituteName = params.id
    if @institutesLoadad 
      @loadInstitute()
      @setTitle()
      @render()
    else
      document.title = "Notes From Nature - Loading"

  render: =>
    if @currentInstitute?
      @html require("views/institutes/instituteShow")
        institute: @currentInstitute
        archiveTemplate: require('views/institutes/archiveDetails')
    else
      @html require("views/institutes/instituteNotFound")()

    
module.exports = InstituteShowController