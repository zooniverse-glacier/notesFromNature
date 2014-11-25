Archive = require '../../models/Archive'

Interfaces = require '../interfaces'

Classification = require 'zooniverse/models/classification'
Subject = require 'zooniverse/models/subject'
window.Snap = require 'snapsvg'
require 'snap.svg.zpd'

class Plants extends Interfaces
  className: 'SernacTranscriptionController'
  template: require '../../views/transcription/sernac'
  widgetName: 'Herbarium'

  constructor: ->
    super

    rawSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    rawSvg.setAttribute 'id', 'image-container'
    @surface = Snap rawSvg

  nextSubject: =>
    @surface.clear()
    @classification = new Classification subject: Subject.current

    Subject.current.location.small ?= Subject.current.location.standard
    subjectImage = Subject.current.location.standard

    @transcriber.$el.append @surface.node

    img = new Image
    img.onload = =>
      maxHeight = window.innerHeight - 150
      scaleFactor = Math.min 1, (maxHeight / img.naturalHeight)

      image = @surface.image subjectImage, 0, 0, img.naturalWidth * scaleFactor, img.naturalHeight * scaleFactor
      image.transform("t#{(window.innerWidth / 2) - (image.getBBox().width / 2)},20")

      @surface.zpd()

      @transcriber.startTranscribing()

    img.src = subjectImage

module.exports = Plants
