// Magnifier ---------------------------------------

nfn.ui.model.Magnifier = Backbone.Model.extend({ });

nfn.ui.view.Magnifier  = nfn.ui.view.Widget.extend({
  className: 'magnifier',

  initialize: function() {
    _.bindAll(this, "toggle");

    this.add_related_model(this.model);
    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;
  },

  create: function(dimensions) {
    if (this.parent.$el.find("." + this.className).length <= 0) {
      this.parent.$el.append(this.render());
    }
    this.show();

    this.setDimensions(dimensions);
  },

  render: function() {
    return this.$el;
  }
});

