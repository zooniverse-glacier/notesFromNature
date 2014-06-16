class Eol
  EOLBaseURL: 'http://eol.org/api'

  format: 'json'
  version: '1.0'

  # Class methods
  @pages: (opts, cb) ->
    # Some defaults
    unless opts.hasOwnProperty 'iucn' then opts.iucn = false
    unless opts.hasOwnProperty 'details' then opts.details = true
    @_fetch 'pages', opts, cb

  @search: (opts, cb) ->
    unless opts.hasOwnProperty 'page' then opts.page = true
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
      opts = opts[0]
    else
      opts = {}

    unless opts.images then opts.images = 25

    @searchBySpecies name, (results) =>
      unless results.results.length > 0 then cb null; return

      firstResult = results.results[0]

      @pageById firstResult.id, opts, (results) ->
        if Array.isArray(results) then cb results[0].error, null; return
        unless results.dataObjects.length > 0 then cb firstResult; return

        dataObjectsWithImage = []
        for dataObject in results.dataObjects
          if 'eolMediaURL' of dataObject then dataObjectsWithImage.push dataObject

        firstResult.images = dataObjectsWithImage
        cb firstResult

  # Private methods
  @_fetch: (type, opts, cb) ->
    unless opts.format then opts.format = @::format

    url = @::EOLBaseURL + '/' + type + '/' + @::version

    if opts.id
      url += '/' + opts.id
      delete opts.id

    url += '.' + opts.format + '?'
    delete opts.format

    for key, value of opts
      url += "#{key}=#{value}&"
    url += "callback=?"

    # console.log 'fetching', type, opts, url, cb
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
