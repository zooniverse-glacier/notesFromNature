Archive = require 'models/Archive'

Interfaces = require 'controllers/interfaces'

Classification = require 'zooniverse/models/classification'
Subject = require 'zooniverse/models/subject'

Eol = require 'lib/eol'
Modal = require 'lib/modal'

eolView = require 'views/widgets/eol'

class Fungi extends Interfaces
  className: 'FungiTranscriptionController'
  template: require 'views/transcription/fungi'
  widgetName: 'Fungi'

  nextSubject: =>
    species = Subject.current.metadata.species || "mushroom"
    Eol.getSpeciesImages species, (result) =>
      if $('#eol-widget').length
        $('#eol-widget').remove()

      div = document.createElement 'div'
      div.id = 'eol-widget'
      div.innerHTML = eolView { data: result }
      $('.transcriber.fungi').append div
      $('#eol-widget').find('img').on 'click', ->
        new Modal $(@).data('standard')

    @classification = new Classification subject: Subject.current

    callback = =>
      $(".photos img").animate({ marginLeft: "0" }, 500)
      @transcriber.$backgroundMessage.fadeOut 250, =>
        @transcriber.$backgroundMessage.html("")

      @transcriber.spinner.hide()
      @transcriber.startTranscribing(Subject.current)

    @transcriber.loadPhoto(Subject.current.metadata.original_url, callback)
    @transcriber.loadLargePhoto(Subject.current.metadata.original_url)

module.exports = Fungi
