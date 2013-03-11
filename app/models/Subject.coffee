Archive = require 'models/Archive'

BaseSubject = require 'zooniverse/lib/models/subject'

class Subject extends BaseSubject
  @configure 'Subject','location', 'metadata', 'active', 'workflow_ids', 'collection_id'
  @belongsTo 'archive', Archive
  
  constructor: ->
    super
    @active = true

  # Class methods
  @active: =>
    @select (s) =>
      s.active
      
  @activeCount: =>
    @active().length

  @current: =>
    Subject.first()

  @purge: =>
    for subject in Subject.all()
      subject.destroy()

  @random: =>
    randomNo = Math.floor(Math.random() * (@activeCount()))
    @active()[randomNo]

  # Instance methods
  retire: =>
    @active = false 
    @save()

module.exports = Subject