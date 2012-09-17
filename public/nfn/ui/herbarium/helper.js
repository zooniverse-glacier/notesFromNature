
// Helper ---------------------------------------

nfn.ui.model.Helper = Backbone.Model.extend({ });

nfn.ui.view.Helper = nfn.ui.view.Widget.extend({

  className: 'helper bar',

  initialize: function() {

    _.bindAll( this, "toggle", "updateTitle", "updateDescription" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden",      this.toggle);
    this.model.bind("change:title",       this.updateTitle);
    this.model.bind("change:description", this.updateDescription);

    this.parent = this.options.parent;

  },

  updateTitle: function() {

    var that = this;

    this.$title.fadeOut(200, function() {
      that.$title.text(that.model.get("title"));
      that.$title.fadeIn(200);
    });

  },

  updateDescription: function() {

    var that = this;

    this.$description.fadeOut(200, function() {
      that.$description.text(that.model.get("description"));
      that.$description.fadeIn(200);
    });

  },

  render: function() {

    this.$el.append(this.template.render());

    this.$title       = this.$el.find(".title");
    this.$description = this.$el.find(".description");

    return this.$el;

  }

});

