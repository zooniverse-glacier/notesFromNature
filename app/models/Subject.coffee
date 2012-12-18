Spine = require('spine')
Archive = require('models/Archive')
API = require('zooniverse/lib/api')
BaseSubject = require('zooniverse/lib/models/subject')

class Subject extends BaseSubject
  @configure 'Subject','location', 'metadata', 'active', 'workflow_ids', 'collection_id'
  @belongsTo 'archive', Archive
  
  constructor:->
    super
    @active= true



  @next_subject:=>
    @purge()
    API.get "/subjects", (data)=>
      Subject.create(data)
      Subject.trigger("gotNext")

  @active:=>
    @select (s)=>
      s.active
      
  @activeCount:=>
    @active().length

  @current:=>
    Subject.first()

  @getNextForCollection:(collection_id, number=2)=>
    _(number).times =>
      API.get "/projects/notes_from_nature/groups/#{@archive_id}/subjects?limit=#{number}", (data)=> 
        Subject.create(data)

  retire:=>
    @active=false 
    @save()
    if Subject.activeCount() < 3
      Subject.getNextForCollection(self.collection_id, 10)

  @purge:=>
    for subject in Subject.all()
      subject.destroy()

  @random:=>
    randomNo = Math.floor(Math.random()*(@activeCount()))
    @active()[randomNo]



module.exports = Subject