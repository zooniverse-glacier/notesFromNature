Config =
  development:
    apiHost: 'http://localhost:3000'
  
  production:
    apiHost: 'https://api.zooniverse.org'
  

module.exports = Config['development']
