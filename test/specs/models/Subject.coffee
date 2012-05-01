describe 'Subject', ->
  Subject = null
  
  beforeEach ->
    class Subject extends Spine.Model
      @configure 'Subject'
  
  it 'can noop', ->
    