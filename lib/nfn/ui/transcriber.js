
// TRANSCRIBER -----------------------------------

nfn.ui.model.Transcriber = Backbone.Model.extend({

  defaults: {
    visible: true,
    type: 'default'
  },

  nextRecord: function() {
    var currentRecord = this.get("currentRecord");
    this.set("currentRecord", currentRecord + 1);
  },

  previousRecord: function() {
    var currentRecord = this.get("currentRecord");
    this.set("currentRecord", currentRecord - 1);
  },

  nextStep: function() {
    var currentStep = this.get("currentStep");

    if (currentStep + 1 >= this.get("stepsCount")) {
      this.set("currentStep", 0);
    } else {
      this.set("currentStep", currentStep + 1);
    }
  },

  previousStep: function() {
    var currentStep = this.get("currentStep");

    if (currentStep - 1 < 0) {
      this.set("currentStep", this.get("stepsCount") - 1);
    } else {
      this.set("currentStep", currentStep - 1);
    }
  },

  previousLine: function() {
    var currentLine = this.get('currentLine');

    if (currentLine - 1 < 0) {
      this.set('currentLine', 0);
    } else {
      this.set('currentLine', currentLine - 1);
    }
  },

  nextLine: function() {
    var currentLine = this.get('currentLine');
    this.set('currentLine', currentLine + 1);
  }
});


// TRANSCRIBER ---------------------------------

nfn.ui.view.Transcriber = nfn.core.View.extend({

  className: "transcriber",

  initialize: function() {

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);

    this.photos         = new nfn.ui.collection.Photos();
    this.transcriptions = new nfn.ui.collection.Transcriptions();

    this.render();

  },

  enableBackspace: function() {

    $(document).unbind("keydown.backspace");

  },

  disableBackspace: function() {

    $(document).bind("keydown.backspace", function(e) {
      var nodeName = e.target.nodeName.toLowerCase();

      if (e.which === 8) {
        if ((nodeName === 'input' && e.target.type === 'text') || nodeName === 'textarea') {
          // do nothing
        } else {
          e.preventDefault();
        }
      }
    });

  },

  nextRecord: function() {
    this.model.nextRecord();
  },

  previousRecord: function() {
    this.model.previousRecord();
  },

  nextStep: function() {
    this.model.nextStep();
  },

  previousStep: function() {
    this.model.previousStep();
  },

  previousLine: function() {
    this.model.previousLine();
  },

  nextLine: function() {
    this.model.nextLine();
  },

  showPhoto: function(i) {
    var that = this;

    this.$el.append(this.spinner.render());
    this.spinner.show().spin();

    var photo = this.photos.at(i);

    if (photo) {
      photo.get("view").render();
    }
  },

  loadPhoto: function(url, callback) {

    var photo = new nfn.ui.view.Photo({
      model: new nfn.ui.model.Photo({ url: url }),
      parent: this
    });

    photo.model.set("view", photo);

    callback && photo.model.set("callback", callback);

    this.photos.push(photo.model);

    this.showPhoto(this.photos.length - 1);

  },

  addPhoto: function(url, callback) {

    var that = this;

    var photo = new nfn.ui.view.Photo({
      model: new nfn.ui.model.Photo({ url: url }),
      parent: this
    });

    photo.model.set("view", photo);

    callback && photo.model.set("callback", callback);

    this.photos.push(photo.model);

  },

  render: function() {

    this.$el.addClass(this.model.get("type"));

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    $("body").append(this.$el);

    return this.$el;
  }

});
