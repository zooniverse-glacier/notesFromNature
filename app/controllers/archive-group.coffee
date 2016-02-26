Project = require 'zooniverse/models/project'

Archive = require '../models/archive'
Badges = require '../models/badge'

class ArchiveGroup extends Spine.Controller
  className: 'archive-group'
  template: require '../views/archives/archive-group'

  constructor: ->
    super
    Archive.bind 'refresh', @render

  activate: (params) =>
    @archiveGroupId = params.id
    @render()
    super

  render: () =>
    @archives = (a for a in Archive.all() when a.metadata?.collection_group == @archiveGroupId)
    @html @template @

module.exports = ArchiveGroup
