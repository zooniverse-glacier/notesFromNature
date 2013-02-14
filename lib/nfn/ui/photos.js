// Photos -----------------------------------

nfn.ui.model.Photo = Backbone.Model.extend({ });

nfn.ui.view.Photo = nfn.core.View.extend({

  options: {

    delay: 0

  },

  initialize: function() {

    _.bindAll( this, "toggle", "appendPhoto" );

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

  appendPhoto: function($img) {
    this.parent.$el.find(".photos .mCSB_container").append($img);
  },

  render: function() {
    var that = this;

    var $img = this.$el = $("<img />");

    this.$el.attr("src", this.model.get("url"));
    this.$el.imagesLoaded(function() {
      // Removes the previous image
      that.parent.$el.find(".photos img").remove();
      that.parent.addScroll();
      that.appendPhoto(that.$el);

      that.show();

      that.parent.enableMouseWheel();

      var callback = that.model.get("callback") ;

      callback && callback();

    });
  }
});

nfn.ui.collection.Photos = Backbone.Collection.extend({
  model: nfn.ui.model.Photo
});
