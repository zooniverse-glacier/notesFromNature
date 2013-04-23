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
    progress = ((window.project?.complete_count / window.project?.classification_count) * 100).toPrecision(3)
    user_count = @project?.user_count || 0

    @html require('views/home/splash')()
    @append require('views/home/stats')
      archiveCount: if Archive.count() > 0 then Archive.count() else 'loading'
      transcriptions: @formatNumber(transcriptions) || 'loading'
      progress: unless progress is 'NaN' then progress else 'loading'
      users: @formatNumber user_count

    @append require('views/home/content')
      users: @formatNumber user_count

  formatNumber: (n) ->
    return n unless n
    n.toString().replace /(\d)(?=(\d{3})+(?!\d))/g, '$1,'

module.exports = HomeController