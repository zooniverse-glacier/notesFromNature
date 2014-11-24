Archive = require '../../models/Archive'

Interfaces = require '../interfaces'

Classification = require 'zooniverse/models/classification'
Subject = require 'zooniverse/models/subject'
window.Snap = require 'snapsvg'
require 'snap.svg.zpd'

loadImage = (uri, cb = null) ->
  img = new Image
  img.onload = cb if cb
  img.src = uri

class Plants extends Interfaces
  className: 'SernacTranscriptionController'
  template: require '../../views/transcription/sernac'
  widgetName: 'Herbarium'

  nextSubject: =>
    @classification = new Classification subject: Subject.current

    Subject.current.location.small ?= Subject.current.location.standard
    subjectImage = Subject.current.location.standard

    imageContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    imageContainer.setAttribute 'id', 'image-container'
    
    @transcriber.$el.append imageContainer

    img = new Image
    img.onload = =>
      paper = Snap imageContainer

      maxHeight = window.innerHeight - 150
      scaleFactor = Math.min 1, (maxHeight / img.naturalHeight)

      image = paper.image subjectImage, 0, 0, img.naturalWidth * scaleFactor, img.naturalHeight * scaleFactor
      image.transform("t#{(window.innerWidth / 2) - (image.getBBox().width / 2)},20")

      paper.zpd()

      @transcriber.startTranscribing()

    img.src = subjectImage

module.exports = Plants
