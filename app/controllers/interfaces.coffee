Archive = require 'models/Archive'
Classification = require 'models/Classification'
Subject = require 'models/Subject'

class InterfaceController extends Spine.Controller
  preferences: {}
  
  constructor: ->
    super
    Spine.bind 'finishedTranscription', @saveClassification
    Spine.bind 'skipTranscription', @skipClassification

  render: (opts = null) =>
    @html @template(opts)

  startWorkflow: (@archive) =>
    @render()

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

      @nextSubject()
      window.transcriber = @transcriber

    @delay go, 200

  saveClassification: (data) =>
    for annotation in data.toJSON()
      @classification.annotate annotation.step, annotation.value

    @classification.save()
    @currentSubject.retire()
    @archive.checkBadges()
    @classification.send()
    @nextSubject()

  skipClassification: =>
    @currentSubject.retire()
    @nextSubject()

    
  # Generic UI
  exit: =>
    Spine.Route.navigate window.location.hash.split('/').slice(0,3).join('/')

module.exports = InterfaceController