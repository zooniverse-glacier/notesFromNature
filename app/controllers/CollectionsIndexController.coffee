Spine = require('spine')

Collection = require('models/Collection')
class CollectionIndexController extends Spine.Controller
  # className: "wrapper"

  events:
    "click .switch a" : 'toggleUserCollections'
    "mouseenter .collection-list li" : 'showCollectionDetails'
    "mouseleave .collection-list li" : 'hideListDetails'
    "click span.switch" : 'toggleComplete'

  elements:
    ".switch" : "toggleSwitch"
    ".collection-list li.completed:not(.mine)" : "userCollections"
    ".collection-list li.completed.mine" : "nonUserCollections"

  constructor: ->
    super
    Collection.bind "refresh", @render
    @showCompleted = true

  active:(params)=>
    super 
    @render(params)

  showCollectionDetails:(e)=>
    $(e.currentTarget).find(".translucent-box").stop().animate {top:0}, { duration: 200 }

  hideListDetails:(e)=>
    $(e.currentTarget).find(".translucent-box").stop().animate {top:"160px"}, { duration: 200 }

  render:(options=undefined)=>
    collections = Collection.filter(options)

    @html ""
    @append require('views/collections/topBar')
      collections: collections
    @append require('views/collections/collectionList')
      collections : collections
      collectionTemplate: require("views/collections/collection")

  toggleUserCollections:(e)=>
    e.preventDefault()

    slider = $(e.currentTarget)
    $(".bkg").animate {left: slider.position().left}, 100, =>
      @toggleSwitch.find("a").removeClass("selected")
      slider.addClass("selected")

      if slider.position().left !=0
        if @showCompleted
          $(".collection-list li.completed:not(.mine)").animate {opacity: 0.2}, {duration: 100}
        else
          $(".collection-list li:not(.mine)").animate {opacity: 0.2}, {duration: 100}
      else
        if @showCompleted
          $(".collection-list li.completed:not(.mine)").animate {opacity: 0.2}, {duration: 100}
        else
          $(".collection-list li:not(.mine)").animate {opacity: 0.2}, {duration: 100}

  toggleComplete:(e)=>
    e.preventDefault();
    slider = $(e.currentTarget)
    if  slider.hasClass("selected")
      slider.html slider.attr('data-selected')
      @showCompleted = true;
      $(".collection-list li:not(.completed)").animate({opacity:.2}, { duration: 100})
    else 
      @showCompleted = false;
      slider.html slider.attr('data-show')
      $(".collection-list li:not(.completed)").animate({opacity:1}, { duration: 100})
      
    slider.toggleClass("selected")

module.exports = CollectionIndexController