// HERBARIUM TRANSCRIBER ------------------------------------------
nfn.ui.model.Herbarium = nfn.ui.model.Transcriber.extend({
  defaults: {
    type: 'sernac',
    visible: true
  }
});

nfn.ui.view.Herbarium = nfn.ui.view.Transcriber.extend({
  initialize: function() {
    var that = this;

    _.bindAll(this, "updateInputField", "updatePlaceholder", "updateHelper", "updateStatusBar", "getStepData", "updateStepCounter");

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);

    this.guide = [{
        title: 'Country',
        description: 'The country the specimen was collected in.',
        placeholder: 'Country',
        type: 'country',
        inputWidth: 550
      }, {
        title: 'State/Province',
        description: 'Use the full name of the state or its abbreviation (e.g. FL for Florida) <a href="#" class="example">See example</a>',
        examples: [ "nfn/ui/herbarium/examples/ex_state.png" ],
        placeholder: 'State/Province',
        type: 'state',
        inputWidth: 550
      }, {
        title: 'County',
        description: 'This is the county name found on the record. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_county.png"],
        placeholder: 'County',
        type: 'county',
        inputWidth: 550
      }, {
        title: 'Scientific name',
        description: 'This is the species name. Include at least genus and species as written, but do not record Scientific Author’s name here. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_scientific_name.png"],
        placeholder: 'Scientific name',
        type: "text",
        inputWidth: 550
      }, {
        title: 'Location',
        description: 'The place name or geographic description of the place where the specimen was found. Please see examples. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_location_description.png"],
        placeholder: 'Location',
        type: "text",
        inputWidth: 680
      }, {
        title: 'Habitat and description',
        description: 'This is a description of the area where the specimen was found and/or a description of the specimen itself. Please see examples. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_habitat.png"],
        placeholder: 'Habitat & Description',
        type: 'text',
        inputWidth: 680
      }, {
        title: 'Collected by',
        description: 'This is the name of the person that collected this specimen. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_recorded_by.png"],
        placeholder: 'Collected by',
        type: 'text',
        inputWidth: 550
      }, {
        title: 'Collector Number',
        description: 'A number (or code) assigned to the specimen in the field, usually found after the Collector’s nam. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_record_number.png"],
        placeholder: 'Number',
        type: 'text',
        inputWidth: 550
      }, {
        title: 'Collection date',
        description: 'Please record the collection date as it is written. Note that the format may vary between specimens. If a particular part of a date is unavailable, please select "Not Shown". <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_recorded_date.png"],
        placeholder: ['day', 'month', 'year'],
        type: 'date',
        inputWidth: 700
      }
    ];

    this.model.set("currentRecord", 0);
    this.model.set("currentStep", -1);
    this.model.set("stepsCount", this.guide.length);

    this.model.bind("change:currentRecord", function(model) {
      that.updateStatusBar();
    });

    this.user = this.options.user;
    this.archive = this.options.archive;

    this.model.bind("change:currentStep", function() {
      that.updateStepCounter();
      that.updateHelper();

      that.updateInputField();
      that.updatePlaceholder();
    });

    this.transcriptions = new nfn.ui.collection.Transcriptions();

    this.addViews();
    this.render();

    var padding = 10,
        currentX = 0,
        currentY = 0;

    currentX = (window.innerWidth / 2) - 275;

    currentY = window.innerHeight - this.transcriberWidget.height() - padding;
    this.transcriberWidget.setWidth(550).setPosition(currentX, currentY);

    currentY = currentY - this.helper.height() - padding;
    this.helper.setWidth(550).setPosition(currentX, currentY);

    currentY = currentY - this.discuss.height() - padding;
    this.discuss.setPosition(currentX, currentY);

    currentX = currentX + this.transcriberWidget.width() - this.skipper.width();
    this.skipper.setPosition(currentX, currentY);
  },

  addViews: function() {
    var that = this;

    // Loads the transcriber widget
    this.transcriberWidget = new nfn.ui.view.HerbariumWidget({
      model: new nfn.ui.model.HerbariumWidget(),
      template: $("#transcriber-herbarium-widget-template").html(),
      parent: this
    });

    this.addView(this.transcriberWidget);

    // Loads the helper
    this.helper = new nfn.ui.view.Helper({
      model: new nfn.ui.model.Helper(),
      template: $("#helper-template").html(),
      parent: this
    });

    this.addView(this.helper);

    // Loads the status bar
    this.statusBar = new nfn.ui.view.StatusBar({
      model: new nfn.ui.model.StatusBar({
        title: "Herbarium Collection",
        description: "from SERNEC"
      }),

      template: $("#statusbar-template").html(),
      parent: this
    });

    this.addView(this.statusBar);

    // Load the intro popup
    this.popup = new nfn.ui.view.Popup({
      model: new nfn.ui.model.Popup(),
      template: $('#popup-template').html(),
      parent: this
    });
    this.addView(this.popup);

    // Load the discuss button
    this.discuss = new nfn.ui.view.Discuss({
      model: new nfn.ui.model.Discuss(),
      template: $('#discuss-template').html(),
      parent: this
    });
    this.addView(this.discuss);

    // Load the skip button
    this.skipper = new nfn.ui.view.Skipper({
      model: new nfn.ui.model.Skipper(),
      template: $('#skipper-template').html(),
      parent: this
    });
    this.addView(this.skipper);
  },

  skip: function() {
    this.helper.closeTooltip();
    this.transcriberWidget.closeTooltip();

    window.dispatchEvent(skipTranscriptionEvent);
  },

  finish: function() {
    this.$backgroundMessage.html("<h1>Thanks!</h1><p class='loading'>Loading next one...</p>");

    this.nextRecord();

    this.helper.closeTooltip();
    this.transcriberWidget.closeTooltip();

    finishedTranscriptionEvent.transcriptions = this.transcriptions;
    window.dispatchEvent(finishedTranscriptionEvent);

    delete this.transcriptions;
    this.transcriptions = new nfn.ui.collection.Transcriptions();
  },

  startTranscribing: function() {
    this.model.set('currentStep', 0);
  },

  getPendingFieldCount: function() {
    return (this.guide.length - this.transcriptions.length);
  },

  updateStepCounter: function() {
    var currentStep = this.model.get("currentStep") + 1;
    this.transcriberWidget.$step.text( currentStep + "/" + this.model.get("stepsCount"));
  },

  updateInputField: function() {
    var
    value       = "",
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    var transcription = this.getStepData(this.model.get("currentStep"));

    if (transcription) { // gets stored value
      value = transcription.get("value");

      if (transcription.get("type") == 'date') {

        var month = transcription.get("month");
        var day   = transcription.get("day");
        var year  = transcription.get("year");

        this.transcriberWidget.model.set({ type: stepGuide.type, inputWidth: stepGuide.inputWidth, month: month, day: day, year: year });
      } else {
        this.transcriberWidget.model.set({ type: stepGuide.type, inputWidth: stepGuide.inputWidth, value: value });
      }
    } else {
      this.transcriberWidget.model.set({ type: stepGuide.type, inputWidth: stepGuide.inputWidth, value: value });
    }
  },

  updatePlaceholder: function() {
    var currentStep = this.model.get("currentStep")
    , stepGuide = this.guide[currentStep];

    this.transcriberWidget.model.set("placeholder", stepGuide.placeholder);
  },

  updateHelper: function() {
    var currentStep = this.model.get("currentStep")
      , stepGuide = this.guide[currentStep];

    this.helper.model.set("title", stepGuide.title);
    this.helper.model.set("description", stepGuide.description);
    this.helper.model.set("urls", stepGuide.examples);
  },

  updateStatusBar: function() {
    var count = this.model.get('currentRecord');
    if (this.user != null && "groups" in this.user.project && this.user.project.groups[this.archive.id]) {
      count += this.user.project.groups[this.archive.id].classification_count
    }
    var counterText = (count == 1) ? 'Record Done': 'Records Done';
    this.statusBar.$counter.text(count);
    this.statusBar.$cText.text(counterText);
  },

  getStepData: function(step) {
    return this.transcriptions.find(function(transcription) {
      return transcription.get('stepNumber') === step;
    });
  },

  saveCurrentStep: function() {
    var stepNumber = this.model.get("currentStep")
      , transcription = this.getStepData(stepNumber)
      , value = this.transcriberWidget.getValue();

    if (transcription) { // if there's a transcription already
      if (_.isString(value)) {
        transcription.set("value", value);
      } else {
        transcription.set({ month: value["month"], day:   value["day"], year:  value["year"] });
      }

    } else { // if not, we create a new transcription
      if (_.isString(value)) {
        transcription = new nfn.ui.model.Transcription({
          stepTitle: this.guide[stepNumber].title,
          stepNumber: stepNumber,
          type: "text",
          value: value
        });
      } else {
        transcription = new nfn.ui.model.Transcription({
          stepTitle: this.guide[stepNumber].title,
          stepNumber: stepNumber,
          type: "date",
          month: value["month"],
          day: value["day"],
          year: value["year"]
        });
      }

      this.transcriptions.push(transcription);
    }
  },

  render: function() {
    var that = this;

    this.$el.addClass(this.model.get("type"));

    this.$el.append(this.discuss.render());
    this.$el.append(this.skipper.render());
    this.$el.append(this.helper.render());
    this.$el.append(this.statusBar.render());
    this.$el.append(this.popup.render());
    this.$el.append(this.transcriberWidget.render());

    // Adds the message placeholder
    this.$el.append('<div class="message" />');
    this.$backgroundMessage = this.$el.find(".message");

    $(window).on("resize", this.onResize);

    $("body").append(this.$el);

    user = zooniverse.models.User.current;
    project = zooniverse.models.Project.current;

    if(typeof this.seenPopup != 'undefined') {
      this.seenPopup = false;
    }

    if(user) {
      // Check if user has seen popup before
      if(('preferences' in user) && (project.id in user.preferences) && ('bugs_popup' in user.preferences[project.id])) {
        this.seenPopup = true;
      }
    }

    if(!this.seenPopup) {
      this.popup.show();

      if(user) {
        user.setPreference('plants_popup', true, function() {});
      }
    }

    this.updateStatusBar();

    return this.$el;
  }
});
