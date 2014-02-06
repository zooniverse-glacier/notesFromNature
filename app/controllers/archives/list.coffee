Archive = require 'models/Archive'

class ArchivesList extends Spine.Site
  className: 'ArchivesList'

  elements:
    '.archive-list li.completed:not(.mine)': 'userArchives'
    '.archive-list li.completed.mine': 'nonUserArchives'
    '.switch': 'toggleSwitch'

  events:
    'mouseenter .archive-list li': 'showArchiveDetails'
    'mouseleave .archive-list li': 'hideListDetails'
    'click .switch a': 'toggleUserArchives'
    'click span.switch': 'toggleComplete'

  title: 'Collections'

  constructor: ->
    super
    Archive.bind 'refresh', @render
    @showCompleted = true

  showArchiveDetails: (e) =>
    $(e.currentTarget).find('.translucent-box:not(.disable)').stop().animate {top: 0}, {duration: 200}

  hideListDetails: (e) =>
    $(e.currentTarget).find('.translucent-box').stop().animate {top: '185px'}, {duration: 200}
  
  render: (options = undefined) =>
    archives = Archive.filter(options)

    @html ''
    @append require('views/archives/topBar')
      archives: archives
      options: options

    @append require('views/archives/archiveList')
      archives: archives
      archiveTemplate: require('views/archives/archive')

  toggleUserArchives: (e) =>
    e.preventDefault()

    slider = $(e.currentTarget)
    $('.bkg').animate {left: slider.position().left}, 100, =>
      @toggleSwitch.find('a').removeClass('selected')
      slider.addClass('selected')

      if slider.position().left != 0
        if @showCompleted
          $(".collection-list li.completed:not(.mine)").animate {opacity: 0.2}, {duration: 100}
        else
          $(".collection-list li:not(.mine)").animate {opacity: 0.2}, {duration: 100}
      else
        if @showCompleted
          $(".collection-list li.completed:not(.mine)").animate {opacity: 0.2}, {duration: 100}
        else
          $(".collection-list li:not(.mine)").animate {opacity: 0.2}, {duration: 100}

  toggleComplete: (e) =>
    e.preventDefault()

    slider = $(e.currentTarget)
    if  slider.hasClass("selected")
      slider.html slider.attr('data-selected')
      $(".archive-list li.completed").animate({opacity:1}, { duration: 300})
      @showCompleted = true
    else 
      @showCompleted = false
      slider.html slider.attr('data-show')
      $(".archive-list li.completed").animate({opacity:.2}, { duration: 300})

    slider.toggleClass("selected")

module.exports = ArchivesList