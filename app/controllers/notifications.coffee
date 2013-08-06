Badge = require 'models/Badge'

class NotificationController extends Spine.Controller
  className: 'notifications'

  elements:
    'ul': 'notifications'

  events:
    'click': 'dismiss'

  constructor: ->
    super
    @html require 'views/notifications/notificationArea'
    Badge.bind 'badgeAwarded', @showNotification

  showNotification: (badge) =>
    @notifications.append require('views/notifications/badgeNotification')(badge: badge)
    @$el.show()

    @delay =>
      @dismiss()
    , 7000

  dismiss: =>
    $('li').remove()
    @$el.hide()

module.exports = NotificationController