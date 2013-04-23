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

    transcriptions = window.project?.classification_count

    @html require('views/home/splash')()
    @append require('views/home/stats')
      archiveCount: if Archive.count() > 0 then Archive.count() else 'loading'
      transcriptions: @formatNumber(transcriptions) || 'loading'
      progress: if totalStats.total > 0 then ((totalStats.complete/totalStats.total)+"")[0..4] else "loading"
      users: @project?.user_count || 0

    @append require('views/home/content')
      users: @project?.user_count || 0

  formatNumber: (n) ->
    return n unless n
    n.toString().replace /(\d)(?=(\d{3})+(?!\d))/g, '$1,'

module.exports = HomeController