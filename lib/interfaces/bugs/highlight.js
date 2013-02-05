// Highlight ---------------------------------------

nfn.ui.model.Highlight = Backbone.Model.extend({ });

nfn.ui.view.Highlight = nfn.ui.view.Widget.extend({

  className: 'highlight',

  events: {

    "click"        : "start",
    "click .close" : "close"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "start", "close" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;

  },

  clear: function() {

    this.model.clear();

  },

  isDefined: function() {

    if (this.model.get("top") && this.model.get("left") && this.model.get("height") && this.model.get("width")) return true;
    else return false;

  },

  create: function(dimensions) {

    if (this.parent.$el.find("." + this.className).length <= 0) {
      this.parent.$el.append(this.render());
    }

    this.setDimensions(dimensions);
  },

  start: function(e) {

    e.preventDefault();
    e.stopImmediatePropagation();

    if (this.parent)
      this.parent.addMagnifier();

  },

  close: function(e) {

    e.preventDefault();
    e.stopImmediatePropagation();

    if (this.parent) {

      this.parent.launcher.disable();
      this.parent.startTranscribing();
      this.parent.enableMouseWheel();

    }

    this.hide();


  },

  render: function() {

    this.$el.append(this.template.render());

    this.$closeButton = this.$el.find(".close");

    return this.$el;

  }

});

