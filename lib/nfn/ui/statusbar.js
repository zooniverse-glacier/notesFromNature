// StatusBar -------------------------------------
nfn.ui.model.StatusBar = Backbone.Model.extend({ });

nfn.ui.view.StatusBar = nfn.ui.view.Widget.extend({
  className: 'statusbar',

  initialize: function() {
    _.bindAll( this, "toggle", "close" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;
  },

  close: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();
  },

  render: function() {
    this.$el.append(this.template.render(this.model.toJSON()));

    this.$title = this.$el.find(".title");
    this.$description = this.$el.find(".description");
    this.$counter = this.$el.find(".counter");
    this.$cText = this.$el.find(".counter-text");
    this.$closeButton = this.$el.find(".btn.close");

    return this.$el;
  }
});

