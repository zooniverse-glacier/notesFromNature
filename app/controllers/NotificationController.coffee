Badge = require 'models/Badge'

class NotificationController extends Spine.Controller
  className: 'NotificationController'

  elements: 
    'ul' : 'notifications'

  constructor: ->
    super
    @html require 'views/notifications/notificationArea'
    Badge.bind 'badgeAwarded', @showNotificaiton

  showNotificaiton: (badge) =>
    notificationDiv = require('views/notifications/badgeNotification')(badge: badge)
    @notifications.append notificationDiv

    @$.show()

    @delay ->
      $("li").css('margin-top',0)
    ,200
    @delay =>
      $("li").css('opacity',0)
      @delay =>
        $("li").remove()
        @$.hide()
      , 2000
    , 7000

module.exports = NotificationController