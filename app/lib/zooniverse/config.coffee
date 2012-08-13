config = {}

# `set` is a shortcut for setting a bunch of properties by passing in an object.
# Order isn't guaranteed. Call it multiple times if order is important.
config.set = (options) ->
  for own key, value of options
    throw new Error 'Don\'t overwrite "set" in config.' if key is 'set'
    config[key] = value

# Determine if we're running on a development server.

config.set
  dev:  false #+location.port > 1023 or !!~location.hostname.indexOf '.dev'

# Default host and API proxy path
config.apiHost = 'https://api.zooniverse.org'
config.proxyPath = '/proxy.html'

# TODO: What if dev Ouroboros isn't on 3000?

module.exports = config
