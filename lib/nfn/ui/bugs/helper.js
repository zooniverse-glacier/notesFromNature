
// Helper ---------------------------------------
nfn.ui.model.BugsHelper = Backbone.Model.extend({
  defaults: {
    showText: false
  }
});

nfn.ui.view.BugsHelper = nfn.ui.view.Widget.extend({
  className: 'helper',

  events: {
    'click .example': 'showExample',
    'click .toggle': 'toggleTextState'
  },

  initialize: function() {
    _.bindAll( this, "toggle", "updateTitle", "updateDescription", "updateDitto", 'onWidthChange', 'onHeightChange', "toggleText", "toggleTextState", "showExample", "closeTooltip", "nextPhoto" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);
    this.model.bind("change:showText", this.toggleText);
    this.model.bind("change:title", this.updateTitle);
    this.model.bind("change:description", this.updateDescription);
    this.model.bind('change:width', this.onWidthChange);
    this.model.bind('change:height', this.onHeightChange);

    this.model.bind("change:description", this.updateDitto);
    
    this.parent = this.options.parent;
  },

  updateTitle: function() {
    var that = this,
        title = that.model.get('title');

    if (that.model.get('required')) {
      title = title + '- <span class="required">Standard</span>'
    } else {
      title = title + '- <span class="additional">Additional</span>'
    }

    this.$title.fadeOut(200, function() {
      that.$title.html(title);
      that.$title.fadeIn(200);
    });
  },

  updateDescription: function() {
	    var that = this;

	    this.$description.fadeOut(200, function() {
	      that.$description.html(that.model.get("description"));
	      that.$description.fadeIn(200);
	      that.$exampleLink = that.$description.find(".example");
	    });
	  },

	  
  updateDitto: function() {
	    var that = this;

	    this.$dittoDescription.fadeOut(200, function() {
	      that.$dittoDescription.html(that.model.get("dittoDescription"));
	      that.$dittoDescription.fadeIn(200);
	    });
	  },

  toggleText: function() {
    var height = this.model.get('stepGuide').height || 50;

    if (this.model.get('showText')) {

      this.$container.animate({
        height: height
      });

      this.$toggle.fadeOut({
        complete: function() {
          $(this).text('Hide Help Text');
          $(this).fadeIn();
        }
      });

    } else {

      this.$container.animate({
        height: 22
      });

      this.$toggle.fadeOut({
        complete: function() {
        	var html = "Show Help Text";
        	if (true) {
        		html = "<a class='alert'>!</a> " + html;
        	}
          $(this).html(html);
          $(this).fadeIn();
        }
      });
      
    }
  },

  toggleTextState: function() {
    this.model.set('showText', !this.model.get('showText'));
  },

  onWidthChange: function() {
    transcriberLeft = this.parent.transcriberWidget.left();
    // transcriberCenter = this.parent.transcriberWidget.left() + (this.parent.transcriberWidget.width() / 2);
    this.setLeft(transcriberLeft, true);
  },

  onHeightChange: function() {
    this.$container.animate({
      height: this.height()
    })
  },

  showExample: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (!this.tooltip) this.createTooltip(e);
  },

  createTooltip: function(e) {
    var
    that = this,
    main = "Close",
    url  = this.$el.find(".example").attr("data-src");

    if (url) {
      this.tooltip = new nfn.ui.view.Tooltip({
        className: "tooltip with-spinner",
        model: new nfn.ui.model.Tooltip({
          main: main,
          urls: [url],
          template: $("#tooltip-example-template").html()
        })
      });
    } else if (this.model.get("urls")) {
      this.tooltip = new nfn.ui.view.Tooltip({
        className: "tooltip with-spinner",
        model: new nfn.ui.model.Tooltip({
          main: main,
          urls: that.model.get("urls"),
          template: $("#tooltip-example-template").html()
        })
      });
    }

    this.addView(this.tooltip);

    this.tooltip.bind("onMainClick", this.nextPhoto);
    this.tooltip.bind("onEscKey", this.closeTooltip);

    this.$el.append(this.tooltip.render());

    this.tooltip.show();

    var
    linkWidth   = $(e.target).width()/2,
    x           = Math.abs(this.$el.offset().left - this.$exampleLink.offset().left) - this.tooltip.width() / 2 + linkWidth - 10,
    y           = Math.abs(this.$el.offset().top  - this.$exampleLink.offset().top) - this.tooltip.height() - 30;

    this.tooltip.setPosition(x, y);

    GOD.add(this.tooltip, this.closeTooltip);

    // Loads the Closer
    this.closer = new nfn.ui.view.Closer({
      model: new nfn.ui.model.Closer(),
      template: $("#closer-template").html(),
      onClose: function () {
        that.closeTooltip();
      }
    });
    this.addView(this.closer);

    // Add the close button
    var closerX = this.tooltip.left() + this.tooltip.width() + 12
      , closerY = this.tooltip.top();
    this.closer.$el.css({left: closerX, top: closerY});
    this.$el.append(this.closer.render());
    this.closer.show();
  },

  nextPhoto: function(callback) {
    this.tooltip.nextPhoto();
  },

  closeTooltip: function(callback) {
    if (!this.tooltip) return;

    if(this.closer) {
      this.closer.hide();
    }

    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();
  },

  render: function() {
    this.$el.append(this.template.render());

    this.$title = this.$el.find(".title");
    this.$description = this.$el.find(".description");
    this.$dittoDescription = this.$el.find(".dittoDescription");
    this.$exampleLink = this.$el.find(".example");
    this.$container = this.$el.find(".sub-container");
    this.$toggle = this.$el.find('.toggle');

    return this.$el;
  }
});

