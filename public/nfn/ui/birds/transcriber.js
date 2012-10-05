// DOUBLE PAGE TRANSCRIBER --------------------------------

nfn.ui.model.DoublePage = nfn.ui.model.Transcriber.extend({

  defaults: {
    type: 'birds',
    mousewheel_enabled: true
  }

});

nfn.ui.view.DoublePage = nfn.ui.view.Transcriber.extend({

  initialize: function() {

    var that = this;

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    _.bindAll( this, "updateInputField", "updatePlaceholder", "updateWidget", "toggleMouseWheel", "onResize" );

    this.add_related_model(this.model);

    this.model.bind("change:mousewheel_enabled", this.toggleMouseWheel);

    this.photos         = new nfn.ui.collection.Photos();
    this.transcriptions = new nfn.ui.collection.Transcriptions();

    this.addViews();

    this.guide = [
      {
        title: 'Code' ,
        description: 'It\'s a 4 digit number located at the top right of the page. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'Code',
        type: "text",
        inputWidth: 180
      }, {
        title: 'Species',
        description: '2 or 3 latin words in the first line, next to the margin. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'Species',
        type: "text",
        inputWidth: 180
      }, {
        title: 'Location',
        description: 'A place name, in the second line. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'Location',
        type: "location",
        inputWidth: 240,
        position: {  x: 1000 }
      }, {
        title: 'Collection date ',
        description: 'A date in the third line. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'COLLECTION DATE. ex. Aug 1982',
        type: "text",
        inputWidth: 270,
        position: { x: 0 }
      }, {
        title: 'Collector',
        description: 'A person name in the same line than the date. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'Collector',
        type: "text",
        inputWidth: 140
      }, {
        title: 'Transferrer',
        description: 'A person name at the top right of the record. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'Transferrer',
        type: "text",
        inputWidth: 180
      }, {
        title: 'Transfer date',
        description: 'A date under the transferrer. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'TRANSFER DATE. ex. Nov 2002',
        type: "text",
        inputWidth: 240
      }, {
        title: 'Additional information',
        description: 'Can you detect this information?. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: ['gender', 'age', 'register'],
        type: "extra",
        inputWidth: 390
      }
    ];

    this.model.set("currentRecord", 0);

    this.model.set("currentStep", -1);
    this.model.set("stepsCount", this.guide.length);

    this.model.bind("change:currentRecord", function(model) {
      that.statusBar.$counter.text(model.get("currentRecord"));
    });

    this.model.bind("change:currentStep", function() {

      that.updateStepCounter();
      that.updateWidget();

      //that.updateInputField();
      that.updatePlaceholder();

    });

    this.render();

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

    var photo = new nfn.ui.view.BirdPhoto({
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

    var photo = new nfn.ui.view.BirdPhoto({
      model: new nfn.ui.model.Photo({ url: url }),
      parent: this
    });

    photo.model.set("view", photo);

    callback && photo.model.set("callback", callback);

    this.photos.push(photo.model);

  },

  getPendingFieldCount: function() {

    return (this.guide.length - this.transcriptions.length);

  },

  updateStepCounter: function() {

    var currentStep = this.model.get("currentStep") + 1;
    this.transcriberWidget.$step.text( currentStep + "/" + this.model.get("stepsCount"));

  },

  updateWidget: function() {

    var
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    this.transcriberWidget.model.set({

      title:       stepGuide.title,
      description: stepGuide.description,
      type:        stepGuide.type,
      inputWidth:  stepGuide.inputWidth

    });

    // Scrolls the page
    if (stepGuide.position) {

      if ( stepGuide.position.x != null && stepGuide.position.y == null ) {

        this.api.scrollToX(stepGuide.position.x, true);

      } else if ( stepGuide.position.y != null && !stepGuide.position.x == null ) {

        this.api.scrollToY(stepGuide.position.y, true);

      } else if ( stepGuide.position.x != null && stepGuide.position.y != null ) {

        this.api.scrollTo(stepGuide.position.x, stepGuide.position.y, true);
      }
    }

    this.transcriberWidget.clearInput();

  },

  addViews: function() {

    // Loads the transcriber widget
    this.transcriberWidget = new nfn.ui.view.BirdsWidget({
      model: new nfn.ui.model.BirdsWidget({
        containment: ".photos"
      }),
      template: $("#transcriber-birds-widget-template").html(),
      parent: this
    });

    this.addView(this.transcriberWidget);

    // Loads the status bar
    this.statusBar = new nfn.ui.view.StatusBar({

      model: new nfn.ui.model.StatusBar({
        title: "Birds Collection",
        description: "from The Natural History Museum of London"
      }),

      template: $("#statusbar-template").html(),
      parent: this
    });

    this.addView(this.statusBar);

    // Loads the spinner
    this.spinner = new nfn.ui.view.Spinner({
      model: new nfn.ui.model.Spinner(),
      parent: this
    });

    this.addView(this.spinner);

    // Loads the backdrop
    this.backdrop = new nfn.ui.view.Backdrop({
      model: new nfn.ui.model.Backdrop(),
      parent: this
    });

    this.addView(this.backdrop);

  },

  startTranscribing: function() {

    this.model.set("currentStep", 0);
    this.disableMouseWheel();

  },

  finishTranscribing: function() {

    this.enableMouseWheel();
    this.model.set("currentStep", 0);
    this.nextRecord();
    this.transcriberWidget.model.set("description", "Drag & resize the viewer to the record you want to transcribe.");
    this.transcriberWidget.updateDescription();

  },

  updateInputField: function() {

    var
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];


  },

  updatePlaceholder: function() {

    var
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    this.transcriberWidget.model.set("placeholder", stepGuide.placeholder);

  },

  saveCurrentStep: function() {

    if (this.transcriptions.at(this.model.get("currentStep"))) {

      var transcription = this.transcriptions.at(this.model.get("currentStep"));
      transcription.set("value", this.transcriberWidget.getValue());

    } else {

      var transcription = new nfn.ui.model.Transcription({
        step:  this.model.get("currentStep"),
        value: this.transcriberWidget.getValue()
      });

      this.transcriptions.push(transcription);

    }

    //console.log("STATUS", this.transcriptions.toJSON());
  },

  onResize: function() {

    if (this.model.get("mousewheel_enabled") == true) {

      if (this.api) this.api.reinitialise();

      this.resize();

    }

  },

  resize: function() {

    this.$el.find(".photos, .jspPane, .jspContainer").css("width", "100%");

  },

  addScroll: function() {

    if (!this.model.get("scrollbar")) {
      this.model.set("scrollbar", true);
      this.$el.find(".photos").jScrollPane();
      this.api = this.$el.find(".photos").data('jsp');
    }

  },

  toggleMouseWheel: function() {

    if (this.model.get("mousewheel_enabled")) {

      console.log(this.api);

      this.api.enableMouseWheel();
      $(".jspHorizontalBar, .jspVerticalBar").fadeIn(250);

    } else {

      console.log(this, this.api);

      this.api.disableMouseWheel();
      $(".jspHorizontalBar, .jspVerticalBar").fadeOut(250);
    }

  },

  enableMouseWheel: function() {

    this.model.set("mousewheel_enabled", true);

  },

  disableMouseWheel: function() {

    this.model.set("mousewheel_enabled", false);

  },


  render: function() {

    this.$el.addClass(this.model.get("type"));

    this.$el.append(this.backdrop.render());
    this.$el.append(this.statusBar.render());
    this.$el.append(this.transcriberWidget.render());

    this.transcriberWidget.setWidth($(document).width() - 50, true);

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    $("body").append(this.$el);

    $(window).on("resize", this.onResize);

    return this.$el;
  }

});
