Archive = require 'models/Archive'
Classification = require 'models/Classification'

Interfaces = require 'controllers/interfaces'

class Plants extends Interfaces
  className: 'SernacTranscriptionController'
  template: require 'views/transcription/sernac'
  widgetName: 'Herbarium'

  constructor: ->
    super

  nextSubject: =>
    @archive.nextSubject (@currentSubject) =>
      @classification = Classification.create({subject_id: @currentSubject.id, workflow_id: @currentSubject.workflow_ids[0]})

      callback = =>
        $(".photos img").animate({ marginLeft: "0" }, 500)
        @transcriber.$backgroundMessage.fadeOut 250, =>
          @transcriber.$backgroundMessage.html("");

        @transcriber.spinner.hide()
        @transcriber.startTranscribing(@currentSubject)

      @transcriber.loadPhoto(@currentSubject.location.standard, callback)
      @transcriber.loadLargePhoto(@currentSubject.location.large)

module.exports = Plants