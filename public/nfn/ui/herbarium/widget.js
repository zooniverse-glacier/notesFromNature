// HerbariumWidget --------------------------------------

nfn.ui.model.HerbariumWidget = Backbone.Model.extend({ });

nfn.ui.view.HerbariumWidget = nfn.ui.view.Widget.extend({

  className: 'sernac-widget bar',

  events: {

    "click .btn.ok" :     "ok",
    "click .btn.finish" : "finish",
    "click .skip" :          "showSkipPane"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "updatePlaceholder", "updateType", "closeTooltip" );

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

    this.parent = this.options.parent;

  },

  ok: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.parent.saveCurrentStep();

    this.closeTooltip();               // TODO: add test
    this.parent.helper.closeTooltip(); // TODO: add test

    this.clearInput();
    this.parent.nextStep();

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
        that.ok();
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

  },

  closeTooltip: function(callback) {

    if (!this.tooltip) return;

    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();

  },

  finish: function(e) {

    e.preventDefault();
    e.stopImmediatePropagation();

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


