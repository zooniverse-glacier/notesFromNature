// Spinner ---------------------------------------
nfn.ui.model.Discuss = Backbone.Model.extend({});

nfn.ui.view.Discuss = nfn.ui.view.Widget.extend({
  className: 'discuss',

  initialize: function() {
    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);
    this.parent = this.options.parent;
  },

  render: function() {
    this.$el.append(this.template.render(this.parent.model.toJSON()));
    return this.$el;
  }
});