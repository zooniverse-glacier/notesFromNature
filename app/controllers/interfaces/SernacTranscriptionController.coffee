Spine   = require 'spine'

Archive = require 'models/Archive'

InterfaceController = require 'controllers/InterfaceController'

class SernacTranscriptionController extends InterfaceController
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

module.exports = SernacTranscriptionController