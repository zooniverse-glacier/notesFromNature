// HerbariumWidget --------------------------------------

nfn.ui.model.HerbariumWidget = Backbone.Model.extend({ });

nfn.ui.view.HerbariumWidget = nfn.ui.view.Widget.extend({

  className: 'sernac-widget bar',

  events: {

    "click .btn.ok" :     "ok",
    "click .step" :       "showStepTooltip",
    "click .btn.finish" : "showFinishTooltip",
    "click .skip" :       "showSkipPane"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "toggleOk", "updatePlaceholder", "updateType", "closeTooltip", "closeFinishTooltip", "closeStepTooltip", "gotoStep" );

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

    this.templates["date"] = new nfn.core.Template({
      template: $("#date-input-template").html(),
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden",      this.toggle);
    this.model.bind("change:placeholder", this.updatePlaceholder);
    this.model.bind("change:type",        this.updateType);
    this.model.bind("change:ok_enabled",  this.toggleOk);

    this.parent = this.options.parent;

  },

  skip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltip();               // TODO: add test
    this.parent.helper.closeTooltip(); // TODO: add test

    this.clearInput();
    this.parent.nextStep();

  },

  ok: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    GOD.triggerCallbacks(); // this close the tooltips (TODO: add test)

    if (this.$input.val()) { // don't store or advance when the input field is empty

      this.parent.saveCurrentStep();

      this.clearInput();

      this.parent.nextStep();

    }

  },

  toggleOk: function() {

    if (this.model.get("ok_enabled")) {

      this.$okButton.removeClass("disabled");

    } else {

      this.$okButton.addClass("disabled");

    }

  },

  enableOk: function(callback) {
    this.model.set("ok_enabled", true);

    callback && callback();

    return this;
  },

  disableOk: function(callback) {
    this.model.set("ok_enabled", false);

    callback && callback();

    return this;
  },

  gotoStep: function(e, i) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeStepTooltip();
    this.parent.model.set("currentStep", i);

  },

  showSkipPane: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (!this.tooltip) this.createTooltip(e);

  },

  createTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "If you can’t find the value, you can see <a href='#'>examples</a> that surely will help you",
    main        = "Skip field",
    secondary   = "Cancel";

    this.tooltip = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip({ title: title, description: description, main: main, secondary: secondary })
    });

    this.addView(this.tooltip);

    var that = this;

    this.tooltip.bind("onEscKey",         this.closeTooltip);
    this.tooltip.bind("onSecondaryClick", this.closeTooltip);
    this.tooltip.bind("onMainClick",      function() {

      that.closeTooltip(function() {
        that.skip();
      })

    });

    this.$el.append(this.tooltip.render());
    this.tooltip.show();

    var
    targetWidth   = $(e.target).width()/2,
    marginRight = parseInt($(e.target).css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.tooltip.width() / 2 + targetWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.tooltip.height() - 40

    this.tooltip.setPosition(x, y);
    GOD.add(this.tooltip, this.closeTooltip);

  },

  closeTooltip: function(callback) {

    if (!this.tooltip) return;

    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();

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
    targetWidth   = $(e.target).width()/2,
    marginRight = parseInt($(e.target).css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.stepTooltip.width() + 30,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.stepTooltip.height() - 17

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


  showFinishTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.finishTooltip) this.createFinishTooltip(e);

  },

  closeTooltips: function() {

    GOD.triggerCallbacks();

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

  finish: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.clearInput();
    this.parent.finish();

  },

  clearInput: function() {

    this.$input.val("");

  },

  resize: function() {

    var type  = this.model.get("type");
    var width = this.model.get("inputWidth");

    // Centers the widget horizontally
    this.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true);

  },

  getValue: function() {
    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

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

    if ( type == 'text' || type == 'location' ) {

      this.$input.attr("placeholder", this.model.get("placeholder"));

    } else if ( type == 'date' ) {

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
    this.$el.find(".input_field").removeClass("location");
    this.$el.find(".input_field").addClass(type);

    if ( type == 'text' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();

      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    } else if ( type == 'location' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();

      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

      this.$input.addresspicker();

    } else if ( type == 'date' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    }

    this.resize();

  },

  render: function() {

    this.$el.append(this.template.render());

    this.$okButton     = this.$el.find(".btn.ok");
    this.$skip         = this.$el.find(".skip");
    this.$finishButton = this.$el.find(".btn.finish");
    this.$step         = this.$el.find(".step");
    this.$input        = this.$el.find('.input_field input[type="text"]');

    return this.$el;

  }

});


