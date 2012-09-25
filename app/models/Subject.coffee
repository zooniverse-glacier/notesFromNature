Spine = require('spine')
Archive = require('models/Archive')
API = require('zooniverse/lib/api')
BaseSubject = require('zooniverse/lib/models/subject')

class Subject extends BaseSubject
  @configure 'Subject'
  @belongsTo 'archive', Archive
  
  @next_subject:=>
    @purge()
    API.get "/subjects", (data)=>
      Subject.create(data)
      Subject.trigger("gotNext")

  @current:=>
    Subject.first()

  @getNextForCollection:(collection_id, number=2)=>
    _(number).times =>
      API.get "/projects/notes_from_nature/groups/#{collection_id}/subjects", (data)=> 
        Subject.create(data)

  @purge:=>
    for subject in Subject.all()
      subject.destroy()

  @random:=>
    @all()[Math.floor(Math.random()*@count())]

module.exports = Subject