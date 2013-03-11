// BUGS TRANSCRIBER ------------------------------------------
Spine = require('spine')

nfn.ui.model.Bugs = nfn.ui.model.Transcriber.extend({
  defaults: {
    type: 'sernac bugs'
  }
});

nfn.ui.view.Bugs = nfn.ui.view.Transcriber.extend({
  initialize: function() {
    var that = this;

    _.bindAll( this, "addScroll", "updateInputField", "updatePlaceholder", "updateHelper", "getStepData", "updateStepCounter", "onMouseDown", "onMouseUp");

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);

    this.guide = [
      {
        title: 'Country',
        description: 'The country the specimen was found. Can be inferred from other location data.',
        placeholder: 'Country',
        type: "text",
        required: true
      }, {
        title: 'State/Province',
        description: 'This is the state/province name found on the record.',
        placeholder: 'State/Province',
        type: "text",
        required: true
      }, {
        title: 'County',
        description: 'This is the county name found on the record.',
        placeholder: 'County',
        type: "text",
        required: true
      }, {
        title: 'Locality',
        description: 'General location the specimen was collected. <a href="#" class="example">See example</a>',
        examples: ['nfn/ui/bugs/examples/locality.jpg'],
        placeholder: 'Locality',
        type: "text",
        required: true
      }, {
        title: 'Date collected',
        description: 'Date the specimen was collected. Likely below the location. <a href="#" class="example">See example</a>',
        examples: ['nfn/ui/bugs/examples/date-collected.jpg'],
        placeholder: ['day', 'month', 'year'],
        type: "date",
        inputWidth: 700,
        required: true
      }, {
        title: 'Collector',
        description: 'The name of the person that collected this specimen. <a href="#" class="example">See example</a>',
        examples: ['nfn/ui/bugs/examples/collector.jpg'],
        placeholder: 'Collector',
        type: "text",
        required: true
      }, {
        title: 'Host',
        description: 'The scientific name of the plant or animal that the specimen was found on. <a href="#" class="example">See example</a>',
        examples: ['nfn/ui/bugs/examples/host.jpg'],
        placeholder: 'Host',
        type: 'text',
        required: false
      }, {
        title: 'Elevation',
        description: 'The elevation where the specimen was found. <a href="#" class="example">See example</a>',
        examples: ['nfn/ui/bugs/examples/elevation.jpg'],
        placeholder: 'Elevation',
        type: 'text',
        required: false
      }, {
        title: 'Latitude',
        description: 'The latitude where the specimen was found.',
        placeholder: 'Latitude',
        type: 'text',
        required: false
      }, {
        title: 'Longitude',
        description: 'The longitude where the specimen was found.',
        placeholder: 'Longitude',
        type: 'text',
        required: false
      }
    ];

    this.model.set("currentRecord", 0);
    this.model.set("currentStep", -1);
    this.model.set("stepsCount", this.guide.length);

    this.model.bind("change:currentRecord", function(model) {
      that.statusBar.$counter.text(model.get("currentRecord"));
    });

    this.model.bind("change:currentStep", function() {
      that.updateStepCounter();

      that.updateInputField();
      that.updatePlaceholder();
      that.updateHelper();
    });

    this.photos = new nfn.ui.collection.Photos();
    this.transcriptions = new nfn.ui.collection.Transcriptions();

    this.addViews();
    this.render();
  },

  addViews: function() {
    // Loads the transcriber widget
    this.transcriberWidget = new nfn.ui.view.BugsWidget({
      model: new nfn.ui.model.BugsWidget(),
      template: $("#transcriber-bugs-widget-template").html(),
      parent: this
    });
    this.addView(this.transcriberWidget);

    // Loads the backdrop
    this.backdrop = new nfn.ui.view.Backdrop({
      model: new nfn.ui.model.Backdrop(),
      parent: this
    });
    this.addView(this.backdrop);

    // Loads the highlight
    this.highlight = new nfn.ui.view.Highlight({
      model: new nfn.ui.model.Highlight(),
      template: $("#highlight-template").html(),
      parent: this
    });
    this.addView(this.highlight);

    // Loads the spinner
    this.spinner = new nfn.ui.view.Spinner({ 
      model: new nfn.ui.model.Spinner(),
      settings: { lines: 10, length: 3, width: 4, radius: 8, color: '#333333' },
      parent: this
    });
    this.addView(this.spinner);

    // Loads the helper
    this.helper = new nfn.ui.view.BugsHelper({
      model: new nfn.ui.model.BugsHelper(),
      template: $("#helper-template").html(),
      parent: this
    });
    this.addView(this.helper);

    // Loads the StatusBar
    this.statusBar = new nfn.ui.view.StatusBar({
      model: new nfn.ui.model.StatusBar({
        title: "Calbug",
        description: "from Essig Museum Collections"
      }),
      template: $("#statusbar-template").html(),
      parent: this
    });
    this.addView(this.statusBar);

    // Loads the selection
    this.selection = new nfn.ui.view.Selection({
      model: new nfn.ui.model.Selection(),
      parent: this
    });
    this.addView(this.selection);
  },

  addPhoto: function(url, callback) {
    var that = this;

    var photo = new nfn.ui.view.Photo({
      model: new nfn.ui.model.Photo({ url: url }),
      parent: this
    });

    photo.model.set("view", photo);

    callback && photo.model.set("callback", callback);

    this.photos.push(photo.model);
  },


  skip: function() {
    this.launcher.disable();

    this.backdrop.hide();
    this.magnifier.hide();
    this.helper.hide();
    this.transcriberWidget.hide();

    var that = this;

    var callback = function () {
      that.startTranscribing();
      that.spinner.hide();

      $(".photos img").animate({ marginLeft: "0" }, 500);
      that.$backgroundMessage.fadeOut(250);

    };

    var that = this;

    Spine.trigger("skipTranscription");

    $(".photos img").animate({ marginLeft: -2*$(document).width() }, 500);

    this.helper.closeTooltip();             // TODO: add test
    this.transcriberWidget.closeTooltip();  // TODO: add test

  },

  finish: function() {

    this.$backgroundMessage.html("<h1>Thanks!</h1><p class='loading'>Loading next bug...</p>");

    this.backdrop.hide();
    this.helper.hide();
    this.transcriberWidget.hide();

    this.nextRecord();

    var that = this;

    var callback = function () {
      that.startTranscribing();
      that.spinner.hide();
      $(".photos img").animate({ marginLeft: "0" }, 500);

      that.$backgroundMessage.fadeOut(250, function() {
        that.$backgroundMessage.html("");
      });

    };

    var that = this;

    if (this.getPendingFieldCount() == this.guide.length) {
      Spine.trigger('skipTranscription');
    } else {
      Spine.trigger("finishedTranscription", this.transcriptions);
    }

    $(".photos img").animate({ marginLeft: -2*$(document).width() }, 500);

    this.helper.closeTooltip();             // TODO: add test
    this.transcriberWidget.closeTooltip();  // TODO: add test

    delete this.transcriptions;
    this.transcriptions = new nfn.ui.collection.Transcriptions();

  },

  showPhoto: function(i) {
    var that = this;

    this.$el.append(this.spinner.render());
    this.spinner.show().spin();

    this.$backgroundMessage.fadeIn(250);

    var photo = this.photos.at(i);

    if (photo) {
      photo.get("view").render();
      photo.get("view").$el.css("margin-left", 1500);
    }
  },

  addSelection: function() {
    if (this.$el.find(".selection").length <= 0)
      this.$el.append(this.selection.render());
  },

  removeSelection: function() {
    this.selection.remove();
  },

  updateSelection: function(startX, startY, endX, endY) {

    var
    dw         = $(document).width(),
    dh         = $(document).height();

    var s = {};

    if (endX > startX) { // right

      s = { right: "auto", left:  startX , width: endX - startX };
      this.selection.model.set("left", startX);

    } else { // left

      s = { left:"auto", width: startX - endX, right: dw -startX };
      this.selection.model.set("left", endX);

    }

    if (endY > startY) { // bottom

      style = { bottom: "auto", top: startY, height: (endY - startY) };
      this.selection.model.set("top",  startY);

    } else { // top

      style = { top: "auto", height: startY - endY , bottom: dh - startY};
      this.selection.model.set("top",  endY);

    }

    s = $.extend(s, style);
    s = $.extend({ visibility: "visible" }, s);

    this.selection.model.set("width",  Math.abs(endX - startX));
    this.selection.model.set("height", Math.abs(endY - startY));

    this.selection.$el.css(s);
  },

  addHighlight: function(dimensions) {

    this.highlight.show();
    this.highlight.create(dimensions);
    this.$el.find(".photos").removeClass("selectable");
    this.launcher.enable();
    this.disableMouseWheel();

  },


  stopTranscribing: function() {

    this.model.set("isDown", false);
    this.$el.find(".photos").off("mousedown");
    this.$el.off("mouseup");

  },

  startTranscribing: function() {
    this.model.set("currentStep", 0);

     // add the helper widget
    var helperY = $(window).height() - this.helper.height() - 110;

    this.helper.$el.css({top: helperY});
    // this.helper.setPosition(0, helperY)
    // this.helper.$el.css({left: "50%", marginLeft: -1 * this.helper.$el.outerWidth() / 2});
    this.helper.show();


    // add the transcriber widget
    var twX = "50%",
        twY = this.helper.top() + this.helper.height() + 35;

    // this.transcriberWidget.$el.css({ left: "50%", marginLeft: -1*this.transcriberWidget.width()/2 });
    this.transcriberWidget.$el.css({top: twY})
    this.transcriberWidget.show();

    helperWidget = this.helper;
    transcriber = this.transcriberWidget

    this.transcriberWidget.$el.draggable({
      drag: function(e, ui) {
        helperWidget.$el.css({
          top: ui.position.top - helperWidget.$el.outerHeight() - 11,
          left: ui.position.left
        });
      }
    });
  },

  onMouseUp: function() {
    if (this.model.get("isDown")) {
      if ( this.selection.isDefined() ) {
        this.model.set("isDown", false);

        this.addHighlight(this.selection.getDimensions());
        this.stopTranscribing();
        this.removeSelection();
        this.launcher.show();
      }
    }
  },

  onMouseDown: function(e) {

    var
    that = this,
    initialxpos = e.pageX,
    initialypos = e.pageY;

    this.model.set("isDown", true);

    this.selection.$el.css("visibility", "hidden");
    this.addSelection();

    this.$el.mousemove(function(e){
      that.updateSelection(initialxpos, initialypos, e.pageX, e.pageY);
    });
  },

  getPendingFieldCount: function() {
    return (this.guide.length - this.transcriptions.length);
  },

  updateStepCounter: function() {
    var currentStep = this.model.get("currentStep") + 1;
    this.transcriberWidget.$step.text(currentStep + "/" + this.model.get("stepsCount"));
  },

  updateInputField: function() {
    var value = "",
        currentStep = this.model.get("currentStep"),
        stepGuide = this.guide[currentStep],
        width = 580;

    var transcription = this.getStepData(this.model.get("currentStep"));

    if (transcription) { // gets stored value
      value = transcription.get("value");
    }

    if (stepGuide.inputWidth != undefined) {
      width = stepGuide.inputWidth;
    }

    this.transcriberWidget.model.set({ type: stepGuide.type, inputWidth: width, value: value });
  },

  updatePlaceholder: function() {
    var currentStep = this.model.get("currentStep"),
        stepGuide = this.guide[currentStep];

    this.transcriberWidget.model.set("required", stepGuide.required);
    this.transcriberWidget.model.set("placeholder", stepGuide.placeholder);
  },

  updateHelper: function() {
    var currentStep = this.model.get("currentStep"),
        stepGuide = this.guide[currentStep];

    this.helper.model.set("required", stepGuide.required);
    this.helper.model.set("title", stepGuide.title);
    this.helper.model.set("description", stepGuide.description);
    this.helper.model.set("urls", stepGuide.examples);
  },

  getStepData: function(step) {
    return this.transcriptions.find(function(transcription) {
      return transcription.get("step") === step;
    });
  },

  saveCurrentStep: function() {
    var transcription = this.getStepData(this.model.get("currentStep"));

    if (transcription) {
      transcription.set("value", this.transcriberWidget.getValue());
    } else {
      transcription = new nfn.ui.model.Transcription({
        step:  this.model.get("currentStep"),
        value: this.transcriberWidget.getValue()
      });

      this.transcriptions.push(transcription);
    }
  },

  addScroll: function() {
    if (!this.model.get("scrollbar")) {
      this.model.set("scrollbar", true);
      this.$el.find(".photos").mCustomScrollbar();
    }
  },

  enableMouseWheel: function() {
    this.$el.find(".photos").mCustomScrollbar("enableMouseWheel");
  },

  disableMouseWheel: function() {
    this.$el.find(".photos").mCustomScrollbar("disableMouseWheel");
  },

  render: function() {
    this.$el.addClass(this.model.get("type"));

    this.$el.append(this.backdrop.render());
    this.$el.append(this.helper.render());
    this.$el.append(this.statusBar.render());
    this.$el.append(this.transcriberWidget.render());

    // Adds the message placeholder
    this.$el.append('<div class="message" />');
    this.$backgroundMessage = this.$el.find(".message");

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    // This prevents the image to be draggable (hack for Firefox)
    $(document).on("dragstart", ".photos img", function() {
      return false;
    });

    $(window).on("resize", this.onResize);

    $("body").append(this.$el);
    this.$el.height($(window).height());

    return this.$el;
  }
});