class Eol
  EOLBaseURL: 'http://eol.org/api'

  format: 'json'
  version: '1.0'
  debug: false

  # Class methods
  @pages: (opts, cb) ->
    # Some defaults
    unless opts.hasOwnProperty 'iucn' then opts.iucn = 1
    unless opts.hasOwnProperty 'details' then opts.details = 1
    @_fetch 'pages', opts, cb

  @search: (opts, cb) ->
    unless opts.hasOwnProperty 'page' then opts.page = 1
    @_fetch 'search', opts, cb

  # Sugar
  @pageById: (id, opts..., cb) ->
    if opts.length > 0
      opts = opts[0]
    else
      opts = {}

    opts.id = id
    @pages opts, cb

  @searchBySpecies: (name, opts..., cb) ->
    if opts.length > 0
      opts = opts[0]
    else
      opts = {}

    opts.q = name
    @search opts, cb

  @getSpeciesImages: (name, opts..., cb) ->
    if opts.length > 0
      number = opts[0]
    else
      number = 25

    @searchBySpecies name, (results) =>
      unless results.results.length > 0 then cb null; return

      firstResult = results.results[0]

      @pageById firstResult.id, {images: number}, (results) ->
        unless results.dataObjects.length > 0 then cb firstResult; return

        images = []
        for object in results.dataObjects
          image = {}
          if object.hasOwnProperty 'eolMediaURL' then image.standard = object.eolMediaURL
          if object.hasOwnProperty 'eolThumbnailURL' then image.thumbnail = object.eolThumbnailURL

          if image.hasOwnProperty 'standard'
            images.push image

        firstResult.images = images
        cb firstResult

  # Private methods
  @_fetch: (type, opts, cb) ->
    unless opts.debug then opts.debug = @::debug
    unless opts.format then opts.format = @::format

    url = @::EOLBaseURL + '/' + type + '/' + @::version + '?'
    for key, value of opts
      url += "#{key}=#{value}&"
    url += "callback=?"

    if opts.debug then console.log 'fetching', type, opts, url, cb
    $.getJSON url, cb

  # Instance methods
  constructor: (@opts) ->

  injectOpts: (opts) ->
    if opts.length > 0
      opts = opts[0]
    else
      opts = {}

    for key, value of @opts
      opts[key] = value
    return opts

  searchBySpecies: (name, opts..., cb) ->
    @constructor.searchBySpecies name, @injectOpts(opts), cb

module.exports = Eol