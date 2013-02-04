Config =
  development:
    apiHost: 'https://dev.zooniverse.org'
  
  production:
    apiHost: 'https://dev.zooniverse.org'
  
  
env = if window.jasmine
  'test'
else if window.location.port > 1024
  'development'
else
  'production'

module.exports = Config[env]
