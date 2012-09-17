// Selection ---------------------------------------

nfn.ui.model.Selection = Backbone.Model.extend({ });

nfn.ui.view.Selection  = nfn.ui.view.Widget.extend({

  className: 'selection',

  initialize: function() {

    this.parent = this.options.parent;
  },

  isDefined: function() {

    if (this.model.get("top") && this.model.get("left") && this.model.get("height") && this.model.get("width")) return true;
    else return false;

  },

  setPosition: function(left, top) {

    this.model.set("top", top);
    this.model.set("left", left);

    this.$el.css({ top: top, left: left});

  },

  remove: function() {
    this.$el.remove();
  },

  render: function() {

    return this.$el;

  }

});
