Spine = require('spine')
Archive = require('models/Archive')
Badges = require('models/Badge')

class ArchivesShowController extends Spine.Controller
  # className : "wrapper"
  className: "ArchivesShowController"

  constructor: ->
    super
    @archivesLoadad = false

    Archive.bind 'refresh', =>
      @archivesLoadad = true
      @loadArchive()
      @setTitle()
      @render()

  loadArchive: (name = null) =>
    @archiveName = name if name? 
    @currentArchive = Archive.findBySlug(@archiveName)
  
  setTitle:=>
    if @archivesLoadad
      if @currentArchive?
        document.title = "Notes From Nature - #{@currentArchive.institute().name} - #{@currentArchive.name}"     
      else
        document.title = "Notes From Nature - Could not find archive"
    else
      document.title = "Notes From Nature - Loading"

  active: (params) =>
    super 
    @archiveName = params.id 

    if @archivesLoadad
      @loadArchive()
      @setTitle()
      @render()
    else
      document.title = "Notes From Nature - Loading"
    
  render: =>
    if @currentArchive?
      @html require('/views/archives/archiveShow')
        archive: @currentArchive
        badges:  Badges.badgesForProject(@currentArchive.slug())
    else
      @html require('/views/archives/archiveNotFound')()


module.exports = ArchivesShowController
