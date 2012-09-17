// TRANSCRIBER -----------------------------------

nfn.ui.model.Transcriber = Backbone.Model.extend({

  defaults: {
    visible: true,
    type: 'default'
  }

});

// DOUBLE PAGE TRANSCRIBER --------------------------------

nfn.ui.model.DoublePage = nfn.ui.model.Transcriber.extend({

  defaults: {
    type: 'double'
  }

});

// SERNAC PAGE TRANSCRIBER -----------------------------

nfn.ui.model.Sernac = nfn.ui.model.Transcriber.extend({

  defaults: {
    type: 'sernac'
  },

  nextRecord: function() {
    var currentRecord = this.get("currentRecord");
    this.set("currentRecord", currentRecord + 1);
  },

  previousRecord: function() {
    var currentRecord = this.get("currentRecord");
    this.set("currentRecord", currentRecord - 1);
  },

  nextStep: function() {

    var currentStep = this.get("currentStep");

    if (currentStep + 1 >= this.get("stepsCount")) {
      this.set("currentStep", 0);
    } else {
      this.set("currentStep", currentStep + 1);
    }

  },

  previousStep: function() {

    var currentStep = this.get("currentStep");

    if (currentStep - 1 < 0) {
      this.set("currentStep", this.get("stepsCount") );
    } else {
      this.set("currentStep", currentStep - 1);
    }
  }

});

// TRANSCRIBER ---------------------------------

nfn.ui.view.Transcriber = nfn.core.View.extend({

  className: "transcriber",

  initialize: function() {

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);

    this.photos         = new nfn.ui.collection.Photos();
    this.transcriptions = new nfn.ui.collection.Transcriptions();

    this.render();

  },

  showPhoto: function(i) {
    var that = this;

    this.$el.append(this.spinner.render());
    this.spinner.show().spin();

    var photo = this.photos.at(i);

    if (photo) {
      photo.get("view").render();
    }

  },

  loadPhoto: function(url) {

    var photo = new nfn.ui.view.Photo({
      model: new nfn.ui.model.Photo({ url: url }),
      parent: this
    });

    photo.model.set("view", photo);
    this.photos.push(photo.model);

    this.showPhoto(this.photos.length - 1);

  },

  addPhoto: function(url) {

    var photo = new nfn.ui.view.Photo({
      model: new nfn.ui.model.Photo({ url: url }),
      parent: this
    });

    photo.model.set("view", photo);
    this.photos.push(photo.model);

  },

  render: function() {

    this.$el.addClass(this.model.get("type"));

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    $("body").append(this.$el);

    return this.$el;
  }

});

nfn.ui.view.DoublePage = nfn.ui.view.Transcriber.extend({

  initialize: function() {

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);

    this.photos         = new nfn.ui.collection.Photos();
    this.transcriptions = new nfn.ui.collection.Transcriptions();

    /*this.widget = new nfn.ui.view.Widget({
      model: new nfn.ui.model.Widget(),
      template: this.options.widgetTemplate,
      parent: this
      });

      this.addView(this.widget);*/

      this.render();

  },

  render: function() {

    this.$el.addClass(this.model.get("type"));

    //this.$el.append(this.widget.render());

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    $("body").append(this.$el);

    return this.$el;
  }
});

// SERNAC TRANSCRIBER ------------------------------------------

nfn.ui.view.SernacTranscriber = nfn.ui.view.Transcriber.extend({

  initialize: function() {

    var that = this;

    _.bindAll(this, "updateInputField", "updatePlaceholder", "updateHelper", "updateStepCounter", "addMagnifier", "onMouseDown", "onMouseUp");

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);

    this.guide = [
      {
        title: 'Record code' ,
        description: 'It\'s a 4 digit number located at the top right of the page.',
        placeholder: 'Code',
        type: "text"
      }, {
        title: 'Genus & species',
        description: '2 or 3 latin words in the first line, next to the margin.',
        placeholder: 'Species',
        type: "text"
      }, {
        title: 'Collection location',
        description: 'A place name, in the second line.',
        placeholder: 'Location',
        type: "text"
      }, {
        title: 'Collection date ',
        description: 'A date in the third line.',
        placeholder: ['day', 'month', 'year'],
        type: "date"
      }, {
        title: 'Collector',
        description: 'A person name in the same line than the date.',
        placeholder: 'Collector',
        type: "text"
      }, {
        title: 'Transferrer',
        description: 'A person name at the top right of the record.',
        placeholder: 'Transferer',
        type: "text"
      }, {
        title: 'Transfer date',
        description: 'A date under the transferrer.',
        placeholder: 'Transfer date',
        type: "text"
      }, {
        title: 'Additional information',
        description: 'Can you detect this information?.',
        placeholder: 'Other',
        type: "text"
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
      that.updateHelper();

      that.updateInputField();
      that.updatePlaceholder();

    });

    this.photos         = new nfn.ui.collection.Photos();
    this.transcriptions = new nfn.ui.collection.Transcriptions();

    // Loads the transcriber widget
    this.transcriberWidget = new nfn.ui.view.SernacWidget({
      model: new nfn.ui.model.SernacWidget(),
      template: $("#transcriber-widget-template").html(),
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
      parent: this
    });

    this.addView(this.spinner);

    // Loads the helper
    this.helper = new nfn.ui.view.Helper({
      model: new nfn.ui.model.Helper(),
      template: $("#helper-template").html(),
      parent: this
    });

    this.addView(this.helper);

    // Loads the helper
    this.statusBar = new nfn.ui.view.StatusBar({

      model: new nfn.ui.model.StatusBar({
        title: "Herbarium Collection",
        description: "from The Natural History Museum of London"
      }),

      template: $("#statusbar-template").html(),
      parent: this
    });

    this.addView(this.statusBar);

    // Loads the magnifier
    this.magnifier = new nfn.ui.view.Magnifier({
      model: new nfn.ui.model.Magnifier(),
      parent: this
    });

    this.addView(this.magnifier);

    // Loads the selection
    this.selection = new nfn.ui.view.Selection({
      model: new nfn.ui.model.Selection(),
      parent: this
    });

    this.addView(this.selection);

    // Loads the launcher
    this.launcher = new nfn.ui.view.Launcher({
      model: new nfn.ui.model.Launcher(),
      template: $("#launcher-template").html(),
      parent: this
    });

    this.addView(this.launcher);

    this.render();

  },

  finish: function() {

    //console.log(this.selection.model.toJSON(), this.transcriptions.toJSON()[0]);

    this.backdrop.hide();
    this.magnifier.hide();
    this.helper.hide();
    this.transcriberWidget.hide();

    this.nextRecord();

    // TODO: request next photo and the URL here
    this.loadPhoto("http://assets.javierarce.com/biotrans/transcriber_sernac_02.png");

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
    this.launcher.$startButton.removeClass("disabled");

  },

  addMagnifier: function() {

    if (this.selection.isDefined()) {

      var dimensions = this.highlight.getDimensions();

      var $img = this.$el.find(".photos img:first-child");
      var $img2x = $img.clone();

      var
      x = Math.abs($img.offset().left - dimensions.x),
      y = Math.abs($img.offset().top - dimensions.y),
      w = dimensions.w,
      h = dimensions.h;

      this.model.set("currentStep", 0);

      this.updateSelection(x, y, x+w, y+h);

      if (w < 480) w = 540;
      if (h < 350) h = 350;

      if (w > 600) w = 600;
      if (h > 500) h = 500;

      this.highlight.hide();

      this.magnifier.create({ x: $(document).width()/2 - w/2, y: $(document).height()/2 - h/2, w: w, h: h });
      this.magnifier.$el.empty();
      this.magnifier.$el.append($img2x);

      this.removeSelection();

      this.launcher.hide();

      this.backdrop.show();

      var magnifierWidth = this.magnifier.width();

      var // add the helper widget
      helperX = this.magnifier.left(),
      helperY = this.magnifier.top() - this.helper.height() - 35;

      this.helper.setWidth(magnifierWidth).setPosition(helperX, helperY).show();

      var // add the transcriber widget
      twX = this.magnifier.left(),
      twY = this.magnifier.top() + this.magnifier.height() + 10;

      this.transcriberWidget.setWidth(magnifierWidth).setPosition(twX, twY).show();

      if ($.browser.msie && $.browser.version == 8) {
        $img2x.css({ top: -1*selection_y, left: -1*selection_x });
      } else {
        $img2x.css({ top: -2*y, left: -2*x });
      }

    }
  },

  stopTranscribing: function() {

    this.model.set("isDown", false);
    this.$el.find(".photos").off("mousedown");
    this.$el.off("mouseup");

  },

  startTranscribing: function() {

    if (this.launcher.model.get("hidden")) {
      this.launcher.setPosition($(document).width()/2 - this.launcher.width()/2, $(document).height() - this.launcher.height() - 100 );
      this.launcher.show();
    }

    this.$el.find(".photos").addClass("selectable");
    this.$el.find(".photos").on("mousedown", this.onMouseDown);
    this.$el.on("mouseup",   this.onMouseUp);

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

  updateStepCounter: function() {
    var currentStep = this.model.get("currentStep") + 1;
    this.transcriberWidget.$step.text( currentStep + "/" + this.model.get("stepsCount"));
  },

  updateInputField: function() {

    var
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    this.transcriberWidget.model.set("type", stepGuide.type);

  },

  updatePlaceholder: function() {

    var
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    this.transcriberWidget.model.set("placeholder", stepGuide.placeholder);

  },

  updateHelper: function() {

    var
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    this.helper.model.set("title", stepGuide.title);
    this.helper.model.set("description", stepGuide.description);

  },

  saveCurrentStep: function() {

    if (this.transcriptions.at(this.model.get("currentStep"))) {

      var transcription = this.transcriptions.at(this.model.get("currentStep"));
      transcription.set("value", this.transcriberWidget.getValue());

    } else {

      var transcription = new nfn.ui.model.Transcription({
        step:  this.model.get("currentStep"),
        value: this.transcriberWidget.getValue()
      });

      this.transcriptions.push(transcription);

    }

    //console.log("STATUS", this.transcriptions.toJSON());
  },

  nextRecord: function() {
    this.model.nextRecord();
  },

  previousRecord: function() {
    this.model.previousRecord();
  },

  nextStep: function() {
    this.model.nextStep();
  },

  previousStep: function() {
    this.model.previousStep();
  },

  render: function() {

    this.$el.addClass(this.model.get("type"));

    this.$el.append(this.backdrop.render());
    this.$el.append(this.launcher.render());
    this.$el.append(this.helper.render());
    this.$el.append(this.statusBar.render());
    this.$el.append(this.transcriberWidget.render());

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    // This prevents the image to be draggable (hack for Firefox)
    $(document).on("dragstart", ".photos img", function() {
      return false;
    });

    $("body").append(this.$el);

    return this.$el;
  }
});
