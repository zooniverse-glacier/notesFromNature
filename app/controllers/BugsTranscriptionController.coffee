Spine   = require 'spine'

Archive = require 'models/Archive'
Classification = require 'models/Classification'
Subject = require 'models/Subject'

class BugsTranscriptionController extends Spine.Controller
  className: 'BugsTranscriptionController'

  constructor: ->
    super 
    Spine.bind 'finishedBugsTranscription', @saveClassification

  render: =>
    @html require('views/transcription/bugs')

  startWorkflow: (@archive) =>
    @render()

    go = =>
      window.GOD = new nfn.ui.view.GOD({
        model: new nfn.ui.model.GOD()
      })

      transcriberModel = new nfn.ui.model.Bugs()
      @transcriber = new nfn.ui.view.BugsTranscriber({
        model: transcriberModel
      })

      $('.btn.close').attr('href', "#/archives/#{@archive.slug()}")
      
      @nextSubject()
      window.transcriber = @transcriber

    @delay go, 200

  nextSubject: =>
    @archive.nextSubject (@currentSubject) =>
      callback = => 
        $('.photos img').animate({ marginLeft: '0' }, 500)
        @transcriber.spinner.hide()
        @transcriber.startTranscribing()

      @transcriber.loadPhoto(@currentSubject.location.standard, callback)

  saveClassification: (data) =>
    classification = Classification.create({subject_id: @currentSubject.id, workflow_id: @currentSubject.workflow_ids[0] } )
    for annotation in data.toJSON()
      classification.annotate annotation.step, annotation.value

    classification.save()
    @currentSubject.retire()
    classification.send()
    @nextSubject()

module.exports = BugsTranscriptionController