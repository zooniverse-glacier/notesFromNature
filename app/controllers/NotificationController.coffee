Badge = require 'models/Badge'

class NotificationController extends Spine.Controller
  className: 'NotificationController'

  elements: 
    'ul' : 'notifications'

  constructor:->
    super
    @render()
    Badge.bind('badgeAwarded', (badge)=> @showNotificaiton('badge',badge))

  render:=>
    @html require('views/notifications/notificationArea')

  showNotificaiton:(type,data)=>
    notificationDiv = require('views/notifications/badgeNotification')(badge: data)
    @notifications.append notificationDiv
    @delay ->
      $("li").css('margin-top',0)
    ,200
    @delay =>
      $("li").css('opacity',0)
      @delay =>
        $("li").remove()
      ,2000
    , 7000

module.exports = NotificationController