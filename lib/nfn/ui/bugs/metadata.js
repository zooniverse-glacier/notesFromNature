
// Metadata ---------------------------------------
nfn.ui.model.Metadata = Backbone.Model.extend({});

nfn.ui.view.Metadata = nfn.ui.view.Widget.extend({
  className: 'metadata',

  initialize: function() {
    _.bindAll(this, 'toggle', 'onWidthChange', 'move');

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);
    this.model.bind('change:width', this.onWidthChange);

    this.parent = this.options.parent;
    this.helper = this.options.helper;

    this.helper.model.bind('change:showText', this.move);
  },

  onWidthChange: function() {
    transcriberLeft = this.parent.transcriberWidget.left();
    this.setLeft(transcriberLeft, true);
  },

  move: function() {
    var height = this.model.get('stepGuide').height || 50;

    if (this.helper.model.get('showText')) {

      this.$el.animate({
        top: this.helper.top() - height - 8
      });

    } else {

      this.$el.animate({
        top: this.helper.top() - 32
      });

    }
  },

  render: function() {
    this.$el.append(this.template.render());
    this.$meta = this.$el.find(".meta");
    return this.$el;
  }
});

