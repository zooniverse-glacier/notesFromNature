nfn.ui.model.Widget = Backbone.Model.extend({ });

nfn.ui.view.Widget = nfn.core.View.extend({

  defaults: {
    speed: 300
  },
  setWidth: function(w, animated) {

    this.model.set("width", w);
    var h = this.model.get("height");

    if (animated) {
      this.$el.animate({ width: w, height: h }, this.defaults.speed);
    } else {
      this.$el.css({ width: w, height: h });
    }

  },

  setHeight: function(h, animated) {

    this.model.set("height", h);
    var w = this.model.get("width");

    if (animated) {
      this.$el.animate({ width: w, height: h }, this.defaults.speed);
    } else {
      this.$el.css({ width: w, height: h });
    }

  },


  setSize: function(w, h, animated) {

    this.model.set("width", w);
    this.model.set("height", h);

    if (animated) {
      this.$el.animate({ width: w, height: h }, this.defaults.speed);
    } else {
      this.$el.css({ width: w, height: h });
    }

  },

  setDimensions: function(dimensions) {

    this.setPosition(dimensions.x, dimensions.y);
    this.setSize(dimensions.w, dimensions.h);

  },

  width: function() {

    if ( this.model.get("width") == undefined )
      this.model.set("width", this.$el.width());

    return this.model.get("width");

  },

  height: function() {

    if ( this.model.get("height") == undefined )
      this.model.set("height", this.$el.height());

    return this.model.get("height");

  },

  left: function() {

    if ( this.model.get("left") == undefined )
      this.model.set("left", this.$el.position().left);

    return this.model.get("left");

  },

  top: function() {

    if ( this.model.get("top") == undefined )
      this.model.set("top", this.$el.position().top);

    return this.model.get("top");

  },


  getSize: function() {

    return { w: this.model.get("width"), h: this.model.get("height") };

  },

  /*
  * Returns the dimensions and position of the selection
  */
  getDimensions: function() {

    return {
      x: this.model.get("left"),
      y: this.model.get("top"),
      w: this.model.get("width"),
      h: this.model.get("height")
    };

  },

  setPosition: function(left, top, animated) {

    this.model.set("top", top);
    this.model.set("left", left);

    if (animated) {
      this.$el.animate({ top: top, left: left }, this.defaults.speed);
    } else {
      this.$el.css({ top: top, left: left });
    }

  },

  getPosition: function() {

    return { x: this.model.get("left"), y: this.model.get("top") };

  },

  center: function(w, h) {

    //this.$el.css({ left: "50%", marginLeft: -1*this.width()/2 });
    //this.$el.css({ top: "50%",  marginTop: -1*this.height()/2 });

    var x = w/2 - this.width()/2;
    var y = h/2 - this.height()/2;

    this.model.set("left", x);
    this.model.set("top", y);

    this.$el.css({ left: x, top: y});

  },

  toggle: function() {

    if (this.model.get("hidden")) {
      this.$el.fadeOut(250);
    } else {
      this.$el.fadeIn(250);
    }

  },

  show: function() {
    this.model.set("hidden", false);
  },

  hide: function() {
    this.model.set("hidden", true);
  }

});

nfn.ui.model.Backdrop = Backbone.Model.extend({ });

nfn.ui.view.Backdrop = nfn.ui.view.Widget.extend({

  className: 'backdrop',

  initialize: function() {

    _.bindAll( this, "toggle" );

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;

  },

  render: function() {

    return this.$el;

  }

});


// Highlight ---------------------------------------

nfn.ui.model.Highlight = Backbone.Model.extend({ });

nfn.ui.view.Highlight = nfn.ui.view.Widget.extend({

  className: 'highlight',

  events: {

    "click .close" : "close"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "close" );

    this.template = new nfn.core.Template({
      template: this.options.template
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;

  },

  create: function(dimensions) {
    if (this.parent.$el.find("." + this.className).length <= 0) {
      this.parent.$el.append(this.render());
    }

    this.setDimensions(dimensions);
  },

  close: function() {

    if (this.parent) {
      this.parent.launcher.$startButton.addClass("disabled");
      this.parent.startTranscribing();
    }

    this.hide();
  },

  render: function() {

    this.$el.append(this.template.render());

    this.$closeButton = this.$el.find(".close");

    return this.$el;

  }

});


// Spinner ---------------------------------------

nfn.ui.model.Spinner = Backbone.Model.extend({ });

nfn.ui.view.Spinner = nfn.ui.view.Widget.extend({

  className: 'loader',

  initialize: function() {

    _.bindAll( this, "toggle", "toggleSpin" );

    this.add_related_model(this.model);

    this.model.bind("change:hidden",  this.toggle);
    this.model.bind("change:animate", this.toggleSpin);

    this.parent = this.options.parent;

  },

  toggleSpin: function() {

    if (this.model.get("animate")) {
      this.spinner =  new Spinner({ lines: 10, length: 3, width: 4, radius: 8, color: '#fff' }).spin();
      this.$el.append( this.spinner.el);

    } else {
      this.spinner.stop();
    }

  },

  spin: function() {
    this.model.set("animate", true);

  },

  stop: function() {
    this.model.set("animate", false);
  },

  render: function() {

    return this.$el;

  }

});

// Helper ---------------------------------------

nfn.ui.model.Helper = Backbone.Model.extend({ });

nfn.ui.view.Helper = nfn.ui.view.Widget.extend({

  className: 'helper bar',

  initialize: function() {

    _.bindAll( this, "toggle", "updateTitle", "updateDescription" );

    this.template = new nfn.core.Template({
      template: this.options.template
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);
    this.model.bind("change:title", this.updateTitle);
    this.model.bind("change:description", this.updateDescription);

    this.parent = this.options.parent;

  },

  updateTitle: function() {
    this.$title.text(this.model.get("title"));
  },

  updateDescription: function() {
    this.$description.text(this.model.get("description"));
  },

  render: function() {

    this.$el.append(this.template.render());

    this.$title       = this.$el.find(".title");
    this.$description = this.$el.find(".description");

    return this.$el;

  }

});

// SernacWidget --------------------------------------

nfn.ui.model.SernacWidget = Backbone.Model.extend({ });

nfn.ui.view.SernacWidget = nfn.ui.view.Widget.extend({

  className: 'sernac-widget bar',

  events: {

    "click .button.ok" :     "ok",
    "click .button.finish" : "finish",
    "click .skip" :          "showSkipPane"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "updatePlaceholder", "updateType");

    this.template = new nfn.core.Template({
      template: this.options.template
    });

    this.templates = [];

    this.templates["text"] = new nfn.core.Template({
      template: '<input type="text" placeholder="" />'
    });

    this.templates["date"] = new nfn.core.Template({
      template: $("#date-input-template").html()
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden",      this.toggle);
    this.model.bind("change:placeholder", this.updatePlaceholder);
    this.model.bind("change:type",        this.updateType);

    this.parent = this.options.parent;

  },

  ok: function() {

    this.parent.saveCurrentStep();

    this.clearInput();
    this.parent.nextStep();

  },

  showSkipPane: function() {

  },

  finish: function() {

    this.parent.finish();

  },

  clearInput: function() {

    this.$input.val("");

  },

  resize: function() {

    var type = this.model.get("type");

    if (type == 'text') {
      this.setWidth(520, true);
    } else if ( type == 'date' ) {
      this.setWidth(680, true);
    }

  },

  getValue: function() {
    var type = this.model.get("type");

    if (type == 'text') {

      return this.$input.val();

    } else if ( type == 'date') {

      var month = this.$el.find(".month").val();
      var day   = this.$el.find(".day").val();
      var year  = this.$el.find(".year").val();

      if (month && day && year) {
        return month + "/" + day + "/" + year;
      } else {
        return "";
      }

    }

  },

  updatePlaceholder: function() {
    var type = this.model.get("type");

    if (type == 'text') {

      this.$input.attr("placeholder", this.model.get("placeholder"));

    } else {

      var placeholders = this.model.get("placeholder");

      this.$input.find(".day").attr("placeholder", placeholders[0]);
      this.$input.find(".month").attr("placeholder", placeholders[1]);
      this.$input.find(".year").attr("placeholder", placeholders[2]);
    }
  },

  updateType: function() {

    var type = this.model.get("type");

    this.$el.find(".input_field").removeClass("text");
    this.$el.find(".input_field").removeClass("date");
    this.$el.find(".input_field").addClass(type);

    if (type == 'text') {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();

      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    } else {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    }

    this.resize();

  },

  render: function() {

    this.$el.append(this.template.render());

    this.$okButton     = this.$el.find(".button.ok");
    this.$skip         = this.$el.find(".skip");
    this.$finishButton = this.$el.find(".button.finish");
    this.$step         = this.$el.find(".step");
    this.$input        = this.$el.find('.input_field input[type="text"]');

    return this.$el;

  }

});

// Launcher --------------------------------------

nfn.ui.model.Launcher = Backbone.Model.extend({ });

nfn.ui.view.Launcher = nfn.ui.view.Widget.extend({

  events: {

    "click .button.start" : "start"

  },

  className: "launcher bar",

  initialize: function() {

    _.bindAll( this, "start", "toggle", "toggleButton" );

    this.template = new nfn.core.Template({
      template: this.options.template
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);
    this.model.bind("change:disabled", this.toggleButton);

    this.parent = this.options.parent;

  },

  toggleButton: function() {

    if (this.model.get("disabled") == true) {
      this.$startButton.addClass("disabled");
    } else {
      this.$startButton.removeClass("disabled");
    }

  },

  enable: function() {
    this.model.set("disabled", false);
  },

  disable: function() {
    this.model.set("disabled", true);
  },

  start: function(e) {

    e.preventDefault();
    e.stopPropagation();

    if (!this.model.get("disabled")) this.parent.addMagnifier();

  },

  render: function() {

    var $el = this.$el;

    $el.append(this.template.render());

    this.$startButton = $el.find(".button.start");
    this.$message     = $el.find("span");

    return $el;
  }

});

// Magnifier ---------------------------------------

nfn.ui.model.Magnifier = Backbone.Model.extend({ });

nfn.ui.view.Magnifier  = nfn.ui.view.Widget.extend({

  className: 'magnifier',

  initialize: function() {

    _.bindAll( this, "toggle" );

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;


  },

  create: function(dimensions) {
    if (this.parent.$el.find("." + this.className).length <= 0) {
      this.parent.$el.append(this.render());
    }

    this.setDimensions(dimensions);
  },

  render: function() {

    return this.$el;

  }

});

// Selection ---------------------------------------

nfn.ui.model.Selection = Backbone.Model.extend({ });

nfn.ui.view.Selection  = nfn.ui.view.Widget.extend({

  className: 'selection',

  initialize: function() {

    _.bindAll( this, "save" );

    this.parent = this.options.parent;
  },

  isDefined: function() {

    if (this.model.get("top") && this.model.get("left") && this.model.get("height") && this.model.get("width")) return true;
    else return false;

  },

  setPosition: function(left, top) {

    this.model.set("top", top);
    this.model.set("left", left);

    this.$el.css({ top: top, left: left});

  },

  save: function() {

    //this.parent.saveCurrentStep();

    //var transcription = new nfn.ui.model.Transcription(this.getDimensions());
    //this.parent.transcriptions.push(transcription);

    //console.log("STATUS", this.parent.transcriptions.length, this.getDimensions());

  },

  remove: function() {
    this.$el.remove();
  },

  render: function() {

    return this.$el;

  }

});

// Transcriptions -------------------------------------

nfn.ui.model.Transcription = Backbone.Model.extend({ });

nfn.ui.collection.Transcriptions = Backbone.Collection.extend({
  model: nfn.ui.model.Transcription,
});

// Photos
// =================================

nfn.ui.model.Photo = Backbone.Model.extend({
});

nfn.ui.view.Photo = nfn.core.View.extend({

  initialize: function() {

    _.bindAll( this, "toggle" );

    this.parent = this.options.parent;

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);
    this.model.bind("change:hidden", this.toggle);

  },

  toggle: function() {

    if (this.model.get("hidden")) {
      this.$el.fadeOut(250);
    } else {
      this.$el.fadeIn(250);
    }

  },

  show: function() {
    this.model.set("hidden", false);
  },

  hide: function() {
    this.model.set("hidden", true);
  },

  render: function() {
    var that = this;

    var $img = this.$el = $("<img />");

    this.$el.attr("src", this.model.get("url"));

    this.$el.imagesLoaded(function() {
      that.parent.$el.find(".photos").append(that.$el);

      //$img.css({ left: $(document).width()/2 - $img.width()/2 });

      that.show();
      that.parent.startTranscribing();
      that.parent.spinner.hide();
    });

  }

});

nfn.ui.collection.Photos = Backbone.Collection.extend({
  model: nfn.ui.model.Photo
});

/*
* Default transcriber model
*
**/
nfn.ui.model.Transcriber = Backbone.Model.extend({

  defaults: {
    visible: true,
    type: 'default'
  }

});

/*
* Double page transcriber model
*
**/
nfn.ui.model.DoublePage = nfn.ui.model.Transcriber.extend({

  defaults: {
    type: 'double'
  }

});

/*
* Sernac transcriber model
*
**/
nfn.ui.model.Sernac = nfn.ui.model.Transcriber.extend({

  defaults: {
    type: 'sernac'
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

// Transcriber
// =================================

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
    //this.spinner.setPosition(100, 200);
    this.spinner.spin();

    var photo = this.photos.at(i);
    photo.get("view").render();
  },

  loadPhoto: function(url) {

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

    this.model.set("currentRecord", -1);
    this.model.set("currentStep", -1);
    this.model.set("stepsCount", this.guide.length);

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

    console.log(this.selection.model.toJSON(), this.transcriptions.toJSON()[0]);

    /*this.magnifier.hide();
    this.helper.hide();
    this.transcriberWidget.hide();
    this.backdrop.hide();

    this.showPhoto(1);*/

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

      this.updateSelection(x, y, x+w, y+h);
      //this.selection.save();

      //console.log(x,y,w,h);

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

      this.helper.show();
      this.helper.setPosition(this.magnifier.left(), this.magnifier.top() - this.helper.height() - 30 );

      this.model.set("currentStep", 0);

      this.transcriberWidget.show();
      this.transcriberWidget.setPosition(this.magnifier.left(), this.magnifier.top() + this.magnifier.height() + 20);

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
    this.launcher.setPosition($(document).width()/2 - this.launcher.width()/2, $(document).height() - this.launcher.height() - 100 );
    this.launcher.show();

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

    console.log("STATUS", this.transcriptions.toJSON());
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
    this.$el.append(this.transcriberWidget.render());

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    $("body").append(this.$el);

    return this.$el;
  }
});
