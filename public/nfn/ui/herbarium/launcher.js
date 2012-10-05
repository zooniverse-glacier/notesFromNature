// Launcher --------------------------------------

nfn.ui.model.Launcher = Backbone.Model.extend({
  defaults: {
    hidden: true
  }
});

nfn.ui.view.Launcher = nfn.ui.view.Widget.extend({

  events: {

    "click .btn.start" : "start",
    "click .example"   : "showExample"

  },

  className: "launcher bar",

  initialize: function() {

    _.bindAll( this, "start", "toggle", "toggleButton", "showExample", "closeTooltip" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
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

  toggle: function() {
    var that = this;

    if (this.model.get("hidden")) {

      this.$el.animate({ top: this.top() + 50, opacity: 0 }, this.defaults.speed, function() {
        that.setTop(that.top() + 50);
        $(this).hide();
      });

    } else {

      this.$el.css({ opacity: 0 }, 250 );

      this.$el.show();
      this.$el.animate({ top: this.top() - 50, opacity: 1 }, this.defaults.speed, function() {
      that.setTop(that.top() - 50);
        $(this).show();
      });
    }
  },

  enable: function() {
    this.model.set("disabled", false);
  },

  disable: function() {
    this.model.set("disabled", true);
  },

  start: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (!this.model.get("disabled")) this.parent.addMagnifier();

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
        url: url,
        template: $("#tooltip-example-template").html()
      })

    });

    this.addView(this.tooltip);

    var that = this;

    this.tooltip.bind("onMainClick", this.closeTooltip);
    this.tooltip.bind("onEscKey", this.closeTooltip);

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
    this.$message     = $el.find("span");
    this.$exampleLink = $el.find(".example");

    return $el;
  }

});

