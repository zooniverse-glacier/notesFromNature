// Tooltip --------------------------------------

nfn.ui.model.Tooltip = Backbone.Model.extend({ });

nfn.ui.view.Tooltip = nfn.ui.view.Widget.extend({

  defaults: {

    speed: 250

  },

  className: 'tooltip',

  events: {

    "click .main"      : "onMainClick",
    "click .secondary" : "onSecondaryClick"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "updateTemplate" );

    this.add_related_model(this.model);

    this.template = new nfn.core.Template({
      template: $("#tooltip-template").html(),
      type: 'mustache'
    });

    this.model.bind("change:hidden", this.toggle);
    this.model.bind("change:template", this.updateTemplate);

    this.parent = this.options.parent;

  },

  onMainClick: function(e) {

    e.preventDefault();
    e.stopImmediatePropagation();

    this.trigger("onMainClick");

  },

  onSecondaryClick: function(e) {

    e.preventDefault();
    e.stopImmediatePropagation();

    this.trigger("onSecondaryClick");

  },

  updateTemplate: function() {

    this.template = new nfn.core.Template({
      template: this.model.get("template")
    });

    this.$el.find("*").remove();
    this.render();

  },

  render: function() {

    this.$el.append(this.template.render( this.model.toJSON() ));

    this.$mainButton      = this.$el.find(".main");
    this.$secondaryButton = this.$el.find(".secondary");

    this.$title           = this.$el.find(".title");
    this.$description     = this.$el.find(".description");

    return this.$el;

  }

});
