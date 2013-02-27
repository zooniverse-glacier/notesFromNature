// BirdsWidget -------------------------------------------
nfn.ui.model.BirdsWidget = Backbone.Model.extend({
  defaults: {
    speed: 250,
    input_hidden:       true,
    start_hidden:       false,
    steps_hidden:       true,
    finish_hidden:      true,
  }
});

nfn.ui.view.BirdsWidget = nfn.ui.view.Widget.extend({
  className: 'birds-widget bar',
  events: {
    'click .btn.ok': 'ok',
    'click .btn.finish': 'showFinishTooltip',
    'click .btn.start': 'start',
    'click .example': 'showExample',
    'click .btn.nextLine': 'nextLine',
    'click .skip': 'showSkipTooltip',
    'click .step': 'showStepTooltip'
  },

  initialize: function() {
    _.bindAll( this, "toggle", "start", "skip", "closeFinishTooltip", "closeExampleTooltip", "closeSkipTooltip", "closeStepTooltip", "toggleInput", "toggleStartButton", "toggleDraggable", "toggleSteps", "updatePlaceholder", "updateTitle", "updateDescription", "updateType", "resizeInput", "onStopDragging", "toggleResizable", "onStopResizing", "showExample", "showSkipTooltip", "gotoStep" );

    this.template = new nfn.core.Template({
      template: this.options.template
    });

    this.templates = [];

    this.templates["text"] = new nfn.core.Template({
      template: '<input type="text" placeholder="" />',
      type: 'mustache'
    });

    this.templates["location"] = new nfn.core.Template({
      template: '<input type="text" id="autocomplete" placeholder="" />',
      type: 'mustache'
    });

    this.templates["extra"] = new nfn.core.Template({
      template: $("#extra-input-template").html(),
      type: 'mustache'
    });

    this.templates["date"] = new nfn.core.Template({
      template: $("#date-input-template").html(),
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:title",         this.updateTitle);
    this.model.bind("change:description",   this.updateDescription);

    this.model.bind("change:hidden",        this.toggle);

    this.model.bind("change:draggable",     this.toggleDraggable);
    this.model.bind("change:resizable",     this.toggleResizable);

    this.model.bind("change:steps_hidden",  this.toggleSteps);
    this.model.bind("change:input_hidden",  this.toggleInput);
    this.model.bind("change:start_hidden",  this.toggleStartButton);

    this.model.bind("change:placeholder",   this.updatePlaceholder);
    this.model.bind("change:type",          this.updateType);
    this.model.bind("change:inputWidth",    this.resizeInput);

    this.parent = this.options.parent;
  },

  ok: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (this.parent.validateCurrentStep()) {
      this.parent.saveCurrentStep();

      // Initiate search on Encyclopedia of Life
      currentGuideStep = this.parent.guide[this.parent.model.get('currentStep')];
      if (currentGuideStep.hasOwnProperty('name') && currentGuideStep.name == 'species') {
        Spine.trigger('searchEol', this.getValue());
      }

      this.parent.nextStep();
    } else {
      console.log("the code doesn't validate");
    }

    //this.clearInput();
    this.closeTooltips();
  },


  skip: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();              // TODO: add test

    this.clearInput();
    this.parent.nextStep();
  },

  finish: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.showStartButton();

    this.hideInput();
    this.hideSteps();
    this.model.set("description", "Drag & resize the viewer to the record you want to transcribe.");

    this.setDraggable(true);
    this.setResizable(true);

    this.parent.saveCurrentStep();
    this.parent.finishTranscribing();

  },

  nextLine: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.clearInput();
    this.closeTooltips();

    this.parent.api.scrollByY(38, true);
    this.parent.saveCurrentStep();
    this.parent.nextLine();
  },

  showFinishTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.parent.saveCurrentStep();

    this.closeTooltips();

    if (!this.finishTooltip) this.createFinishTooltip(e);

  },

  showSkipTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.skipTooltip) this.createSkipTooltip(e);

  },

  showExample: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.exampleTooltip) this.createExampleTooltip(e);

  },

  gotoStep: function(e, i) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeStepTooltip();
    this.parent.model.set("currentStep", i);

  },

  showStepTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.stepTooltip) this.createStepTooltip(e);

  },

  createStepTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "There are still <u> " + this.parent.getPendingFieldCount() + " empty fields</u> for this record that should be completed before finishing.",
    main        = "Finish",
    secondary   = "Cancel";

    this.stepTooltip = new nfn.ui.view.Tooltip({

      className: "tooltip step",

      model: new nfn.ui.model.Tooltip({
        template: $("#tooltip-step-template").html(),
        links: this.parent.guide
      })

    });

    this.addView(this.stepTooltip);

    var that = this;

    this.stepTooltip.bind("onEscKey", this.closeStepTooltip);

    this.$el.append(this.stepTooltip.render());
    this.stepTooltip.show();

    var
    targetWidth  = $(e.target).width()/2,
    marginRight  = parseInt($(e.target).css("margin-right").replace("px", ""), 10),
    x            = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.stepTooltip.width()  + 30,
    y            = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.stepTooltip.height() - 17;

    var top = this.$el.offset().top - this.stepTooltip.$el.height() + 130;

    if (top < 0) {
      y = Math.abs(this.$el.offset().top  - $(e.target).offset().top) + 45;
      this.stepTooltip.$el.addClass("ne");
    } else {
      this.stepTooltip.$el.removeClass("ne");
    }

    this.stepTooltip.setPosition(x, y);

    var currentStep = this.parent.model.get("currentStep");

    this.stepTooltip.$el.find("li:nth-child(" + (currentStep + 1) + ")").addClass("selected");

    this.stepTooltip.$el.find("a").on("click", function(e) {
      var i = $(this).parent().index();
      that.gotoStep(e, i);
    });


    GOD.add(this.stepTooltip, this.closeStepTooltip);

  },

  closeStepTooltip: function(callback) {

    if (!this.stepTooltip) return;

    this.stepTooltip.hide();
    this.stepTooltip.clean();
    delete this.stepTooltip;

    callback && callback();

  },

  closeTooltips: function() {

    GOD.triggerCallbacks();

  },

  createSkipTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "If you can’t find the value, you can see examples that surely will help you",
    main        = "Skip field",
    secondary   = "Cancel";

    this.skipTooltip = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip({
        title: title,
        description: description,
        main: main,
        secondary: secondary
      })

    });

    this.addView(this.skipTooltip);

    var that = this;

    this.skipTooltip.bind("onEscKey",         this.closeSkipTooltip);
    this.skipTooltip.bind("onSecondaryClick", this.closeSkipTooltip);

    this.skipTooltip.bind("onMainClick",      function() {

      that.closeSkipTooltip(function() {
        that.skip();
      })

    });

    this.$el.append(this.skipTooltip.render());

    this.skipTooltip.show();

    var
    linkWidth   = $(e.target).width()/2,
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.skipTooltip.width() / 2 + linkWidth - 10,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.skipTooltip.height() - 40

    this.skipTooltip.setPosition(x, y);

    GOD.add(this.skipTooltip, this.closeSkipTooltip);

  },

  createExampleTooltip: function(e) {

    var
    main = "Close",
    url  = this.$el.find(".example").attr("data-src");

    this.exampleTooltip = new nfn.ui.view.Tooltip({

      className: "tooltip with-spinner",

      model: new nfn.ui.model.Tooltip({
        main: main,
        urls: [url],
        template: $("#tooltip-example-template").html()
      })

    });

    this.addView(this.exampleTooltip);

    var that = this;

    this.exampleTooltip.bind("onEscKey",    this.closeExampleTooltip);
    this.exampleTooltip.bind("onMainClick", this.closeExampleTooltip);

    this.$el.append(this.exampleTooltip.render());

    this.exampleTooltip.show();

    var
    linkWidth   = $(e.target).width()/2,
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.exampleTooltip.width() / 2 + linkWidth - 10,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.exampleTooltip.height() - 40

    this.exampleTooltip.setPosition(x, y);

    GOD.add(this.exampleTooltip, this.closeExampleTooltip);

  },

  createFinishTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "There are still <u> " + this.parent.getPendingFieldCount() + " empty fields</u> for this record that should be completed before finishing.",
    main        = "Finish",
    secondary   = "Cancel";

    this.finishTooltip = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip({
        title: title,
        description: description,
        main: main,
        secondary: secondary
      })

    });

    this.addView(this.finishTooltip);

    var that = this;

    this.finishTooltip.bind("onEscKey",         this.closeFinishTooltip);
    this.finishTooltip.bind("onSecondaryClick", this.closeFinishTooltip);
    this.finishTooltip.bind("onMainClick",      function() {

      that.closeFinishTooltip(function() {
        that.finish();
      })

    });

    this.$el.append(this.finishTooltip.render());
    this.finishTooltip.show();

    var
    targetWidth   = $(e.target).width()/2,
    marginRight = parseInt($(e.target).css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.finishTooltip.width() / 2 + targetWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.finishTooltip.height() - 40

    this.finishTooltip.setPosition(x, y);

    GOD.add(this.finishTooltip, this.closeFinishTooltip);

  },

  closeFinishTooltip: function(callback) {

    if (!this.finishTooltip) return;

    this.finishTooltip.hide();
    this.finishTooltip.clean();
    delete this.finishTooltip;

    callback && callback();

  },

  closeExampleTooltip: function(callback) {

    if (!this.exampleTooltip) return;

    this.exampleTooltip.hide();
    this.exampleTooltip.clean();
    delete this.exampleTooltip;

    callback && callback();

  },

  closeSkipTooltip: function(callback) {

    if (!this.skipTooltip) return;

    this.skipTooltip.hide();
    this.skipTooltip.clean();
    delete this.skipTooltip;

    callback && callback();

  },

  updatePlaceholder: function() {

    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      this.$input.attr("placeholder", this.model.get("placeholder"));

    } else if ( type == 'extra' ) {

      var placeholders = this.model.get("placeholder");

      this.$input.find(".gender").attr("placeholder",   placeholders[0]);
      this.$input.find(".age").attr("placeholder", placeholders[1]);
      this.$input.find(".register").attr("placeholder",  placeholders[2]);

    } else if ( type == 'date' ) {

      var placeholders = this.model.get("placeholder");

      this.$input.find(".day").attr("placeholder",   placeholders[0]);
      this.$input.find(".month").attr("placeholder", placeholders[1]);
      this.$input.find(".year").attr("placeholder",  placeholders[2]);
    }
  },

  updateTitle: function() {

    var that = this;

    this.$title.fadeOut(200, function() {
      that.$title.text(that.model.get("title"));
      that.$title.fadeIn(200);
    });

  },

  updateDescription: function() {

    var that = this;

    this.$description.fadeOut(200, function() {
      that.$description.html(that.model.get("description"));

      that.$exampleLink = that.$description.find(".example");
      that.$skipLink    = that.$description.find(".skip");

      that.$description.fadeIn(200);
    });

  },

  updateType: function() {

    var type = this.model.get("type");

    this.$el.find(".input_field").removeClass("text");
    this.$el.find(".input_field").removeClass("date");
    this.$el.find(".input_field").removeClass("extra");
    this.$el.find(".input_field").removeClass("location");
    this.$el.find(".input_field").addClass(type);

    if ( type == 'text' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();
      this.$el.find(".input_field .extra_field").remove();

      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    } else if ( type == 'location' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();
      this.$el.find(".input_field .extra_field").remove();

      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

      this.$input.addresspicker();

    } else if ( type == 'extra' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();
      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    } else if ( type == 'date' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .extra_field").remove();
      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    }

    this.clearInput();
    // this.focus();
  },

  focus: function() {

    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      this.$input.focus();

    } else if ( type == 'date' ) {

      this.$input[0].focus();

    }

  },

  resizeInput: function() {

    var type  = this.model.get("type");
    var width = this.model.get("inputWidth");

    if ( type == 'text' || type == 'location' ) {

      this.$el.find(".input_field").animate({ width: width }, true);
      this.$el.find(".input_field input").animate({ width: width - 45 }, true);

    } else if ( type == 'extra' ) {

      this.$el.find(".input_field").animate({ width: width }, true);

    }

  },

  start: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    this.showInput();

    if (this.parent) this.parent.startTranscribing();

    // this.setDraggable(false);
    this.setResizable(false);

    this.hideStartButton();
    this.showSteps();
  },

  toggleStartButton: function() {
    var that = this
      , speed = this.model.defaults.speed;

    if (this.model.get("start_hidden")) {
      this.$startButton.fadeOut(speed, function() {
        that.$nextLineButton.fadeIn(speed);
        that.$finishButton.fadeIn(speed);
      });
    } else {
      this.$nextLineButton.fadeOut(speed);
      this.$finishButton.fadeOut(speed, function() {
        that.$startButton.fadeIn(speed);
      });
    }
  },

  showStartButton: function() {
    this.model.set("start_hidden", false);
    this.model.set("finish_hidden", true);
  },

  hideStartButton: function() {
    this.model.set("start_hidden", true);
    this.model.set("finish_hidden", false);
  },

  showSteps: function() {
    this.model.set("steps_hidden", false);
  },

  hideSteps: function() {
    this.model.set("steps_hidden", true);
  },

  toggleSteps: function() {
    if (this.model.get("steps_hidden")) {
      this.$step.fadeOut(this.defaults.speed);
    } else {
      this.$step.fadeIn(this.defaults.speed);
    }
  },

  toggleInput: function() {

    if (this.model.get("input_hidden")) {

      this.$input.parent().fadeOut(this.defaults.speed, function() {
        $(this).addClass("hidden");
      });

    } else {

      this.$input.parent().fadeIn(this.defaults.speed, function() {
        $(this).removeClass("hidden");
      });

    }

  },

  showInput: function() {

    this.model.set("input_hidden", false);

  },

  hideInput: function() {

    this.model.set("input_hidden", true);

  },

  clearInput: function() {

    this.$input.val("");

  },

  getValue: function() {
    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      return this.$input.val();

    } else if ( type == 'extra') {

      var gender    = this.$el.find(".gender").val();
      var age       = this.$el.find(".age").val();
      var register  = this.$el.find(".register").val();

      return [gender, age, register];

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

  render: function() {

    this.$el.append(this.template.render());

    this.$title        = this.$el.find(".title");
    this.$description  = this.$el.find(".description");

    this.$okButton     = this.$el.find(".btn.ok");
    this.$startButton  = this.$el.find(".btn.start");
    this.$nextLineButton = this.$el.find(".btn.nextLine");
    this.$finishButton = this.$el.find(".btn.finish");

    this.$exampleLink  = this.$el.find(".example");
    this.$skipLink     = this.$el.find(".skip");

    this.$input        = this.$el.find('.input_field input[type="text"]');

    this.$step         = this.$el.find(".step");

    return this.$el;

  }

});

