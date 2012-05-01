Spine = require('spine')

class Subject extends Spine.Model
  @configure 'Subject'
  
  @next_subject:=>
    $.getJSON "/next_subject", (data)=>
      Subject.new(data)

  @getNextForCollection:(collection_id)=>
    $.getJSON "/collection/#{collection_id}/next_subject", (data)=>
      Subject.create(data)
      Subject.trigger("gotNext")

module.exports = Subject