Api  = require 'zooniverse/lib/api'

Archive = require 'models/Archive'
Institute = require 'models/Institute'

class HomeController extends Spine.Site
  className: 'HomeController'

  constructor: ->
    super
    @render()

    Institute.bind 'refresh', =>
      @render()

    Api.current.get '/projects/notes_from_nature', (data) =>
      @project = data
      window.project = @project
      @render()

  render: =>
    totalStats = Institute.allStats()

    @html require('views/home/splash')()
    @append require('views/home/stats')
      archiveCount: if Archive.count() > 0 then Archive.count() else 'loading'
      subjects: if Archive.count() > 0 then totalStats.total else 'loading'
      progress: if totalStats.total > 0 then ((totalStats.complete/totalStats.total)+"")[0..4] else "loading"
      users: @project?.user_count || 0

    @append require('views/home/content')
      users: @project?.user_count || 0

module.exports = HomeController