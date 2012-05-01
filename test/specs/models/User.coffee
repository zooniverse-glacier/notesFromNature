describe 'User', ->
  User = null
  
  beforeEach ->
    class User extends Spine.Model
      @configure 'User'
  
  it 'can noop', ->
    