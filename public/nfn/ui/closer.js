// Closer ---------------------------------------

nfn.ui.model.Closer = Backbone.Model.extend({ });

nfn.ui.view.Closer = nfn.ui.view.Widget.extend({
  className: 'closer',
  events: {
    "click .close" : 'close'
  },

  initialize: function() {
    _.bindAll(this, 'toggle', 'close');

    if (this.options.parent === undefined) {
      throw new TypeError("you should specify a parent model");
    }

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);
    this.model.bind('change:hidden', this.toggle);

    this.parent = this.options.parent;
  },

  close: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    // A silly amount of calls to reset the UI.
    this.parent.highlight.clear();
    this.parent.launcher.disable();

    this.parent.backdrop.hide();
    this.parent.helper.hide();
    this.parent.highlight.hide();
    this.parent.launcher.show();
    this.parent.magnifier.hide();
    this.parent.selection.hide();
    this.parent.transcriberWidget.hide();

    this.parent.startTranscribing();
    this.parent.enableMouseWheel();

    this.hide();
  },

  render: function() {
    this.$el.append(this.template.render());
    return this.$el;
  }
});

