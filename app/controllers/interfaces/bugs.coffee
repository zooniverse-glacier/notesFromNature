Archive = require 'models/Archive'

Interfaces = require 'controllers/interfaces'

Classification = require 'zooniverse/models/classification'
Subject = require 'zooniverse/models/subject'

class Bugs extends Interfaces
  className: 'BugsTranscriptionController'
  template: require 'views/transcription/bugs'
  widgetName: 'Bugs'

  nextSubject: =>
    @classification = new Classification subject: Subject.current

    callback = =>
      $('.photos img').animate({ marginLeft: '0' }, 500)
      @transcriber.spinner.hide()
      @transcriber.startTranscribing(Subject.current)

    @transcriber.loadPhoto(Subject.current.location.standard, callback)

module.exports = Bugs