require('json2ify')
require('es5-shimify')


require('spine')
require('spine/lib/local')
require('spine/lib/ajax')
require('spine/lib/manager')
require('spine/lib/route')
require('spine/lib/tmpl')
require('spine/lib/relation')



User = require('models/User')

window.OuroborusHost = "http://localhost:3000/"

window.ProjectId = "4fa2f7dc40af4735bf000001"
window.WorkflowId = "4fa2f7dc40af4735bf000002"

window.OuroborusBase = "http://localhost:3000/projects/#{ProjectId}"
window.OuroborusWorkflowBase = "http://localhost:3000/projects/#{ProjectId}/workflows/#{WorkflowId}"
window.OuroborusGroupBase = "http://localhost:3000/projects/#{ProjectId}/NotesFromNatureGroups/#{WorkflowId}"

$.ajaxSetup beforeSend: (xhr) ->
 user = User.current()
 if user
   auth = btoa "#{user.name}:#{user.key}"
   xhr.setRequestHeader 'Authorization', "Basic #{ auth }"