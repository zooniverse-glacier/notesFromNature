Archive = require 'models/Archive'
Classification = require 'models/Classification'

Interfaces = require 'controllers/interfaces'

class Bugs extends Interfaces
  className: 'BugsTranscriptionController'
  template: require 'views/transcription/bugs'
  widgetName: 'Bugs'

  constructor: ->
    super

  nextSubject: =>
    @archive.nextSubject (@currentSubject) =>
      @classification = Classification.create({subject_id: @currentSubject.id, workflow_id: @currentSubject.workflow_ids[0]})

      callback = =>
        $('.photos img').animate({ marginLeft: '0' }, 500)
        @transcriber.spinner.hide()
        @transcriber.startTranscribing()

      @transcriber.loadPhoto(@currentSubject.location.standard, callback)

module.exports = Bugs