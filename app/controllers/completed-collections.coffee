Site = require '../lib/site'
Archive = require '../models/archive'
Groups = require '../lib/groups'

class CompletedCollections extends Site
  className: 'ArchivesList'
  template: require '../views/completed-collections'

  events:
    'mouseenter .collections-list .collection-item': 'showDetails'
    'mouseleave .collections-list .collection-item': 'hideDetails'

  title: 'Completed Collections'

  constructor: ->
    super
    Archive.bind 'refresh', @render

  showDetails: (e) =>
    $(e.currentTarget).find('.translucent-box:not(.disable)').stop().animate {top: 0}, {duration: 200}

  hideDetails: (e) =>
    $(e.currentTarget).find('.translucent-box').stop().animate {top: '185px'}, {duration: 200}

  render: =>
    @archives = (a for a in Archive.all() when a.isComplete())
    @html @template @

module.exports = CompletedCollections
