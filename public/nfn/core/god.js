nfn.ui.model.GOD = Backbone.Model.extend({ });

nfn.ui.collection.Tooltips = Backbone.Collection.extend({
  model: nfn.ui.model.Tooltip
});

nfn.ui.view.GOD = nfn.core.View.extend({

  /*hideTooltips: function() {

    var that = this;

    this.tooltips.each(function(tooltip) {

      tooltip.set("hidden", true);
      that.tooltips.remove(tooltip);

    });

  },*/

  s: function() {

    this.items.each(function(item) {

      item.callback && item.callback();
      delete item;

    });
  },

  add: function(item, callback) {

    this.items.push({ item: item, callback: callback });

  },

  initialize: function() {

    this.items = [];

  }

});

