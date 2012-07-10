Spine = require('spine')

class Subject extends Spine.Model
  @configure 'Subject'

  @next_subject:=>
    @purge()

    $.getJSON "#{OuroborusWorkflowBase}/subjects", (data)=>
      console.log data
      Subject.create(data)
      Subject.trigger("gotNext")


  @getNextForCollection:(collection_id)=>
    $.getJSON "#{OuroborusGroupBase}/#{collection_id}/next_subject", (data)=>
      Subject.create(data)
      Subject.trigger("gotNext")

  @purge:=>
    for subject in Subject.all()
      subject.destroy()

module.exports = Subject