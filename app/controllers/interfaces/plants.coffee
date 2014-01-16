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

    Subject.current.location.small ?= Subject.current.location.standard

    @transcriber.loadPhoto Subject.current.location.standard, =>
      $(".photos img").animate({ marginLeft: "0" }, 500)
      @transcriber.$backgroundMessage.fadeOut 250, =>
        @transcriber.$backgroundMessage.html("")

      @transcriber.spinner.hide()
      @transcriber.startTranscribing Subject.current

module.exports = Plants
