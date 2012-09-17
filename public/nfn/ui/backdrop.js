// Backdrop --------------------------------------

nfn.ui.model.Backdrop = Backbone.Model.extend({ });

nfn.ui.view.Backdrop = nfn.ui.view.Widget.extend({

  className: 'backdrop',

  initialize: function() {

    _.bindAll( this, "toggle" );

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;

  },

  render: function() {

    return this.$el;

  }

});
