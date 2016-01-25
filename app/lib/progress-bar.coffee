Api = require 'zooniverse/lib/api'
api = zooniverse.Api.current
groupIds = [
  '5170103b3ae74027cf000002'
  '562149dd8c6d330143000002'
  '56214a7a8c6d33025f000002'
  '562149878c6d33003a000002'
]

if window.location.hostname isnt 'www.notesfromnature.org'
  # staging groups
  groupIds = [
    '525e954dedf877560a000002'
    '562143f38688882f98000002'
    '562144898688882fda000002'
    '562144fb8688883009000002'
  ]

class ProgressBar
  constructor: ->
    @el = $('#progress-bar')
    @update()

  start: ->
    setTimeout @update, 5000

  update: =>
    @getStats().then(@format).then (stats) =>
      $('#progress-bar .progress').css 'width', "#{ stats.percent }%"
      $('#progress-bar .label').html stats.label
      $('#progress-bar .remaining').html "#{ stats.remaining } to go"
      @start()

  format: (stats) ->
    percent = 100 * stats.complete / stats.total
    label = "#{ Math.round(percent) }%"
    remaining = stats.active.toLocaleString()
    Promise.resolve {percent, label, remaining}

  getStats: ->
    Promise.all(@getStatsFor(id) for id in groupIds).then (stats) ->
      active = 0
      complete = 0
      total = 0

      for stat in stats
        active += stat.active
        complete += stat.complete
        total += stat.total

      {active, complete, total}

  getStatsFor: (id) ->
    api.get("/projects/notes_from_nature/groups/#{ id }?type=archive").then (group) ->
      group.stats

module.exports = ProgressBar
