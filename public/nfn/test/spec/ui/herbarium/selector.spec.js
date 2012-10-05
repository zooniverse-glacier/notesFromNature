/*
* common.ui.view.Selector
*
*/
describe("common.ui.view.Selector", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.Selection({
      model: new nfn.ui.model.Selection(),
      template: $("#selector-template").html()
    });

  });

  afterEach(function() {
    widget.clean();
  });

  it("should have a clear method", function() {
    widget.render();
    widget.setPosition(300, 200);
    widget.setSize(300, 200);
    widget.$el.css("position", "absolute");
    widget.clear();
    expect(widget.isDefined()).toEqual(false);
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

});



