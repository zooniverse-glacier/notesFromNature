/*
* common.ui.view.Helper
*
*/
describe("common.ui.view.Helper", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.Helper({
      model: new nfn.ui.model.Helper(),
      template: $("#helper-template").html()
    });

  });

  afterEach(function() {
    widget.clean();
  });

  it("should have a title", function() {
    widget.render();
    expect(widget.$title).toEqual(widget.$el.find(".title"));
    expect(widget.$el.find('.title').length).toEqual(1);
  });

  it("should have a description", function() {
    widget.render();
    expect(widget.$description).toEqual(widget.$el.find(".description"));
    expect(widget.$el.find('.description').length).toEqual(1);
  });

  it("should allow to change the title", function() {
    widget.render();
    widget.model.set("title", "This is a test title");
    expect(widget.$title.text()).toEqual("This is a test title");
  });

  it("should allow to change the description", function() {
    widget.render();
    widget.model.set("description", 'This is a test description <a href="#" data-src="#">See example.</a>');
    expect(widget.$description.html()).toEqual('This is a test description <a href="#" data-src="#">See example.</a>');
  });

  it("should fire a showExample event when the user clicks in the example link", function() {

    widget.render();
    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a>');

      var spy = spyOn(widget, 'showExample');

      widget.delegateEvents();

      widget.$exampleLink.click();

      expect(spy).toHaveBeenCalled();

  });

  it("should close the tooltip when the user press the esc key", function() {

    widget.render();
    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a>');
      widget.$exampleLink.click();

      $(document).trigger({ type: 'keyup', which: "27" });

      expect(widget.$el.find(".tooltip").length).toEqual(0);
      expect(widget.tooltip).not.toBeDefined();

  });

  it("should create a tooltip when the user cliks in the example link", function() {

    widget.render();
    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a>');
      widget.$exampleLink.click();

      expect(widget.$el.find(".tooltip").length).toEqual(1);
      expect(widget.tooltip.model.get("hidden")).toEqual(false);

  });

  it("shouldn't create another tooltip when the user cliks in the example link several times", function() {

    widget.render();
    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a>');
      widget.$exampleLink.click();

      expect(widget.$el.find(".tooltip").length).toEqual(1);

  });

  it("should close the tooltip when the user clicks in the close button (secondary)", function() {

    widget.render();
    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a>');
      widget.$exampleLink.click();
      widget.$exampleLink.click();

      expect(widget.$el.find(".tooltip").length).toEqual(1);

  });

  it("should load an image inside the tooltip", function() {

    widget.render();
    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a>');
      widget.$exampleLink.click();

      expect(widget.$el.find(".tooltip").length).toEqual(1);

      expect(widget.$el.find(".tooltip img").length).toEqual(1);
      expect(widget.$el.find(".tooltip img").attr("src")).toEqual("http://placehold.it/100x100");

  });

});
