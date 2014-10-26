// FungiWidget --------------------------------------
nfn.ui.model.FungiWidget = Backbone.Model.extend({ });

nfn.ui.view.FungiWidget = nfn.ui.view.Widget.extend({

  className: 'sernac-widget bar',

  events: {
    "click .btn.ok" : "ok",
    'keypress': "onEnter",
    "click .step" : "showStepTooltip",
    "click .btn.finish" : "showFinishTooltip",
    "click .skip" : "showSkipTooltip"
  },

  initialize: function() {
    _.bindAll( this, "toggle", "toggleOk", "onEnter", "updatePlaceholder", "updateValue", "updateDate", "updateType", "updateInputTitle", "createStepTooltip", "closeTooltip", "closeErrorTooltip", "closeFinishTooltip", "closeStepTooltip", "gotoStep", "showExample" );

    this.template = new nfn.core.Template({
      template: this.options.template
    });

    this.templates = [];

    this.templates["text"] = new nfn.core.Template({
      template: '<input type="text" placeholder="" />',
      type: 'mustache'
    });

    this.templates['date'] = new nfn.core.Template({
      template: $("#date-input-template").html(),
      type: 'mustache'
    });

    this.templates['country'] = new nfn.core.Template({
      template: $("#country-input-template").html(),
      type: 'mustache'
    });

    this.templates['state'] = new nfn.core.Template({
      template: $("#state-input-template").html(),
      type: 'mustache'
    });

    this.templates['county'] = new nfn.core.Template({
      template: $("#county-input-template").html(),
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);
    this.model.bind("change:placeholder", this.updatePlaceholder);
    this.model.bind("change:title", this.updateInputTitle);
    this.model.bind("change:type", this.updateType);
    this.model.bind("change:value", this.updateValue);

    this.model.bind("change:month", this.updateDate);
    this.model.bind("change:day", this.updateDate);
    this.model.bind("change:year", this.updateDate);

    this.model.bind("change:draggable", this.toggleDraggable);
    this.model.bind("change:resizable", this.toggleResizable);
    this.model.bind("change:ok_enabled", this.toggleOk);

    this.parent = this.options.parent;
  },

  skip: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltip();               // TODO: add test
    this.parent.helper.closeTooltip(); // TODO: add test

    this.clearInput();
    this.parent.nextStep();
  },

  onEnter: function(e) {
    if (e.keyCode != 13) return;
    this.ok();
  },

  ok: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    GOD.triggerCallbacks(); // this closes the tooltips (TODO: add test)

    var type  = this.model.get("type");

    var isEmpty = true;

    if ((type == undefined || type == 'text' || type == 'location' || type == 'state' || type == 'county' || type == 'country') && this.$input.val()) {
      isEmpty = false;
    } else if (type == 'date') {
      isEmpty = !$(this.$input[0]).val() && !$(this.$input[1]).val() && !$(this.$input[2]).val()
    }

    if (!isEmpty) {
      this.parent.saveCurrentStep();
      this.clearInput();

      // Shall we go to the next record or the next step?
      if (this.parent.getPendingFieldCount() == 0) {
        this.parent.finish();
      } else {
        this.parent.nextStep();
      }
    } else { // don't store or advance when the input field is empty
      this.showErrorTooltip("Empty field", "Please, write a value or use the skip field option below");
    }
  },

  toggleOk: function() {
    if (this.model.get("ok_enabled")) {
      this.$okButton.removeClass("disabled");
    } else {
      this.$okButton.addClass("disabled");
    }
  },

  enableOk: function(callback) {
    this.model.set("ok_enabled", true);

    callback && callback();

    return this;
  },

  disableOk: function(callback) {
    this.model.set("ok_enabled", false);

    callback && callback();

    return this;
  },

  gotoStep: function(e, i) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.clearInput();
    this.closeStepTooltip();

    this.parent.model.set("currentStep", i);
    this.focus();
  },

  showErrorTooltip: function(title, description) {
    this.closeTooltips();
    
    if (!this.errorTooltip) this.createErrorTooltip(title, description);
  },

  closeErrorTooltip: function(callback) {

    var that = this;

    if (!this.errorTooltip) return;

    this.errorTooltip.hide();
    this.errorTooltip.clean();
    delete this.errorTooltip;

    this.$errorIndicator.fadeOut(100, function() {
      that.$okButton.fadeIn(100);
    });

    callback && callback();

  },

  createErrorTooltip: function(title, description) {

    var
    main        = "Finish",
    secondary   = "Cancel";

    this.errorTooltip = new nfn.ui.view.Tooltip({

      className: "tooltip error",

      model: new nfn.ui.model.Tooltip({
        template: $("#tooltip-error-template").html(),
        title: title,
        description: description
      })

    });

    this.addView(this.errorTooltip);

    var that = this;

    this.errorTooltip.bind("onEscKey",         this.closeErrorTooltip);
    this.errorTooltip.bind("onSecondaryClick", this.closeErrorTooltip);
    this.errorTooltip.bind("onMainClick",      function() {

      that.closeErrorTooltip(function() {
        //that.finish();
      })

    });

    this.$okButton.fadeOut(100, function() {
      that.$errorIndicator.fadeIn(100);
    });

    this.$el.append(this.errorTooltip.render());

    this.errorTooltip.show();

    var
    $element    = this.$okButton,
    targetWidth = $element.width()/2,
    marginRight = 8,
    x           = Math.abs(this.$el.offset().left - $element.offset().left) - this.errorTooltip.width() / 2 + targetWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - $element.offset().top)  - this.errorTooltip.height() - 40

    this.errorTooltip.setPosition(x, y);
    GOD.add(this.errorTooltip, this.closeErrorTooltip);

  },

  showSkipTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.tooltip) this.createTooltip(e);

  },

  createTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "If you can’t find the value, you can see <a href='#' class='action' data-action='show-example'>examples</a> that surely will help you",
    main        = "Skip field",
    secondary   = "Cancel";

    this.tooltip = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip({ title: title, description: description, main: main, secondary: secondary })
    });

    this.addView(this.tooltip);

    var that = this;

    this.tooltip.bind("onEscKey",         this.closeTooltip);
    this.tooltip.bind("onSecondaryClick", this.closeTooltip);
    this.tooltip.bind("onActionClick",    this.showExample);

    this.tooltip.bind("onMainClick",      function() {

      that.closeTooltip(function() {
        that.skip();
      })

    });

    this.$el.append(this.tooltip.render());
    this.tooltip.show();

    var
    targetWidth   = $(e.target).width()/2,
    marginRight = parseInt($(e.target).css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.tooltip.width() / 2 + targetWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.tooltip.height() - 40

    this.tooltip.setPosition(x, y);
    GOD.add(this.tooltip, this.closeTooltip);

  },

  showExample: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.parent.helper.showExample();

  },

  closeTooltip: function(callback) {

    if (!this.tooltip) return;

    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();

  },

  showStepTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.stepTooltip) this.createStepTooltip(e);

  },

  createStepTooltip: function(e) {
    this.stepTooltip = new nfn.ui.view.Tooltip({
      className: "tooltip step",
      model: new nfn.ui.model.Tooltip({
        template: $("#tooltip-step-template").html(),
        links: this.parent.guide
      })
    });

    this.addView(this.stepTooltip);

    var that = this;

    this.stepTooltip.bind("onEscKey", this.closeStepTooltip);

    this.$el.append(this.stepTooltip.render());
    this.stepTooltip.show();

    var $target = this.$step,
        targetWidth = $target.width()/2,
        marginRight = parseInt($target.css("margin-right").replace("px", ""), 10);


    this.parent.transcriptions.each(function(transcription) {
      if (transcription.get("value")) {
        that.stepTooltip.$el.find("li:nth-child(" + (transcription.get("stepNumber") + 1) + ")").addClass("completed");
        that.stepTooltip.$el.find("li:nth-child(" + (transcription.get("stepNumber") + 1) + ") span").text(transcription.get('value'));
      }
    });

    var x = Math.abs(this.$el.offset().left - $target.offset().left) - this.stepTooltip.width() + 30,
        y = Math.abs(this.$el.offset().top  - $target.offset().top)  - this.stepTooltip.$el.outerHeight() - 17;
    this.stepTooltip.setPosition(x, y);

    var currentStep = this.parent.model.get("currentStep");

    this.stepTooltip.$el.find("a").on("click", function(e) {
      var i = $(this).parent().index();
      that.gotoStep(e, i);
    });

    GOD.add(this.stepTooltip, this.closeStepTooltip);
  },

  closeStepTooltip: function(callback) {

    if (!this.stepTooltip) return;

    this.stepTooltip.hide();
    this.stepTooltip.clean();
    delete this.stepTooltip;

    this.focus();

    callback && callback();

  },

  showFinishTooltip: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.finishTooltip) this.createFinishTooltip(e);
  },

  closeTooltips: function() {
    GOD.triggerCallbacks();
  },

  createFinishTooltip: function(e) {
    if (this.parent.getPendingFieldCount() == 0) {
      var title = 'Thank you!',
        description = 'Onto the next record.',
        main = 'Next',
        secondary = 'Cancel';
    } else {
      var title = 'Are you sure?',
        description = '',
        main = 'Finish',
        secondary = 'Cancel';

      if (this.parent.getPendingFieldCount() == 1) {
        description = "There is still <a href='#'>1 empty field</a> for this record that should be completed before finishing.";
      } else {
        description = "There are still <a href='#'> " + this.parent.getPendingFieldCount() + " empty fields</a> for this record that should be completed before finishing.";
      }
    }

    this.finishTooltip = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip({
        title: title,
        description: description,
        main: main,
        secondary: secondary
      })
    });

    this.addView(this.finishTooltip);

    var that = this;

    this.finishTooltip.bind("onEscKey",         this.closeFinishTooltip);
    this.finishTooltip.bind("onSecondaryClick", this.closeFinishTooltip);
    this.finishTooltip.bind("onMainClick",      function() {

      that.closeFinishTooltip(function() {
        that.finish();
      })
    });

    this.$el.append(this.finishTooltip.render());
    this.finishTooltip.show();

    this.finishTooltip.$el.find(".description > a").on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();

      that.showStepTooltip();
    });

    var
    $target     = this.$finishButton,
    targetWidth = $target.width()/2,
    marginRight = parseInt($target.css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - $target.offset().left) - this.finishTooltip.width() / 2 + targetWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - $target.offset().top)  - this.finishTooltip.height() - 40

    this.finishTooltip.setPosition(x, y);
    GOD.add(this.finishTooltip, this.closeFinishTooltip);
  },

  closeFinishTooltip: function(callback) {
    if (!this.finishTooltip) return;

    this.finishTooltip.hide();
    this.finishTooltip.clean();
    delete this.finishTooltip;

    callback && callback();
  },

  finish: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.clearInput();
    this.parent.finish();
  },

  clearInput: function() {
    this.$input.val("");
  },

  resize: function() {
    var that = this;

    var type = this.model.get("type")
      , width = this.model.get("inputWidth");

    if (type == 'date') {
      if ($(".input_field.date").width() > width - 290) {
        this.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true, function() {
          $(".input_field.date").delay(50).animate({ width: width - 290  }, 150);
        });
      } else {
        this.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true);
        $(".input_field.date").delay(50).animate({ width: width - 290  }, 150);
      }
    } else {
      if (this.$el.find('.input_field') > width - 300) {
        this.$el.find('.input_field').animate({width: 250}, 200, function() {
          that.$input.width(width - 300 - 40);
          that.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true);
        });
      } else {
        this.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true);
        this.$el.find('.input_field').delay(50).animate({ width: width - 300  }, 200);
        this.$input.width(width - 300 - 40);
      }
    }
  },

  getValue: function() {
    var type = this.model.get('type');

    if (type == 'date') {
        var month; var day; var year;

      this.$input.each(function(i){
    	  if ($(this).hasClass("month")) {
            if ($(this).val() == 'placeholder') {
              month = false;
            } else {
            	month = $(this).val(); 
            }
    	  } else if ($(this).hasClass("day")) {
            if ($(this).val() == 'placeholder') {
              day = false;
            } else {
            	day = $(this).val(); 
            }
    	  } else if ($(this).hasClass("year")) {    		  
            if ($(this).val() == 'placeholder') {
              year = false;
            } else {
            	year = $(this).val(); 
            }
    	  }
      });
      if (month && day && year) {
        return month + "/" + day + "/" + year;
      } else {
        return "";
      }
    } else {
      return this.$input.val();
    }
  },

  updatePlaceholder: function() {
    var type = this.model.get("type");

    if (type == 'date') {
      var placeholders = this.model.get("placeholder");

      this.$input.find(".day").attr("placeholder",   placeholders[0]);
      this.$input.find(".month").attr("placeholder", placeholders[1]);
      this.$input.find(".year").attr("placeholder",  placeholders[2]);
    } else {
      this.$input.attr("placeholder", this.model.get("placeholder"));
    }

    this.resize();
    this.focus();
  },

  updateInputTitle: function() {	  
	  this.$input.data("title", this.model.get("title"));
  },
  
  focus: function() {
    this.$el.find('input, select').first().focus()
  },

  updateDate: function() {
    var month = this.model.get("month");
    var day = this.model.get("day");
    var year = this.model.get("year");

    this.$el.find(".month").val(month);
    this.$el.find(".day").val(day);
    this.$el.find(".year").val(year);
  },

  updateValue: function() {
    this.$input.val("");

    var value = this.model.get("value")
      , type = this.model.get("type");

    if (type == 'date') {
      var date = value.split("/");

      var month = date[0];
      var day   = date[1];
      var year  = date[2];

      this.$el.find(".month").val(month);
      this.$el.find(".day").val(day);
      this.$el.find(".year").val(year);
    } else {
      this.$input.val(value);
    }
  },

  updateType: function() {
    var type = this.model.get('type')
      , types = Object.keys(this.templates);

    this.$el.find(".input_field").removeClass(types.join(' ')).addClass(type);
    this.$el.find(".input_field input, .input_field .country_field, .input_field .state_field, .input_field .county_field, .input_field .latlng_field, .input_field .date_field").remove();

    if (type == 'state') {
      // Country is the first piece of data collected, hence step 0.
      var country = false;
      if (this.parent.getStepData(0)) {
        country = this.parent.getStepData(0).get('value');
      }

      // If it's US, have state/county be a pre-defined list of states/counties. Otherwise, display text input.
      if (country && this._isCountryUs(country)) {
        this.$el.find(".input_field").append(this.templates[type].render());
        this.$input = this.$el.find('.input_field select');
      } else {
        this.$el.find(".input_field").append(this.templates['text'].render());
        this.$input = this.$el.find('.input_field input');
      }

    } else if (type == 'county') {
      // Country is the first piece of data collected, hence step 0.
      var country = this.parent.getStepData(0).get('value')
        , state = this.parent.getStepData(1).get('value')
        , counties = window.counties[state];

      // If it's US, have state/county be a pre-defined list of states/counties. Otherwise, display text input.
      if (this._isCountryUs(country)) {
        this.$el.find(".input_field").append(this.templates[type].render({state: state, counties: counties}));
        this.$input = this.$el.find('.input_field select');
      } else {
        this.$el.find(".input_field").append(this.templates['text'].render());
        this.$input = this.$el.find('.input_field input');
      }

    } else if (type == 'date' || type == 'country') {
      this.$el.find(".input_field").append(this.templates[type].render());
      this.$input = this.$el.find('.input_field select');

    } else {
      this.$el.find(".input_field").append(this.templates[type].render());
      this.$input = this.$el.find('.input_field input');
    }  
  
    var that = this;
    this.$input.autocomplete({
      delay: 0,
      minLength: 0,	
      source: function(request, response) {
      	var cache = JSON.parse(localStorage.getItem("classifications"));
      	var options = [];
      	for (var key in cache) {
      		var entry = cache[key];
      		var matches = that.retrieveClassificationEntries(entry, that.$input.data("title"));
      		if (matches.length > 0) {
      			var value = matches[0];
      			if (this.element.find("option").length) {
      				// if the input element is a select, skip the cached value if it's not one of the permitted options
      				if (this.element.find("[value='" + value + "']").length == 0) {
      					continue;
      				}
      			}

      			// uniqify results
    				if (jQuery.inArray(value, options) == -1) {
    					options.push(value);
    				}
      		}

      		options.sort(function(a, b) {
    		    if (a.toLowerCase() < b.toLowerCase()) return -1;
    		    if (a.toLowerCase() > b.toLowerCase()) return 1;
    		    return 0;
    			});
          		
          response(options);
        }
      },
      search: function(event, ui) {
      	if (event.keyCode || !event.isTrigger) {	// only open the menu for the ctrl-m input detected by TranscriptionController
      		event.preventDefault();
      	}
      },
      select: function(event, ui) {
      	if (jQuery.inArray(that.$input.data("title"), ['Begin Date Collected','End Date Collected']) > -1) {  // TODO use a better identifier?
      		that.splitValue(ui.item.value, $(".ui-autocomplete-input"), "/");
        	event.preventDefault();
      	}
      }
    });
  },

  render: function() {
    this.$el.append(this.template.render());

    this.$errorIndicator = this.$el.find(".error");
    this.$okButton = this.$el.find(".btn.ok");
    this.$skip = this.$el.find(".skip");
    this.$finishButton = this.$el.find(".btn.finish");
    this.$step = this.$el.find(".step");
    this.$input = this.$el.find('.input_field input[type="text"]');
    return this.$el;
  },
  
  retrieveClassificationEntries: function(classification, fieldName) {
  	var merged = [];
  	merged = merged.concat.apply(merged,
			jQuery.map(classification.classification.annotations, function(element) { 
				if (element["step"] == fieldName) return element["value"]; 
			}
		));
  	return merged;
  },
  
  splitValue: function(value, targetEls, delimiter) {
  	var splits = value.split(delimiter);
  	for (var i = 0; i < splits.length; i++) {
  		$(targetEls.get(i)).val(splits[i]);
  	}
  }
});
