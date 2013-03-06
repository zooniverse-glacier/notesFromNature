Eol = require 'lib/eol'

Archive = require 'models/Archive'
Classification = require 'models/Classification'
Subject = require 'models/Subject'

class DoubleTranscriptionController extends Spine.Controller
  className: 'DoubleTranscriptionController'
  elements:
    '#eol-widget': 'eolWidget'

  constructor: ->
    super
    Spine.bind 'finishedBirdsTranscription', @saveClassification
    Spine.bind 'searchEol', @searchEol

  render: =>
    @html require("views/transcription/birds")

  startWorkflow: (@archive) =>
    @render()

    go = =>
      window.GOD = new nfn.ui.view.GOD({
        model: new nfn.ui.model.GOD()
      })

      transcriberModel = new nfn.ui.model.DoublePage()
      @transcriber = new nfn.ui.view.DoublePage({
        model: transcriberModel
        Spine: Spine
      })

      $(".btn.close").attr("href", "#/archives/#{@archive.slug()}")

      @nextSubject()
      window.transcriber = @transcriber

    @delay go, 200

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