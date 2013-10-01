Archive = require 'models/Archive'

Interfaces = require 'controllers/interfaces'

Classification = require 'zooniverse/models/classification'
Subject = require 'zooniverse/models/subject'

Eol = require 'lib/eol'
eolView = require 'views/widgets/eol'

class Fungi extends Interfaces
  className: 'FungiTranscriptionController'
  template: require 'views/transcription/fungi'
  widgetName: 'Fungi'

  nextSubject: =>
    Eol.getSpeciesImages "mushroom", (result) =>
      div = document.createElement 'div'
      div.id = 'eol-widget'
      div.innerHTML = eolView { data: result }
      $('.transcriber.fungi').append div

    @classification = new Classification subject: Subject.current

    callback = =>
      $(".photos img").animate({ marginLeft: "0" }, 500)
      @transcriber.$backgroundMessage.fadeOut 250, =>
        @transcriber.$backgroundMessage.html("")

      @transcriber.spinner.hide()
      @transcriber.startTranscribing(Subject.current)

    @transcriber.loadPhoto(Subject.current.location.standard, callback)
    @transcriber.loadLargePhoto(Subject.current.location.standard)

module.exports = Fungi
