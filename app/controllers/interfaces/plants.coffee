Archive = require 'models/Archive'

Interfaces = require 'controllers/interfaces'

class Plants extends Interfaces
  className: 'SernacTranscriptionController'
  template: require 'views/transcription/sernac'
  widgetName: 'Herbarium'

  constructor: ->
    super

  nextSubject: =>
    @archive.nextSubject (@currentSubject) =>
      callback = => 
        $(".photos img").animate({ marginLeft: "0" }, 500)
        @transcriber.spinner.hide()
        @transcriber.startTranscribing()

      @transcriber.loadPhoto(@currentSubject.location.standard, callback)
      @transcriber.loadLargePhoto(@currentSubject.location.large)

module.exports = Plants