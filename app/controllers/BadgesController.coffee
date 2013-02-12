Spine = require 'spine'
Badge = require 'models/Badge'
Archive = require 'models/Archive'

class BadgesController extends Spine.Controller
  className: "BadgeController"

  constructor: ->
    super
    Archive.bind 'refresh', =>
      @loadBadge()
      @setTitle()
      @render()

    Badge.bind 'badgesLoaded', =>
      @loadBadge()
      @setTitle()
      @render()

  loadBadge: (name=null) =>
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
    console.log 'cb', @currentBadge
    console.log 'ca', @currentArchive
    if @currentBadge?
      @html require('/views/badges/badge')
        badge: @currentBadge
        archive: @currentArchive
    else
      @html require('/views/badges/badgeNotFound')()

module.exports = BadgesController