Archive = require 'models/Archive'
Badges = require 'models/Badge'

class ArchivesShowController extends Spine.Site
  className: 'ArchivesShowController'

  constructor: ->
    super
    @render()

    Archive.bind 'refresh', =>
      @loadArchive()
      @render()

  loadArchive: (name = null) =>
    @archiveName = name if name? 
    @currentArchive = Archive.findBySlug(@archiveName)

    if @currentArchive?
      @title = "#{@currentArchive.institute().name} - #{@currentArchive.name}"

    @setTitle()

  activate: (params) =>
    @loadArchive params.id
    super
    
  render: =>
    if @currentArchive?
      @html require('/views/archives/archiveShow')
        archive: @currentArchive
        badges:  Badges.badgesForProject(@currentArchive.slug())
    else
      @html require('/views/archives/archiveNotFound')()

module.exports = ArchivesShowController