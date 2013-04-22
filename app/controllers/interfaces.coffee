Archive = require 'models/Archive'
# Classification = require 'models/Classification'
Subject = require 'zooniverse/models/subject'

class InterfaceController extends Spine.Controller
  preferences: {}
  
  constructor: ->
    super
    Spine.bind 'finishedTranscription', @saveClassification
    Spine.bind 'skipTranscription', @skipClassification

    Subject.on 'select', =>
      @nextSubject()

  render: (opts = null) =>
    @html @template(opts)

  startWorkflow: (@archive) =>
    @render()

    Subject.group = @archive.id

    go = =>
      window.GOD = new nfn.ui.view.GOD({
        model: new nfn.ui.model.GOD()
      })

      transcriberModel = new nfn.ui.model[@widgetName]()
      @transcriber = new nfn.ui.view[@widgetName]({
        model: transcriberModel
        Spine: Spine
      })

      $(".btn.close").attr("href", "#/archives/#{@archive.slug()}")

      Subject.next()
      window.transcriber = @transcriber

    @delay go, 200

  saveClassification: (data) =>
    unless data.toJSON() then return Spine.trigger 'skipClassification'

    @classification.annotate({step: annotation.stepTitle, value: annotation.value}) for annotation in data.toJSON()

    @archive.checkBadges()
    @classification.send()
    Subject.next()

  skipClassification: =>
    Subject.next()

module.exports = InterfaceController