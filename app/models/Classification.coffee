Subject = require 'models/Subject'

Api = require 'zooniverse/lib/api'
User = require 'zooniverse/lib/models/user'

class Classification extends Spine.Model
  @configure 'Classification', 'subject_id', 'annotations', 'workflow_id'
  
  constructor: ->
    super
    @annotations ?= []

    @started_at = (new Date).toUTCString()
    @user_agent = window.navigator.userAgent

  subject: ->
    Subject.find @subject_id 

  removeAnnotation: (annotation) ->
    for a, i in @annotations when annotation.id is a.id
      return @annotations.splice i, 1

  annotate: (key, value) ->
    annotation = {}
    annotation[key] = value
    @annotations.push annotation
    @save()

  url: ->
    "/projects/notes_from_nature/workflows/#{@workflow_id}/classifications"
  
  toJSON: ->
    json = classification:
      subject_ids: [@subject_id]
      favorite: false
      annotations: @annotations.concat [{@started_at, @finished_at}, {@user_agent}]

    json
  
  send: ->
    @finished_at = (new Date).toUTCString()

    if User.current?
      User.current.project.classification_count += 1
      User.current.save()
      User.current.trigger 'updateProfile'

    Classification.trigger 'classified'
    Api.post @url(), @toJSON()

module.exports = Classification