
// Helper ---------------------------------------

nfn.ui.model.Helper = Backbone.Model.extend({
});

nfn.ui.view.Helper = nfn.ui.view.Widget.extend({

  className: 'helper bar',

  events: {

    "click .example"      : "showExample"

  },

  initialize: function() {
    _.bindAll( this, "toggle", "updateTitle", "updateDescription", "updateDitto", "showExample", "closeTooltip", "nextPhoto" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden",      this.toggle);
    this.model.bind("change:title",       this.updateTitle);
    this.model.bind("change:description", this.updateDescription);
    this.model.bind("change:description", this.updateDitto);

    this.parent = this.options.parent;
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
      that.$description.fadeIn(200);
      that.$exampleLink = that.$description.find(".example");
    });

  },
  
  updateDitto: function() {
    var that = this;

    this.$dittoDescription.fadeOut(200, function() {
      that.$dittoDescription.html(that.model.get("dittoDescription"));
      that.$dittoDescription.fadeIn(200);
    });
  },

  showExample: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (!this.tooltip) this.createTooltip(e);

  },

  createTooltip: function(e) {

    var
    that = this,
    main = "Close",
    url  = this.$el.find(".example").attr("data-src");

    if (url) {

      this.tooltip = new nfn.ui.view.Tooltip({

        className: "tooltip with-spinner upsidedown",

        model: new nfn.ui.model.Tooltip({
          main: main,
          urls: [url],
          template: $("#tooltip-example-template").html()
        })

      });

    } else if (this.model.get("urls")) {

      this.tooltip = new nfn.ui.view.Tooltip({

        className: "tooltip with-spinner upsidedown",

        model: new nfn.ui.model.Tooltip({
          main: main,
          urls: that.model.get("urls"),
          template: $("#tooltip-example-template").html()
        })

      });

    }

    this.addView(this.tooltip);

    this.tooltip.bind("onMainClick", this.nextPhoto);
    this.tooltip.bind("onEscKey", this.closeTooltip);

    this.$el.append(this.tooltip.render());

    this.tooltip.show();

    var $target = this.$el.find(".example");

    if (e) $target = $(e.target);

    var
    linkWidth   = $target.width()/2,
    x           = Math.abs(this.$el.offset().left - this.$exampleLink.offset().left) - this.tooltip.width() / 2 + linkWidth - 10,
    y           = Math.abs(this.$el.offset().top  - this.$exampleLink.offset().top) + 30;

    this.tooltip.setPosition(x, y);

    GOD.add(this.tooltip, this.closeTooltip);

    // Loads the Closer
    this.closer = new nfn.ui.view.Closer({
      model: new nfn.ui.model.Closer(),
      template: $("#closer-template").html(),
      onClose: function () {
        that.closeTooltip();
      }
    });

    // Add the close button
    var closerX = this.tooltip.left() + this.tooltip.width() + 12
      , closerY = this.tooltip.top();
    this.closer.$el.css({left: closerX, top: closerY});
    this.$el.append(this.closer.render());
    this.closer.show();
  },

  nextPhoto: function(callback) {

    this.tooltip.nextPhoto();

  },

  closeTooltip: function(callback) {
    if (!this.tooltip) return;

    if(this.closer) {
      this.closer.hide();
    }

    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();

  },

  render: function() {
    this.$el.append(this.template.render());

    this.$title = this.$el.find(".title");
    this.$description = this.$el.find(".description");
    this.$exampleLink = this.$el.find(".example");
    this.$dittoDescription = this.$el.find(".dittoDescription");

    return this.$el;
  }
});