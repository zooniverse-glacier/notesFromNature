Archive = require 'models/Archive'
Badge = require 'models/Badge'

ACTIVE = true

class BadgesController extends Spine.Controller
  className: 'BadgeController'

  constructor: ->
    super
    return unless ACTIVE

    Archive.bind 'refresh', =>
      @loadBadge()
      @render()

    Badge.bind 'badgesLoaded', =>
      @loadBadge()
      @render()

  loadBadge: (name = null) =>
    @badgeName = name if name?
    @currentBadge = Badge.findBySlug(@badgeName)
    @currentArchive = Archive.findBySlug(@currentBadge?.collection)

  setTitle: =>
    if @badgesLoadad
      if @currentBadge?
        document.title = "Notes From Nature - Badge - #{@currentBadge.name}"
      else
        document.title = "Notes From Nature - Could not find archive"
    else
      document.title = "Notes From Nature - Loading"

  active: (params) =>
    super
    @badgeName = params.id 
    @loadBadge()
    @setTitle()
    @render()
    
  render: =>
    if @currentBadge?
      @html require('/views/badges/badge')
        badge: @currentBadge
        archive: @currentArchive
    else
      @html require('/views/badges/badgeNotFound')()

module.exports = BadgesController