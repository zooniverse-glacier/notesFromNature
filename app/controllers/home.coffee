Site = require '../lib/site'
_ = require 'underscore'
Api = require 'zooniverse/lib/api'
Project = require 'zooniverse/models/project'
Institute = require '../models/institute'
Archive = require '../models/archive'

class Home extends Site
  className: 'HomeController'
  template: require '../views/home'

  elements:
    '#archive-count': 'archiveCount'
    '#transcription-count': 'transcriptionCount'
    '#user-count': 'userCount'

  constructor: ->
    super
    @html @template @
    Archive.bind 'refresh', @active_count

    Project.on 'fetch', (e, project) =>
      transcriptions = _.reduce project.groups, (count, group) ->
          count + (group.rows_transcribed || group.classification_count || 0)
        , 0

      @transcriptionCount.text @formatNumber transcriptions
      @userCount.text @formatNumber project.user_count

  active_count: =>
    archives = (a for a in Archive.all() when (not a.metadata.collection_group or a.metadata.collection_root) and not a.isComplete())
    @archiveCount.text archives.length

module.exports = Home
