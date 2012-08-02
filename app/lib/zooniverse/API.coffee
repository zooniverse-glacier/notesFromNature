Proxy = require 'lib/zooniverse/Proxy'
{get, post, del, getJSON} = Proxy

# These accepts objects with IDs or string-IDs.
idOf = (thing) -> thing?.id || thing

module.exports =
  # Temporary holdovers...
  get: get
  post: post
  del: del
  getJSON: getJSON

  Proxy: Proxy

  checkCurrent: ({project}, andThen...) ->
    getJSON "/projects/#{idOf project}/current_user", andThen...

  logIn: ({project, username, password}, andThen...) ->
    getJSON "/projects/#{idOf project}/login", {username, password}, andThen...

  logOut: ({project, username, password}, andThen...) ->
    getJSON "/projects/#{idOf project}/login", {username, password}, andThen...

  fetchSubjects: ({project, group, limit}, andThen...) ->
    path = "/projects/#{idOf project}"
    path += "/groups/#{idOf group}" if group
    path += "/subjects"
    get path, {limit}, andThen...

  fetchFavorites: ({project, user}, andThen...) ->
    get "/projects/#{idOf project}/users/#{idOf user}/favorites", andThen...

  createFavorite: ({project, subjects}, andThen...) ->
    path = "/projects/#{idOf project}/favorites"
    post path, {favorite: subject_ids: (idOf subject for subject in subjects)}, andThen...

  destroyFavorite: ({project, favorite}, andThen...) ->
    del "/projects/#{idOf project}/favorites/#{idOf favorite}", andThen...

  fetchRecents: ({project, user}, andThen...) ->
    get "/projects/#{idOf project}/users/#{idOf user}/recents", andThen...

  saveClassification: ({project, workflow, subjects, annotations}, andThen...) ->
    path = "/projects/#{project}/workflows/#{workflow}/classifications"
    post path, {classification: {subject_ids: subjects}, annotations}, andThen...

  fetchGroup:({project, type}, andThen...) ->
    path = "/projects/#{project}/groups"
    get path, {type:type}, andThen...

  fetchSubGroup: ({project, parentGroupID}, andThen...) ->
    path = "/projects/#{project}/groups/#{parentGroupID}/groups"
    get path,  andThen...
