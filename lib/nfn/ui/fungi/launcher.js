// Launcher --------------------------------------

nfn.ui.model.Launcher = Backbone.Model.extend({
  defaults: {
    hidden: true
  }
});

nfn.ui.view.Launcher = nfn.ui.view.Widget.extend({

  events: {
    "click .btn.start": "start",
    "click .skip": "showSkipTooltip",
    "click .example": "showExample"
  },

  className: "launcher bar",

  initialize: function() {
    _.bindAll(this, "start", "skip", "showSkipTooltip", "closeSkipTooltip", "toggle", "toggleDraggable", "toggleResizable", "onStopDragging", "onStopResizing", "updateMessage", "toggleButton", "showExample", "closeTooltip", "_showStart", "_hideStart", "_showSkip", "_hideSkip");

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);
    this.model.bind("change:disabled", this.toggleButton);
    this.model.bind("change:message", this.updateMessage);

    this.model.bind("change:draggable", this.toggleDraggable);
    this.model.bind("change:resizable", this.toggleResizable);

    this.parent = this.options.parent;
  },

  updateMessage: function() {
    var that = this;

    this.$message.delay(200).fadeOut(this.defaults.speed, function() {
      $(this).html(that.model.get("message"));
      $(this).fadeIn(that.defaults.speed);
    });
  },

  toggleButton: function() {

    if (this.model.get("disabled") == true) {
      this._hideStart(this._showSkip);
    } else {
      this._hideSkip(this._showStart);
    }

  },

  _showStart: function(callback) {
    if (!this.$startButton.hasClass("hidden")) {
      callback && callback();
    } else {
      this.$startButton.fadeIn(this.defaults.speed, function() {
        $(this).removeClass("hidden");
        callback && callback();
      });
    }
  },

  _hideStart: function(callback) {

    if (this.$startButton.hasClass("hidden")) {
      callback && callback();
    } else {
      this.$startButton.fadeOut(this.defaults.speed, function() {
        $(this).addClass("hidden");
        callback && callback();
      });
    }

  },

  _showSkip: function(callback) {

    if (!this.$skipButton.hasClass("hidden")) {
      callback && callback();
    } else {

      this.$skipButton.fadeIn(this.defaults.speed, function() {
        $(this).removeClass("hidden");
        callback && callback();
      });

    }

  },

  _hideSkip: function(callback) {

    if (this.$skipButton.hasClass("hidden")) {
      callback && callback();
    } else {

      this.$skipButton.fadeOut(this.defaults.speed, function() {
        $(this).addClass("hidden");
        callback && callback();
      });
    }

  },

  enable: function() {
    this.model.set({ disabled: false, message: "Specimen label selected" });
  },

  disable: function() {
    this.model.set({ disabled: true, message: "Click and drag a square around the specimen label, then click &quot;Start this Record&quot;" });
  },

  start: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (!this.model.get("disabled")) this.parent.addMagnifier();

  },

  showSkipTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.skipTooltip) this.createSkipTooltip(e);

  },

  createSkipTooltip: function(e) {

    var title = "Are you sure?"
      , description = "There are still <u>" + this.parent.getPendingFieldCount() + " empty fields</u> for this record that should be completed before finishing."
      , main = "Skip record"
      , secondary = "Cancel";

    this.skipTooltip = new nfn.ui.view.Tooltip({

      template: $("#tooltip-step-template").html(),

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

  closeSkipTooltip: function(callback) {

    if (!this.skipTooltip) return;

    this.skipTooltip.hide();
    this.skipTooltip.clean();

    delete this.skipTooltip;

    callback && callback();

  },

  closeTooltips: function() {

    GOD.triggerCallbacks();

  },

  skip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.parent.skip();

  },

  showExample: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (!this.tooltip) this.createTooltip(e);

  },

  createTooltip: function(e) {

    var main = "Close";
    var url = this.$el.find(".example").attr("data-src")

    this.tooltip = new nfn.ui.view.Tooltip({

      className: "tooltip with-spinner",

      model: new nfn.ui.model.Tooltip({
        main: main,
        urls: [url],
        template: $("#tooltip-example-template").html()
      })

    });

    this.addView(this.tooltip);

    var that = this;

    this.tooltip.bind("onMainClick",   this.closeTooltip);
    this.tooltip.bind("onEscKey",      this.closeTooltip);

    this.$el.append(this.tooltip.render());
    this.tooltip.show();

    var
    skipWidth   = $(e.target).width()/2,
    marginRight = parseInt($(e.target).css("margin-left").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - this.$exampleLink.offset().left) - this.tooltip.width() / 2 + skipWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - this.$exampleLink.offset().top)  - this.tooltip.height() - 40

    this.tooltip.setPosition(x, y);

    GOD.add(this.tooltip, this.closeTooltip);

  },

  closeTooltip: function(callback) {
    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();
  },

  render: function() {
    var $el = this.$el;

    $el.append(this.template.render());

    this.$startButton = $el.find(".btn.start");
    this.$skipButton = $el.find(".skip");
    this.$message = $el.find("span");
    this.$exampleLink = $el.find(".example");

    return $el;
  }
});