describe 'HomeController', ->
  HomeController = null
  
  beforeEach ->
    class HomeController extends Spine.Controller
  
  it 'can noop', ->
    