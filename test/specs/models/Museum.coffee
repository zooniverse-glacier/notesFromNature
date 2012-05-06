describe 'Museum', ->
  Museum = null
  
  beforeEach ->
    class Museum extends Spine.Model
      @configure 'Museum'
  
  it 'can noop', ->
    