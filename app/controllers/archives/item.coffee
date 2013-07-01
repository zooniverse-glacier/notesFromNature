Project = require 'zooniverse/models/project'

Archive = require 'models/Archive'
Badges = require 'models/Badge'

class ArchivesItem extends Spine.Site
  className: 'ArchivesItem'

  constructor: ->
    super
    Archive.bind 'refresh', =>
      @loadArchive()
      @render()

  loadArchive: (name = null) =>
    @archiveName = name if name? 
    @currentArchive = Archive.findBySlug(@archiveName)

  activate: (params) =>
    @loadArchive params.id

    if @currentArchive?
      @title = "#{@currentArchive.institute().name} - #{@currentArchive.name}"
    else
      delete @title

    @setTitle()
    @render()
    super
    
  render: =>
    if @currentArchive?
      @html require('/views/archives/archiveShow')
        archive: @currentArchive
        user_count: @formatNumber Project.current?.user_count || 0
        badges: Badges.badgesForProject(@currentArchive.slug())
    else
      @html require('/views/archives/archiveNotFound')()

module.exports = ArchivesItem