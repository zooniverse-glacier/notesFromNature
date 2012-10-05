/*
* common.ui.view.Highlight
*
*/
describe("common.ui.view.Highlight", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.Highlight({
      model: new nfn.ui.model.Highlight(),
      template: $("#highlight-template").html()
    });

  });

  afterEach(function() {

    widget.clean();

  });

  it("should have a close button", function() {

    widget.render();
    widget.setPosition(300, 200);
    widget.$el.css("position", "absolute");

    expect(widget.$closeButton).toEqual(widget.$el.find(".close"));
    expect(widget.$el.find(".close").length).toBeTruthy();

  });

  it("should fire an event when the user clicks in the close button", function() {
    widget.render();

    var spy = spyOn(widget, 'close');

    widget.delegateEvents();
    widget.$closeButton.click();

    expect(spy).toHaveBeenCalled();
  });

  it("shouldn't be defined if the dimensions aren't set", function() {
    widget.render();
    widget.setPosition(100, 100);
    expect(widget.isDefined()).toEqual(false);
  });

  it("should be defined if the dimensions are set", function() {
    widget.render();
    widget.setSize(100, 100);
    widget.setPosition(100, 100);
    expect(widget.isDefined()).toEqual(true);
  });

  it("should have a clear method", function() {
    widget.render();
    widget.setPosition(300, 200);
    widget.setSize(300, 200);
    widget.$el.css("position", "absolute");
    widget.clear();
    expect(widget.isDefined()).toEqual(false);
  });

  it("should hide the highlight when the close button is clicked", function() {
    widget.render();
    widget.$closeButton.click();
    expect(widget.model.get("hidden")).toEqual(true);
  });

  it("should fire an event on click", function() {

    widget.render();

    var spy = spyOn(widget, 'start');

    widget.delegateEvents();
    widget.$el.click();

    expect(spy).toHaveBeenCalled();

  });

});

