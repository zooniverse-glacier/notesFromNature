Archive = require 'models/Archive'

Interfaces = require 'controllers/interfaces'

Classification = require 'zooniverse/models/classification'
Subject = require 'zooniverse/models/subject'

EolController = require 'controllers/widgets/eol'

class Fungi extends Interfaces
  className: 'FungiTranscriptionController'
  template: require 'views/transcription/fungi'

  widgetName: 'Fungi'

  constructor: ->
    super
    @eolController = new EolController

  nextSubject: =>
    unless $('.transcriber.fungi .eol-widget').length
      $('.transcriber.fungi').append @eolController.el

    @classification = new Classification subject: Subject.current

    url = Subject.current.location.standard
    url ?= Subject.current.metadata.original_url

    @transcriber.loadPhoto url, =>
      $(".photos img").animate({ marginLeft: "0" }, 500)
      @transcriber.$backgroundMessage.fadeOut 250, =>
        @transcriber.$backgroundMessage.html("")

      @transcriber.spinner.hide()
      @transcriber.startTranscribing Subject.current

module.exports = Fungi
