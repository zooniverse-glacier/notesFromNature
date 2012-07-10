Spine = require('spine')

class Archive extends Spine.Model
  @configure 'Archive', 'name', 'metadata', 'complete'
  @belongsTo 'institute', 'models/Institute'

  @fetch:=>
    $.getJSON "#{OuroborusBase}/groups/categories/archive", (data)=>
      for archive in data
        Archive.create(archive)

  @find_by_slug:(slug)=>
    result = @select (archive)=>
      archive.slug() is slug
    result[0]
  @filter:(params)=>
    if params? and params.type?
      @select (archive)=>
        archive.metadata.taxonomy.indexOf(params.type) != -1 or archive.metadata.taxonomy.indexOf(_.str.capitalize(params.type)) != -1
    else 
      @all()

  
  transcriptionUrl:=>
    "/#/archives/#{@slug()}/transcribe"

  slug:->
    @name.replace /\s/g, "_"

  complete:=>
    @metadata.progress==100
  
module.exports = Archive
