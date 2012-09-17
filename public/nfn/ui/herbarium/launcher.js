// Launcher --------------------------------------

nfn.ui.model.Launcher = Backbone.Model.extend({
  defaults: {
    hidden: true
  }
});

nfn.ui.view.Launcher = nfn.ui.view.Widget.extend({

  events: {

    "click .button.start" : "start"

  },

  className: "launcher bar",

  initialize: function() {

    _.bindAll( this, "start", "toggle", "toggleButton" );

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

    e.preventDefault();
    e.stopImmediatePropagation();

    if (!this.model.get("disabled")) this.parent.addMagnifier();

  },

  render: function() {

    var $el = this.$el;

    $el.append(this.template.render());

    this.$startButton = $el.find(".button.start");
    this.$message     = $el.find("span");

    return $el;
  }

});

