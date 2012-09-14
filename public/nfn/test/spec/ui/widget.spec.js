/*
* common.ui.view.DoubleTranscriber
*
*/
describe("common.ui.view.DoubleTranscriber", function() {

  var transcriber;

  beforeEach(function() {

    transcriber = new nfn.ui.view.DoublePage({
      model: new nfn.ui.model.DoublePage(),
      widgetTemplate: '<a href="#" class="button save">Save</a>'
    });

  });

  afterEach(function() {

    transcriber.clean();

  });

  it("should have a widget", function() {
    expect(transcriber.widget).toBeTruthy();
  });

  it("should create a widget on start", function() {

    var $widget = $(transcriber.widget.$el);
    expect($widget.length).toEqual(1);

  });


});

/*
 * common.ui.view.Widget
 *
 */
describe("common.ui.view.Widget", function() {

  var transcriber;

  beforeEach(function() {

    transcriber = new nfn.ui.view.DoublePage({
      model: new nfn.ui.model.DoublePage(),
      widgetTemplate: '<a href="#" class="button save">Save</a>'
    });

  });

  afterEach(function() {

    transcriber.clean();

  });

  it("should have a reference to the transcriber", function() {
    expect(transcriber.widget.parent).toEqual(transcriber);
  });

  it("should allow to show the widget", function() {

    var $widget = $(transcriber.widget.$el);
    transcriber.widget.show();
    expect(transcriber.widget.model.get("hidden")).toEqual(false);

  });

  it("should allow to hide the widget", function() {

    var $widget = $(transcriber.widget.$el);
    transcriber.widget.hide();
    expect(transcriber.widget.model.get("hidden")).toEqual(true);

  });

  it("should allow to resize the widget", function() {

    var $widget = $(transcriber.widget.$el);
    transcriber.widget.setSize(100, 200);

    expect(transcriber.widget.$el.css("width")).toEqual("100px");
    expect(transcriber.widget.$el.css("height")).toEqual("200px");
    expect(transcriber.widget.getSize()).toEqual({ w: 100, h: 200 });

  });

  it("should allow to enable/disable the resizable status of the widget", function() {

    transcriber.widget.setResizable(true);
    expect(transcriber.widget.model.get("resizable")).toEqual(true);
    expect(transcriber.widget.$el.hasClass("ui-resizable")).toEqual(true);
    expect(transcriber.widget.$el.hasClass("ui-resizable-disabled")).toEqual(false);

    transcriber.widget.setResizable(false);
    expect(transcriber.widget.model.get("resizable")).toEqual(false);
    expect(transcriber.widget.$el.hasClass("ui-resizable")).toEqual(true);
    expect(transcriber.widget.$el.hasClass("ui-resizable-disabled")).toEqual(true);

  });

  it("should remove the handler when the widget is not resizable", function() {

    transcriber.widget.setResizable(true);
    transcriber.widget.setResizable(false);
    expect(transcriber.widget.$el.find(".ui-resizable-handle").length).toEqual(0);

  });

  it("should allow to enable/disable the dragging of the widget", function() {

    transcriber.widget.setDraggable(true);
    expect(transcriber.widget.model.get("draggable")).toEqual(true);
    expect(transcriber.widget.$el.hasClass("ui-draggable")).toEqual(true);
    expect(transcriber.widget.$el.hasClass("ui-draggable-disabled")).toEqual(false);

    transcriber.widget.setDraggable(false);
    expect(transcriber.widget.model.get("draggable")).toEqual(false);
    expect(transcriber.widget.$el.hasClass("ui-draggable")).toEqual(true);
    expect(transcriber.widget.$el.hasClass("ui-draggable-disabled")).toEqual(true);

  });

  it("should allow to set the position of the widget", function() {

    transcriber.widget.setPosition(300, 200);
    transcriber.widget.$el.css("position", "absolute");

    expect(transcriber.widget.$el.css("left")).toEqual("300px");
    expect(transcriber.widget.$el.css("top")).toEqual("200px");

  });

  it("should return the position of the widget", function() {

    transcriber.widget.setPosition(100, 50);
    transcriber.widget.$el.css("position", "absolute");

    expect(transcriber.widget.getPosition()).toEqual({ x: 100, y: 50 });

  });

  it("should return the dimensions and the position of the widget", function() {

    transcriber.widget.setPosition(100, 50);
    transcriber.widget.setSize(100, 200);
    transcriber.widget.$el.css("position", "absolute");

    expect(transcriber.widget.getCurrentStatus()).toEqual({ x: 100, y: 50, w: 100, h: 200 });

  });

  it("should have a button to save a transcription", function() {

    var $button = transcriber.widget.$el.find(".button.save");

    expect($button.length).toEqual(1);

  });

  it("should have a widget.$saveButton", function() {

    expect(transcriber.widget.$saveButton).toEqual(transcriber.widget.$el.find(".button.save"));

  });

  it("should fire a save event when the user clicks the save button", function() {

    var saveSpy = spyOn(transcriber.widget, 'save');

    transcriber.widget.delegateEvents();

    transcriber.widget.$saveButton.click();

    expect(saveSpy).toHaveBeenCalled();

  });

  it("should create a new transcription when the user clicks the save button", function() {

    transcriber.widget.$saveButton.click();
    transcriber.widget.$saveButton.click();
    transcriber.widget.$saveButton.click();

    expect(transcriber.transcriptions.length).toEqual(3);

  });

  it("[a transcription] should contains the transcription status", function() {

    transcriber.widget.$el.css("position", "absolute");

    transcriber.widget.setPosition(200, 100);
    transcriber.widget.setSize(300, 500);
    transcriber.widget.$saveButton.click();

    expect(transcriber.transcriptions.at(0).toJSON()).toEqual({ x: 200, y: 100, w: 300, h: 500 });

  });

});
