Api = require 'zooniverse/lib/api'
Project = require 'zooniverse/models/project'

class Home extends Spine.Site
  className: 'HomeController'
  template: require 'views/home'

  elements:
    '#archive-count': 'archiveCount'
    '#transcription-count': 'transcriptionCount'
    '#user-count': 'userCount'

  constructor: ->
    super
    @html @template @

    Project.on 'fetch', (e, project) =>
      transcriptions = _.reduce project.groups, (count, group) ->
          count + (group.rows_transcribed || group.classification_count || 0)
        , 0

      @archiveCount.text Object.keys(project.groups).length
      @transcriptionCount.text @formatNumber transcriptions
      @userCount.text @formatNumber project.user_count
   
module.exports = Home
