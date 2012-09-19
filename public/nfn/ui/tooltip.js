// Tooltip --------------------------------------

nfn.ui.model.Tooltip = Backbone.Model.extend({ });

nfn.ui.view.Tooltip = nfn.ui.view.Widget.extend({

  defaults: {

    speed: 250

  },

  className: 'tooltip',

  events: {

    "click .main"      : "onMainClick",
    "click .secondary" : "onSecondaryClick"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "updateTemplate", "onKeyUp" );

    this.add_related_model(this.model);

    var template = this.model.get("template") || $("#tooltip-template").html();

    this.template = new nfn.core.Template({
      template: template,
      type: 'mustache'
    });

    this.model.bind("change:hidden", this.toggle);
    this.model.bind("change:template", this.updateTemplate);

      // Loads the spinner
      this.spinner = new nfn.ui.view.Spinner({
        model: new nfn.ui.model.Spinner(),
        parent: this
      });

      this.addView(this.spinner);


    $(document).on("keyup", this.onKeyUp);


    this.parent = this.options.parent;

  },

  onKeyUp: function(e) {

    console.log(e, e.which);

    if (e.which == 27) this.onEscKey();

  },

  onEscKey: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();


    this.trigger("onEscKey");

  },

  onMainClick: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.trigger("onMainClick");

  },

  onSecondaryClick: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.trigger("onSecondaryClick");

  },

  updateTemplate: function() {

    this.template = new nfn.core.Template({
      template: this.model.get("template")
    });

    this.$el.find("*").remove();
    this.render();

  },

  render: function() {

    this.$el.append(this.template.render( this.model.toJSON() ));

    this.$mainButton      = this.$el.find(".main");
    this.$secondaryButton = this.$el.find(".secondary");

    this.$title           = this.$el.find(".title");
    this.$description     = this.$el.find(".description");

    if (this.model.get("url")) {

      this.$el.append(this.spinner.render());
      this.spinner.show().spin();

      var that = this;

      var $img = $("<img width='180px' height='100px' />");
      this.$el.prepend($img);

      $img.attr("src", this.model.get("url"));

      this.$el.imagesLoaded(function() {
        $img.show();
        that.spinner.hide();
      });


    }

    return this.$el;

  }

});


