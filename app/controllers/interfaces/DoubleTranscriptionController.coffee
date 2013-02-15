Spine = require 'spine'

Eol = require 'lib/eol'

Archive = require 'models/Archive'
Classification = require 'models/Classification'
Subject = require 'models/Subject'

InterfaceController = require 'controllers/InterfaceController'

class DoubleTranscriptionController extends InterfaceController
  className: 'DoubleTranscriptionController'
  elements:
    '#eol-widget': 'eolWidget'
  template: require 'views/transcription/birds'
  widgetName: 'DoublePage'

  constructor: ->
    super
    Spine.bind 'searchEol', @searchEol

  nextSubject: =>
    @archive.nextSubject (@currentSubject) =>
      callback = =>
        @transcriber.spinner.hide => 
          $(".photos img").animate({ marginLeft: "0" }, 500)
          @transcriber.transcriberWidget.show()
          @transcriber.transcriberWidget.setDraggable(true)
          @transcriber.transcriberWidget.setResizable(true)
          @transcriber.startTranscribing()

      @transcriber.loadPhoto(@currentSubject.location.standard, callback)

  saveClassification: (data) =>
    classification = Classification.create({subject_id: @currentSubject.id, workflow_id: @currentSubject.workflow_ids[0]})
    for line, i in data.models
      classification.annotateLine line, i

    classification.save()
    @currentSubject.retire()
    classification.send()
    @nextSubject()

  # Run a search on Encyclopedia of Life after a user fills in a value for species.
  searchEol: (species) =>
    Eol.getSpeciesImages species, (data) =>
      console.log 'data', data
      @eolWidget.html require('views/transcription/eol')(data: data)
  
module.exports = DoubleTranscriptionController