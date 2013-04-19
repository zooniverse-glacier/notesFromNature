// Spinner ---------------------------------------
nfn.ui.model.Discuss = Backbone.Model.extend({});

nfn.ui.view.Discuss = nfn.ui.view.Widget.extend({
  className: 'discuss',

  initialize: function() {
    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    _.bindAll(this, 'toggle', 'show', 'hide', 'render');
    this.model.bind('change:hidden', this.toggle);
    
    this.add_related_model(this.model);
    this.parent = this.options.parent;

    this.parent.model.bind('change:subject', this.render);
  },

  toggle: function() {
    if (this.model.get('hidden')) {
      this.$el.fadeOut(250);
    } else {
      this.$el.fadeIn(250);
    }
  },

  show: function() {
    this.model.set('hidden', false);
  },

  hide: function() {
    this.model.set('hidden', true);
  },

  render: function() {
    this.$el.html(this.template.render(this.parent.model.toJSON()));
    return this.$el;
  }
});