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

  toggle: function() {
    var that = this;

    if (this.model.get("hidden")) {

      this.$el.animate({ top: this.top() - 50, opacity: 0 }, this.defaults.speed, function() {
        that.setTop(that.top() - 50);
        $(this).hide();
      });

    } else {

      this.setTop($(document).height()/2 - this.height()/2 + 50 );

      this.$el.css({ opacity: 0 }, 250 );

      this.$el.show();
      this.$el.animate({ top: this.top() - 50, opacity: 1 }, this.defaults.speed, function() {
      that.setTop(that.top() - 50);
        $(this).show();
      });
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

