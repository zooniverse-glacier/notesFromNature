Spine = require('spine')
Archive = require('models/Archive')
class ArchivesShowController extends Spine.Controller
  # className : "wrapper"

  constructor: ->
    super

  active:(params)=>
    super 
    archive = Archive.find_by_slug(params.id)
    @render(archive)

  render:(archive=undefined)=>
    console.log('archive is ', archive)
    if archive?
      @html require('/views/archives/archiveShow')
        archive: archive
    else
      @html require('/views/archives/archiveNotFound')()


module.exports = ArchivesShowController