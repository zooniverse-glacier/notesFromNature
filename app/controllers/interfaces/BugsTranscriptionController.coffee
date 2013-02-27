Archive = require 'models/Archive'

InterfaceController = require 'controllers/InterfaceController'

class BugsTranscriptionController extends InterfaceController
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

module.exports = BugsTranscriptionController