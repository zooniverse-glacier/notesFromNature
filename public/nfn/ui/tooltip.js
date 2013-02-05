// Tooltip --------------------------------------

nfn.ui.model.Tooltip = Backbone.Model.extend({

  defaults: {

    currentPhoto: 0,
    photoCount: 0

  }

});

nfn.ui.view.Tooltip = nfn.ui.view.Widget.extend({

  defaults: {

    speed: 250

  },

  className: 'tooltip',

  events: {

    "click .main"      : "onMainClick",
    "click .secondary" : "onSecondaryClick",
    "click .action"    : "onActionClick"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "updateTemplate", "onKeyUp", "loadPhoto", "updateCurrentPhoto" );

    this.add_related_model(this.model);

    var template = this.model.get("template") || $("#tooltip-template").html();

    this.template = new nfn.core.Template({
      template: template,
      type: 'mustache'
    });

    this.model.bind("change:hidden",       this.toggle);
    this.model.bind("change:urls",         this.loadPhoto);
    this.model.bind("change:template",     this.updateTemplate);
    this.model.bind("change:currentPhoto", this.updateCurrentPhoto);

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

  onActionClick: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.trigger("onActionClick");

  },

  updateTemplate: function() {

    this.template = new nfn.core.Template({
      template: this.model.get("template")
    });

    this.$el.find("*").remove();
    this.render();

  },

  onClick: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();
    e && e.stopPropagation();

  },

  nextPhoto: function() {

    var currentPhoto = this.model.get("currentPhoto");

    if (currentPhoto + 1 >= this.model.get("photoCount")) {
      this.model.set("currentPhoto", 0);
    } else {
      this.model.set("currentPhoto", currentPhoto + 1);
    }

  },

  previousPhoto: function() {

    var currentPhoto = this.model.get("currentPhoto");

    if (currentPhoto - 1 < 0) {
      this.model.set("currentPhoto", this.model.get("photoCount") - 1 );
    } else {
      this.model.set("currentPhoto", currentPhoto - 1);
    }

  },

  updateCurrentPhoto: function() {

    var
    urls = this.model.get("urls"),
    url  = urls[this.model.get("currentPhoto")];

    this.showPhoto(url);

  },

  showPhoto: function(url) {

    var that = this;

    this.spinner.show().spin();

    var $img = $("<img width='180px' height='100px' />");

    this.$el.find("img").fadeOut(250, function() {
      $(this).remove(); // let's get rid of the old image
    });

    this.$el.prepend($img);

    $img.attr("src", url);

    this.$el.imagesLoaded(function() {
      that.spinner.hide(function() {
        $img.fadeIn(that.defaults.speed);
      });
    });

  },

  loadPhoto: function() {

    var that = this;

    var urls = this.model.get("urls");

    // In case we do this.model.set("urls", "http://placehold.it/100x100");
    if ( Object.prototype.toString.call( urls ) !== '[object Array]' ) {

      this.model.set({ urls: [this.model.get("urls")], silent: true });
      urls = this.model.get("urls");

    }

    this.model.set("photoCount", urls.length);

  },

  render: function() {

    var that = this;

    this.$el.append(this.template.render( this.model.toJSON() ));

    this.$mainButton      = this.$el.find(".main");
    this.$secondaryButton = this.$el.find(".secondary");

    this.$title           = this.$el.find(".title");
    this.$description     = this.$el.find(".description");

    this.$title.html(this.model.get("title"));
    this.$description.html(this.model.get("description"));

    if (this.model.get("urls")) {

      var
      urls = this.model.get("urls"),
      $img = $("<img width='180px' height='100px' />");

      this.model.set("photoCount", urls.length);

      this.$el.append(this.spinner.render());
      this.spinner.show().spin();

      this.$el.prepend($img);

      if (urls.length > 1) {

        this.$mainButton.text("More");

      } else {

        this.$mainButton.hide();

      }

      $img.attr("src", urls[0]);

      this.$el.imagesLoaded(function() {
        that.spinner.hide(function() {
          $img.fadeIn(that.defaults.speed);
        });
      });

    }


    this.$el.on("click", this.onClick);

    return this.$el;

  }

});
