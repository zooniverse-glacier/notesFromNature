/*
* common.ui.view.Widget
*
*/
describe("common.ui.view.Widget", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.Widget({
      model: new nfn.ui.model.Widget()
    });

  });

  afterEach(function() {

    widget.clean();

  });

  it("should allow to show the widget", function() {

    widget.show();
    expect(widget.model.get("hidden")).toEqual(false);

  });

  it("should allow to hide the widget", function() {

    widget.hide();
    expect(widget.model.get("hidden")).toEqual(true);

  });

  it("should allow to set the position of the magnifier", function() {

    widget.setPosition(300, 200);
    widget.$el.css("position", "absolute");

    expect(widget.$el.css("left")).toEqual("300px");
    expect(widget.$el.css("top")).toEqual("200px");

  });

  it("should return the width of the widget", function() {

    widget.$el.css("width", 50);
    expect(widget.width()).toEqual(50);

    widget.setSize(200, 100);
    expect(widget.width()).toEqual(200);

  });

  it("should return the height of the widget", function() {

    widget.$el.css("height", 50);
    expect(widget.height()).toEqual(50);

    widget.setSize(100, 500);
    expect(widget.height()).toEqual(500);

  });

  it("should allow to set the top position of the widget", function() {

    widget.setPosition(100, 200);
    widget.setTop(500);

    expect(widget.$el.css("top")).toEqual("500px");
    expect(widget.$el.css("left")).toEqual("100px");
    expect(widget.getPosition()).toEqual({ y: 500, x: 100 });

  });

  it("should allow to set the left position of the widget", function() {

    widget.setPosition(100, 200);
    widget.setLeft(500);

    expect(widget.$el.css("top")).toEqual("200px");
    expect(widget.$el.css("left")).toEqual("500px");
    expect(widget.getPosition()).toEqual({ x: 500, y: 200 });

  });

  it("should allow to set the height of the widget", function() {

    widget.setSize(100, 200);
    widget.setHeight(500);

    expect(widget.$el.css("width")).toEqual("100px");
    expect(widget.$el.css("height")).toEqual("500px");
    expect(widget.getSize()).toEqual({ w: 100, h: 500 });

  });

  it("should allow to set the width of the widget", function() {

    widget.setSize(100, 200);
    widget.setWidth(300);

    expect(widget.$el.css("width")).toEqual("300px");
    expect(widget.$el.css("height")).toEqual("200px");
    expect(widget.getSize()).toEqual({ w: 300, h: 200 });

  });

  it("should allow to resize the widget", function() {

    widget.setSize(100, 200);

    expect(widget.$el.css("width")).toEqual("100px");
    expect(widget.$el.css("height")).toEqual("200px");
    expect(widget.getSize()).toEqual({ w: 100, h: 200 });

  });

  it("should allow to resize the widget", function() {

    widget.setSize(100, 200);

    expect(widget.$el.css("width")).toEqual("100px");
    expect(widget.$el.css("height")).toEqual("200px");
    expect(widget.getSize()).toEqual({ w: 100, h: 200 });

  });

  it("should allow to enable/disable the resizable status of the widget", function() {

    widget.setResizable(true);

    expect(widget.model.get("resizable")).toEqual(true);
    expect(widget.$el.hasClass("ui-resizable")).toEqual(true);
    expect(widget.$el.hasClass("ui-resizable-disabled")).toEqual(false);

    widget.setResizable(false);
    expect(widget.model.get("resizable")).toEqual(false);
    expect(widget.$el.hasClass("ui-resizable")).toEqual(true);
    expect(widget.$el.hasClass("ui-resizable-disabled")).toEqual(true);

  });

  it("should remove the handler when the widget is not resizable", function() {

    widget.setResizable(true);
    widget.setResizable(false);
    expect(widget.$el.find(".ui-resizable-handle").length).toEqual(0);

  });

  it("should allow to enable/disable the dragging of the widget", function() {

    widget.setDraggable(true);

    expect(widget.model.get("draggable")).toEqual(true);
    expect(widget.$el.hasClass("ui-draggable")).toEqual(true);
    expect(widget.$el.hasClass("ui-draggable-disabled")).toEqual(false);

    widget.setDraggable(false);

    expect(widget.model.get("draggable")).toEqual(false);
    expect(widget.$el.hasClass("ui-draggable")).toEqual(true);
    expect(widget.$el.hasClass("ui-draggable-disabled")).toEqual(true);

  });

});


/*
* common.ui.view.Tooltip
*
*/
describe("common.ui.view.Tooltip", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip(),
      template: $("#tooltip-template").html()
    });

  });

  afterEach(function() {

    widget.clean();

  });

  it("should load an image", function() {

    var widget2 = new nfn.ui.view.Tooltip({

      model: new nfn.ui.model.Tooltip({
        url: "http://placehold.it/100x100"
      }),

      template: $("#tooltip-example-template").html()

    });

    widget2.render();

    waits(250);

    runs(function () {
      expect(widget2.$el.find("img").length).toEqual(1);
    });

  });

  it("should allow to change the template", function() {

    widget.render();

    widget.model.set("template", "<span>Hola</span>");
    expect(widget.$el.find("span").length).toEqual(1);

  });

  it("should have a title", function() {

    widget.render();

    expect(widget.$title).toEqual(widget.$el.find(".title"));
    expect(widget.$el.find(".title").length).toBeTruthy();

  });

  it("should have a description", function() {

    widget.render();

    expect(widget.$description).toEqual(widget.$el.find(".description"));
    expect(widget.$el.find(".description").length).toBeTruthy();

  });

  it("should have a main button", function() {

    widget.render();

    expect(widget.$mainButton).toEqual(widget.$el.find(".main"));
    expect(widget.$el.find(".main").length).toBeTruthy();

  });

  it("should fire an event when the user clicks in the main button", function() {

    widget.render();

    var spy = spyOn(widget, 'onMainClick');

    widget.delegateEvents();
    widget.$mainButton.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should have a secondary button", function() {

    widget.render();

    expect(widget.$secondaryButton).toEqual(widget.$el.find(".secondary"));
    expect(widget.$el.find(".secondary").length).toBeTruthy();

  });

  it("should fire an event when the user clicks in the secondary button", function() {

    widget.render();

    var spy = spyOn(widget, 'onSecondaryClick');

    widget.delegateEvents();
    widget.$secondaryButton.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should fire a close event when the user press the esc key", function() {

    widget.render();

    var spy = spyOn(widget, 'onEscKey');

    widget.delegateEvents();
    $(document).trigger({ type: 'keyup', which: "27" });

    expect(spy).toHaveBeenCalled();

  });

});

/*
* common.ui.view.StatusBar
*
*/
describe("common.ui.view.StatusBar", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.StatusBar({
      model: new nfn.ui.model.StatusBar({ title: "a", description: "b" }),
      template: $("#statusbar-template").html()
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

  it("should have a record counter", function() {
    widget.render();
    expect(widget.$counter).toEqual(widget.$el.find(".counter"));
    expect(widget.$el.find('.counter').length).toEqual(1);
  });


});

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


/*
* common.ui.view.HerbariumTranscriber
*
*/
describe("common.ui.view.HerbariumTranscriber", function() {

  var sernacTranscriber;

  beforeEach(function() {

    sernacTranscriber = new nfn.ui.view.HerbariumTranscriber({
      model: new nfn.ui.model.Herbarium(),
      widgetTemplate: "<strong>hola</strong>"
    });


  });

  afterEach(function() {
    sernacTranscriber.clean();
  });

  it("should return the number of fields left to transcribe", function() {

    sernacTranscriber.model.set("currentStep", 0);

    sernacTranscriber.transcriberWidget.$input.val("Hi!");
    sernacTranscriber.transcriberWidget.$okButton.click();

    sernacTranscriber.transcriberWidget.$input.val("Bye!");
    sernacTranscriber.transcriberWidget.$okButton.click();

    expect(sernacTranscriber.getPendingFieldCount()).toEqual(6);

  });

  it("shouldn't allow to go to the next field when ok is clicked if the input is empty", function() {

    sernacTranscriber.model.set("currentStep", 0);
    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.launcher.$startButton.removeClass("disabled");

    sernacTranscriber.transcriberWidget.$okButton.click();

    expect(sernacTranscriber.transcriptions.length).toEqual(0);
    expect(sernacTranscriber.model.get("currentStep")).toEqual(0);

  });

  it("should clean the input field when the finish button is clicked", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.launcher.$startButton.removeClass("disabled");

    sernacTranscriber.transcriberWidget.$input.val("Hi!");
    sernacTranscriber.transcriberWidget.$finishButton.click();

    waits(350);
    runs(function() {

      sernacTranscriber.transcriberWidget.finishTooltip.$mainButton.click();

      expect(sernacTranscriber.transcriberWidget.$input.val()).toEqual("");
    });

  });

  it("should have a transcriber widget", function() {
    expect(sernacTranscriber.transcriberWidget).toBeDefined();
  });

  it("should have a backdrop", function() {
    expect(sernacTranscriber.backdrop).toBeDefined();
  });

  it("should have a helper", function() {
    expect(sernacTranscriber.helper).toBeDefined();
  });

  it("should have an status bar", function() {
    expect(sernacTranscriber.statusBar).toBeDefined();
  });

  it("should have a highlight", function() {
    expect(sernacTranscriber.highlight).toBeDefined();
  });

  it("should have a launch bar", function() {
    expect(sernacTranscriber.launcher).toBeDefined();
  });

  it("the launcher's start button should be initially disabled", function() {
    expect(sernacTranscriber.launcher.$startButton.hasClass('disabled')).toEqual(true);
  });

  it("should have a spinner", function() {
    expect(sernacTranscriber.spinner).toBeDefined();
  });

  it("should have a selection", function() {
    expect(sernacTranscriber.selection).toBeDefined();
  });

  it("should have a current record number", function() {
    expect(sernacTranscriber.model.get("currentRecord")).toBeDefined();
  });

  it("should have a current step number", function() {
    expect(sernacTranscriber.model.get("currentStep")).toBeDefined();
  });

  it("should have a number of steps", function() {
    expect(sernacTranscriber.model.get("stepsCount")).toBeDefined();
  });

  it("should have a guide", function() {
    expect(sernacTranscriber.guide).toBeDefined();
  });

  it("should have a magnifier", function() {
    expect(sernacTranscriber.magnifier).toBeDefined();
  });

  it("should have an onResize method", function() {

    expect(sernacTranscriber.onResize).toBeDefined();

  });

  // TODO: move
  it("should allow to show the magnifier", function() {

    var $widget = $(sernacTranscriber.magnifier.$el);
    sernacTranscriber.magnifier.show();
    expect(sernacTranscriber.magnifier.model.get("hidden")).toEqual(false);

  });

  it("should allow to hide the magnifier", function() {

    var $widget = $(sernacTranscriber.magnifier.$el);
    sernacTranscriber.magnifier.hide();
    expect(sernacTranscriber.magnifier.model.get("hidden")).toEqual(true);

  });

  it("should allow to set the dimensions of the magnifier", function() {

    sernacTranscriber.magnifier.setDimensions({ x: 10, y: 10, w: 90, h: 90 });
    sernacTranscriber.magnifier.$el.css("position", "absolute");

    expect(sernacTranscriber.magnifier.$el.css("left")).toEqual("10px");
    expect(sernacTranscriber.magnifier.$el.css("top")).toEqual("10px");
    expect(sernacTranscriber.magnifier.$el.css("width")).toEqual("90px");
    expect(sernacTranscriber.magnifier.$el.css("height")).toEqual("90px");

  });

  it("should create a selection", function() {
    sernacTranscriber.addSelection();
    expect(sernacTranscriber.$el.find(".selection").length).toEqual(1);
  });

  it("should allow to remove the selection", function() {
    sernacTranscriber.removeSelection();
    expect(sernacTranscriber.$el.find(".selection").length).toEqual(0);
  });

  it("should allow to update the selection", function() {
    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");

    expect(sernacTranscriber.selection.$el.css("left")).toEqual("10px");
    expect(sernacTranscriber.selection.$el.css("top")).toEqual("10px");
    expect(sernacTranscriber.selection.$el.css("width")).toEqual("90px");
    expect(sernacTranscriber.selection.$el.css("height")).toEqual("90px");
  });

  it("should add the cursor crosshair of the image when the transcribing begins", function() {

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");

    sernacTranscriber.addHighlight(sernacTranscriber.selection.getDimensions());
    sernacTranscriber.highlight.$closeButton.click();

    expect(sernacTranscriber.$el.find(".photos").hasClass("selectable")).toEqual(true);
  });

  it("should remove the cursor crosshair of the image after a highlight is added", function() {

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");

    sernacTranscriber.addHighlight(sernacTranscriber.selection.getDimensions());

    expect(sernacTranscriber.$el.find(".photos").hasClass("selectable")).toEqual(false);
  });

  it("should enable the start button after a highlight is added", function() {

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");

    sernacTranscriber.addHighlight(sernacTranscriber.selection.getDimensions());

    expect(sernacTranscriber.launcher.$el.find(".start").hasClass("disabled")).toEqual(false);
  });

  it("should disable the start button after a highlight is closed", function() {

    sernacTranscriber.addHighlight({ x: 1, y: 1, w: 100, h: 100 });
    sernacTranscriber.highlight.$closeButton.click();

    expect(sernacTranscriber.launcher.$el.find(".start").hasClass("disabled")).toEqual(true);
  });

  it("should create a highlight", function() {

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");

    sernacTranscriber.addHighlight(sernacTranscriber.selection.getDimensions());

    expect(sernacTranscriber.$el.find(".highlight").length).toEqual(1);
  });

  it("cliking in the startButton should add a magnifier", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.launcher.$startButton.removeClass("disabled");
    sernacTranscriber.launcher.$startButton.click();

    expect(sernacTranscriber.$el.find(".magnifier").length).toEqual(1);
  });

  it("cliking in the disabled startButton should not add a magnifier", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.launcher.disable();
    sernacTranscriber.launcher.$startButton.click();

    expect(sernacTranscriber.$el.find(".magnifier").length).toEqual(0);
  });

  it("should update the helper title the launcher after the magnifier is added", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    waits(250);

    runs(function () {
      expect(sernacTranscriber.helper.$title.text()).toEqual("Record code");
    });

  });

  it("should hide the launcher after the magnifier is added", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    expect(sernacTranscriber.launcher.model.get("hidden")).toEqual(true);
  });

  it("should set the currentRecord to zero on init", function() {
    expect(sernacTranscriber.model.get("currentRecord")).toEqual(0);
  });

  it("should set the currentStep to zero when the magnifier is added", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");

    expect(sernacTranscriber.model.get("currentStep")).toEqual(-1);

    sernacTranscriber.addMagnifier();

    expect(sernacTranscriber.model.get("currentStep")).toEqual(0);
  });

  it("should show the sernac transcriber after the magnifier is added", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    expect(sernacTranscriber.transcriberWidget.model.get("hidden")).toEqual(false);
    expect(sernacTranscriber.$el.find(".sernac-widget").length).toEqual(1);
  });

  it("should add the backdrop after the magnifier is added", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    expect(sernacTranscriber.$el.find(".backdrop").length).toEqual(1);
  });

  it("should show the helper after the magnifier is added", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    expect(sernacTranscriber.helper.model.get("hidden")).toEqual(false);
    expect(sernacTranscriber.$el.find(".helper").length).toEqual(1);
  });

  it("should allow to start an annotation", function() {
    expect(sernacTranscriber.startTranscribing()).toEqual(null);
  });

  it("should show the launcher after the transcriber has started", function() {
    expect(sernacTranscriber.startTranscribing()).toEqual(null);
    expect(sernacTranscriber.launcher.model.get("hidden")).toEqual(false);
  });

  it("should have a reference to the launcher", function() {
    expect(sernacTranscriber.launcher.parent).toEqual(sernacTranscriber);
  });

  it("should return the dimensions and the position of the selection", function() {

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");

    expect(sernacTranscriber.selection.getDimensions()).toEqual({ x: 10, y: 10, w: 90, h: 90 });

  });

  it("should show the step information", function() {
    sernacTranscriber.model.set("stepsCount", 10);
    sernacTranscriber.model.set("currentStep", 5);

    expect(sernacTranscriber.transcriberWidget.$step.text()).toEqual("6/10");

    sernacTranscriber.model.set("currentStep", 2);
    expect(sernacTranscriber.transcriberWidget.$step.text()).toEqual("3/10");

  });

  it("should allow to increase the record counter", function() {

    sernacTranscriber.model.set("currentRecord", 3);
    sernacTranscriber.nextRecord();

    expect(sernacTranscriber.model.get("currentRecord")).toEqual(4);

  });

  it("should change the record counter in the status bar when updating the currentRecord", function() {

    sernacTranscriber.model.set("currentRecord", 3);
    sernacTranscriber.nextRecord();

    expect(sernacTranscriber.model.get("currentRecord")).toEqual(4);
    expect(sernacTranscriber.statusBar.$counter.text()).toEqual("4");

  });

  it("should allow to decrease the record counter", function() {
    sernacTranscriber.model.set("currentRecord", 3);
    sernacTranscriber.previousRecord();

    expect(sernacTranscriber.model.get("currentRecord")).toEqual(2);
  });

  it("should allow to increase the step counter", function() {
    sernacTranscriber.model.set("stepsCount", 10);
    sernacTranscriber.model.set("currentStep", 5);

    sernacTranscriber.nextStep();

    expect(sernacTranscriber.model.get("currentStep")).toEqual(6);
  });

  it("should allow to decrease the step counter", function() {
    sernacTranscriber.model.set("stepsCount", 10);
    sernacTranscriber.model.set("currentStep", 5);

    sernacTranscriber.previousStep();

    expect(sernacTranscriber.model.get("currentStep")).toEqual(4);
  });

  it("should return back to zero after the next step", function() {
    sernacTranscriber.model.set("stepsCount", 5);
    sernacTranscriber.model.set("currentStep", 5);

    sernacTranscriber.nextStep();

    expect(sernacTranscriber.model.get("currentStep")).toEqual(0);
  });

  it("should go to the last step", function() {
    sernacTranscriber.model.set("stepsCount", 5);
    sernacTranscriber.model.set("currentStep", 0);

    sernacTranscriber.previousStep();

    expect(sernacTranscriber.model.get("currentStep")).toEqual(5);
  });

  it("should return the width of the input field", function() {

    sernacTranscriber.model.set("currentStep", 0);

    expect(sernacTranscriber.transcriberWidget.model.get("inputWidth")).toEqual(540);
  });

  it("should update the class of the widget when the step changes", function() {

    sernacTranscriber.model.set("currentStep", 2);
    expect(sernacTranscriber.transcriberWidget.$el.find(".input_field").hasClass("location")).toEqual(true);
    expect(sernacTranscriber.transcriberWidget.$el.find(".input_field").hasClass("date")).not.toEqual(true);

    sernacTranscriber.nextStep();
    expect(sernacTranscriber.transcriberWidget.$el.find(".input_field").hasClass("date")).toEqual(true);
    expect(sernacTranscriber.transcriberWidget.$el.find(".input_field").hasClass("text")).not.toEqual(true);

  });

  it("should update the type of input field when the step changes", function() {

    sernacTranscriber.model.set("currentStep", 2);
    expect(sernacTranscriber.transcriberWidget.model.get("type")).toEqual("location");

    sernacTranscriber.nextStep();
    expect(sernacTranscriber.transcriberWidget.model.get("type")).toEqual("date");

  });

  it("should update the placeholder in the widget when the step changes", function() {

    sernacTranscriber.model.set("currentStep", 0);
    sernacTranscriber.nextStep();

    expect(sernacTranscriber.transcriberWidget.$input.attr("placeholder")).toEqual("Species");
  });

  it("should have a link to see an example", function() {

    sernacTranscriber.model.set("currentStep", 0);

    waits(450);

    runs(function() {
      expect(sernacTranscriber.helper.$exampleLink.text()).toEqual("See example");
      expect(sernacTranscriber.helper.$el.find('.example').length).toEqual(1);
    });


  });

  it("should change the title in the helper when the step changes", function() {

    sernacTranscriber.model.set("currentStep", 0);

    sernacTranscriber.nextStep();

    waits(450);

    runs(function() {
      expect(sernacTranscriber.helper.$el.find(".title").text()).toEqual("Genus & species");
      expect(sernacTranscriber.helper.$el.find(".description").text()).toEqual("2 or 3 latin words in the first line, next to the margin. See example");

      sernacTranscriber.previousStep();

      waits(450);

      runs(function() {
        expect(sernacTranscriber.helper.$el.find(".title").text()).toEqual("Record code");
        expect(sernacTranscriber.helper.$el.find(".description").text()).toEqual("It's a 4 digit number located at the top right of the page. See example");
      });
    });

  });

  it("should save a transcription when the $okButton is clicked", function() {

    sernacTranscriber.model.set("currentStep", 0);
    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.launcher.$startButton.removeClass("disabled");

    sernacTranscriber.transcriberWidget.$input.val("Hi!");
    sernacTranscriber.transcriberWidget.$okButton.click();

    expect(sernacTranscriber.transcriptions.length).toEqual(1);
    expect(sernacTranscriber.transcriptions.at(0).get("value")).toEqual("Hi!");

  });

  it("should override a transcription", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.launcher.$startButton.removeClass("disabled");

    sernacTranscriber.model.set("currentStep", 0);

    sernacTranscriber.transcriberWidget.$input.val("Helo");
    sernacTranscriber.transcriberWidget.$okButton.click();

    sernacTranscriber.model.set("currentStep", 0);

    sernacTranscriber.transcriberWidget.$input.val("Hello");
    sernacTranscriber.transcriberWidget.$okButton.click();

    expect(sernacTranscriber.transcriptions.length).toEqual(1);
    expect(sernacTranscriber.transcriptions.at(0).get("value")).toEqual("Hello");

  });


  it("should clean the input field when the $okButton is clicked", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.launcher.$startButton.removeClass("disabled");

    sernacTranscriber.transcriberWidget.$input.val("Hi!");
    sernacTranscriber.transcriberWidget.$okButton.click();

    expect(sernacTranscriber.transcriberWidget.$input.val()).toEqual("");
  });

  it("should move to the next step when $okButton is clicked", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.launcher.$startButton.removeClass("disabled");
    sernacTranscriber.launcher.$startButton.click();

    sernacTranscriber.transcriberWidget.$input.val("Hi!");
    sernacTranscriber.transcriberWidget.$okButton.click();

    expect(sernacTranscriber.model.get("currentStep")).toEqual(1);
  });


  });


/*
* common.ui.view.HerbariumTranscriber
*
*/
describe("common.ui.view.HerbariumTranscriber", function() {

  var sernacTranscriber;

  beforeEach(function() {

    sernacTranscriber = new nfn.ui.view.HerbariumTranscriber({
      model: new nfn.ui.model.Herbarium(),
      widgetTemplate: "<strong>hola</strong>"
    });

  });

  afterEach(function() {

    sernacTranscriber.clean();

  });

  it("should have a log", function() {
    expect(sernacTranscriber.transcriptions).toBeDefined();
  });

  it("should have a collection of photos", function() {
    expect(sernacTranscriber.photos).toBeDefined();
  });

  it("should allow to add photos", function() {

    var
    photo1 = new nfn.ui.model.Photo();
    photo2 = new nfn.ui.model.Photo();
    photo3 = new nfn.ui.model.Photo();

    sernacTranscriber.photos.push(photo1);
    sernacTranscriber.photos.push(photo2);
    sernacTranscriber.photos.push(photo3);

    expect(sernacTranscriber.photos.length).toEqual(3);

  });

  it("should return the type of the transcriber", function() {

    expect(sernacTranscriber.model.get("type")).toEqual("sernac");

  });

  it("should have the right class for each transcriber type", function() {

    expect(sernacTranscriber.$el.hasClass('sernac')).toEqual(true);

  });

  it("should create a placeholder for the photos", function() {

    expect(sernacTranscriber.$el.find(".photos").length).toEqual(1);

  });

  it("should allow to load a photo", function() {

    var url = "http://24.media.tumblr.com/tumblr_m98dbeEnhw1reyyato1_1280.png";
    sernacTranscriber.addPhoto(url);
    expect(sernacTranscriber.photos.length).toEqual(1);

  });

  it("should append a photo to .photos", function() {

    sernacTranscriber.addPhoto("http://nfn.s3.amazonaws.com/transcriber_sernac_01.png");
    sernacTranscriber.addPhoto("http://nfn.s3.amazonaws.com/transcriber_sernac_02.png");

    sernacTranscriber.showPhoto(0);

    waits(10000);

    runs(function() {
      expect(sernacTranscriber.$el.find("img").length).toEqual(1);
    });

  });

  it("should add and show a photo", function() {

    var url  = "http://nfn.s3.amazonaws.com/transcriber_sernac_01.png";

    sernacTranscriber.loadPhoto(url);

    waits(5000);

    runs(function() {
      expect(sernacTranscriber.$el.find("img").length).toEqual(1);
      expect(sernacTranscriber.$el.find("img").attr("src")).toEqual(url);
    });

  });

  it("should append another photo", function() {

    var url  = "http://nfn.s3.amazonaws.com/transcriber_sernac_01.png";
    var url2 = "http://nfn.s3.amazonaws.com/transcriber_sernac_02.png";

    sernacTranscriber.addPhoto(url);
    sernacTranscriber.addPhoto(url2);

    sernacTranscriber.showPhoto(0);

    waits(5000);

    runs(function() {
      expect(sernacTranscriber.$el.find("img").length).toEqual(1);
      expect(sernacTranscriber.$el.find("img").attr("src")).toEqual(url);

      sernacTranscriber.showPhoto(1);

      waits(5000);

      runs(function() {
        expect(sernacTranscriber.$el.find("img").length).toEqual(1);
        expect(sernacTranscriber.$el.find("img").attr("src")).toEqual(url2);
        expect(sernacTranscriber.$el.find("img").attr("src")).not.toEqual(url);
      });

    });

  });

  it("should hide the magnifier, helper, transcriber and backdrop when the user cliks in the finish button of the finish tooltip", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    sernacTranscriber.transcriberWidget.$finishButton.click();

    waits(350);

    runs(function() {

    sernacTranscriber.transcriberWidget.finishTooltip.$mainButton.click();

    waits(500);

    runs(function() {
      expect(sernacTranscriber.backdrop.model.get("hidden")).toEqual(true);
      expect(sernacTranscriber.helper.model.get("hidden")).toEqual(true);
      expect(sernacTranscriber.magnifier.model.get("hidden")).toEqual(true);
      expect(sernacTranscriber.transcriberWidget.model.get("hidden")).toEqual(true);
    });
    });

  });

  it("should increase the record number", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    sernacTranscriber.transcriberWidget.$finishButton.click();

    waits(350);

    runs(function() {
      sernacTranscriber.transcriberWidget.finishTooltip.$mainButton.click();

      expect(sernacTranscriber.model.get("currentRecord")).toEqual(1);
    });

  });

  it("should close the tooltip when the user press the esc key", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    sernacTranscriber.transcriberWidget.$skip.click();

    $(document).trigger({ type: 'keyup', which: "27" });

    expect(sernacTranscriber.transcriberWidget.$el.find(".tooltip").length).toEqual(0);
    expect(sernacTranscriber.transcriberWidget.tooltip).not.toBeDefined();

  });

  it("should create a tooltip when the user cliks in the skip button", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    sernacTranscriber.transcriberWidget.$skip.click();

    expect(sernacTranscriber.transcriberWidget.$el.find(".tooltip").length).toEqual(1);
    expect(sernacTranscriber.transcriberWidget.tooltip.model.get("hidden")).toEqual(false);

  });

  it("shouldn't create another tooltip when the user cliks in the skip button for the second time", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    sernacTranscriber.transcriberWidget.$skip.click();
    sernacTranscriber.transcriberWidget.$skip.click();

    expect(sernacTranscriber.transcriberWidget.$el.find(".tooltip").length).toEqual(1);

  });

  it("should close the tooltip when the user clicks in the close button (secondary)", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    sernacTranscriber.transcriberWidget.$skip.click();
    sernacTranscriber.transcriberWidget.tooltip.$secondaryButton.click();

    expect(sernacTranscriber.transcriberWidget.$el.find(".tooltip").length).toEqual(0);
    expect(sernacTranscriber.transcriberWidget.tooltip).not.toBeDefined();

  });

  it("should skip the field when the user clicks in the skip button (main) of the tooltip", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");
    sernacTranscriber.model.set("currentStep", 0);

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    sernacTranscriber.transcriberWidget.$skip.click();
    sernacTranscriber.transcriberWidget.tooltip.$mainButton.click();

    expect(sernacTranscriber.model.get("currentStep")).toEqual(1);

  });

});

/*
* common.ui.view.DoublePageTranscriber
*
*/
describe("common.ui.view.DoublePageTranscriber", function() {

  var transcriber;

  beforeEach(function() {

    transcriber = new nfn.ui.view.DoublePage({
      model: new nfn.ui.model.DoublePage(),
      widgetTemplate: "<strong>hola</strong>"
    });

    var stub = jasmine.createSpy('stub');

    stub.disableMouseWheel = function() { };
    stub.enableMouseWheel  = function() { };
    stub.scrollToX         = function() { };
    stub.scrollToY         = function() { };
    stub.scrollTo          = function() { };

    transcriber.api = stub;

  });

  afterEach(function() {

    transcriber.clean();

  });

  it("should have a transcriber widget", function() {
    expect(transcriber.transcriberWidget).toBeDefined();
  });

  it("should have a backdrop", function() {
    expect(transcriber.backdrop).toBeDefined();
  });

  it("should have an status bar", function() {
    expect(transcriber.statusBar).toBeDefined();
  });

  it("should have an spinner", function() {
    expect(transcriber.spinner).toBeDefined();
  });

  it("should have a log", function() {
    expect(transcriber.transcriptions).toBeDefined();
  });

  it("should have a guide", function() {
    expect(transcriber.guide).toBeDefined();
  });

  it("should have a current record number", function() {
    expect(transcriber.model.get("currentRecord")).toBeDefined();
  });

  it("should have a current step number", function() {
    expect(transcriber.model.get("currentStep")).toBeDefined();
  });

  it("should have a number of steps", function() {
    expect(transcriber.model.get("stepsCount")).toBeDefined();
  });

  it("should have a collection of photos", function() {
    expect(transcriber.photos).toBeDefined();
  });

  it("should allow to add photos", function() {

    var
    photo1 = new nfn.ui.model.Photo();
    photo2 = new nfn.ui.model.Photo();
    photo3 = new nfn.ui.model.Photo();

    transcriber.photos.push(photo1);
    transcriber.photos.push(photo2);
    transcriber.photos.push(photo3);

    expect(transcriber.photos.length).toEqual(3);

  });

  it("should return the type of the transcriber", function() {

    expect(transcriber.model.get("type")).toEqual("birds");

  });

  it("should have the right class for each transcriber type", function() {

    expect(transcriber.$el.hasClass('birds')).toEqual(true);

  });

  it("should create a placeholder for the photos", function() {

    expect(transcriber.$el.find(".photos").length).toEqual(1);

  });

  it("should allow to load a photo", function() {

    var url = "http://24.media.tumblr.com/tumblr_m98dbeEnhw1reyyato1_1280.png";
    transcriber.addPhoto(url);
    expect(transcriber.photos.length).toEqual(1);

  });

  it("should append a photo to .photos", function() {

    transcriber.addPhoto("http://nfn.s3.amazonaws.com/transcriber_sernac_01.png");
    transcriber.addPhoto("http://nfn.s3.amazonaws.com/transcriber_sernac_02.png");

    transcriber.showPhoto(0);

    waits(5100);

    runs(function() {
      expect(transcriber.$el.find("img").length).toEqual(1);
    });

  });

  it("should add and show a photo", function() {

    var url  = "http://nfn.s3.amazonaws.com/transcriber_sernac_01.png";

    transcriber.loadPhoto(url);

    waits(5000);

    runs(function() {
      expect(transcriber.$el.find("img").length).toEqual(1);
      expect(transcriber.$el.find("img").attr("src")).toEqual(url);
    });

  });

  it("should append another photo", function() {

    var url  = "http://nfn.s3.amazonaws.com/transcriber_sernac_01.png";
    var url2 = "http://nfn.s3.amazonaws.com/transcriber_sernac_02.png";

    transcriber.addPhoto(url);
    transcriber.addPhoto(url2);

    transcriber.showPhoto(0);

    waits(5000);

    runs(function() {
      expect(transcriber.$el.find("img").length).toEqual(1);
      expect(transcriber.$el.find("img").attr("src")).toEqual(url);

      transcriber.showPhoto(1);

      waits(5000);

      runs(function() {
        expect(transcriber.$el.find("img").length).toEqual(1);
        expect(transcriber.$el.find("img").attr("src")).toEqual(url2);
        expect(transcriber.$el.find("img").attr("src")).not.toEqual(url);
      });

    });

  });

  it("should set currentStep to 0 after the transcriber has started", function() {

    transcriber.startTranscribing();

    expect(transcriber.model.get("currentStep")).toEqual(0);

  });

  it("should allow to increase the record counter", function() {

    transcriber.model.set("currentRecord", 3);
    transcriber.nextRecord();

    expect(transcriber.model.get("currentRecord")).toEqual(4);

  });

  it("should save a transcription when the $okButton is clicked", function() {

    transcriber.model.set("currentStep", 0);

    transcriber.transcriberWidget.$input.val("Hi!");
    transcriber.transcriberWidget.$okButton.click();

    transcriber.transcriberWidget.$input.val("Bye!");
    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.transcriptions.length).toEqual(2);
    expect(transcriber.transcriptions.at(0).get("value")).toEqual("Hi!");
    expect(transcriber.transcriptions.at(1).get("value")).toEqual("Bye!");

  });

  it("should return the number of fields left to transcribe", function() {

    transcriber.model.set("currentStep", 0);

    transcriber.transcriberWidget.$input.val("Hi!");
    transcriber.transcriberWidget.$okButton.click();

    transcriber.transcriberWidget.$input.val("Bye!");
    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.getPendingFieldCount()).toEqual(6);

  });

  it("should change the record counter in the status bar when updating the currentRecord", function() {

    transcriber.model.set("currentRecord", 3);
    transcriber.nextRecord();

    expect(transcriber.model.get("currentRecord")).toEqual(4);

  });

  it("should allow to decrease the record counter", function() {
    transcriber.model.set("currentRecord", 3);
    transcriber.previousRecord();

    expect(transcriber.model.get("currentRecord")).toEqual(2);
  });

  it("should allow to increase the step counter", function() {
    transcriber.model.set("stepsCount", 10);
    transcriber.model.set("currentStep", 5);

    transcriber.nextStep();

    expect(transcriber.model.get("currentStep")).toEqual(6);
  });

  it("should allow to decrease the step counter", function() {
    transcriber.model.set("stepsCount", 10);
    transcriber.model.set("currentStep", 5);

    transcriber.previousStep();

    expect(transcriber.model.get("currentStep")).toEqual(4);
  });

  it("should return back to zero after the next step", function() {
    transcriber.model.set("stepsCount", 5);
    transcriber.model.set("currentStep", 5);

    transcriber.nextStep();

    expect(transcriber.model.get("currentStep")).toEqual(0);
  });

  it("should go to the last step", function() {
    transcriber.model.set("stepsCount", 5);
    transcriber.model.set("currentStep", 0);

    transcriber.previousStep();

    expect(transcriber.model.get("currentStep")).toEqual(5);
  });

  it("should update the widget title the launcher after the magnifier is added", function() {

    transcriber.startTranscribing();

    waits(250);

    runs(function () {
      expect(transcriber.transcriberWidget.$title.text()).toEqual("Code");
    });

  });

  it("should update the widget description the widget after start transcribing", function() {

    transcriber.startTranscribing();

    waits(350);

    runs(function () {
      expect(transcriber.transcriberWidget.$description.html()).toEqual('It\'s a 4 digit number located at the top right of the page. <a href="#" class="example" data-src="http://placehold.it/180x100">See example</a> | <a href="#" class="skip">Skip field</a>');
    });

  });

  it("should clear the widget content when the step changes", function() {

    transcriber.model.set("currentStep", 1);
    transcriber.transcriberWidget.$input.html('Hola');

    transcriber.nextStep();

    expect(transcriber.transcriberWidget.$input.text()).toEqual('');

  });

  it("should update the class of the widget when the step changes", function() {

    transcriber.model.set("currentStep", 2);
    expect(transcriber.transcriberWidget.$el.find(".input_field").hasClass("location")).toEqual(true);
    expect(transcriber.transcriberWidget.$el.find(".input_field").hasClass("text")).not.toEqual(true);

    transcriber.nextStep();
    expect(transcriber.transcriberWidget.$el.find(".input_field").hasClass("text")).toEqual(true);
    expect(transcriber.transcriberWidget.$el.find(".input_field").hasClass("location")).not.toEqual(true);

  });

  it("should update the type of input field when the step changes", function() {

    transcriber.model.set("currentStep", 2);
    expect(transcriber.transcriberWidget.model.get("type")).toEqual("location");

    transcriber.nextStep();
    expect(transcriber.transcriberWidget.model.get("type")).toEqual("text");

  });

  it("should update the placeholder in the widget when the step changes", function() {

    transcriber.model.set("currentStep", 0);
    transcriber.nextStep();

    expect(transcriber.transcriberWidget.$input.attr("placeholder")).toEqual("Species");

  });

  it("should move to the next step when $okButton is clicked", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.startTranscribing();
    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.model.get("currentStep")).toEqual(1);

  });

  it("should show the step information", function() {

    transcriber.model.set("stepsCount", 10);
    transcriber.model.set("currentStep", 5);

    expect(transcriber.transcriberWidget.$step.text()).toEqual("6/10");

    transcriber.model.set("currentStep", 2);
    expect(transcriber.transcriberWidget.$step.text()).toEqual("3/10");

  });

  /*it("should show the step counter after the user clicks in the startButton", function() {

    transcriber.transcriberWidget.$startButton.click();

    waits(350);

    runs(function() {

      expect(transcriber.transcriberWidget.$step).toBeHidden();

    });

  });*/

  it("should skip the field when the user clicks in the skip button (main) of the tooltip", function() {

    transcriber.transcriberWidget.$startButton.click();

    waits(250);

    runs(function() {

      transcriber.transcriberWidget.$skipLink.click();
      transcriber.transcriberWidget.skipTooltip.$mainButton.click();

      expect(transcriber.model.get("currentStep")).toEqual(1);

    });

  });

  it("the mousewheel should be enabled by default", function() {

    expect(transcriber.model.get("mousewheel_enabled")).toEqual(true);

  });

  it("should enable the mouswheel when the user click the finish button", function() {

    transcriber.transcriberWidget.$startButton.click();

    waits(250);

    runs(function() {

      transcriber.transcriberWidget.$finishButton.click();

      waits(350);

      runs(function() {
        transcriber.transcriberWidget.finishTooltip.$mainButton.click();
        expect(transcriber.model.get("mousewheel_enabled")).toEqual(true);
      });

    });

  });

  it("should hide the finish button when the user click the finish button", function() {

    transcriber.transcriberWidget.$startButton.click();
    transcriber.transcriberWidget.$finishButton.click();

    waits(350);

    runs(function() {
      transcriber.transcriberWidget.finishTooltip.$mainButton.click();

      waits(350);

      runs(function() {
        expect(transcriber.transcriberWidget.$finishButton).toBeHidden();
        expect(transcriber.transcriberWidget.$startButton).toBeVisible();
      });

    });

  });

  it("should hide the input field when the user click the finish button", function() {

    transcriber.transcriberWidget.$startButton.click();
    transcriber.transcriberWidget.$finishButton.click();

    waits(350);

    runs(function() {
      transcriber.transcriberWidget.finishTooltip.$mainButton.click();

      waits(350);

      runs(function() {
        expect(transcriber.transcriberWidget.$input).toBeHidden();
      });

    });

  });

  it("should enable the dragging and resizing when the user click the finish button", function() {

    transcriber.transcriberWidget.$startButton.click();
    transcriber.transcriberWidget.$finishButton.click();

    waits(350);

    runs(function() {
      transcriber.transcriberWidget.finishTooltip.$mainButton.click();

      waits(350);

      runs(function() {
        expect(transcriber.transcriberWidget.model.get("draggable")).toEqual(true);
        expect(transcriber.transcriberWidget.model.get("resizable")).toEqual(true);
      });

    });

  });

  it("should hide the step counter when the user click the finish button", function() {

    transcriber.transcriberWidget.$startButton.click();
    transcriber.transcriberWidget.$finishButton.click();

    waits(350);

    runs(function() {
      transcriber.transcriberWidget.finishTooltip.$mainButton.click();

      waits(350);

      runs(function() {
        expect(transcriber.transcriberWidget.$step).toBeHidden();
      });

    });

  });

  it("should disable the mouswheel when the user click the start button", function() {

    transcriber.transcriberWidget.$startButton.click();

    expect(transcriber.model.get("mousewheel_enabled")).toEqual(false);

  });

  it("should hide the step description when the user click the finish button", function() {


    transcriber.transcriberWidget.$startButton.click();
    transcriber.transcriberWidget.$finishButton.click();
    transcriber.model.set("currentStep", 4);

    waits(350);

    runs(function() {
      transcriber.transcriberWidget.finishTooltip.$mainButton.click();

      waits(350);

      runs(function() {
        expect(transcriber.transcriberWidget.$description.text()).toEqual("Drag & resize the viewer to the record you want to transcribe.");
      });

    });

  });
  it("should reset the step counter when the user click the finish button", function() {


    transcriber.transcriberWidget.$startButton.click();
    transcriber.transcriberWidget.$finishButton.click();
    transcriber.model.set("currentStep", 4);

    waits(350);

    runs(function() {
      transcriber.transcriberWidget.finishTooltip.$mainButton.click();

      waits(350);

      runs(function() {
        expect(transcriber.model.get("currentStep")).toEqual(0);
        expect(transcriber.transcriberWidget.$step.text()).toEqual("1/8");
      });

    });

  });


  it("should increase the record counter when the user click the finish button", function() {

    transcriber.transcriberWidget.$startButton.click();

    waits(250);

    runs(function() {

      transcriber.transcriberWidget.$finishButton.click();

      waits(350);

      runs(function() {
        transcriber.transcriberWidget.finishTooltip.$mainButton.click();
        expect(transcriber.model.get("currentRecord")).toEqual(1);
      });

    });

  });

});

/*
* common.ui.view.BirdsWidget
*
*/
describe("common.ui.view.BirdsWidget", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.BirdsWidget({
      model: new nfn.ui.model.BirdsWidget(),
      template: $("#transcriber-birds-widget-template").html()
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

  it("should have an ok button", function() {

    expect(widget.$okButton).toEqual(widget.$el.find(".btn.ok"));
    expect(widget.$el.find('.btn.ok')).toBeVisible();

  });

  it("should have a title", function() {

    expect(widget.$title).toEqual(widget.$el.find(".title"));
    expect(widget.$el.find('.title')).toBeVisible();

  });

  it("should have a description", function() {

    expect(widget.$description).toEqual(widget.$el.find(".description"));
    expect(widget.$el.find('.description')).toBeVisible();

  });

  it("should have a step counter", function() {

    expect(widget.$step).toEqual(widget.$el.find('.step'));

  });

  it("should have a $startButton", function() {

    expect(widget.$el.find(".btn.start")).toBeVisible();
    expect(widget.$startButton).toEqual(widget.$el.find(".btn.start"));

  });

  it("should have a $finishButton", function() {

    expect(widget.$el.find(".btn.finish")).toBeVisible();
    expect(widget.$finishButton).toEqual(widget.$el.find(".btn.finish"));

  });

  it("should have an input field and it should be hidden", function() {

    expect(widget.$input).toEqual(widget.$el.find('.input_field input[type="text"]'));
    expect(widget.$el.find('.input_field input[type="text"]')).toBeVisible();
    expect(widget.$input.parent().hasClass("hidden")).toEqual(true);
    expect(widget.model.get("input_hidden")).toEqual(true);

  });

  it("should have a $description", function() {

    expect(widget.$el.find(".description")).toBeVisible();
    expect(widget.$description).toEqual(widget.$el.find(".description"));

  });

  it("should call to startTranscribing method when the user clicks the $startButton", function() {

    spyOn(widget.parent, 'startTranscribing');

    widget.$startButton.click();

    expect(widget.parent.startTranscribing).toHaveBeenCalled();

  });

  it("should show the input field when the user clicks the $startButton", function() {

    widget.$startButton.click();

    waits(300);

    runs(function() {
      expect(widget.$input).toEqual(widget.$el.find('.input_field input[type="text"]'));
      expect(widget.$el.find('.input_field input[type="text"]')).toBeVisible();
      expect(widget.$input.parent().hasClass("hidden")).toEqual(false);
    });

  });

  it("should hide the $startButton and show the finish button when the user clicks the $startButton", function() {

    widget.$startButton.click();

    waits(300);

    runs(function() {
      expect(widget.$startButton).toBeHidden();
      expect(widget.$finishButton).toBeVisible();

      expect(widget.model.get("start_hidden")).toEqual(true);
      expect(widget.model.get("finish_hidden")).toEqual(false);
    });

  });

  it("should allow to change the title", function() {

    widget.model.set("title", "This is a test title");

    waits(300);

    runs(function() {
      expect(widget.$title.text()).toEqual("This is a test title");
    });

  });

  it("should allow to change the description", function() {

    widget.model.set("description", 'This is a test description <a href="#" data-src="#">See example.</a>');

    waits(300);

    runs(function() {
      expect(widget.$description.html()).toEqual('This is a test description <a href="#" data-src="#">See example.</a>');
    });

  });

  it("should allow to show the input field", function() {

    widget.showInput();

    waits(300);

    runs(function() {
      expect(widget.$input.parent().hasClass("hidden")).toEqual(false);
      expect(widget.model.get("input_hidden")).toEqual(false);
    });

  });

  it("should allow to hide the input field", function() {

    widget.hideInput();

    waits(300);

    runs(function() {
      expect(widget.$input.parent().hasClass("hidden")).toEqual(true);
      expect(widget.model.get("input_hidden")).toEqual(true);
    });

  });

  it("should return the value of the text input field", function() {

    widget.model.set("type", "text");
    widget.$input.val('hola');

    expect(widget.getValue()).toEqual("hola");

  });

  it("should return the value of the date input field", function() {

    widget.model.set("type", "date");
    widget.$el.find(".month").val('2');
    widget.$el.find(".day").val('1');
    widget.$el.find(".year").val('2012');

    expect(widget.getValue()).toEqual("2/1/2012");

  });


  it("should allow clearing the value of the text input field", function() {

    widget.model.set("type", "text");
    widget.$input.val('hola');

    expect(widget.getValue()).toEqual("hola");

    widget.clearInput();

    expect(widget.getValue()).toEqual("");

  });


  it("should fire an event when the user clicks in the finish button", function() {

   var spy = spyOn(widget, 'showFinishTooltip');

    widget.delegateEvents();
    widget.$finishButton.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should fire a showSkipTooltip event when the user clicks in the skip link", function() {

    widget.hideStartButton();

    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a> | <a href="#" class="skip">Skip this field</a>');
      widget.updateDescription();

      var spy = spyOn(widget, 'showSkipTooltip');

      widget.delegateEvents();

      waits(500);

      runs(function() {

        widget.$skipLink.click();
        expect(spy).toHaveBeenCalled();

      });

  });

  it("should fire a showExample event when the user clicks in the example link", function() {

    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a>');
      widget.updateDescription();

      var spy = spyOn(widget, 'showExample');

      widget.delegateEvents();
      widget.$startButton.click();

      waits(300);

      runs(function() {
        widget.$exampleLink.click();
        expect(spy).toHaveBeenCalled();
      });

  });

  it("should create a tooltip when the user cliks in the example link", function() {

    widget.$startButton.click();
    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a>');

      waits(250);

      runs(function() {
        widget.$exampleLink.click();

        expect(widget.$el.find(".tooltip").length).toEqual(1);
        expect(widget.exampleTooltip.model.get("hidden")).toEqual(false);
      });

  });

  it("should create a tooltip when the user cliks in the skip link", function() {

    widget.$startButton.click();
    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a> | <a href="#" class="skip">Skip</a>');

      waits(250);

      runs(function() {
        widget.$skipLink.click();

        expect(widget.$el.find(".tooltip").length).toEqual(1);
        expect(widget.skipTooltip.model.get("hidden")).toEqual(false);
      });

  });

  it("should create a finish tooltip when the user cliks in the finish button", function() {

    widget.$startButton.click();

    waits(250);

    runs(function() {
      widget.$finishButton.click();

      expect(widget.finishTooltip.$el).toBeVisible();
      expect(widget.finishTooltip.model.get("hidden")).toEqual(false);

    });

  });

  it("should close the finish tooltip when the user clicks the main button", function() {

    widget.$startButton.click();

    waits(250);

    runs(function() {
      widget.$finishButton.click();

      waits(250);

      runs(function() {
        widget.finishTooltip.$el.find(".btn.main").click();
        expect(widget.finishTooltip).toEqual(null);
      });

    });

  });

  it("should close the finish tooltip when the user clicks the secondary button", function() {

    widget.$startButton.click();

    waits(250);

    runs(function() {
      widget.$finishButton.click();

      waits(250);

      runs(function() {
        widget.finishTooltip.$el.find(".btn.secondary").click();
        expect(widget.finishTooltip).toEqual(null);
      });

    });

  });

  it("should fire a start event when the user clicks in the start button", function() {

    var spy = spyOn(widget, 'start');

    widget.delegateEvents();

    widget.$startButton.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should close the previously open tooltip when opening a new one", function() {

    widget.$startButton.click();
    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a> | <a href="#" class="skip">Skip</a>');

    widget.updateDescription();

      waits(250);

      runs(function() {

        widget.$skipLink.click();

        expect(widget.skipTooltip.$el).toBeVisible();

        widget.$finishButton.click();

        waits(250);

        runs(function() {

          expect(widget.skipTooltip).toEqual(null);
          expect(widget.finishTooltip.$el).toBeVisible();

        });

      });

  });

  it("should close the example tooltip when the user clicks in the ok button", function() {

    widget.$startButton.click();

    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a> | <a href="#" class="skip">Skip</a>');
    widget.updateDescription();

    waits(350);

    runs(function() {

      widget.$exampleLink.click();

      waits(350);

      runs(function() {

        expect(widget.$el.find(".tooltip").length).toEqual(1);
        expect(widget.exampleTooltip).toBeDefined();

        waits(350);

        runs(function() {

          widget.$okButton.click();

          expect(widget.$el.find(".tooltip").length).toEqual(0);
          expect(widget.exampleTooltip).not.toBeDefined();

        });

      });

    });

  });
  it("should close the skip tooltip when the user clicks in the ok button", function() {

    widget.$startButton.click();

    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a> | <a href="#" class="skip">Skip</a>');
    widget.updateDescription();

    waits(350);

    runs(function() {

      widget.$skipLink.click();

      waits(350);

      runs(function() {

        expect(widget.$el.find(".tooltip").length).toEqual(1);
        expect(widget.skipTooltip).toBeDefined();

        waits(350);

        runs(function() {

          widget.$okButton.click();

          expect(widget.$el.find(".tooltip").length).toEqual(0);
          expect(widget.skipTooltip).not.toBeDefined();

        });

      });

    });

  });

  it("should close the finish tooltip when the user clicks in the ok button", function() {

    widget.$finishButton.click();

    expect(widget.$el.find(".tooltip").length).toEqual(1);
    expect(widget.finishTooltip).toBeDefined();

    waits(350);

    runs(function() {

      widget.$okButton.click();

      expect(widget.$el.find(".tooltip").length).toEqual(0);
      expect(widget.finishTooltip).not.toBeDefined();
    });

  });


});

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

/*
* common.ui.view.HerbariumWidget
*
*/
describe("common.ui.view.HerbariumWidget", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.HerbariumWidget({
      model: new nfn.ui.model.HerbariumWidget(),
      template: $("#transcriber-herbarium-widget-template").html()
    });

    var Mock = function () {};

    Mock.finish = function() { return true; };

    widget.parent = Mock;

  });

  afterEach(function() {
    widget.clean();
  });

  it("should create a finish tooltip when the user cliks in the finish button", function() {

    widget.render();

    waits(250);

    runs(function() {
      widget.$finishButton.click();

      expect(widget.finishTooltip).toBeDefined();
      expect(widget.finishTooltip.model.get("hidden")).toEqual(false);
      expect(widget.finishTooltip.$el.length).toEqual(1);

    });

  });

  it("should allow to disable the ok button", function() {

    widget.render();

    widget.disableOk();

    expect(widget.$okButton.hasClass("disabled")).toEqual(true);

  });

  it("should allow to enable the ok button", function() {

    widget.render();

    widget.$okButton.addClass("disabled");

    widget.enableOk();

    expect(widget.$okButton.hasClass("disabled")).toEqual(false);

  });

  it("should have an ok button", function() {
    widget.render();
    expect(widget.$okButton).toEqual(widget.$el.find(".btn.ok"));
    expect(widget.$el.find('.btn.ok').length).toEqual(1);
  });

  it("should have a skip link", function() {
    widget.render();
    expect(widget.$skip).toEqual(widget.$el.find(".skip"));
    expect(widget.$el.find('.skip').length).toEqual(1);
  });

  it("should have an input field", function() {
    widget.render();
    expect(widget.$input).toEqual(widget.$el.find('.input_field input[type="text"]'));
    expect(widget.$el.find('.input_field input[type="text"]').length).toEqual(1);
  });

  it("should clear the value of the text input field", function() {
    widget.render();
    widget.model.set("type", "text");
    widget.$input.val('hola');

    expect(widget.getValue()).toEqual("hola");

    widget.clearInput();
    expect(widget.getValue()).toEqual("");
  });

  it("should clear the value of the date input field", function() {
    widget.render();
    widget.model.set("type", "date");
    widget.$el.find(".month").val('2');
    widget.$el.find(".day").val('1');
    widget.$el.find(".year").val('2012');

    expect(widget.getValue()).toEqual("2/1/2012");

    widget.clearInput();
    expect(widget.getValue()).toEqual("");
  });

  it("should return the value of the text input field", function() {
    widget.render();
    widget.model.set("type", "text");
    widget.$input.val('hola');

    expect(widget.getValue()).toEqual("hola");
  });

  it("should return the value of the date input field", function() {
    widget.render();
    widget.model.set("type", "date");
    widget.$el.find(".month").val('2');
    widget.$el.find(".day").val('1');
    widget.$el.find(".year").val('2012');

    expect(widget.getValue()).toEqual("2/1/2012");
  });

  it("should have a step counter", function() {
    widget.render();
    expect(widget.$step).toEqual(widget.$el.find('.step'));
    expect(widget.$el.find(".step").length).toEqual(1);
  });

  it("should have a button to finish the record", function() {
    widget.render();
    expect(widget.$finishButton).toEqual(widget.$el.find('.btn.finish'));
    expect(widget.$el.find(".btn.finish").length).toEqual(1);
  });

  it("should fire an event when the user clicks in the ok button", function() {
    widget.render();

    var spy = spyOn(widget, 'ok');

    widget.delegateEvents();
    widget.$okButton.click();

    expect(spy).toHaveBeenCalled();
  });

  it("should fire an event when the user clicks in the skip button", function() {

    widget.render();

    var spy = spyOn(widget, 'showSkipPane');

    widget.delegateEvents();
    widget.$skip.click();

    expect(spy).toHaveBeenCalled();
  });

  it("should fire a showFinishTooltip event when the user clicks in the finish button", function() {

    widget.render();

    var spy = spyOn(widget, 'showFinishTooltip');

    widget.delegateEvents();
    widget.$finishButton.click();

    expect(spy).toHaveBeenCalled();

  });

});

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

