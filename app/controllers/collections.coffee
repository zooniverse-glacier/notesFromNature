Site = require '../lib/site'
Archive = require '../models/Archive'

class Collections extends Site
  className: 'ArchivesList'
  template: require '../views/collections'

  events:
    'mouseenter .collections-list .collection-item': 'showDetails'
    'mouseleave .collections-list .collection-item': 'hideDetails'

  title: 'Collections'

  constructor: ->
    super
    Archive.bind 'refresh', @render

  showDetails: (e) =>
    $(e.currentTarget).find('.translucent-box:not(.disable)').stop().animate {top: 0}, {duration: 200}

  hideDetails: (e) =>
    $(e.currentTarget).find('.translucent-box').stop().animate {top: '185px'}, {duration: 200}
  
  render: =>
    @archives = Archive.all()
    @html @template @

module.exports = Collections
