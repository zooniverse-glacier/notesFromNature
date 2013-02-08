Spine = require 'spine'
Api = require 'zooniverse/lib/api'
Subject = require 'models/Subject'
User = require 'zooniverse/lib/models/user'
Badges = require 'models/Badge'

class Classification extends Spine.Model
  @configure 'Classification', 'subject_id', 'annotations', 'workflow_id'
  
  constructor: ->
    super
    @annotations ||= []

  subject: ->
    Subject.find @subject_id 
  
  annotate: (questionId, answerId) ->
    annotation = { }
    annotation[questionId] = answerId
    @annotations.push annotation
    # @annotations[questionId] = answerId
    @save()

  url: ->
    "/projects/notes_from_nature/workflows/#{@workflow_id}/classifications"
  
  toJSON: ->
    json =
      classification:
        subject_ids: [@subject_id]
        favorite: false
    
    json.classification = $.extend json.classification, super
    json
  
  send: ->
    if User.current?
      User.current.project.classification_count+=1
      User.current.save()
      User.current.trigger("updateProfile")

      for badge in Badges.all()
        badge.checkAward()

    Classification.trigger 'classified'
    Api.post @url(), @toJSON()

module.exports = Classification