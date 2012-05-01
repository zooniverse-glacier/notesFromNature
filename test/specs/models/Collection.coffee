describe 'Collection', ->
  Collection = null
  
  beforeEach ->
    class Collection extends Spine.Model
      @configure 'Collection'
  
  it 'can noop', ->
    