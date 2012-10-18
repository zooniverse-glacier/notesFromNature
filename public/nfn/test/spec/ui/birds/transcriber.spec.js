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
    Mock.validateCurrentStep  = function() { return true; };
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

    waits(400);

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
* common.ui.view.BirdsTranscriber
*
*/
describe("common.ui.view.BirdsTranscriber", function() {

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

  it("should fire an event when the user clicks in the step counter", function() {

    var spy = spyOn(transcriber.transcriberWidget, 'showStepTooltip');

    transcriber.transcriberWidget.delegateEvents();
    transcriber.transcriberWidget.$step.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should create a tooltip when the user cliks in the counter", function() {

    transcriber.transcriberWidget.$startButton.click();

    waits(350);

    runs(function() {

      transcriber.transcriberWidget.$step.click();

      expect(transcriber.transcriberWidget.$el.find(".tooltip").length).toEqual(1);
      expect(transcriber.transcriberWidget.stepTooltip.model.get("hidden")).toEqual(false);
      expect(transcriber.transcriberWidget.stepTooltip.$el.hasClass("step")).toEqual(true);

    });

  });

  it("the stepTooltip should contain a list of links", function() {

    transcriber.transcriberWidget.$startButton.click();

    waits(350);

    runs(function() {

      transcriber.transcriberWidget.$step.click();

      expect(transcriber.transcriberWidget.stepTooltip.$el.find("li").length).toEqual(transcriber.guide.length);
      expect(transcriber.transcriberWidget.stepTooltip.$el.find("li:first-child").text()).toEqual(transcriber.guide[0].title);

    });

  });

  it("clicking a link in the step tooltip should trigger a gotoStep event", function() {

    var spy = spyOn(transcriber.transcriberWidget, 'gotoStep');

    transcriber.transcriberWidget.$startButton.click();

    waits(350);

    runs(function() {

      transcriber.transcriberWidget.$step.click();

      transcriber.transcriberWidget.delegateEvents();
      transcriber.transcriberWidget.stepTooltip.$el.find("li:first-child a").click();

      expect(spy).toHaveBeenCalled();

    });

  });

  it("clicking a link in the step tooltip should change the currentStep", function() {

    transcriber.transcriberWidget.$startButton.click();

    waits(350);

    runs(function() {

      transcriber.transcriberWidget.$step.click();

      transcriber.transcriberWidget.stepTooltip.$el.find("li:first-child a").click();
      expect(transcriber.model.get("currentStep")).toEqual(0);

      transcriber.transcriberWidget.$step.click();

      transcriber.transcriberWidget.stepTooltip.$el.find("li:nth-child(4) a").click();
      expect(transcriber.model.get("currentStep")).toEqual(3);

    });

  });

  it("the currentStep should be shown in the stepTooltip", function() {

    transcriber.transcriberWidget.$startButton.click();
    transcriber.model.set("currentStep", 4);

    waits(350);

    runs(function() {

      transcriber.transcriberWidget.$step.click();

      expect(transcriber.transcriberWidget.stepTooltip.$el.find("li.selected").text()).toEqual(transcriber.guide[4].title);

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

  it("should return the number of fields left to transcribe", function() {

    transcriber.model.set("currentStep", 0);

    transcriber.transcriberWidget.$input.val("1234");
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
      expect(transcriber.transcriberWidget.$title.text()).toEqual(transcriber.guide[0].title);
    });

  });

  it("should update the widget description the widget after start transcribing", function() {

    transcriber.startTranscribing();

    waits(350);

    runs(function () {
      expect(transcriber.transcriberWidget.$description.html()).toEqual(transcriber.guide[0].description);
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

    transcriber.guide = [{
      title: 'Code' ,
      description: 'Code',
      placeholder: 'Code',
      type: "text",
      inputWidth: 180
      }, {
      title: 'Code 2' ,
      description: 'Code',
      placeholder: 'Code',
      type: "text",
      inputWidth: 180
      }, {
      title: 'Code 2' ,
      description: 'Code',
      placeholder: 'Code',
      type: "text",
      inputWidth: 180
    }];

    transcriber.model.set("currentStep", 0);

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

  it("should save a transcription when the $okButton is clicked", function() {

    transcriber.guide = [{
      title: 'Code' ,
      description: 'Code',
      placeholder: 'Code',
      type: "text",
      inputWidth: 180
      }, {
      title: 'Code 2' ,
      description: 'Code',
      placeholder: 'Code',
      type: "text",
      inputWidth: 180
      }, {
      title: 'Code 2' ,
      description: 'Code',
      placeholder: 'Code',
      type: "text",
      inputWidth: 180
    }];

    transcriber.model.set("currentStep", 0);

    transcriber.transcriberWidget.$input.val("1234");
    transcriber.transcriberWidget.$okButton.click();

    transcriber.transcriberWidget.$input.val("Bye!");
    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.transcriptions.length).toEqual(2);
    expect(transcriber.transcriptions.at(0).get("value")).toEqual("1234");
    expect(transcriber.transcriptions.at(1).get("value")).toEqual("Bye!");

});

});


/*
* common.ui.view.BirdsWidget
*
*/
describe("common.ui.view.BirdsTranscriber.Validations", function() {

  var widget;

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

  it("should validate the input", function() {

    transcriber.model.set("currentStep", 0);

    transcriber.delegateEvents();

    spyOn(transcriber, 'validateCurrentStep');

    transcriber.guide = [{
      title: 'Code' ,
      description: 'Code',
      placeholder: 'Code',
      type: "text",
      dataType: "number",
      validate: true,
      inputWidth: 180
      }, {
      title: 'Code 2' ,
      description: 'Code',
      placeholder: 'Code',
      type: "text",
      inputWidth: 180
    }];

    transcriber.transcriberWidget.$input.val("Hi!");
    transcriber.transcriberWidget.$okButton.click();

    expect(transcriber.validateCurrentStep).toHaveBeenCalled();

  });


  it("should validate codes", function() {

    transcriber.model.set("currentStep", 0);

    transcriber.guide = [{
      title: 'Code' ,
      description: 'Code',
      placeholder: 'Code',
      type: "text",
      dataType: "code",
      validate: true,
      inputWidth: 180
      }, {
      title: 'Code 2' ,
      description: 'Code',
      placeholder: 'Code',
      type: "text",
      inputWidth: 180
    }];

    transcriber.transcriberWidget.$input.val("123a");
    expect(transcriber.validateCurrentStep()).toEqual(false);

    transcriber.transcriberWidget.$input.val("HI");
    expect(transcriber.validateCurrentStep()).toEqual(false);

    transcriber.transcriberWidget.$input.val("132222");
    expect(transcriber.validateCurrentStep()).toEqual(false);

    transcriber.transcriberWidget.$input.val("0132222");
    expect(transcriber.validateCurrentStep()).toEqual(false);

    transcriber.transcriberWidget.$input.val("012");
    expect(transcriber.validateCurrentStep()).toEqual(false);

    transcriber.transcriberWidget.$input.val("0012");
    expect(transcriber.validateCurrentStep()).toEqual(true);

    transcriber.transcriberWidget.$input.val("8241");
    expect(transcriber.validateCurrentStep()).toEqual(true);

  });

});
