Archive = require 'models/Archive'

Interfaces = require 'controllers/interfaces'

class Bugs extends Interfaces
  className: 'BugsTranscriptionController'
  template: require 'views/transcription/bugs'
  widgetName: 'Bugs'

  constructor: ->
    super

  nextSubject: =>
    @archive.nextSubject (@currentSubject) =>
      callback = =>
        $('.photos img').animate({ marginLeft: '0' }, 500)
        @transcriber.spinner.hide()
        @transcriber.startTranscribing()

      @transcriber.loadPhoto(@currentSubject.location.standard, callback)

module.exports = Bugs