/*
* common.ui.view.StatusBar
*/
describe("common.ui.view.StatusBar", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.StatusBar({
      model: new nfn.ui.model.StatusBar({ title: "a", description: "b" }),
      template: $("#statusbar-template").html()
    });

    $("body").append(widget.render());

    window.widget = widget;

  });

  afterEach(function() {

    widget.clean();

  });

  it("should have a title", function() {
    expect(widget.$title).toEqual(widget.$el.find(".title"));
    expect(widget.$el.find('.title').length).toEqual(1);
  });

  it("should have a close button", function() {

    expect(widget.$closeButton).toBeDefined();
    expect(widget.$el.find('.close').length).toEqual(1);

  });

  it("should have a description", function() {
    expect(widget.$description).toEqual(widget.$el.find(".description"));
    expect(widget.$el.find('.description').length).toEqual(1);
  });

  it("should have a record counter", function() {
    expect(widget.$counter).toEqual(widget.$el.find(".counter"));
    expect(widget.$el.find('.counter').length).toEqual(1);
  });


});

