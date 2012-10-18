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

    var Mock = function () {};

    Mock.saveCurrentStep      = function() { return true; };
    Mock.getPendingFieldCount = function() { return true; };
    Mock.finishTranscribing   = function() { return true; };
    Mock.startTranscribing    = function() { return true; };
    Mock.nextStep             = function() { return true; };

    widget.parent = Mock;

    $("body").append(widget.render());

  });

  afterEach(function() {
    widget.clean();
  });

  it("should have a $startButton", function() {
    expect(widget.$el.find(".btn.start").length).toEqual(1);
    expect(widget.$startButton).toEqual(widget.$el.find(".btn.start"));
  });

  it("the $startButton should be initially hidden", function() {
    expect(widget.$startButton.hasClass("hidden")).toEqual(true);
  });

  it("should have a $skipButton", function() {
    expect(widget.$el.find(".skip").length).toEqual(1);
    expect(widget.$skipButton).toEqual(widget.$el.find(".skip"));
  });

  it("the $skipButton should be initially visible", function() {
    expect(widget.$skipButton).toBeVisible();
  });

  it("should have a message", function() {
    expect(widget.$message).toEqual(widget.$el.find("span"));
    expect(widget.$message.text()).toEqual("Drag a square around the specimen label");
  });

  it("should have a link to see an example", function() {
    expect(widget.$exampleLink).toEqual(widget.$el.find(".example"));
    expect(widget.$exampleLink.text()).toEqual("See example");
    expect(widget.$el.find('.example').length).toEqual(1);
  });

  it("should allow to hide the $skipButton and show the $startButton", function() {

    widget.enable();

    waits(700);

    runs(function() {
      expect(widget.$startButton.hasClass("hidden")).toEqual(false);
      expect(widget.$skipButton.hasClass("hidden")).toEqual(true);
    });

  });

  it("should allow to hide the $startButton and show the $skipButton", function() {

    widget.disable();

    waits(700);

    runs(function() {
      expect(widget.$startButton.hasClass("hidden")).toEqual(true);
      expect(widget.$skipButton.hasClass("hidden")).toEqual(false);
    });

  });

  it("should change the message when the widget is enabled", function() {

    widget.enable();

    waits(700);

    runs(function() {
      expect(widget.$message.text()).toEqual("Specimen label selected");

      widget.disable();

      waits(700);

      runs(function() {
        expect(widget.$message.text()).toEqual("Drag a square around the specimen label");
      });
    });

  });

  it("should fire a start event when the user clicks in the start button", function() {


    var spy = spyOn(widget, 'start');

    widget.delegateEvents();

    widget.$startButton.click();

    expect(spy).toHaveBeenCalled();

  });


  it("should fire a skip event when the user clicks in the start button", function() {

    var spy = spyOn(widget, 'showSkipTooltip');

    widget.delegateEvents();

    widget.$skipButton.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should fire a showExample event when the user clicks in the example link", function() {


    var spy = spyOn(widget, 'showExample');

    widget.delegateEvents();

    widget.$exampleLink.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should close the tooltip when the user press the esc key", function() {

    widget.$exampleLink.click();

    $(document).trigger({ type: 'keyup', which: "27" });

    expect(widget.$el.find(".tooltip").length).toEqual(0);
    expect(widget.tooltip).not.toBeDefined();

  });

  it("should create a tooltip when the user cliks in the example link", function() {

    widget.$exampleLink.click();

    expect(widget.$el.find(".tooltip").length).toEqual(1);
    expect(widget.tooltip.model.get("hidden")).toEqual(false);

  });

  it("should create a tooltip when the user cliks in the skip link", function() {

    widget.$skipButton.click();

    waits(500);

    runs(function() {
      expect(widget.skipTooltip.$el).toBeVisible();
      expect(widget.skipTooltip).toBeDefined();
    });

  });

  it("should trigger an skip event when the user clicks in the main button of the skipTooltip", function() {

    widget.$skipButton.click();
    var spy = spyOn(widget, 'skip');

    waits(500);

    runs(function() {

      widget.skipTooltip.$mainButton.click();

      expect(spy).toHaveBeenCalled();
    });

  });

  it("shouldn't create another tooltip when the user cliks in the example link several times", function() {

    widget.$exampleLink.click();
    widget.$exampleLink.click();

    expect(widget.$el.find(".tooltip").length).toEqual(1);

  });

  it("should close the tooltip when the user clicks in the close button (main)", function() {

    widget.$exampleLink.click();
    widget.tooltip.$mainButton.click();

    expect(widget.$el.find(".tooltip").length).toEqual(0);
    expect(widget.tooltip).not.toBeDefined();

  });


});
