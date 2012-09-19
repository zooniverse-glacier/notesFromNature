// Spinner ---------------------------------------

nfn.ui.model.Spinner = Backbone.Model.extend({ });

nfn.ui.view.Spinner = nfn.ui.view.Widget.extend({

  className: 'loader',

  initialize: function() {

    _.bindAll( this, "toggle", "toggleSpin" );

    this.add_related_model(this.model);

    this.model.bind("change:hidden",  this.toggle);
    this.model.bind("change:animate", this.toggleSpin);

    this.parent = this.options.parent;

  },

  toggleSpin: function() {

    if (this.model.get("animate")) {

      this.spinner =  new Spinner({ lines: 10, length: 3, width: 4, radius: 8, color: '#fff' }).spin();
      this.$el.append( this.spinner.el );

    } else {
      this.spinner.stop();
    }

  },

  spin: function() {
    this.model.set("animate", true);

  },

  stop: function() {
    this.model.set("animate", false);
  },

  render: function() {

    return this.$el;

  }

});


