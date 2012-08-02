require('json2ify')
require('es5-shimify')


require('spine')
require('spine/lib/local')
require('spine/lib/ajax')
require('spine/lib/manager')
require('spine/lib/route')

require('spine/lib/relation')
require('lib/zooniverseBar/ZooniverseBar')


User = require('models/User')

window.OuroborusHost = "http://localhost:3000/"

window.ProjectId = "4fa833dd40af47e6ae000001"
window.WorkflowId = "4fa833dd40af47e6ae000002"

window.OuroborusBase = "http://localhost:3000/projects/#{ProjectId}"
window.OuroborusWorkflowBase = "http://localhost:3000/projects/#{ProjectId}/workflows/#{WorkflowId}"
window.OuroborusGroupBase = "http://localhost:3000/projects/#{ProjectId}/groups/"

$.ajaxSetup beforeSend: (xhr) ->
 user = User.current()
 if user
   auth = btoa "#{user.name}:#{user.key}"
   xhr.setRequestHeader 'Authorization', "Basic #{ auth }"


window.zooApi = require('lib/zooniverse/API')
