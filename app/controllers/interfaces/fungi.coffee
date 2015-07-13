Archive = require '../../models/archive'

Interfaces = require '../interfaces'

Classification = require 'zooniverse/models/classification'
Subject = require 'zooniverse/models/subject'
window.Snap = require 'snapsvg'
require 'snap.svg.zpd'

ZOOM_FACTOR = 0.15

#EolController = require '../widgets/eol'

class Fungi extends Interfaces
  className: 'FungiTranscriptionController'
  template: require '../../views/transcription/fungi'
  widgetName: 'Fungi'

  constructor: ->
    super
    #@eolController = new EolController

    rawSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    rawSvg.setAttribute 'id', 'image-container'
    @surface = Snap rawSvg

  setupInterfaceWorkflow: =>
    @transcriber.$el.append @surface.node

    zoomInDiv = document.createElement 'div'
    zoomInDiv.innerHTML = '+'

    zoomOutDiv = document.createElement 'div'
    zoomOutDiv.innerHTML = '-'

    zoomInDiv.classList.add 'zoom-control', 'zoom-in'
    zoomOutDiv.classList.add 'zoom-control', 'zoom-out'

    # this is what i get for working with unstable dependencies
    zoomInDiv.addEventListener 'click', =>
      g = @surface.select "##{@image.node.parentNode.id}"

      {width, height, cx, cy} = g.getBBox()
      deltaX = ((width * (1 + ZOOM_FACTOR)) - width) / 2
      deltaY = ((height * (1 + ZOOM_FACTOR)) - height) / 2

      matrix = new Snap.Matrix @image.node.parentNode.getCTM()
      g.transform matrix.scale(1 + ZOOM_FACTOR).translate -(deltaX), -(deltaY)

    zoomOutDiv.addEventListener 'click', =>
      g = @surface.select "##{@image.node.parentNode.id}"

      {width, height} = g.getBBox()
      deltaX = Math.abs ((width * (1 - ZOOM_FACTOR)) - width) / 2
      deltaY = Math.abs ((height * (1 - ZOOM_FACTOR)) - height) / 2

      matrix = new Snap.Matrix @image.node.parentNode.getCTM()
      g.transform matrix.scale(1 - ZOOM_FACTOR).translate deltaX, deltaY

    @transcriber.$el.append zoomInDiv
    @transcriber.$el.append zoomOutDiv

  nextSubject: =>
    ###
    unless $('.transcriber.fungi .eol-widget').length
      $('.transcriber.fungi').append @eolController.el

    @classification = new Classification subject: Subject.current

    url = Subject.current.location.standard
    url ?= Subject.current.metadata.original_url

    @transcriber.loadPhoto url, =>
      $(".photos img").animate({ marginLeft: "0" }, 500)
      @transcriber.$backgroundMessage.fadeOut 250, =>
        @transcriber.$backgroundMessage.html("")

      @transcriber.spinner.hide()
      @transcriber.startTranscribing Subject.current
    ###
    @surface.zpd 'destroy'
    @surface.clear()
    @classification = new Classification subject: Subject.current

    Subject.current.location.small ?= Subject.current.location.standard
    subjectImage = Subject.current.location.standard

    img = new Image
    img.onload = =>
      maxHeight = window.innerHeight - 150
      scaleFactor = Math.min 1, (maxHeight / img.naturalHeight)

      @image = @surface.image subjectImage, 0, 0, img.naturalWidth * scaleFactor, img.naturalHeight * scaleFactor
      @image.transform("t#{(window.innerWidth / 2) - (@image.getBBox().width / 2)},20")

      @surface.zpd()

      @transcriber.startTranscribing()

    img.src = subjectImage

module.exports = Fungi
