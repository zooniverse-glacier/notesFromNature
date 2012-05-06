Spine = require('spine')
Museum = require('models/Museum')

class MuseumShowController extends Spine.Controller
  # className: 'wrapper'
  
  constructor: ->
    super

  active:(params)=>
    super
    museum = Museum.findBySlug(params.id)[0]
    @render(museum)

  render:(museum=undefined)=>
    if museum?
      @html require("views/museums/museumShow")
        museum: museum
        collectionTemplate : require('views/museums/collectionDetails')
    else
      @html require("views/museums/museumNotFound")()

    
module.exports = MuseumShowController