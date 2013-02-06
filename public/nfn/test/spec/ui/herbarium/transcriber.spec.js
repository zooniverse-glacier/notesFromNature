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
    Mock.getPendingFieldCount = function() { return true; };

    widget.parent = Mock;

    $("body").append(widget.render());

  });

  afterEach(function() {
    widget.clean();
  });

  it("should allow to create an error tooltip", function() {

      var
      title       = "Title",
      description = "Description";

      widget.showErrorTooltip(title, description);

      expect(widget.errorTooltip).toBeDefined();
      expect(widget.errorTooltip.model.get("hidden")).toEqual(false);
      expect(widget.errorTooltip.$el.length).toEqual(1);

      expect(widget.errorTooltip.$el.find(".title").html()).toEqual(title);
      expect(widget.errorTooltip.$el.find(".description").html()).toEqual(description);

  });

  it("showing an error should hide the $okButton and show the $errorIndicator", function() {

      var
      title       = "Title",
      description = "Description";

      widget.showErrorTooltip(title, description);

      waits(250);

      runs(function() {
        expect(widget.$okButton).toBeHidden();
        expect(widget.$errorIndicator).toBeVisible();
      });

  });

  it("closing the error tooltip should show the ok button and hide the error button", function() {

    var
    title       = "Title",
    description = "Description";

    widget.showErrorTooltip(title, description);

    waits(250);

    runs(function() {
      widget.closeErrorTooltip();

      waits(250);
      runs(function() {

        expect(widget.$okButton).toBeVisible();
        expect(widget.$errorIndicator).toBeHidden();
      });

    });

  });

  it("should create a finish tooltip when the user cliks in the finish button", function() {

    waits(250);

    runs(function() {
      widget.$finishButton.click();

      expect(widget.finishTooltip).toBeDefined();
      expect(widget.finishTooltip.model.get("hidden")).toEqual(false);
      expect(widget.finishTooltip.$el.length).toEqual(1);

    });

  });

  it("the finish tooltip should contain a link to open the step tooltip", function() {

    waits(250);

    runs(function() {
      widget.$finishButton.click();

      var spy = spyOn(widget, 'showStepTooltip');

      widget.finishTooltip.delegateEvents();
      widget.finishTooltip.$el.find(".description > a").click();

      expect(widget.finishTooltip.$el.find(".description > a")).toBeVisible();
      expect(spy).toHaveBeenCalled();

    });

  });

  it("should allow to disable the ok button", function() {


    widget.disableOk();

    expect(widget.$okButton.hasClass("disabled")).toEqual(true);

  });

  it("should allow to enable the ok button", function() {


    widget.$okButton.addClass("disabled");

    widget.enableOk();

    expect(widget.$okButton.hasClass("disabled")).toEqual(false);

  });

  it("should have an error indicator", function() {
    expect(widget.$errorIndicator).toEqual(widget.$el.find(".error"));
    expect(widget.$el.find('.error').length).toEqual(1);
  });

  it("should have an ok button", function() {
    expect(widget.$okButton).toEqual(widget.$el.find(".btn.ok"));
    expect(widget.$el.find('.btn.ok').length).toEqual(1);
  });

  it("should have a skip link", function() {
    expect(widget.$skip).toEqual(widget.$el.find(".skip"));
    expect(widget.$el.find('.skip').length).toEqual(1);
  });

  it("should have an input field", function() {
    expect(widget.$input).toEqual(widget.$el.find('.input_field input[type="text"]'));
    expect(widget.$el.find('.input_field input[type="text"]').length).toEqual(1);
  });

  it("should clear the value of the text input field", function() {
    widget.model.set("type", "text");
    widget.$input.val('hola');

    expect(widget.getValue()).toEqual("hola");

    widget.clearInput();
    expect(widget.getValue()).toEqual("");
  });

  it("should clear the value of the date input field", function() {
    widget.model.set("type", "date");
    widget.$el.find(".month").val('2');
    widget.$el.find(".day").val('1');
    widget.$el.find(".year").val('2012');

    expect(widget.getValue()).toEqual("2/1/2012");

    widget.clearInput();
    expect(widget.getValue()).toEqual("");
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

  it("should have a step counter", function() {
    expect(widget.$step).toEqual(widget.$el.find('.step'));
    expect(widget.$el.find(".step").length).toEqual(1);
  });

  it("should have a button to finish the record", function() {
    expect(widget.$finishButton).toEqual(widget.$el.find('.btn.finish'));
    expect(widget.$el.find(".btn.finish").length).toEqual(1);
  });

  it("should fire an event when the user clicks in the ok button", function() {

    var spy = spyOn(widget, 'ok');

    widget.delegateEvents();
    widget.$okButton.click();

    expect(spy).toHaveBeenCalled();
  });

  it("should fire an event when the user clicks in the skip button", function() {

    var spy = spyOn(widget, 'showSkipTooltip');

    widget.delegateEvents();
    widget.$skip.click();

    expect(spy).toHaveBeenCalled();
  });

  it("should fire a showFinishTooltip event when the user clicks in the finish button", function() {

    var spy = spyOn(widget, 'showFinishTooltip');

    widget.delegateEvents();
    widget.$finishButton.click();

    expect(spy).toHaveBeenCalled();

  });

});

/*
* common.ui.view.HerbariumTranscriber
*
*/
describe("common.ui.view.HerbariumTranscriber", function() {

  var transcriber;

  beforeEach(function() {

    transcriber = new nfn.ui.view.HerbariumTranscriber({
      model: new nfn.ui.model.Herbarium(),
      widgetTemplate: "<strong>hola</strong>"
    });

    transcriber.guide = [{
      title: "Location",
      type: "location",
      description: 'It is the full state name or its abbreviation (e.g. FL for Florida). <a href="#" class="example">See example</a>',
      inputWidth: 540
    }, {
      title: "Date",
      type: "date",
      description: 'It is the full state name or its abbreviation (e.g. FL for Florida). <a href="#" class="example">See example</a>',
      inputWidth: 240
    }, {
      title: "Code",
      type: "code",
      description: "description",
      inputWidth: 240
    }, {
      title: "Whatever",
      type: "whatever",
      description: "description",
      inputWidth: 240
    }, {
      title: "Code 2",
      type: "code",
      description: "description"
    }, {
      title: "Whatever 3",
      type: "whatever",
      description: "description"
    }, {
      title: "Code 3",
      type: "code",
      description: "description"
    }, {
      title: "Whatever 4",
      type: "whatever",
      description: "description"
    }, {
      title: "Code 4",
      type: "code",
      description: "description"
    }, {
      title: "Whatever 5",
      type: "whatever",
      description: "description"
    }, {
      title: "Code 5",
      type: "code",
      description: "description"
    }, {
      title: "Date",
      placeholder: ['day', 'month', 'year'],
      type: "date",
      description: "date"
    }];


  });

  afterEach(function() {
    transcriber.clean();
  });

  it("should allow to close it", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.launcher.$startButton.removeClass("disabled");
    transcriber.launcher.$startButton.click();

    transcriber.close();

    expect(transcriber.backdrop.model.get("hidden")).toEqual(true);
    expect(transcriber.helper.model.get("hidden")).toEqual(true);
    expect(transcriber.magnifier.model.get("hidden")).toEqual(true);
    expect(transcriber.launcher.model.get("hidden")).toEqual(false);
    expect(transcriber.transcriberWidget.model.get("hidden")).toEqual(true);

    expect(transcriber.launcher.$startButton.hasClass('disabled')).toEqual(true);

  });

  it("should return the number of fields left to transcribe", function() {

    transcriber.model.set({ currentStep: 0 });

    transcriber.transcriberWidget.$input.val("Hi!");
    transcriber.transcriberWidget.$okButton.click();

    $(transcriber.transcriberWidget.$input[0]).val('13');
    $(transcriber.transcriberWidget.$input[2]).val('2013');
    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.getPendingFieldCount()).toEqual(transcriber.guide.length - 2);

  });

  it("should show a error tooltip when ok is clicked if the input is empty", function() {

    transcriber.model.set("currentStep", 0);
    transcriber.$el.find(".photos").append("<img />");

    transcriber.launcher.$startButton.removeClass("disabled");

    transcriber.transcriberWidget.$okButton.click();

    waits(350);

    runs(function() {
      expect(transcriber.transcriberWidget.errorTooltip).toBeDefined();
      expect(transcriber.transcriberWidget.errorTooltip.$el).toBeVisible();
    });

  });

  it("shouldn't allow to go to the next field when ok is clicked if the input is empty", function() {

    transcriber.model.set("currentStep", 0);
    transcriber.$el.find(".photos").append("<img />");

    transcriber.launcher.$startButton.removeClass("disabled");

    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.transcriptions.length).toEqual(0);
    expect(transcriber.model.get("currentStep")).toEqual(0);

  });

  it("shouldn't allow to go to the next field when ok is clicked when annotating a date and the three inputs are empty", function() {

    transcriber.model.set("currentStep", 11);
    transcriber.$el.find(".photos").append("<img />");

    transcriber.launcher.$startButton.removeClass("disabled");

    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.transcriptions.length).toEqual(0);
    expect(transcriber.model.get("currentStep")).toEqual(11);

  });

  it("should allow to go to the next field when ok is clicked when annotating a date and some of the inputs are empty", function() {

    transcriber.model.set("currentStep", 11);

    transcriber.launcher.$startButton.removeClass("disabled");

    $(transcriber.transcriberWidget.$input[0]).val('13');
    $(transcriber.transcriberWidget.$input[2]).val('2013');

    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.transcriptions.length).toEqual(1);
    expect(transcriber.model.get("currentStep")).toEqual(0);

  });

  it("should clean the input field when the finish button is clicked", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.launcher.$startButton.removeClass("disabled");

    transcriber.transcriberWidget.$input.val("Hi!");
    transcriber.transcriberWidget.$finishButton.click();

    waits(350);
    runs(function() {

      transcriber.transcriberWidget.finishTooltip.$mainButton.click();

      expect(transcriber.transcriberWidget.$input.val()).toEqual("");
    });

  });

  it("should have a log", function() {
    expect(transcriber.transcriptions).toBeDefined();
  });

  it("should have a transcriber widget", function() {
    expect(transcriber.transcriberWidget).toBeDefined();
  });

  it("should have a backdrop", function() {
    expect(transcriber.backdrop).toBeDefined();
  });

  it("should have a helper", function() {
    expect(transcriber.helper).toBeDefined();
  });

  it("should have an status bar", function() {
    expect(transcriber.statusBar).toBeDefined();
  });

  it("should have a highlight", function() {
    expect(transcriber.highlight).toBeDefined();
  });

  it("should have a launch bar", function() {
    expect(transcriber.launcher).toBeDefined();
  });

  it("the launcher's start button should be initially hidden", function() {
    expect(transcriber.launcher.$startButton.hasClass('hidden')).toEqual(true);
  });

  it("should have a spinner", function() {
    expect(transcriber.spinner).toBeDefined();
  });

  it("should have a selection", function() {
    expect(transcriber.selection).toBeDefined();
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

  it("should have a guide", function() {
    expect(transcriber.guide).toBeDefined();
  });

  it("should have a magnifier", function() {
    expect(transcriber.magnifier).toBeDefined();
  });

  it("should have an onResize method", function() {
    expect(transcriber.onResize).toBeDefined();
  });

  it("should have a $backgroundMessage", function() {
    expect(transcriber.$backgroundMessage).toBeDefined();
  });

  // TODO: move
  it("should allow to show the magnifier", function() {

    var $widget = $(transcriber.magnifier.$el);
    transcriber.magnifier.show();
    expect(transcriber.magnifier.model.get("hidden")).toEqual(false);

  });

  it("should allow to hide the magnifier", function() {

    var $widget = $(transcriber.magnifier.$el);
    transcriber.magnifier.hide();
    expect(transcriber.magnifier.model.get("hidden")).toEqual(true);

  });

  it("should allow to set the dimensions of the magnifier", function() {

    transcriber.magnifier.setDimensions({ x: 10, y: 10, w: 90, h: 90 });
    transcriber.magnifier.$el.css("position", "absolute");

    expect(transcriber.magnifier.$el.css("left")).toEqual("10px");
    expect(transcriber.magnifier.$el.css("top")).toEqual("10px");
    expect(transcriber.magnifier.$el.css("width")).toEqual("90px");
    expect(transcriber.magnifier.$el.css("height")).toEqual("90px");

  });

  it("should create a selection", function() {
    transcriber.addSelection();
    expect(transcriber.$el.find(".selection").length).toEqual(1);
  });

  it("should allow to remove the selection", function() {
    transcriber.removeSelection();
    expect(transcriber.$el.find(".selection").length).toEqual(0);
  });

  it("should allow to update the selection", function() {
    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");

    expect(transcriber.selection.$el.css("left")).toEqual("10px");
    expect(transcriber.selection.$el.css("top")).toEqual("10px");
    expect(transcriber.selection.$el.css("width")).toEqual("90px");
    expect(transcriber.selection.$el.css("height")).toEqual("90px");
  });

  it("should add the cursor crosshair of the image when the transcribing begins", function() {

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");

    transcriber.addHighlight(transcriber.selection.getDimensions());
    transcriber.highlight.$closeButton.click();

    expect(transcriber.$el.find(".photos").hasClass("selectable")).toEqual(true);
  });

  it("should remove the cursor crosshair of the image after a highlight is added", function() {

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");

    transcriber.addHighlight(transcriber.selection.getDimensions());

    expect(transcriber.$el.find(".photos").hasClass("selectable")).toEqual(false);
  });

  it("should enable the start button after a highlight is added", function() {

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");

    transcriber.addHighlight(transcriber.selection.getDimensions());

    expect(transcriber.launcher.$el.find(".start").hasClass("disabled")).toEqual(false);
  });

  it("should hide the start button of the launcher after a highlight is closed", function() {

    transcriber.addHighlight({ x: 1, y: 1, w: 100, h: 100 });
    transcriber.highlight.$closeButton.click();

    expect(transcriber.launcher.$el.find(".start").hasClass("hidden")).toEqual(true);
  });

  it("should create a highlight", function() {

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");

    transcriber.addHighlight(transcriber.selection.getDimensions());

    expect(transcriber.$el.find(".highlight").length).toEqual(1);
  });

  it("cliking in the startButton should add a magnifier", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.launcher.$startButton.removeClass("disabled");
    transcriber.launcher.$startButton.click();

    expect(transcriber.$el.find(".magnifier").length).toEqual(1);
  });

  it("cliking in the disabled startButton should not add a magnifier", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.launcher.disable();
    transcriber.launcher.$startButton.click();

    expect(transcriber.$el.find(".magnifier").length).toEqual(0);
  });

  it("should update the helper title of the launcher after the magnifier is added", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    waits(700);

    runs(function () {
      expect(transcriber.helper.$title.text()).toEqual(transcriber.guide[0].title);
    });

  });

  it("should hide the launcher after the magnifier is added", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    expect(transcriber.launcher.model.get("hidden")).toEqual(true);
  });

  it("should set the currentRecord to zero on init", function() {
    expect(transcriber.model.get("currentRecord")).toEqual(0);
  });

  it("should set the currentStep to zero when the magnifier is added", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");

    expect(transcriber.model.get("currentStep")).toEqual(-1);

    transcriber.addMagnifier();

    expect(transcriber.model.get("currentStep")).toEqual(0);
  });

  it("should show the sernac transcriber after the magnifier is added", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    expect(transcriber.transcriberWidget.model.get("hidden")).toEqual(false);
    expect(transcriber.$el.find(".sernac-widget").length).toEqual(1);
  });

  it("should add the backdrop after the magnifier is added", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    expect(transcriber.$el.find(".backdrop").length).toEqual(1);
  });

  it("the skipTooltip should inform about the steps", function() {

    transcriber.launcher.$skipButton.click();

    waits(500);

    runs(function() {

      expect(transcriber.launcher.skipTooltip.$title.text()).toEqual("Are you sure?");
      expect(transcriber.launcher.skipTooltip.$description.text()).toEqual("There are still " + transcriber.guide.length + " empty fields for this record that should be completed before finishing.");


    });

  });

  it("clicking in the $skipButton of the launcher should call the skip method", function() {

    var spy = spyOn(transcriber, 'skip');

    transcriber.model.set("currentRecord", 0);

    transcriber.launcher.$skipButton.click();

    waits(500);

    runs(function() {

      transcriber.launcher.skipTooltip.$mainButton.click();
      expect(transcriber.model.get("currentRecord")).toEqual(0);
      expect(spy).toHaveBeenCalled();

    });

  });

  it("should show the $startButton in the launcher after the highlight is added", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addHighlight(transcriber.selection.getDimensions());

    waits(500);
    runs(function() {
      expect(transcriber.launcher.$startButton.hasClass("hidden")).toEqual(false);
    });

  });

  it("should hide the $startButton when the selection is removed", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");

    waits(500);

    runs(function() {

      transcriber.removeSelection();

      waits(500);
      runs(function() {
        expect(transcriber.launcher.$startButton.hasClass("hidden")).toEqual(true);
      });

    });

  });

  it("should show the helper after the magnifier is added", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    expect(transcriber.helper.model.get("hidden")).toEqual(false);
    expect(transcriber.$el.find(".helper").length).toEqual(1);
  });

  it("should allow to start an annotation", function() {
    expect(transcriber.startTranscribing()).toEqual(null);
  });

  it("should show the launcher after the transcriber has started", function() {
    expect(transcriber.startTranscribing()).toEqual(null);
    expect(transcriber.launcher.model.get("hidden")).toEqual(false);
  });

  it("should have a reference to the launcher", function() {
    expect(transcriber.launcher.parent).toEqual(transcriber);
  });

  it("should return the dimensions and the position of the selection", function() {

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");

    expect(transcriber.selection.getDimensions()).toEqual({ x: 10, y: 10, w: 90, h: 90 });

  });

  it("should show the step information", function() {
    transcriber.model.set("stepsCount", 10);
    transcriber.model.set("currentStep", 5);

    expect(transcriber.transcriberWidget.$step.text()).toEqual("6/10");

    transcriber.model.set("currentStep", 2);
    expect(transcriber.transcriberWidget.$step.text()).toEqual("3/10");

  });

  it("should allow to increase the record counter", function() {

    transcriber.model.set("currentRecord", 3);
    transcriber.nextRecord();

    expect(transcriber.model.get("currentRecord")).toEqual(4);

  });

  it("should change the record counter in the status bar when updating the currentRecord", function() {

    transcriber.model.set("currentRecord", 3);
    transcriber.nextRecord();

    expect(transcriber.model.get("currentRecord")).toEqual(4);
    expect(transcriber.statusBar.$counter.text()).toEqual("4");

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

  it("should return the width of the input field", function() {

    transcriber.model.set("currentStep", 0);
    expect(transcriber.transcriberWidget.model.get("inputWidth")).toEqual(540);

  });

  it("should update the class of the widget when the step changes", function() {

    transcriber.model.set("currentStep", 0);

    expect(transcriber.transcriberWidget.$el.find(".input_field").hasClass("location")).toEqual(true);

    transcriber.nextStep();
    expect(transcriber.transcriberWidget.$el.find(".input_field").hasClass("date")).toEqual(true);

    transcriber.nextStep();
    expect(transcriber.transcriberWidget.$el.find(".input_field").hasClass("code")).toEqual(true);

  });

  it("should update the type of input field when the step changes", function() {

    transcriber.model.set("currentStep", 2);
    expect(transcriber.transcriberWidget.model.get("type")).toEqual("code");

    transcriber.nextStep();
    expect(transcriber.transcriberWidget.model.get("type")).toEqual("whatever");

  });

  it("should call the focus event when placeholder is updated", function() {

    transcriber.model.set("currentStep", 0);

    var spy = spyOn(transcriber.transcriberWidget, 'focus');

    transcriber.transcriberWidget.delegateEvents();

    transcriber.nextStep();
    transcriber.transcriberWidget.model.set("placeholder", "whatever");

    expect(spy).toHaveBeenCalled();

  });

  it("should update the placeholder in the widget when the step changes", function() {

    transcriber.model.set("currentStep", 0);
    transcriber.nextStep();

    expect(transcriber.transcriberWidget.$input.attr("placeholder")).toEqual("day");
  });

  it("should have a link to see an example", function() {

    transcriber.model.set("currentStep", 0);

    waits(450);

    runs(function() {
      expect(transcriber.helper.$exampleLink.text()).toEqual("See example");
      expect(transcriber.helper.$el.find('.example').length).toEqual(1);
    });

  });

  it("should change the title in the helper when the step changes", function() {

    transcriber.model.set("currentStep", 0);

    transcriber.nextStep();

    waits(450);

    runs(function() {
      expect(transcriber.helper.$el.find(".title").text()).toEqual(transcriber.guide[1].title);
      expect(transcriber.helper.$el.find(".description").html()).toEqual(transcriber.guide[1].description);

      transcriber.previousStep();

      waits(450);

      runs(function() {
        expect(transcriber.helper.$el.find(".title").text()).toEqual(transcriber.guide[0].title);
        expect(transcriber.helper.$el.find(".description").html()).toEqual(transcriber.guide[0].description);
      });
    });

  });

  it("should save a transcription when the $okButton is clicked", function() {

    transcriber.model.set("currentStep", 0);
    transcriber.$el.find(".photos").append("<img />");

    transcriber.launcher.$startButton.removeClass("disabled");

    transcriber.transcriberWidget.$input.val("Hi!");
    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.transcriptions.length).toEqual(1);
    expect(transcriber.transcriptions.at(0).get("value")).toEqual("Hi!");

  });

  it("should save a full date transcription when the $okButton is clicked", function() {

    transcriber.model.set("currentStep", 11);
    transcriber.$el.find(".photos").append("<img />");

    transcriber.launcher.$startButton.removeClass("disabled");

    $(transcriber.transcriberWidget.$input[0]).val('01');   // month
    $(transcriber.transcriberWidget.$input[1]).val('02');   // day
    $(transcriber.transcriberWidget.$input[2]).val('2013'); // year

    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.transcriptions.length).toEqual(1);
    expect(transcriber.transcriptions.at(0).get("month")).toEqual('01');
    expect(transcriber.transcriptions.at(0).get("day")).toEqual('02');
    expect(transcriber.transcriptions.at(0).get("year")).toEqual('2013');

  });

  it("should save an incomplete date transcription when the $okButton is clicked", function() {

    transcriber.model.set("currentStep", 11);
    transcriber.$el.find(".photos").append("<img />");

    transcriber.launcher.$startButton.removeClass("disabled");

    $(transcriber.transcriberWidget.$input[0]).val('01');   // month
    $(transcriber.transcriberWidget.$input[2]).val('2013'); // year

    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.transcriptions.length).toEqual(1);
    expect(transcriber.transcriptions.at(0).get("month")).toEqual('01');
    expect(transcriber.transcriptions.at(0).get("year")).toEqual('2013');

  });

  it("should go to the next record when all the fields are completed and the user press the ok button", function() {

    var spy = spyOn(transcriber, 'nextRecord');

    transcriber.delegateEvents();

    transcriber.getPendingFieldCount = function() { return 0; };

    transcriber.model.set("currentStep", 0);
    transcriber.$el.find(".photos").append("<img />");

    transcriber.launcher.$startButton.removeClass("disabled");

    transcriber.transcriberWidget.$input.val("Hi!");
    transcriber.transcriberWidget.$okButton.click();

    expect(spy).toHaveBeenCalled();

  });


  it("should override a transcription", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.launcher.$startButton.removeClass("disabled");

    transcriber.model.set("currentStep", 0);

    transcriber.transcriberWidget.$input.val("Helo");
    transcriber.transcriberWidget.$okButton.click();

    transcriber.model.set("currentStep", 0);

    transcriber.transcriberWidget.$input.val("Hello");
    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.transcriptions.length).toEqual(1);
    expect(transcriber.transcriptions.at(0).get("value")).toEqual("Hello");

  });


  it("should clean the input field when the $okButton is clicked", function() {

    transcriber.model.set("currentStep", 0);
    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.launcher.$startButton.removeClass("disabled");

    transcriber.transcriberWidget.$input.val("Hi!");
    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.transcriberWidget.$input.val()).toEqual("");
  });

  it("should move to the next step when $okButton is clicked", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.launcher.$startButton.removeClass("disabled");
    transcriber.launcher.$startButton.click();

    transcriber.transcriberWidget.$input.val("Hi!");
    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.model.get("currentStep")).toEqual(1);
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

    expect(transcriber.model.get("type")).toEqual("sernac");

  });

  it("should have the right class for each transcriber type", function() {

    expect(transcriber.$el.hasClass('sernac')).toEqual(true);

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

    waits(10000);

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

  it("should hide the magnifier, helper, transcriber and backdrop when the user cliks in the finish button of the finish tooltip", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriberWidget.$finishButton.click();

    waits(350);

    runs(function() {

    transcriber.transcriberWidget.finishTooltip.$mainButton.click();

    waits(500);

    runs(function() {
      expect(transcriber.backdrop.model.get("hidden")).toEqual(true);
      expect(transcriber.helper.model.get("hidden")).toEqual(true);
      expect(transcriber.magnifier.model.get("hidden")).toEqual(true);
      expect(transcriber.transcriberWidget.model.get("hidden")).toEqual(true);
    });
    });

  });

  it("should reset the transcriber after the finish method is called", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriptions.push(new nfn.ui.model.Transcription({ step:  1, value: "value 1" }));
    transcriber.transcriptions.push(new nfn.ui.model.Transcription({ step:  2, value: "value 2" }));
    transcriber.transcriptions.push(new nfn.ui.model.Transcription({ step:  3, value: "value 3" }));
    transcriber.transcriptions.push(new nfn.ui.model.Transcription({ step:  4, value: "value 4" }));

    transcriber.transcriberWidget.finish();

    waits(350);

    runs(function() {
      expect(transcriber.transcriptions.length).toEqual(0);
    });

  });

  it("should increase the record number", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriberWidget.$finishButton.click();

    waits(350);

    runs(function() {
      transcriber.transcriberWidget.finishTooltip.$mainButton.click();

      expect(transcriber.model.get("currentRecord")).toEqual(1);
    });

  });

  it("should close the tooltip when the user press the esc key", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriberWidget.$skip.click();

    $(document).trigger({ type: 'keyup', which: "27" });

    expect(transcriber.transcriberWidget.$el.find(".tooltip").length).toEqual(0);
    expect(transcriber.transcriberWidget.tooltip).not.toBeDefined();

  });

  it("should fire an event when the user clicks in the step counter", function() {

    var spy = spyOn(transcriber.transcriberWidget, 'showStepTooltip');

    transcriber.transcriberWidget.delegateEvents();
    transcriber.transcriberWidget.$step.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should create a tooltip when the user cliks in the counter", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriberWidget.$step.click();

    expect(transcriber.transcriberWidget.$el.find(".tooltip").length).toEqual(1);
    expect(transcriber.transcriberWidget.stepTooltip.model.get("hidden")).toEqual(false);
    expect(transcriber.transcriberWidget.stepTooltip.$el.hasClass("step")).toEqual(true);

  });

  it("the stepTooltip should contain a list of links", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriberWidget.$step.click();

    expect(transcriber.transcriberWidget.stepTooltip.$el.find("li").length).toEqual(transcriber.guide.length);
    expect(transcriber.transcriberWidget.stepTooltip.$el.find("li:first-child").text()).toEqual(transcriber.guide[0].title);

  });

  it("clicking a link in the step tooltip should trigger a gotoStep event", function() {

    var spy = spyOn(transcriber.transcriberWidget, 'gotoStep');

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriberWidget.$step.click();

    transcriber.transcriberWidget.delegateEvents();
    transcriber.transcriberWidget.stepTooltip.$el.find("li:first-child a").click();

    expect(spy).toHaveBeenCalled();

  });

  it("clicking a link in the step tooltip should change the currentStep", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriberWidget.$step.click();

    transcriber.transcriberWidget.stepTooltip.$el.find("li:first-child a").click();
    expect(transcriber.model.get("currentStep")).toEqual(0);

    transcriber.transcriberWidget.$step.click();

    transcriber.transcriberWidget.stepTooltip.$el.find("li:nth-child(4) a").click();
    expect(transcriber.model.get("currentStep")).toEqual(3);

  });

  it("the completed steps should be shown in the stepTooltip", function() {
    // pending
  });

  it("clicking a link in the step tooltip should close the tooltip", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriberWidget.$step.click();
    transcriber.transcriberWidget.stepTooltip.$el.find("li:first-child a").click();

    expect(transcriber.transcriberWidget.$el.find(".tooltip.step").length).toEqual(0);
    expect(transcriber.transcriberWidget.stepTooltip).not.toBeDefined();

  });

  it("should create a tooltip when the user cliks in the skip button", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriberWidget.$skip.click();

    expect(transcriber.transcriberWidget.$el.find(".tooltip").length).toEqual(1);
    expect(transcriber.transcriberWidget.tooltip.model.get("hidden")).toEqual(false);

  });

  it("shouldn't create another tooltip when the user cliks in the skip button for the second time", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriberWidget.$skip.click();
    transcriber.transcriberWidget.$skip.click();

    expect(transcriber.transcriberWidget.$el.find(".tooltip").length).toEqual(1);

  });

  it("should close the tooltip when the user clicks in the close button (secondary)", function() {

    transcriber.$el.find(".photos").append("<img />");

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriberWidget.$skip.click();
    transcriber.transcriberWidget.tooltip.$secondaryButton.click();

    expect(transcriber.transcriberWidget.$el.find(".tooltip").length).toEqual(0);
    expect(transcriber.transcriberWidget.tooltip).not.toBeDefined();

  });

  it("should skip the field when the user clicks in the skip button (main) of the tooltip", function() {

    transcriber.$el.find(".photos").append("<img />");
    transcriber.model.set("currentStep", 0);

    transcriber.addSelection();
    transcriber.updateSelection(10, 10, 100, 100);
    transcriber.selection.$el.css("position", "absolute");
    transcriber.addMagnifier();

    transcriber.transcriberWidget.$skip.click();
    transcriber.transcriberWidget.tooltip.$mainButton.click();

    expect(transcriber.model.get("currentStep")).toEqual(1);

  });

});

