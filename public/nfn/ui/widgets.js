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

    _.bindAll( this, "toggle", "updatePlaceholder", "updateType", "closeTooltip" );

    this.template = new nfn.core.Template({
      template: this.options.template
    });

    this.templates = [];

    this.templates["text"] = new nfn.core.Template({
      template: '<input type="text" placeholder="" />',
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

    this.tooltip.bind("onSecondaryClick", this.closeTooltip);
    this.tooltip.bind("onMainClick",      function() {
      that.closeTooltip(function() {
      that.ok();
      })

    });

    this.$el.append(this.tooltip.render());
    this.tooltip.show();

    var
    skipWidth   = $(e.target).width()/2,
    marginRight = parseInt($(e.target).css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - this.$skip.offset().left) - this.tooltip.width() / 2 + skipWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - this.$skip.offset().top)  - this.tooltip.height() - 40

    this.tooltip.setPosition(x, y);

  },

  closeTooltip: function(callback) {

    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();

  },

  finish: function(e) {

    e.preventDefault();
    e.stopImmediatePropagation();

    this.parent.finish();

  },

  clearInput: function() {

    this.$input.val("");

  },

  resize: function() {

    var type = this.model.get("type");

    if (type == 'text') {
      var p = { width: 540, left: $(document).width()/2 - 540/2 };
      this.animate(p, true);
    } else if ( type == 'date' ) {
      var p = { width: 680, left: $(document).width()/2 - 680/2 };
      this.animate(p, true);
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


// Transcriptions -------------------------------------

nfn.ui.model.Transcription = Backbone.Model.extend({ });

nfn.ui.collection.Transcriptions = Backbone.Collection.extend({
  model: nfn.ui.model.Transcription,
});


