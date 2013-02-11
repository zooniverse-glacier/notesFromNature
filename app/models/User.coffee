Spine = require('spine')
Archive = require('models/Archive')
BaseUser = require('zooniverse/lib/models/user')

class User extends BaseUser
  @configure 'User', 'collection_ids', 'avatar'

  seenCollection:(collection)=>
    collections? and collection_ids.index_of(collection.id)

module.exports = User