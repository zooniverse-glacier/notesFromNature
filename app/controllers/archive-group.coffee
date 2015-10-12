{ formatNumber } = require '../lib/utils'
Project = require 'zooniverse/models/project'

Archive = require '../models/archive'
Badges = require '../models/badge'

class ArchiveGroup extends Spine.Controller
  className: 'archive-group'
  template: require '../views/archives/archive-group'

  constructor: ->
    super
    #Archive.bind 'refresh', @render

  activate: (params) =>
    #@archiveId = params.id
    #@render()
    super

  render: =>
    #@archive = Archive.findBySlug @archiveId
    #@userCount = formatNumber Project.current?.user_count || 0
    @html @template @

module.exports = ArchiveGroup
