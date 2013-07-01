Api  = require 'zooniverse/lib/api'
Project = require 'zooniverse/models/project'

Archive = require 'models/Archive'
Institute = require 'models/Institute'

class HomeController extends Spine.Site
  className: 'HomeController'

  constructor: ->
    super
    @render()

    Institute.bind 'refresh', @render
    Project.on 'fetch', @render

  render: =>
    totalStats = Institute.allStats()

    transcriptions = Project.current?.classification_count
    progress = ((Project.current?.classification_count / (totalStats.total * 10)) * 100).toPrecision(3)
    user_count = Project.current?.user_count || 0

    @html require('views/home/splash')()
    @append require('views/home/stats')
      archiveCount: if Archive.count() > 0 then Archive.count() else 'loading'
      transcriptions: @formatNumber(transcriptions) || 'loading'
      progress: unless progress is 'NaN' or progress is 'Infinity' then progress else 'loading'
      users: @formatNumber user_count

    @append require('views/home/content')
      users: @formatNumber user_count

module.exports = HomeController