// BUGS TRANSCRIBER ------------------------------------------
nfn.ui.model.Bugs = nfn.ui.model.Transcriber.extend({
  defaults: {
    type: 'sernac bugs'
  }
});

nfn.ui.view.Bugs = nfn.ui.view.Transcriber.extend({
  initialize: function() {
    var that = this;

    _.bindAll(this, "updateInputField", "updatePlaceholder", "updateHelper", "updateStatusBar", "getStepData", "updateStepCounter", "positionWidgets");

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);

    this.county_added = false;
    this.guide = [
      {
        title: 'Country',
        description: 'This is the country where the specimen was found. Often the country is shown on the label, but if the country isn’t included you can still enter it since it is implied by the other location information. For example, if you see a label with “Mexico City” you can safely assume the country is Mexico. If you don’t know what country a location is in, then you can use a search engine like Google to help you. For example you may have a label that only has “Contra Costa Co.” By searching using that county, Google returns a map showing you that this is a place in California and in the USA.',
        placeholder: 'Country',
        type: "country",
        required: true,
        height: 180
      }, {
        title: 'State/Province',
        description: 'The state or province where the specimen was found. Often the state is shown on the label, but if the state isn’t included you can still enter it since it is implied by the other location information. For example, if you see a label with “Sacramento” you can safely assume the state is California. If you don’t know what state a location is in, then you can use a search engine like Google to help you. For example you may have a label that only has “Yosemite National Park”. By searching for that location Google returns a map showing you that this is in California. If the location information is ambiguous you don’t need to put an entry here. For example, if a label has only “Santa María, Mexico” there are many places by that name in many states in Mexico, so you would leave that field blank.',
        placeholder: 'State/Province',
        type: "state",
        required: true,
        height: 218
      }, {
        title: 'County',
        description: 'The county where the specimen was found. For specimens collected in the USA, the county usually shown on the label, but if the county isn’t included you may be able to enter it since it is implied by the other location information. For example, if you see a label with “Arizona, Tucson” you can safely assume the county is Pima County. If you don’t know what county a location is in, then you can use a search engine like Google to help you. Some locations are hard to place in counties and so if you are unsure what to put it is better to leave this field blank.',
        placeholder: 'County',
        type: 'county',
        required: true,
        height: 187
      }, {
        title: 'Locality',
        description: 'This is the place the specimen was collected. Usually it is a location that is described relative to a place named on a map, for example “3km N of Marys Peak”, which mean a place 3 kilometers to the north of Marys Peak in Oregon. Please enter locality information exactly as it says on the label. However, if there is an obvious misspelling that is not an abbreviation, include the correct spelling.',
        placeholder: 'Locality',
        type: "text",
        required: true,
        height: 140
      }, {
        title: 'Begin Date Collected',
        description: 'This is the day on which the specimen was collected, or a period of time during which the specimen could have been collected. For example, a single specimen collected using a net by a researcher on 6 July 2011 would only have that date, while one of many specimens collected in a long duration trap might have a range of dates like 12 June – 5 July 2010. Entomologists use many different date formats, but one the most common is having the month be a Roman numeral, like “3.iv.1987” for April 3rd 1987. Sometimes date information is incomplete. If there is a range of dates, enter the beginning date in the boxes below, and the ending date on the next screen. If there is just one date, enter it into the "Begin Date Collected" fields below and leave the "End Date Collected" fields empty. If there is no information for a particular piece of a date, please select "Not Shown". <a href="#" class="example">See example</a>',
        examples: ['nfn/ui/bugs/examples/date-collected.jpg'],
        placeholder: ['day', 'month', 'year'],
        type: 'date',
        inputWidth: 700,
        required: true,
        height: 212
      }, {
        title: 'End Date Collected',
        description: 'This is the end day in a period of time during which the specimen could have been collected. Conventions are identical to other date information on the label. If there is only one date on the label, please leave these fields blank.',
        examples: ['nfn/ui/bugs/examples/date-collected.jpg'],
        placeholder: ['day', 'month', 'year'],
        type: 'date',
        inputWidth: 700,
        required: false,
        height: 108,
        helpStateDefault: true
      }, {
        title: 'Collector',
        description: 'The name of the person that collected this specimen. If the specimen has more than one collector, enter all names separated by commas. <a href="#" class="example">See example</a>',
        examples: ['nfn/ui/bugs/examples/collector.jpg'],
        placeholder: 'Collector',
        type: "text",
        width: 580,
        required: true,
        height: 112
      }, {
        title: 'Elevation',
        description: 'The elevation at which the specimen was found (for example 1000m), or the range of elevations where collecting was done (e.g. 500-1000’). Please include units if given (feet, meters). <a href="#" class="example">See example</a>',
        examples: ['nfn/ui/bugs/examples/elevation.jpg'],
        placeholder: 'Elevation',
        type: 'text',
        required: false,
        height: 112
      }, {
        title: 'Other Notes',
        description: 'Any information that is not included in the other fields. Examples of this include things like collecting method, the scientific names of host plants and collecting times. You do not need to enter the unique identifying number (e.g. "EMEC29017") or the species name of the insect, because we have this information already.',
        placeholder: 'Other Notes',
        type: 'text',
        required: false,
        height: 139
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
      that.updateInputField();
      that.updatePlaceholder();
      that.updateHelper();
    });

    this.transcriptions = new nfn.ui.collection.Transcriptions();

    this.addViews();
    this.render();
    setTimeout(this.positionWidgets);
  },

  positionWidgets: function(position) {
    var padding = 10,
        currentX, currentY,
        metadataHeight, helperHeight;

    if(typeof position == 'undefined') {
      position = {};
    }

    currentX = typeof position.left !== 'undefined' ? position.left : (window.innerWidth / 2) - 275;
    currentY = typeof position.top !== 'undefined' ? position.top : window.innerHeight - this.transcriberWidget.height() - padding;

    this.transcriberWidget.setPosition(currentX, currentY);

    helperHeight = this.helper.height() || parseInt(this.helper.$el.find('.sub-container').css('height'));
    currentY = currentY - padding;
    this.helper.setPosition(currentX, currentY);

    metadataHeight = this.metadata.height() || parseInt(this.metadata.$el.find('.sub-container').css('height'));
    currentY = currentY - helperHeight - padding;
    this.metadata.setPosition(currentX, currentY);

    currentY = currentY - this.discuss.height() - metadataHeight - padding;
    this.discuss.setPosition(currentX, currentY);

    currentX = currentX + this.helper.width() - this.skipper.width();
    this.skipper.setPosition(currentX, currentY);
  },

  addViews: function() {
    var that = this;

    // Loads the transcriber widget
    this.transcriberWidget = new nfn.ui.view.BugsWidget({
      model: new nfn.ui.model.BugsWidget(),
      template: $("#transcriber-bugs-widget-template").html(),
      parent: this
    });
    this.addView(this.transcriberWidget);

    // Loads the helper
    this.helper = new nfn.ui.view.BugsHelper({
      model: new nfn.ui.model.BugsHelper(),
      template: $("#helper-template").html(),
      parent: this
    });
    this.addView(this.helper);

    // Loads the Status Bar
    this.statusBar = new nfn.ui.view.StatusBar({
      model: new nfn.ui.model.StatusBar({
        title: "Calbug Expeditions",
        description: "from Essig Museum Collections"
      }),
      template: $("#statusbar-template").html(),
      parent: this
    });
    this.addView(this.statusBar);

    // Loads the selection
    this.selection = new nfn.ui.view.Selection({
      model: new nfn.ui.model.Selection(),
      parent: this
    });
    this.addView(this.selection);

    // Loads the metadata
    this.metadata = new nfn.ui.view.Metadata({
      model: new nfn.ui.model.Metadata(),
      parent: this,
      template: $('#metadata-template').html(),
      helper: this.helper
    });
    this.addView(this.metadata);

    // Load the intro popup
    this.popup = new nfn.ui.view.Popup({
      model: new nfn.ui.model.Popup(),
      template: $('#popup-template').html(),
      parent: this
    });
    this.addView(this.popup);
    this.popup.bind('hide', function() {
      that.transcriberWidget.focus();
    });

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
    this.nextRecord();

    window.dispatchEvent(skipTranscriptionEvent);

    this.helper.closeTooltip();
    this.transcriberWidget.closeTooltip();

    delete this.transcriptions;
    this.transcriptions = new nfn.ui.collection.Transcriptions();
  },

  finish: function() {
    this.$backgroundMessage.html("<h1>Thanks!</h1><p class='loading'>Loading next bug...</p>");

    this.nextRecord();

    this.helper.closeTooltip();
    this.transcriberWidget.closeTooltip();

    finishedTranscriptionEvent.transcriptions = this.transcriptions;
    window.dispatchEvent(finishedTranscriptionEvent);

    delete this.transcriptions;
    this.transcriptions = new nfn.ui.collection.Transcriptions();
  },

  startTranscribing: function(subject) {
     this.model.set('currentStep', 0);
     subjectText = subject.metadata.name.replace(/_/g, ' '); // TODO: Standardize the field names used in code
     this.metadata.$meta.text(subjectText);
  },

  getPendingFieldCount: function() {
    return (this.guide.length - this.transcriptions.length);
  },

  updateStepCounter: function() {
    var currentStep = this.model.get("currentStep") + 1;
    this.transcriberWidget.$step.text(currentStep + "/" + this.model.get("stepsCount"));
  },

  updateInputField: function() {
    var value = "",
        currentStep = this.model.get("currentStep"),
        stepGuide = this.guide[currentStep],
        width = 580;

    var transcription = this.getStepData(this.model.get("currentStep"));

    if (transcription) { // gets stored value
      value = transcription.get("value");
    }

    if (stepGuide.inputWidth != undefined) {
      width = stepGuide.inputWidth;
    }

    this.transcriberWidget.model.set({type: stepGuide.type, inputWidth: width, value: value});
  },

  updatePlaceholder: function() {
    var currentStep = this.model.get("currentStep"),
        stepGuide = this.guide[currentStep];

    this.transcriberWidget.model.set("required", stepGuide.required);
    this.transcriberWidget.model.set("placeholder", stepGuide.placeholder);
    this.transcriberWidget.model.set("title", stepGuide.title);
  },

  updateHelper: function() {
    var currentStep = this.model.get('currentStep')
      , stepGuide = this.guide[currentStep]
      , that = this
      , dittoDescription = "<a class='alert'>!</a> You can use Ctrl-M to remember entries you have entered in this field previously. " +
      		"This can save time if you encounter multiple records from the same location, collector, etc."
      , height = this.transcriberWidget.height()
      , width = this.transcriberWidget.width();

    if (stepGuide.width != undefined) {
      width = stepGuide.width;
    }

    this.helper.setWidth(width, true);
    this.helper.model.set('stepGuide', stepGuide);

    this.metadata.setWidth(width, true);
    this.metadata.model.set('stepGuide', stepGuide);

    setTimeout(function() {
      helpState = (typeof stepGuide.helpStateDefault != undefined) ? stepGuide.helpStateDefault : false

      that.helper.model.set('showText', helpState);
      that.helper.model.set('required', stepGuide.required);
      that.helper.model.set('title', stepGuide.title);
      that.helper.model.set('description', stepGuide.description);
      that.helper.model.set('dittoDescription', dittoDescription);
      that.helper.model.set('urls', stepGuide.examples);
    }, 250);
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
      return transcription.get("stepNumber") === step;
    });
  },

  setStepData: function(step, value) {
    return this.transcriptions.find(function(transcription) {
      if (transcription.get('stepNumber') == step) {
        return transcription.set('value', value);
      }
    });
  },

  saveCurrentStep: function() {
    var stepNumber = this.model.get('currentStep')
      , transcription = this.getStepData(stepNumber);

    if (transcription) {
      transcription.set('value', this.transcriberWidget.getValue());
    } else {
      transcription = new nfn.ui.model.Transcription({
        stepTitle: this.guide[stepNumber].title,
        stepNumber: stepNumber,
        value: this.transcriberWidget.getValue()
      });

      this.transcriptions.push(transcription);
    }
  },

  render: function() {
    this.$el.addClass(this.model.get('type'));

    this.$el.append(this.discuss.render());
    this.$el.append(this.skipper.render());
    this.$el.append(this.helper.render());
    this.$el.append(this.metadata.render());
    this.$el.append(this.statusBar.render());
    this.$el.append(this.popup.render());
    this.$el.append(this.transcriberWidget.render());

    // Adds the message placeholder
    this.$el.append('<div class="message" />');
    this.$backgroundMessage = this.$el.find('.message');

    $(window).on('resize', this.onResize);

    $('body').append(this.$el);

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
        user.setPreference('bugs_popup', true, function() {});
      }
    }

    this.updateStatusBar();

    return this.$el;
  }
});
