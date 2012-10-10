/*
* common.ui.view.Launcher
*
*/
describe("common.ui.view.Launcher", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.Launcher({
      model: new nfn.ui.model.Launcher(),
      template: $("#launcher-template").html()
    });
  });

  afterEach(function() {
    widget.clean();
  });

  it("should have a $startButton", function() {
    widget.render();
    expect(widget.$el.find(".btn.start").length).toEqual(1);
    expect(widget.$startButton).toEqual(widget.$el.find(".btn.start"));
  });

  it("should have a message", function() {
    widget.render();
    expect(widget.$message).toEqual(widget.$el.find("span"));
    expect(widget.$message.text()).toEqual("Drag a square around the specimen label");
  });

  it("should have a link to see an example", function() {
    widget.render();
    expect(widget.$exampleLink).toEqual(widget.$el.find(".example"));
    expect(widget.$exampleLink.text()).toEqual("See example");
    expect(widget.$el.find('.example').length).toEqual(1);
  });

  it("should allow to enable the button", function() {
    widget.render();
    widget.enable();
    expect(widget.$startButton.hasClass("disabled")).toEqual(false);
  });

  it("should allow to disable the button", function() {
    widget.render();

    widget.disable();
    expect(widget.$startButton.hasClass("disabled")).toEqual(true);

  });

  it("should fire a start event when the user clicks in the start button", function() {

    widget.render();

    var spy = spyOn(widget, 'start');

    widget.delegateEvents();

    widget.$startButton.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should fire a showExample event when the user clicks in the example link", function() {

    widget.render();

    var spy = spyOn(widget, 'showExample');

    widget.delegateEvents();

    widget.$exampleLink.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should close the tooltip when the user press the esc key", function() {

    widget.render();
    widget.$exampleLink.click();

    $(document).trigger({ type: 'keyup', which: "27" });

    expect(widget.$el.find(".tooltip").length).toEqual(0);
    expect(widget.tooltip).not.toBeDefined();

  });

  it("should create a tooltip when the user cliks in the example link", function() {

    widget.render();
    widget.$exampleLink.click();

    expect(widget.$el.find(".tooltip").length).toEqual(1);
    expect(widget.tooltip.model.get("hidden")).toEqual(false);

  });

  it("shouldn't create another tooltip when the user cliks in the example link several times", function() {

    widget.render();
    widget.$exampleLink.click();
    widget.$exampleLink.click();

    expect(widget.$el.find(".tooltip").length).toEqual(1);

  });

  it("should close the tooltip when the user clicks in the close button (main)", function() {

    widget.render();
    widget.$exampleLink.click();
    widget.tooltip.$mainButton.click();

    expect(widget.$el.find(".tooltip").length).toEqual(0);
    expect(widget.tooltip).not.toBeDefined();

  });


});
