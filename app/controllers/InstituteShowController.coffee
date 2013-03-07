Institute = require 'models/Institute'

class InstituteShowController extends Spine.Site
  className: 'InstituteShowController'
  
  constructor: ->
    super
    Institute.bind 'refresh', =>
      @loadInstitute()
      @render()

  loadInstitute: (name = null) =>
    @instituteName = name if name? 
    @currentInstitute = Institute.findBySlug(@instituteName)

  activate: (params) =>
    @loadInstitute params.id

    if @currentArchive?
      @title = "#{@currentInstitute.name}"
    else
      delete @title

    @setTitle()
    @render()
    super

  render: =>
    if @currentInstitute?
      @html require("views/institutes/instituteShow")
        institute: @currentInstitute
        archiveTemplate: require('views/institutes/archiveDetails')
    else
      @html require("views/institutes/instituteNotFound")()
    
module.exports = InstituteShowController