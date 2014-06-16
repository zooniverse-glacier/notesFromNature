BaseController = require 'zooniverse/controllers/base-controller'
Subject = require 'zooniverse/models/subject'

Eol = require 'lib/eol'
Modal = require 'lib/modal'

class EolController extends BaseController
  className: 'eol-widget'
  template: require 'views/widgets/eol'

  id: ''
  title: ''
  content: ''
  link: ''
  images: []

  events:
    'click img': 'onClickImage'

  constructor: ->
    super
    Subject.on 'select', @onSubjectSelect

  render: =>
    @el.html @template @

  onSubjectSelect: =>
    species = Subject.current.metadata.species || "mushroom"
    Eol.getSpeciesImages species, (result) =>
      @[key] = value for own key, value of result when key of @
      @render()

  onClickImage: ({ currentTarget }) =>
    new Modal @images[currentTarget.dataset.index]

module.exports = EolController
