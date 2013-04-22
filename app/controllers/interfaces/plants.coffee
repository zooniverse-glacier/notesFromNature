Archive = require 'models/Archive'

Interfaces = require 'controllers/interfaces'

Classification = require 'zooniverse/models/classification'
Subject = require 'zooniverse/models/subject'

class Plants extends Interfaces
  className: 'SernacTranscriptionController'
  template: require 'views/transcription/sernac'
  widgetName: 'Herbarium'

  nextSubject: =>
    @classification = new Classification subject: Subject.current

    callback = =>
      $(".photos img").animate({ marginLeft: "0" }, 500)
      @transcriber.$backgroundMessage.fadeOut 250, =>
        @transcriber.$backgroundMessage.html("")

      @transcriber.spinner.hide()
      @transcriber.startTranscribing(Subject.current)

    @transcriber.loadPhoto(Subject.current.location.small, callback)
    @transcriber.loadLargePhoto(Subject.current.location.standard)

module.exports = Plants