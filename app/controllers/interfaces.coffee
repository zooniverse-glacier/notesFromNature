Institute = require '../models/institute'
Subject = require 'zooniverse/models/subject'
User = require 'zooniverse/models/user'
Project = require 'zooniverse/models/project'

class InterfaceController extends Spine.Controller
  preferences: {}

  constructor: ->
    super
    addEventListener 'finished-transcription', @saveClassification
    addEventListener 'skip-transcription', @skipClassification

    Subject.on 'select', @nextSubject

  render: (opts = null) =>
    @html @template(opts)

  startWorkflow: (@archive) =>
    @render()

    Subject.group = @archive.id

    go = =>
      window.GOD = new nfn.ui.view.GOD
        model: new nfn.ui.model.GOD()

      @transcriber = new nfn.ui.view[@widgetName]
        model: new nfn.ui.model[@widgetName]()
        user: User.current
        archive: @archive

      $(".btn.close").attr("href", "#/archives/#{@archive.slug()}")

      @setupInterfaceWorkflow()
      Subject.next()

    @delay go, 200

  setupInterfaceWorkflow: =>
    # defined within interfaces

  saveClassification: ({transcriptions}) =>
    @classification.annotate({step: annotation.stepTitle, value: annotation.value}) for annotation in transcriptions.toJSON()

    # Save collection directly onto classification. Avoids having to do a join via the DB.
    if Subject.current?.group
      @classification.annotate group: Subject.current.group

    done = =>
      #throttle to allow async POST to succeed on backend before refresh of other data
      setTimeout =>
        #refresh other data
        Institute.fetch()
        Project.fetch()

        #refresh User data, primarily to up the badges
        unless User.current then return
        badges = User.current.badges
        userFetch = User.fetch()

        userFetch.done =>
          User.current.badges = badges
          @archive?.checkBadges()

      , 500

    cachedSet = JSON.parse(localStorage.getItem("classifications"))
    cachedSet = {} unless cachedSet
    max = 0
    maxId = 0
    maxId = (if key > max then key else max) for key, value of cachedSet
    cachedSet["" + (parseInt(maxId) + 1)] = @classification.toJSON()
    localStorage.setItem("classifications", JSON.stringify cachedSet)

    @classification.send()
    Subject.next()

  skipClassification: =>
    @classification.annotate({skip: true})
    @classification.send()
    Subject.next()

module.exports = InterfaceController
