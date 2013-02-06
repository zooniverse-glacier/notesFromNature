Spine = require('spine')

class EOL extends Spine.Model
  @configure 'EOL', 'EOLBaseURL', 'format',  'apiKey', 'version'

  EOLBaseURL : 'http://www.eol.org/api/'
  format     : 'json'
  apiKey     : 'ba4d577231b1f8ed74014f3ea8d179f2fffd1e2e'
  version    : "1.0"

  configure: =>
    super 

  search: (term, callback) =>
    @runRequest 'search', term, (data) =>
      callback data.results

  getMediaForSpecies: (species, mediaTypes,callback) =>
    mediaTypes.push("")
    mt = mediaTypes.join("=10&")
    mt += "iucn=1&details=1"

    @runRequest 'pages', species.id, mt, (results) =>
      media  = {}
      for entry in results.dataObjects
        mediaType = _.last(entry.dataType.split("/"))
        media[mediaType] ||= []
        media[mediaType].push entry
      results.media = media
      callback results

  runRequest: (method,term, options...) =>
    callback = options[options.length-1]
    opts = options[0...options.length-1].join("&")
    window.EOLSamp = @
    $.getJSON "#{@EOLBaseURL}/#{method}/#{@version}/#{term}.#{@format}?#{opts}&callback=?", callback
  
module.exports = EOL