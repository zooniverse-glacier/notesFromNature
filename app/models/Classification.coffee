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

  saveData: (@annotations) -> @save()
  
  addAnnotation: (annotation) ->
    for a, i in @annotations when annotation.id is a.id
      return a = annotation

    @annotations.push annotation
    annotation

  removeAnnotation: (annotation) ->
    for a, i in @annotations when annotation.id is a.id
      return @annotations.splice i, 1

  annotateLine: (line, number) ->
    for annotation in line.transcriptions?.toJSON()
      annotation =
        line: number
        step: annotation.step
        value: annotation.value
      @annotations.push annotation
    @save()

  annotate: (questionId, answerId) ->
    annotation = { }
    annotation[questionId] = answerId
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