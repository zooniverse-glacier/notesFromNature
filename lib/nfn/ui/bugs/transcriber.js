// BUGS TRANSCRIBER ------------------------------------------
Spine = require('spine')

nfn.ui.model.Bugs = nfn.ui.model.Transcriber.extend({
  defaults: {
    type: 'sernac bugs'
  }
});

nfn.ui.view.Bugs = nfn.ui.view.Transcriber.extend({
  initialize: function() {
    var that = this;

    _.bindAll( this, "addScroll", "updateInputField", "updatePlaceholder", "updateHelper", "updateStatusBar", "getStepData", "updateStepCounter", "onMouseDown", "onMouseUp", "onResize");

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

    this.user = this.options.user;
    this.archive = this.options.archive;

    this.model.set("currentRecord", 0);
    this.model.set("currentStep", -1);
    this.model.set("stepsCount", this.guide.length);

    this.model.bind("change:currentRecord", function(model) {
      that.updateStatusBar();
    });

    this.model.bind("change:currentStep", function() {
      that.updateStepCounter();
      that.updateInputField();
      that.updatePlaceholder();
      that.updateHelper();

      setTimeout(function() {
        that.transcriberWidget.focus();
      }, 100);
    });

    this.photos = new nfn.ui.collection.Photos();
    this.transcriptions = new nfn.ui.collection.Transcriptions();

    this.addViews();
    this.render();
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

    // Loads the backdrop
    this.backdrop = new nfn.ui.view.Backdrop({
      model: new nfn.ui.model.Backdrop(),
      parent: this
    });
    this.addView(this.backdrop);

    // Loads the highlight
    this.highlight = new nfn.ui.view.Highlight({
      model: new nfn.ui.model.Highlight(),
      template: $("#highlight-template").html(),
      parent: this
    });
    this.addView(this.highlight);

    // Loads the spinner
    this.spinner = new nfn.ui.view.Spinner({ 
      model: new nfn.ui.model.Spinner(),
      settings: { lines: 10, length: 3, width: 4, radius: 8, color: '#333333' },
      parent: this
    });
    this.addView(this.spinner);

    // Loads the helper
    this.helper = new nfn.ui.view.BugsHelper({
      model: new nfn.ui.model.BugsHelper(),
      template: $("#helper-template").html(),
      parent: this
    });
    this.addView(this.helper);

    // Loads the StatusBar
    this.statusBar = new nfn.ui.view.StatusBar({
      model: new nfn.ui.model.StatusBar({
        title: "Calbug",
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


  skip: function() {
    this.backdrop.hide();
    this.transcriberWidget.hide();
    this.helper.hide();
    this.metadata.hide();

    Spine.trigger('skipTranscription');

    $('.photos img').animate({
      marginLeft: -2 * $(document).width()
    }, 500);

    this.helper.closeTooltip();
    this.transcriberWidget.closeTooltip();
  },

  finish: function() {
    this.$backgroundMessage.html("<h1>Thanks!</h1><p class='loading'>Loading next bug...</p>");

    this.backdrop.hide();
    this.transcriberWidget.hide();
    this.helper.hide();
    this.metadata.hide();

    this.nextRecord();

    var that = this;

    $(".photos img").animate({ marginLeft: -2*$(document).width() }, 500, function() {
      if (that.getPendingFieldCount() == that.guide.length) {
        Spine.trigger('skipTranscription');
      } else {
        Spine.trigger("finishedTranscription", that.transcriptions);
      }

      that.helper.closeTooltip();             // TODO: add test
      that.transcriberWidget.closeTooltip();  // TODO: add test

      delete that.transcriptions;
      that.transcriptions = new nfn.ui.collection.Transcriptions();
    });
  },

  showPhoto: function(i) {
    var that = this;

    this.$el.append(this.spinner.render());
    this.spinner.show().spin();

    this.$backgroundMessage.fadeIn(250);

    var photo = this.photos.at(i);

    if (photo) {
      photo.get("view").render();
      photo.get("view").$el.css("margin-left", 1500);
    }
  },

  addSelection: function() {
    if (this.$el.find(".selection").length <= 0)
      this.$el.append(this.selection.render());
  },

  removeSelection: function() {
    this.selection.remove();
  },

  updateSelection: function(startX, startY, endX, endY) {

    var
    dw         = $(document).width(),
    dh         = $(document).height();

    var s = {};

    if (endX > startX) { // right

      s = { right: "auto", left:  startX , width: endX - startX };
      this.selection.model.set("left", startX);

    } else { // left

      s = { left:"auto", width: startX - endX, right: dw -startX };
      this.selection.model.set("left", endX);

    }

    if (endY > startY) { // bottom

      style = { bottom: "auto", top: startY, height: (endY - startY) };
      this.selection.model.set("top",  startY);

    } else { // top

      style = { top: "auto", height: startY - endY , bottom: dh - startY};
      this.selection.model.set("top",  endY);

    }

    s = $.extend(s, style);
    s = $.extend({ visibility: "visible" }, s);

    this.selection.model.set("width",  Math.abs(endX - startX));
    this.selection.model.set("height", Math.abs(endY - startY));

    this.selection.$el.css(s);
  },

  addHighlight: function(dimensions) {

    this.highlight.show();
    this.highlight.create(dimensions);
    this.$el.find(".photos").removeClass("selectable");
    this.launcher.enable();
    this.disableMouseWheel();

  },


  stopTranscribing: function() {

    this.model.set("isDown", false);
    this.$el.find(".photos").off("mousedown");
    this.$el.off("mouseup");

  },

  startTranscribing: function(subject) {
    typeof subject !== 'undefined' ? this.model.set('subject', subject) : false;

    // add the transcriber widget
    var transcriberX = ($(window).width() / 2) - (this.transcriberWidget.width() / 2)
      , transcriberY = $(window).height() - (this.transcriberWidget.height() + 60);
    this.transcriberWidget.setPosition(transcriberX, transcriberY);
    this.transcriberWidget.show();

    // add the helper widget
    var helperX = ($(window).width() / 2) - (this.helper.width() / 2)
      , helperY = this.transcriberWidget.top() - 10;
    this.helper.setPosition(helperX, helperY);
    this.helper.show();

    // add the metadata widget
    var metaX = ($(window).width() / 2) - (this.metadata.width() / 2)
      , metaY = this.helper.top() - 30;
    this.metadata.setPosition(metaX, metaY);
    this.metadata.show();

    subjectText = subject.metadata.number + ' ' + subject.metadata.species
    this.metadata.$meta.text(subjectText);

    // Add discuss button
    this.discuss.setPosition(10, this.statusBar.bottom() + 25);
    this.discuss.show();

    // Add skip button
    this.skipper.setPosition(10, this.discuss.bottom() + 10);
    this.skipper.show();

    // Only after both widgets are added do we start the transcription process.
    this.model.set('currentStep', 0);

    helperWidget = this.helper;
    transcriber = this.transcriberWidget;
    metaWidget = this.metadata;

    this.transcriberWidget.$el.draggable({
      drag: function(e, ui) {
        // Update transcriber
        transcriber.setPosition(ui.position.left, ui.position.top);

        // Update other widgets
        transcriberCenter = ui.position.left + (transcriber.width() / 2)

        var helperX = transcriberCenter - (helperWidget.width() / 2)
          , helperY = ui.position.top - 10;
        helperWidget.setPosition(helperX, helperY);

        var metaX = transcriberCenter - (metaWidget.width() / 2)
          , metaY = helperWidget.top() - 32;
        metaWidget.setPosition(metaX, metaY);
      }
    });
  },

  onMouseUp: function() {
    if (this.model.get("isDown")) {
      if ( this.selection.isDefined() ) {
        this.model.set("isDown", false);

        this.addHighlight(this.selection.getDimensions());
        this.stopTranscribing();
        this.removeSelection();
        this.launcher.show();
      }
    }
  },

  onMouseDown: function(e) {
    var that = this
      , initialxpos = e.pageX
      , initialypos = e.pageY;

    this.model.set("isDown", true);

    this.selection.$el.css("visibility", "hidden");
    this.addSelection();

    this.$el.mousemove(function(e){
      that.updateSelection(initialxpos, initialypos, e.pageX, e.pageY);
    });
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

  addScroll: function() {
    if (!this.model.get("scrollbar")) {
      this.model.set("scrollbar", true);
      this.$el.find(".photos").mCustomScrollbar();
    }
  },

  enableMouseWheel: function() {
    this.$el.find('.photos').mCustomScrollbar('enableMouseWheel');
  },

  disableMouseWheel: function() {
    this.$el.find('.photos').mCustomScrollbar('disableMouseWheel');
  },

  onResize: function() {
    this.$el.height($(window).height());
  },

  render: function() {
    this.$el.addClass(this.model.get('type'));

    this.$el.append(this.backdrop.render());
    this.$el.append(this.discuss.render());
    this.$el.append(this.helper.render());
    this.$el.append(this.metadata.render());
    this.$el.append(this.statusBar.render());
    this.$el.append(this.transcriberWidget.render());
    this.$el.append(this.popup.render());
    this.$el.append(this.skipper.render());

    // Adds the message placeholder
    this.$el.append('<div class="message" />');
    this.$backgroundMessage = this.$el.find('.message');

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    // This prevents the image to be draggable (hack for Firefox)
    $(document).on('dragstart', '.photos img', function() {
      return false;
    });

    $(window).on('resize', this.onResize);

    $('body').append(this.$el);
    this.$el.height($(window).height());

    user = zooniverse.models.User.current;
    project = zooniverse.models.Project.current;

    var seenPopup = false;

    if(user) {
      // Check if user has seen popup before
      if(('preferences' in user) && (project.id in user.preferences) && ('bugs_popup' in user.preferences[project.id])) {
        seenPopup = true;
      }
    }

    if(!seenPopup) {
      this.popup.show();

      if(user) {
        user.setPreference('bugs_popup', true, function() {});
      }
    }

    this.updateStatusBar();

    return this.$el;
  }
});