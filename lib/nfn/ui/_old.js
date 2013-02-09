// Widget
// =================================

nfn.ui.model.Widget = Backbone.Model.extend({ });

nfn.ui.view.Widget = nfn.core.View.extend({

  className: "widget",

  events: {

    "click .button.save" : "save"

  },

  initialize: function() {

    _.bindAll( this, "save", "toggle", "toggleDraggable", "toggleResizable", "onStopDragging", "onStopResizing" );

    this.template = new nfn.core.Template({
      template: this.options.template
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden",    this.toggle);
    this.model.bind("change:draggable", this.toggleDraggable);
    this.model.bind("change:resizable", this.toggleResizable);

    this.parent = this.options.parent;

  },

  save: function() {

    var transcription = new nfn.ui.model.Transcription(this.getCurrentStatus());
    this.parent.transcriptions.push(transcription);

    console.log("STATUS", this.parent.transcriptions.length, this.getCurrentStatus());

  },

  setPosition: function(left, top) {

    this.model.set("top", top);
    this.model.set("left", left);

    this.$el.css({ top: top, left: left});

  },

  getPosition: function() {

    return { x: this.model.get("left"), y: this.model.get("top") };

  },

  /*
  * Returns the dimensions and position of the widget.
  */
  getCurrentStatus: function() {

    return {
      x: this.model.get("left"),
      y: this.model.get("top"),
      w: this.model.get("width"),
      h: this.model.get("height")
    };

  },

  setSize: function(w, h) {

    this.model.set("width", w);
    this.model.set("height", h);

    this.$el.css({ width: w, height: h });

  },

  getSize: function() {

    return { w: this.model.get("width"), h: this.model.get("height") };

  },

  setResizable: function(resizable) {

    this.model.set("resizable", resizable);

  },

  toggleResizable: function() {

    var that = this;

    if (this.model.get("resizable")) {

      this.$el.resizable({ disabled: false, stop: this.onStopResizing })

    } else {

      this.$el.resizable({ disabled: true });
      this.$el.find(".ui-resizable-handle").remove(); // remove the handlers

    }

  },

  setDraggable: function(draggable) {

    this.model.set("draggable", draggable);

  },

  toggleDraggable: function() {

    var that = this;

    if (this.model.get("draggable")) {

      this.$el.draggable({ disabled: false, stop: this.onStopDragging })

    } else {

      this.$el.draggable({ disabled: true });

    }

  },

  onStopDragging: function(e, el) {

    this.setPosition(el.position.left, el.position.top);

  },

  onStopResizing: function(e, el) {

    this.setSize(el.size.width, el.size.height);

  },

  toggle: function() {

    if (this.model.get("hidden")) {
      this.$el.fadeOut(250);
    } else {
      this.$el.fadeIn(250);
    }

  },

  show: function() {
    this.model.set("hidden", false);
  },

  hide: function() {
    this.model.set("hidden", true);
  },

  render: function() {

    var $el = this.$el;

    $el.append(this.template.render());

    this.$saveButton = $el.find(".button.save");

    return $el;
  }

});





