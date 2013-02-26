// Closer ---------------------------------------

nfn.ui.model.Closer = Backbone.Model.extend({ });

nfn.ui.view.Closer = nfn.ui.view.Widget.extend({
  className: 'closer',
  events: {
    "click .close" : 'close'
  },

  initialize: function() {
    _.bindAll(this, 'toggle', 'close');
    this.add_related_model(this.model);
    this.model.bind('change:hidden', this.toggle);

    // Options parsing.
    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.onClose = this.options.onClose;
  },

  close: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    this.onClose();
  },

  render: function() {
    this.$el.append(this.template.render());
    return this.$el;
  },
});

