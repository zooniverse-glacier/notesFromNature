{ formatNumber } = require '../lib/utils'
Project = require 'zooniverse/models/project'

Archive = require '../models/archive'
Badges = require '../models/badge'

class ArchiveGroup extends Spine.Controller
  className: 'archive-group'
  template: require '../views/archives/archive-group'

  events:
    'mouseenter .collections-list .collection-item': 'showDetails'
    'mouseleave .collections-list .collection-item': 'hideDetails'

  constructor: ->
    super
    Archive.bind 'refresh', @render

  showDetails: (e) =>
    $(e.currentTarget).find('.translucent-box:not(.disable)').stop().animate {top: 0}, {duration: 200}

  hideDetails: (e) =>
    $(e.currentTarget).find('.translucent-box').stop().animate {top: '185px'}, {duration: 200}

  activate: (params) =>
    @archiveGroupId = params.id
    @render()
    super

  render: () =>
    @archives = (a for a in Archive.all() when a.metadata.collection_group == @archiveGroupId)
    @html @template @

module.exports = ArchiveGroup
