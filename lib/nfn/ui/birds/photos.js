nfn.ui.view.BirdPhoto = nfn.ui.view.Photo.extend({

  initialize: function() {

    _.bindAll( this, "toggle", "appendPhoto" );

    this.parent = this.options.parent;

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);
    this.model.bind("change:hidden", this.toggle);

  },

  appendPhoto: function($img) {
    this.parent.$el.find(".photos .jspPane").append($img);
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

      that.parent.api.reinitialise();
      that.parent.enableMouseWheel();
      that.parent.resize();

      var callback = that.model.get("callback") ;

      callback && callback();

    });

  }

});

nfn.ui.collection.Photos = Backbone.Collection.extend({
  model: nfn.ui.model.Photo
});

