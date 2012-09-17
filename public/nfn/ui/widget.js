// Widget --------------------------------------

nfn.ui.model.Widget = Backbone.Model.extend({ });

nfn.ui.view.Widget = nfn.core.View.extend({

  defaults: {
    speed: 300
  },

  setLeft: function(x, animated) {

    var y = this.model.get("top");
    this.setPosition(x, y, animated);

    return this;

  },

  setTop: function(y, animated) {

    var x = this.model.get("left");
    this.setPosition(x, y, animated);

    return this;

  },

  setWidth: function(w, animated) {

    this.model.set("width", w);

    if (animated) {
      this.$el.animate({ width: w }, this.defaults.speed);
    } else {
      this.$el.css({ width: w });
    }

    return this;

  },

  setHeight: function(h, animated) {

    this.model.set("height", h);

    if (animated) {
      this.$el.animate({ height: h }, this.defaults.speed);
    } else {
      this.$el.css({ height: h });
    }

    return this;

  },


  setSize: function(w, h, animated) {

    this.model.set("width", w);
    this.model.set("height", h);

    if (animated) {
      this.$el.animate({ width: w, height: h }, this.defaults.speed);
    } else {
      this.$el.css({ width: w, height: h });
    }

    return this;

  },

  setDimensions: function(dimensions) {

    this.setPosition(dimensions.x, dimensions.y);
    this.setSize(dimensions.w, dimensions.h);

    return this;

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

    return this;

  },

  getPosition: function() {

    return { x: this.model.get("left"), y: this.model.get("top") };

  },

  absoluteVerticalCenter: function(animated) {

    var x = $(document).width() /2 - this.width()/2;

    this.model.set("left", x);

    if (animated) {
      this.$el.animate({ left: x }, this.defaults.speed );
    } else {
      this.$el.css({ left: x });
    }

  },

  animate: function(properties, animated) {

    var that = this;

    _.each(properties, function(value, property) {
      that.model.set(property, value);
    });

    if (animated) {
      this.$el.animate(properties, this.defaults.speed );
    } else {
      this.$el.css(properties);
    }

  },

  verticalCenter: function(w, animated) {

    var x = w/2 - this.width()/2;

    this.model.set("left", x);

    if (animated) {
      this.$el.animate({ left: x }, this.defaults.speed );
    } else {
      this.$el.css({ left: x });
    }

  },

  center: function(w, h, animated) {

    var x = w/2 - this.width()/2;
    var y = h/2 - this.height()/2;

    this.model.set("left", x);
    this.model.set("top", y);

    if (animated) {
      this.$el.animate({ left: x, top: y }, this.defaults.speed );
    } else {
      this.$el.css({ left: x, top: y });
    }

  },

  toggle: function() {

    if (this.model.get("hidden")) {

      this.$el.fadeOut(this.defaults.speed);

    } else {

      this.$el.fadeIn(this.defaults.speed);

    }

  },

  show: function() {
    this.model.set("hidden", false);

    return this;
  },

  hide: function() {
    this.model.set("hidden", true);

    return this;
  }

});

