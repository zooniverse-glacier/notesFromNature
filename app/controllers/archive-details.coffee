Spine = require 'spine'
{ formatNumber } = require '../lib/utils'
Project = require 'zooniverse/models/project'

Archive = require '../models/Archive'
Badges = require '../models/Badge'

class ArchiveDetails extends Spine.Controller
  className: 'archive-details'
  template: require '../views/archives/archive-details'

  constructor: ->
    super
    Archive.bind 'refresh', @render

  activate: (params) =>
    @archiveId = params.id
    @render()
    super
    
  render: =>
    @archive = Archive.findBySlug @archiveId
    @userCount = formatNumber Project.current?.user_count || 0
    @badges = Badges.badgesForProject @archive?.slug()

    @html @template @

module.exports = ArchiveDetails
