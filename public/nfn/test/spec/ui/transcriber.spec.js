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

});


/*
* common.ui.view.Highlight
*
*/
describe("common.ui.view.Highlight", function() {

  var selection;

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

  it("should hide the highlight when the close button is clicked", function() {
    widget.render();
    widget.$closeButton.click();
    expect(widget.model.get("hidden")).toEqual(true);
  });

});


/*
* common.ui.view.SernacTranscriber
*
*/
describe("common.ui.view.SernacTranscriber", function() {

  var sernacTranscriber;

  beforeEach(function() {

    sernacTranscriber = new nfn.ui.view.SernacTranscriber({
      model: new nfn.ui.model.Sernac(),
      widgetTemplate: "<strong>hola</strong>"
    });


  });

  afterEach(function() {

    sernacTranscriber.clean();

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

    expect(sernacTranscriber.helper.$title.text()).toEqual("Record code");
  });

  it("should hide the launcher after the magnifier is added", function() {

    sernacTranscriber.$el.find(".photos").append("<img />");

    sernacTranscriber.addSelection();
    sernacTranscriber.updateSelection(10, 10, 100, 100);
    sernacTranscriber.selection.$el.css("position", "absolute");
    sernacTranscriber.addMagnifier();

    expect(sernacTranscriber.launcher.model.get("hidden")).toEqual(true);
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

  it("should update the class of the widget when the step changes ", function() {

    sernacTranscriber.model.set("currentStep", 2);
    expect(sernacTranscriber.transcriberWidget.$el.find(".input_field").hasClass("text")).toEqual(true);
    expect(sernacTranscriber.transcriberWidget.$el.find(".input_field").hasClass("date")).not.toEqual(true);

    sernacTranscriber.nextStep();
    expect(sernacTranscriber.transcriberWidget.$el.find(".input_field").hasClass("date")).toEqual(true);
    expect(sernacTranscriber.transcriberWidget.$el.find(".input_field").hasClass("text")).not.toEqual(true);

  });

  it("should update the type of input field when the step changes", function() {

    sernacTranscriber.model.set("currentStep", 2);
    expect(sernacTranscriber.transcriberWidget.model.get("type")).toEqual("text");

    sernacTranscriber.nextStep();
    expect(sernacTranscriber.transcriberWidget.model.get("type")).toEqual("date");

  });

  it("should update the placeholder in the widget when the step changes", function() {

    sernacTranscriber.model.set("currentStep", 0);
    sernacTranscriber.nextStep();

    expect(sernacTranscriber.transcriberWidget.$input.attr("placeholder")).toEqual("Species");
  });

  it("should change the title in the helper when the step changes", function() {

    sernacTranscriber.model.set("currentStep", 0);

    sernacTranscriber.nextStep();

    expect(sernacTranscriber.helper.$el.find(".title").text()).toEqual("Genus & species");
    expect(sernacTranscriber.helper.$el.find(".description").text()).toEqual("2 or 3 latin words in the first line, next to the margin.");

    sernacTranscriber.previousStep();

    expect(sernacTranscriber.helper.$el.find(".title").text()).toEqual("Record code");
    expect(sernacTranscriber.helper.$el.find(".description").text()).toEqual("It's a 4 digit number located at the top right of the page.");

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

    sernacTranscriber.transcriberWidget.$okButton.click();

    expect(sernacTranscriber.model.get("currentStep")).toEqual(1);
  });

});


/*
* common.ui.view.Transcriber
*
*/
describe("common.ui.view.Transcriber", function() {

  var
  transcriber,
  sernacTranscriber;

  beforeEach(function() {

    transcriber = new nfn.ui.view.Transcriber({
      model: new nfn.ui.model.Transcriber(),
      widgetTemplate: "<strong>hola</strong>"
    });

    sernacTranscriber = new nfn.ui.view.SernacTranscriber({
      model: new nfn.ui.model.Sernac(),
      widgetTemplate: "<strong>hola</strong>"
    });

  });

  afterEach(function() {

    transcriber.clean();
    sernacTranscriber.clean();

  });

  it("should have a log", function() {
    expect(transcriber.transcriptions).toBeDefined();
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

    expect(transcriber.model.get("type")).toEqual("default");
    expect(sernacTranscriber.model.get("type")).toEqual("sernac");

  });

  it("should have the right class for each transcriber type", function() {

    expect(transcriber.$el.hasClass('default')).toEqual(true);
    expect(sernacTranscriber.$el.hasClass('sernac')).toEqual(true);

  });

  it("should create a placeholder for the photos", function() {

    expect(transcriber.$el.find(".photos").length).toEqual(1);

  });

  it("should allow to load a photo", function() {

    var url = "http://24.media.tumblr.com/tumblr_m98dbeEnhw1reyyato1_1280.png";
    transcriber.loadPhoto(url);
    expect(transcriber.photos.length).toEqual(1);
  });

  //it("should show a photo", function() {

    //var url = "http://24.media.tumblr.com/tumblr_m98dbeEnhw1reyyato1_1280.png";
    //transcriber.loadPhoto(url);
    //transcriber.showPhoto(0);

    //var $img = transcriber.$el.find(".photos img");
    //expect($img.length).toEqual(1);
    //expect($img.attr("src")).toEqual(url);

  //});

  //it("should replace the loaded photo with a new one", function() {

    //var // test photos
    //url  = "http://24.media.tumblr.com/tumblr_m98dbeEnhw1reyyato1_1280.png";
    //url2 = "http://assets.javierarce.com/spines.jpg";

    //transcriber.loadPhoto(url);
    //transcriber.loadPhoto(url2);

    //transcriber.showPhoto(0);
    //transcriber.showPhoto(1);

    //var $img = transcriber.$el.find(".photos img");

    //expect($img.length).toEqual(1);
    //expect($img.attr("src")).toEqual(url2);

  //});

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
    widget.model.set("description", "This is a test description");
    expect(widget.$description.text()).toEqual("This is a test description");
  });


});
/*
 * common.ui.view.SernacWidget
 *
 */
describe("common.ui.view.SernacWidget", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.SernacWidget({
      model: new nfn.ui.model.SernacWidget(),
      template: $("#transcriber-widget-template").html()
    });

  });

  afterEach(function() {
    widget.clean();
  });

  it("should have an ok button", function() {
    widget.render();
    expect(widget.$okButton).toEqual(widget.$el.find(".button.ok"));
    expect(widget.$el.find('.button.ok').length).toEqual(1);
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
    expect(widget.$finishButton).toEqual(widget.$el.find('.button.finish'));
    expect(widget.$el.find(".button.finish").length).toEqual(1);
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

  it("should fire an event when the user clicks in the finish button", function() {

    widget.render();

    var spy = spyOn(widget, 'finish');

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
    expect(widget.$startButton).toEqual(widget.$el.find(".button.start"));
  });

  it("should have a message", function() {
    widget.render();
    expect(widget.$message).toEqual(widget.$el.find("span"));
    expect(widget.$message.text()).toEqual("Drag a square around the specimen label");
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
    var startSpy = spyOn(widget, 'start');

    widget.delegateEvents();

    widget.$startButton.click();

    expect(startSpy).toHaveBeenCalled();

  });

});

