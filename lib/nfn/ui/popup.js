// Spinner ---------------------------------------

nfn.ui.model.Popup = Backbone.Model.extend({});

nfn.ui.view.Popup = nfn.ui.view.Widget.extend({
  className: 'popup',

  events: {
    'click button': 'hide'
  },

  initialize: function() {
    _.bindAll(this, 'toggle', 'show', 'hide');

    // this.settings = this.defaults.settings;
    // if (this.options.settings) this.settings = this.options.settings;

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind('change:hidden', this.toggle);

    this.parent = this.options.parent;
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
    this.trigger('show');
  },

  hide: function() {
    this.model.set('hidden', true);
    this.trigger('hide');
  },

  render: function() {
    var that = this;

    this.$el.append(this.template.render());
    this.$text = this.$el.find('.text');

    this.$text.css('max-height', $(window).height() - 200);

    $(window).on('resize.popup', function() {
      that.$text.css('max-height', $(window).height() - 200)
    });

    return this.$el;
  }
});