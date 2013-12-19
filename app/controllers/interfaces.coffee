Archive = require 'models/Archive'
Subject = require 'zooniverse/models/subject'
User = require 'zooniverse/models/user'

class InterfaceController extends Spine.Controller
  preferences: {}
  
  constructor: ->
    super
    Spine.bind 'finishedTranscription', @saveClassification
    Spine.bind 'skipTranscription', @skipClassification

    Subject.on 'select', @nextSubject

  render: (opts = null) =>
    @html @template(opts)

  startWorkflow: (@archive) =>
    @render()

    Subject.group = @archive.id

    go = =>
      window.GOD = new nfn.ui.view.GOD
        model: new nfn.ui.model.GOD()

      transcriberModel = new nfn.ui.model[@widgetName]()
      @transcriber = new nfn.ui.view[@widgetName]
        model: transcriberModel
        Spine: Spine
        user: User.current
        archive: @archive

      $(".btn.close").attr("href", "#/archives/#{@archive.slug()}")

      Subject.next()
      window.transcriber = @transcriber

    @delay go, 200

  saveClassification: (data) =>
    @classification.annotate({step: annotation.stepTitle, value: annotation.value}) for annotation in data.toJSON()

    # Sigh
    done = =>
      unless User.current then return
      badges = User.current.badges
      userFetch = User.fetch()

      userFetch.done =>
        User.current.badges = badges
        @archive.checkBadges()
      
    cachedSet = JSON.parse(localStorage.getItem("classifications"))
    cachedSet = {} unless cachedSet
    max = 0
    maxId = 0
    maxId= (if key > max then key else max) for key, value of cachedSet       
    cachedSet["" + (parseInt(maxId)+1)] = @classification.toJSON()
    localStorage.setItem("classifications", JSON.stringify cachedSet)    
      
    @classification.send done

    Subject.next()

  skipClassification: =>
    @classification.annotate({skip: true})
    @classification.send()
    Subject.next()

module.exports = InterfaceController
