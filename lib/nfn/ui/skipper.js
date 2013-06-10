// Skipper ---------------------------------------
nfn.ui.model.Skipper = Backbone.Model.extend({});

nfn.ui.view.Skipper = nfn.ui.view.Widget.extend({
  className: 'skipper',

  events: {
    'click a': 'confirmSkip'
  },

  initialize: function() {
    _.bindAll(this, 'toggle');

    if (this.options.settings) {
      this.settings = this.options.settings;
    }

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.skipConfirmed = false;

    this.add_related_model(this.model);
    this.model.bind('change:hidden', this.toggle);

    this.parent = this.options.parent;
  },

  confirmSkip: function(e) {
    var that = this;

    e.preventDefault();

    if (this.skipConfirmed) {
      this.parent.skip();
      that.$buttonText.text('Skip Record');
      that.skipConfirmed = false;
    } else {
      this.$buttonText.css('opacity', 0);

      setTimeout(function() {
        that.$buttonText.text('Are you sure?');
        that.$buttonText.css('opacity', 1);
        that.skipConfirmed = true;
      }, 400);
    }
  },

  render: function() {
    this.$el.append(this.template.render());

    this.$button = this.$el.find('a').first();
    this.$buttonText = this.$button.find('span').first();
    return this.$el;
  }
});
