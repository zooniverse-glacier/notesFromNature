// HERBARIUM TRANSCRIBER ------------------------------------------
Spine = require('spine')

// Replace the previous line with this one when running the tests
 //Spine = { trigger: function() {} };

nfn.ui.model.Herbarium = nfn.ui.model.Transcriber.extend({
  defaults: {
    type: 'sernac',
    visible: true
  }
});

nfn.ui.view.Herbarium = nfn.ui.view.Transcriber.extend({

  initialize: function() {
    var that = this;

    _.bindAll( this, "addScroll", "updateInputField", "updatePlaceholder", "updateHelper", "updateStatusBar", "getStepData", "updateStepCounter", "addMagnifier", "onMouseDown", "onMouseUp", "onResize" );

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);

    this.guide = [
      {
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

    this.photos = new nfn.ui.collection.Photos();
    this.transcriptions = new nfn.ui.collection.Transcriptions();

    this.addViews();
    this.render();
  },

  close: function() {
    this.launcher.disable();
    this.launcher.hide();

    this.backdrop.hide();
    this.discuss.hide();
    this.magnifier.hide();
    this.helper.hide();
    this.transcriberWidget.hide();

    this.startTranscribing();

    delete this.transcriptions;
    this.transcriptions = new nfn.ui.collection.Transcriptions();
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

    this.spinner = new nfn.ui.view.Spinner({ // Loads the spinner
      model: new nfn.ui.model.Spinner(),
      settings: { lines: 10, length: 3, width: 4, radius: 8, color: '#333333' },
      parent: this
    });

    this.addView(this.spinner);

    // Loads the helper
    this.helper = new nfn.ui.view.Helper({
      model: new nfn.ui.model.Helper(),
      template: $("#helper-template").html(),
      parent: this
    });

    this.addView(this.helper);

    // Loads the helper
    this.statusBar = new nfn.ui.view.StatusBar({
      model: new nfn.ui.model.StatusBar({
        title: "Herbarium Collection",
        description: "from SERNEC"
      }),

      template: $("#statusbar-template").html(),
      parent: this
    });

    this.addView(this.statusBar);

    // Loads the magnifier
    this.magnifier = new nfn.ui.view.Magnifier({
      model: new nfn.ui.model.Magnifier(),
      parent: this,
      template: $("#magnifier-template").html()
    });

    this.addView(this.magnifier);

    // Loads the selection
    this.selection = new nfn.ui.view.Selection({
      model: new nfn.ui.model.Selection(),
      parent: this
    });

    this.addView(this.selection);

    // Loads the launcher
    this.launcher = new nfn.ui.view.Launcher({
      model: new nfn.ui.model.Launcher(),
      template: $("#launcher-template").html(),
      parent: this
    });

    this.addView(this.launcher);

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
    var that = this;

    this.launcher.disable();
    this.backdrop.hide();
    this.magnifier.hide();
    this.helper.hide();
    this.transcriberWidget.hide();

    $(".photos img").animate({
      marginLeft: -2*$(document).width()
    }, 500, function() {
      Spine.trigger('skipTranscription');
    });

    this.helper.closeTooltip();
    this.transcriberWidget.closeTooltip();
  },

  finish: function() {
    var that = this;

    this.$backgroundMessage.html("<h1>Thanks!</h1><p>You really did a great job transcribing that page.</p><p class='loading'>Loading next one...</p>");

    this.launcher.disable();

    this.backdrop.hide();
    this.closer.hide();
    this.discuss.hide();
    this.magnifier.hide();
    this.helper.hide();
    this.transcriberWidget.hide();

    this.nextRecord();

    this.helper.closeTooltip();             // TODO: add test
    this.transcriberWidget.closeTooltip();  // TODO: add test

    Spine.trigger("finishedTranscription", that.transcriptions)
    $(".photos img").animate({ marginLeft: -2*$(document).width() }, 500);

    delete this.transcriptions;
    this.transcriptions = new nfn.ui.collection.Transcriptions();
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

  addMagnifier: function() {
    if (this.selection.isDefined()) {
      var dimensions = this.highlight.getDimensions();

      var $img = this.$el.find(".photos img:first-child");

      var
      x = Math.abs($img.offset().left - dimensions.x),
      y = Math.abs($img.offset().top - dimensions.y),
      w = dimensions.w,
      h = dimensions.h;

      this.model.set("currentStep", 0);
      this.updateSelection(x, y, x+w, y+h);

      // Size of the magnifier
      w = 640;
      h = 480;

      var that = this;

      this.launcher.hide(function() {
        var img2x = new Image;
        img2x.src = that.model.get("subject").location.standard;
        var $img2x = $(img2x);

        that.highlight.hide();

        // Setting up the magnifier
        that.magnifier.create({ x: $(window).width()/2 - w/2, y: $(window).height()/2 - h/2, w: w, h: h });
        that.magnifier.$el.css({ left: "50%", marginLeft: -1*w/2 });
        that.magnifier.$el.empty();

        var spinner = new nfn.ui.view.Spinner({ // Loads the spinner
          model: new nfn.ui.model.Spinner(),
          settings: { lines: 10, length: 3, width: 4, radius: 8, color: '#333333' },
          parent: this
        });

        window.spinner = spinner;

        that.magnifier.$el.append(spinner.render());

        spinner.show().spin();

        // Setting up the transcription view
        that.removeSelection();
        that.backdrop.show();

        $img2x.imagesLoaded(function() {
          var magnifierWidth = that.magnifier.width();

          spinner.hide().stop();
          that.magnifier.$el.append($img2x);
          that.magnifier.render();

          // Loads the Closer
          that.closer = new nfn.ui.view.Closer({
            model: new nfn.ui.model.Closer(),
            template: $("#closer-template").html(),
            onClose: function () {
              that.closeMagnifier();
            }
          });

          // Add the Discuss button
          var discussX = that.magnifier.left() + that.magnifier.width() + 10
            , discussY = that.magnifier.top() + that.magnifier.height() - that.discuss.height();
          that.discuss.setPosition(discussX, discussY);
          that.discuss.show();

          // Add the close button
          var closerX = that.magnifier.left() + that.magnifier.width() + 10
            , closerY = that.magnifier.top();
          that.closer.$el.css({left: closerX, top: closerY});
          that.$el.append(that.closer.render());
          that.closer.show();

          var // add the helper widget
          helperX = that.magnifier.left(),
          helperY = that.magnifier.top() - that.helper.height() - 10;

          that.helper.setWidth(magnifierWidth).setPosition(helperX, helperY)
          that.helper.$el.css({ left: "50%", marginLeft: -1*magnifierWidth/2 });
          that.helper.show();

          var // add the transcriber widget
          twX = "50%",
          twY = that.magnifier.top() + that.magnifier.height() + 10;

          that.transcriberWidget.setWidth(magnifierWidth).setPosition(twX, twY);
          that.transcriberWidget.resize();
          that.transcriberWidget.show();

          heightRatio = $img2x.height() / $img.height();
          widthRatio = $img2x.width() / $img.width();

          if ($.browser.msie && $.browser.version == 8) {
            $img2x.css({
              top: -1 * selection_y,
              left: -1 * selection_x
            });
          } else {
            $img2x.css({
              top: -heightRatio * y,
              left: -widthRatio * x
            });
          }

          $img2x.show();

          // Hack
          setTimeout(function() {
            that.transcriberWidget.focus();
          }, 700);
        });
      });
    }
  },

  closeMagnifier: function() {
    this.closer.hide();
    this.closer.clean();
    delete this.closer;

    this.highlight.clear();
    this.launcher.disable();

    this.backdrop.hide();
    this.discuss.hide();
    this.helper.hide();
    this.highlight.hide();
    this.launcher.show();
    this.magnifier.hide();
    this.selection.hide();
    this.transcriberWidget.hide();

    this.startTranscribing();
    this.enableMouseWheel();
  },
  
  stopTranscribing: function() {
    this.model.set("isDown", false);
    this.$el.find(".photos").off("mousedown");
    this.$el.off("mouseup");
  },

  startTranscribing: function(subject) {
    typeof subject !== 'undefined' ? this.model.set('subject', subject) : false;

    if (this.launcher.model.get("hidden")) {
      this.launcher.$el.css({ left: "50%", marginLeft: -1*this.launcher.width()/2 });
      this.launcher.show();
    }

    this.$el.find(".photos").addClass("selectable");
    this.$el.find(".photos").on("mousedown", this.onMouseDown);

    this.$el.on("mouseup", this.onMouseUp);
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
    var
    that = this,
    initialxpos = e.pageX,
    initialypos = e.pageY;

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

  onResize: function() {
    // onResize
  },

  addScroll: function() {
    var that = this;
    if (!this.model.get("scrollbar")) {
      this.model.set("scrollbar", true);
      this.$el.find(".photos").mCustomScrollbar();
      setTimeout(function() {
        that.$el.find(".photos").mCustomScrollbar("scrollTo", 100);
      }, 0);
    }
  },

  enableMouseWheel: function() {
    this.$el.find(".photos").mCustomScrollbar("enableMouseWheel");
  },

  disableMouseWheel: function() {
    this.$el.find(".photos").mCustomScrollbar("disableMouseWheel");
  },

  render: function() {
    this.$el.addClass(this.model.get("type"));

    this.$el.append(this.backdrop.render());
    this.$el.append(this.discuss.render());
    this.$el.append(this.launcher.render());
    this.$el.append(this.helper.render());
    this.$el.append(this.statusBar.render());
    this.$el.append(this.popup.render());
    this.$el.append(this.transcriberWidget.render());

    // Adds the message placeholder
    this.$el.append('<div class="message" />');
    this.$backgroundMessage = this.$el.find(".message");

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    // This prevents the image to be draggable (hack for Firefox)
    $(document).on("dragstart", ".photos img", function() {
      return false;
    });

    var that = this;

    $(window).on("resize", this.onResize);

    $(document).on("mouseover", ".mCSB_scrollTools", function() {
      that.stopTranscribing();
    });

    $(document).on("mouseleave", ".mCSB_scrollTools", function() {
      that.startTranscribing();
    });

    $("body").append(this.$el);

    this.launcher.setDraggable(true);

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
        user.setPreference('plants_popup', true, function() {});
      }
    }

    this.updateStatusBar();

    return this.$el;
  }
});
