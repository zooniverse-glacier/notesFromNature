
/**************************************************************************
 * TRANSCRIBING SERNAC PLUGIN
 **************************************************************************/
(function($, window, undefined) {

  // IE 9
  // Chrome
  // Mozilla Firefox
  // Safari
  // Opera

  // constants
  var
  TRUE = true, FALSE = true, NULL = null,
  name = 'transcriberSernac',
  className = 'transcriber',
  scrollpane,
  // Plugin parts
  Core, API, Helper,
  // default options
  days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
  months = ["January","February","March","April","May","June","July","August","September","October","November","December"],
  speciesURL = '',
  defaultOptions = {
    globalEvents : [],
    tooltips : {
      record: {
        content: 'There are still <u>{{pending}} empty fields</u> for this record that should be completed before finishing.',
        title: 'ARE YOU SURE?',
        orange: 'FINISH',
        white: 'CANCEL',
        tail: 'right'
      },
      skip : {
        content: 'If you can’t find the value, you can see <a class="example" href="#see_examples">examples</a> that surely will help you',
        title: 'ARE YOU SURE?',
        orange: 'SKIP FIELD',
        white: 'CANCEL',
        tail: 'center'
      },
      example : {
      }
    },
    titles: [
      'RECORD CODE',
      'GENUS & SPECIES',
      'COLLECTION LOCATION',
      'COLLECTION DATE ',
      'COLLECTOR',
      'TRANSFERRER',
      'TRANSFER DATE',
      'ADDITIONAL INFORMATION'
    ],
    explanations: [{
      label: 'It’s a 4 digit number located at the top right of the page.',
      inputs: [ { type: 'text', placeholder: 'CODE', size: 'medium', name: 'record_code' } ],
      step: 'Code',
      ok: 'in'
    }, {
      label: '2 or 3 latin words in the first line, next to the margin.',
      inputs: [ { type: 'text', placeholder: 'SPECIES', size: 'long', name: 'species' } ],
      step: 'Species',
      ok: 'in'
    }, {
      label: 'A place name, in the second line.',
      inputs: [ { type: 'text', placeholder: 'LOCATION', size: 'long', name: 'location' } ],
      step: 'Location',
      ok: 'in'
    }, {
      label: 'A date in the third line.',
      inputs: [
        { type: 'select', placeholder: 'MONTH', size: 'medium', name: 'collection_month', source: months },
        { type: 'select', placeholder: 'DAY', size: 'short', name: 'collection_day', source: days },
        { type: 'text', placeholder: 'YEAR', size: 'short', name: 'collection_year' }
      ],
      step: 'Collection date',
      ok: 'out'
    }, {
      label: 'A person name in the same line than the date.',
      inputs: [ { type: 'text', placeholder: 'COLLECTOR', size: 'long', name: 'collector' } ],
      step: 'Collector',
      ok: 'in'
    }, {
      label: 'A person name at the top right of the record.',
      inputs: [ { type: 'text', placeholder: 'TRANSFERER', size: 'long', name: 'transferer' } ],
      step: 'Transferer',
      ok: 'in'
    }, {
      label: 'A date under the transferrer.',
      inputs: [
        { type: 'select', placeholder: 'MONTH', size: 'medium', name: 'transfer_month', source: months },
        { type: 'select', placeholder: 'DAY', size: 'short', name: 'transfer_day', source: days },
        { type: 'text', placeholder: 'YEAR', size: 'short', name: 'transfer_year' } ],
        step: 'Transfer date',
        ok: 'out'
    }, {
      label: 'Can you detect this information?.',
      inputs: [
        { type: 'select', placeholder: 'GENDER', size: 'short', name: 'gender', source: ['male','female'] },
        { type: 'text', placeholder: 'AGE', size: 'short', name: 'age' },
        { type: 'text', placeholder: 'REGISTER', size: 'short', name: 'register' }
      ],
      step: 'Other',
      ok: 'out'
    }
    ]
  };


  /***************************************************************************
   * Private methods
   **************************************************************************/
  Core = {
    pluginName : name,
    options : null,

    _init : function (options) {
      // take user options in consideration
      Core.options = $.extend( true, defaultOptions, options );
      return this.each( function () {
        var $el = $(this);

        Core.$el = $el;

        $(".transcribing").css({ height: $(document).height() });

        // Core._createLoader($el);

        Core.$el.append(Core._createSkipTooltip());

        // Bind events
        Core._bind($el);

        // Start variables (step, values, ...)
        Core.$el.data('step', 0);
        Core.$el.data('values', {});

        Core._startTranscription();

      });
    },


    _bind: function($el) {

      // Start or finish record
      $(document).on('click', 'a.checkRecord', Core._showSelector);
      $(document).on('click', 'a.finish', Core._nextRecord);

      /*$(window).resize(function(){
        if (Core._resizePID) {
          clearTimeout(Core._resizePID);
        }
        Core._resizePID = setTimeout(function(){ Core._resize(); }, 100);
      });*/

      // Skip the field
      $(document).on('click', 'a.skip', Core._showSkipTooltip);


      var selection;

      $(document).mouseup(function(){

        if ($(".backdrop").length > 0) {
          return;
        }

        if ($(selection) != null) {
          var x = $(selection).offset().left;
          var y = $(selection).offset().top;
          var w = $(selection).width();
          var h = $(selection).height();

          selection.remove();

          if (w > 0 && h > 0) Core._addSelector(x, y, w, h);
        }
      });

      var $transcribing = $(document).find(".transcribing");

      $transcribing.bind('dragstart', function(event) { event.preventDefault(); });

      $transcribing.on("click", function(e){
        e.preventDefault();
      });

      $transcribing.on("mousedown", function(e){

        $(".jScrollPane").addClass("drag");

        if ($(".backdrop").length > 0) {
          return;
        }

        var
        initialxpos = e.pageX,
        initialypos = e.pageY,

        selectionId = "selection";

        $el.append($(document.createElement("span")).attr("id", selectionId));

        selection = $("#" + selectionId);

        $transcribing.mousemove(function(e){

          var
          cursorxpos = e.pageX,
          cursorypos = e.pageY,
          dw         = $(document).width(),
          dh         = $(document).height(),
          styleValue = "visibility:visible;";

          var s = {};

          if (cursorxpos > initialxpos) { // right
            s = { right: "auto", left:  initialxpos , width: cursorxpos - initialxpos };
          } else { // left
            s = { left:"auto", width: initialxpos - cursorxpos, right: dw -initialxpos };
          }

          if (cursorypos > initialypos) { // bottom
            style = { bottom: "auto", top: initialypos, height: (cursorypos - initialypos) };
          } else { // top
            style = { top: "auto", height: initialypos - cursorypos , bottom: dh - initialypos};
          }
          s = $.extend(s, style);
          s = $.extend({ visibility: "visible" }, s);

         selection.css(s);

        });
      });


    },

    /**
     * Stop propagation function
     */
    _preventDefault: function(ev) {
      ev.preventDefault();
    },

    _resize: function() {
      console.log(Core.$el.find("img"));
    },

    /**
     * Create a loader for the image
     */
    _createLoader: function($el) {

      var // Create loader
      loader  = $('<div>').addClass('loader'),
      spinner = new Spinner({ color:'white' }).spin();

      // Add it to its parent
      loader.append(spinner.el);

      // Add loader to the stage
      $el.append(loader);

      // Bind load image
      $el.find('img').imagesLoaded();
    },


    /**
     * Remove the loader after the image is loaded
     */
    _removeLoader: function($el) {
      $el.find('div.loader').animate({
        opacity:0
      }, 500,function(ev){
        $(this).remove();
      });
    },

    _addControls: function(x, y, w, h) {
      var $controls = $('<div>').attr('class', 'controls box');
      $controls.append('<span />');

      Core.$controls = $controls;

      $(".transcribing").append($controls);

      $controls.append(Core._createExplanations());
      Core.$hint.append(Core._createTitles());

      $controls.append('<a class="button finish orange"><span></span></a>');
      $controls.find(".button span").html("Finish this record");

      $controls.append('<a href="#" class="steps">1/'+ (Core.options.explanations.length) +'</a>');

      Core.$el.data('step', 1);

      // Binds ok button
      $controls.find('.fields li form .button').on('click', Core._nextRegister);

      var left = Math.max(0, (($(window).width()  - $controls.outerWidth()) / 2) + $(window).scrollLeft());
      var top  = $("#selector").offset().top + Core.$selector.height() + 20;

      $controls.css({ opacity:0, marginLeft: 0, left: left, top: top - 50, bottom: "none" });
      $controls.animate({ opacity: 1, top: top }, 300);
    },

    _addHint: function(x, y, w, h) {
      var $hint = $('<div>').attr('class', 'hint box');
      $hint.append('<ul class="explanations" />');

      Core.$hint = $hint;

      $(".transcribing").append($hint);

      var left = Math.max(0, (($(window).width()  - $hint.outerWidth()) / 2) + $(window).scrollLeft());
      var top = $("#selector").offset().top - $hint.height() - 50;

      $hint.css({ opacity: 0, marginLeft: 0, left: left, top: top + 50, bottom: "none" });
      $hint.animate({ opacity: 1, top: top }, 300);
    },

    _hideLegend: function() {
      Core.$legend.fadeOut(250);
    },

    _addLegend: function() {
      var $legend = $('<div>').attr('class', 'box');

      $legend.append('<span />');
      $legend.append('<a class="button disabled green checkRecord"><span></span></a>');

      Core.$legend = $legend;

      $legend.find("span").html("Drag a square around the specimen label.");
      $legend.find(".button span").html("Start this record");
      $legend.find(".button.next").on("click", Core._showSelector);

      $(".transcribing").append($legend);
      $legend.animate({opacity: 1, bottom: 90}, 150);
    },

    /**
     * Start the transcription after the image is loaded
     */
    _addSelector: function(x, y, w, h) {

      if (Core.$selector) {
        Core.$selector.fadeOut(250, function() {
          $(this).remove();
        });
      }

      var $selector = $('<div>').attr('id', 'selector');

      Core.$selector = $selector;

      $(".transcribing").append($selector);
      Core._showSelection(x, y, w, h);
    },

    _removeSelection: function() {

      Core.$hint.animate({ opacity: 0, top: Core.$hint.position().top + 20 }, 300, function() { $(this).remove(); });

      Core.$controls.animate({ opacity: 0, top: Core.$controls.position().top - 20 }, 300, function() {

        $(this).remove();

        Core.$selector.fadeOut(250, function() {
          $(this).remove();
          Core.$selector = null;
        });

        $(".backdrop").fadeOut(250, function() {
          $(this).remove();
        });
      });


    },

    _showSelection: function(x, y, w, h) {

      var width  = w;
      var height = h;

      Core.$legend.find(".disabled").removeClass("disabled");

      Core.selection_x = x - Core.$el.find("img").offset().left;
      Core.selection_y = y - Core.$el.find("img").offset().top+40;
      Core.selection_w = w;
      Core.selection_h = h;

      Core.$selector.css({width: width, height: height});

      Core.$selector.css({ left: x, top: y });
      Core.$selector.addClass("hollow");
      Core.$selector.fadeIn(250);
      Core.$selector.on("click", Core._showSelector);
    },

    _showSelector: function(ev) {

      if (!Core.$selector || !Core.$selector.width()) { return; }

      Core._checkRecord(ev);

      var w = Core.$selector.width();
      var h = Core.$selector.height();
      var y = Core.$selector.offset().top;
      var x = Core.$selector.offset().left;

      var width  = w*2;
      var height = h*2;

      if (width < 480)  width = 480;
      if (height < 350) height = 350;

      if (width > 600)  width = 600;
      if (height > 500) height = 500;

      Core.$selector.css({width: width, height: height});

      console.log(Core.$selector, $(window));

      var top = Math.max(0, (($(window).height() - Core.$selector.outerHeight()) / 2) + $(window).scrollTop());
      var left= Math.max(0, (($(window).width()  - Core.$selector.outerWidth()) / 2) + $(window).scrollLeft());

      Core.$selector.css({ left: left, top: top });
      Core.$selector.removeClass("hollow");

      $("#selector img").each(function(i, e) {
        $(e).remove();
      });

      var $img = $(".transcribing img").clone();

      $("body").append("<div class='backdrop' />");

      if ($.browser.msie && $.browser.version == 8) {
        $img.css({ top: -1*Core.selection_y, left: -1*Core.selection_x });
      } else {
        $img.css({ top: -1*Core.selection_y*2, left: -1*Core.selection_x*2 });
      }

      Core.$selector.append($img);
      Core.$selector.hide();
      Core.$selector.off("click");

      Core.$selector.fadeIn(250, function() {

        Core._hideLegend();
        Core._addHint(x, y, w, h);
        Core._addControls(x, y, w, h);

      });

    },

    /**
     * Start the transcription after the image is loaded
     */
    _startTranscription: function(ev) {

      var
        $img = $("div.transcribing.sernac"),
        $el = $img.closest('div.transcribing');

      // Remove Loader
      Core._removeLoader($el);

      Core._addLegend();

      // Show footer
      $('.footer').show();

      // Scrolls to top
      $('html, body').animate({scrollTop: 0, scrollLeft: 0}, 150);

      // Get image width and set its parent to margin auto
      //$el.width($img.width());

      // Set transcriptor width
      $el.find('div#transcriber').css({maxWidth:$(window).width() - 40 });
      $el.find('div#transcriber').width($img.width() - 2);

      $img.fadeIn(250);

      $el.find(".scrollpane").css({width:$(window).width(), height: $(window).height() });
      Core.scrollpane = $el.find(".scrollpane").jScrollPane({showArrows: true});

      // Enable transcription
      $el.find('div#transcriber').show().animate({ opacity:1, marginTop: '-=35px' }, 500);
    },

    /**
     * CREATE, MANAGE AND RESET TITLE TOP LIST
     */

    /**
     * first create the titles list
     * return @list : returns the titles top list
     */
    _createTitles: function() {
      var $list = $('<ul class="titles">');

      // Add titles list
      for (var i = 0, _length = Core.options.titles.length; i < _length ; i++) {
        $list.append('<li ' + (i === 0 ? 'class="selected"' : '' ) + '><label>' + Core.options.titles[i] + '</label></li>');
      }

      // Return top
      return $list;
    },


    /**
     * manage titles list
     */
    _manageTitles: function($el, step, previous) {
      var $list = $el.find('.hint > ul.titles');

      if (step == previous) return false;

      var $previousStep = $list.find('> li:eq(' + (previous - 1) + ')');
      var $currentStep  = $list.find('> li:eq(' + (step - 1) + ')');

      $previousStep.fadeOut(300, function(ev) {
        $currentStep.fadeIn(300);
      });

      return false;
    },


    /**
     * reset titles list
     */
    _resetTitles: function($el,previous) {
      // Go o the first of the list
      Core._manageTitles($el,$el.data('step'),previous);
    },

    /**
     * CREATE, MANAGE AND RESET EXPLANATION BOTTOM LIST
     */

    /**
     * first create the explanations
     */
    _createExplanations: function() {
      var $list = $('<ul>').addClass('fields');


      // Add titles list
      for (var i = 0, _length = Core.options.explanations.length; i < _length ; i++) {
        var
          li = '<li ' + (i === 0 ? 'class="selected"' : '') + '>',
          obj = Core.options.explanations[i];

        // If there is input|s
        if (obj.inputs) {
          li += '<form class="' + obj.ok + '">';

          for (var j = 0, __length = obj.inputs.length; j < _length; j++) {

            var input = obj.inputs[j];

            if (input != undefined) {
              if (input.type == "text") {
                // If type == text
                li += '<input type="text" value="" placeholder="' + input.placeholder + '" name="' + input.name + '" class="' + input.size + '" />';
              } else {
                // If type == select
                li += '<span class="wrapper " style="width:' + ((input.size=='short')? 88 : 138 ) + 'px"><select name="' + input.name + '">';

                // Disabled
                li += '<option value="0" selected disabled>' + input.placeholder + '</option>';

                for (var z = 0, source_length = input.source.length; z < source_length; z++) {
                  li += '<option value="' + input.source[z] + '">' + input.source[z] + '</option>';
                }

                li += '</select></span>';
              }
            }
          }

          // Add submit button
          li += '<input type="submit" value="ok" class="button green next small" />';

          // End form
          li += '</form>';
        }

        Core.$hint.find("ul.explanations").append("<li>" + obj.label + "</li>");

        // Add the label
        li += '<p>';
        // Add help buttons
        if (obj.inputs) {
          li += ' <a href="#skip" class="skip">Skip this field</a> ';
        }
        li += '</p>';

        // End of li
        li += '</li>';

        // Add to list
        $list.append(li);
      }

      // Customize added selects
      $list.find('select').sSelect();

      // Add location autocomplete
      $list.find('input[name="location"]').addresspicker();

      // Add species autocomplete
      //$list.find('input[name="species"]').autocomplete({source:Core.options.speciesURL});

      // Return top
      return $list;
    },

    /**
     * manage fields every change or step
     */
    _manageFields: function($el,step,previous) {
      var $list = $el.find('ul.fields');

      if (step == previous) return false;

      var $previousStep = $list.find('> li:eq(' + (previous - 1) + ')');
      var $currentStep  = $list.find('> li:eq(' + (step - 1)+ ')');

      $previousStep.removeClass('selected');

      var width = $currentStep.width() + 170;
      $el.find(".controls").animate({left: $(document).width()/2 - width/2 - 10, width:width}, 150);

      $previousStep.fadeOut(300, function(ev) {
        $currentStep.addClass('selected').fadeIn(300, function(ev) {
          $(this).find('form input, form select').first().focus();
        });
      });

    },
    /**
     * manage explanations every change or step
     */
    _manageExplanations: function($el,step,previous) {
      var $list = $el.find('ul.explanations');

      if (step == previous) return false;

      var $previousStep = $list.find('> li:eq(' + (previous - 1) + ')');
      var $currentStep  = $list.find('> li:eq(' + (step -1) + ')');

      $previousStep.removeClass('selected');

      $previousStep.fadeOut(300, function(ev) {
        $currentStep.addClass('selected').fadeIn(300, function(ev) {
          $(this).find('form input, form select').first().focus();
        });
      });

    },

    /**
     * reset explanations list every time a record start
     */
    _resetExplanations: function($el, previous) {
      Core._manageExplanations($el,$el.data('step'),previous);
    },


    /**
     * Check record, if starts or finish, and check values
     */
    _createSkipTooltip: function() {
      // Tooltip
      var $tooltip = $('<div>').addClass('tooltip skip ' + Core.options.tooltips.skip.tail);

      // Title
      $tooltip.append('<h5>' + Core.options.tooltips.skip.title + '</h5>');

      // Content
      $tooltip.append('<p>' + Core.options.tooltips.skip.content + '</p>');

      // Buttons
      $tooltip.append('<a class="continue orange button small" href="#' + Core.options.tooltips.skip.orange.toLowerCase().replace(/ /g,'_') + '">' + Core.options.tooltips.skip.orange + '</a>');
      $tooltip.append('<a class="cancel white button small" href="#' + Core.options.tooltips.skip.white.toLowerCase().replace(/ /g,'_') + '">'     + Core.options.tooltips.skip.white + '</a>');

      // Tail
      $tooltip.append('<span class="tail"></span>');

      // LOCAL BINDINGS

      // Cancel
      $tooltip.find('a.cancel').click(
        function(ev) {
        Core._preventDefault(ev);
        Core._hideSkipTooltip($tooltip);
      }
      );

      // Continue
      $tooltip.find('a.continue').click( function(ev) {
        Core._preventDefault(ev);
        Core._nextRegister($tooltip.closest('div.transcribing'));
        Core._hideSkipTooltip($tooltip);
      });

      return $tooltip;
    },

    /**
     * Show the record tooltip
     */
    _showSkipTooltip: function(ev) {

      Core._preventDefault(ev);


      var
      $el          = $(ev.target).closest('div.transcribing'),
      $tooltip     = $el.find('div.tooltip.skip'),
      tooltipWidth = $tooltip.width(),
      $link        = $el.find('ul.fields li:eq(' + ($el.data('step') - 1) + ') a.skip');

      var left         = $link.offset().left + $link.width() / 2 - tooltipWidth / 2 - 10,
      top          = $(".controls").offset().top - $(".controls").height() - $tooltip.height() + 15;

      $tooltip.css({ top: top, left: left });

      // Local binding for clicking out of the tooltip
      $tooltip.show(1, function() {

        $('body').click(function(ev) {
          if ($(ev.target).closest('div.bottom > div.tooltip.skip').length === 0 || $(ev.target).closest('a.example').length > 0) {
            Core._hideRecordTooltip($tooltip);
          }
        });

        $('body').keydown(function(ev){
          var keycode = ev.which;
          if (keycode == 27) {
            Core._hideRecordTooltip($tooltip);
          }
        });

      });
    },

    /**
     * Hide the record tooltip
     */
    _hideSkipTooltip: function($tooltip) {
      $('body').unbind('click');
      $('body').unbind('keydown');
      $tooltip.hide();
    },




    /**
     * Check record, if starts or finish, and check values
     */
    _createExampleTooltip: function() {
      // Tooltip
      var $example = $('<div>').addClass('tooltip example center');

      // Spin loader adding!
      var imageLoader = new Spinner({lines: 10, length: 3, width: 4, radius: 8, color: '#333'}).spin();

      // Add it to its parent
      $example.append(imageLoader.el);

      // More button
      $example.append('<a class="black button small" href="#show_me_more">MORE</a>');

      // Tail
      $example.append('<span class="tail"></span>');


      // LOCAL BINDINGS

      // More
      $example.find('a.cancel').click(
        function(ev) {
        Core._preventDefault(ev);
        Core._showNextExample($example);
      }
      );

      return $example;
    },


    /**
     * Hide the record tooltip
     */
    _hideExampleTooltip: function($example) {
      $('body').unbind('click');
      $('body').unbind('keydown');
      $example.hide();
    },


    /**
     * Manage record
     */
    _manageRecord: function($el,step,previous) {

      if (step === 0) {
        // Manage the button
        $el.find('div.bottom div.record a.checkRecord').text('START THIS RECORD').attr('href','#start').addClass('green').removeClass('orange');

        // Manage the step viewer
        $el.find('div.bottom div.step_viewer').fadeOut(100);
      } else {
        // Manage the button
        $el.find('div.bottom div.record a.checkRecord').text('FINISH THE RECORD').attr('href','#finish'); // Decide if will be orange or green the step viewer

        // Manage the step viewer
        $el.find('.steps').text(step + '/' + (Core.options.explanations.length));

        Core._manageStepViewer($el,step);
      }
    },

    /**
     * Reset record
     */
    _resetRecord: function($el,previous) {
      Core._manageRecord($el, $el.data('step'), previous);
    },

    /**
     * Check record, if starts or finish, and check values
     */
    _checkRecord: function(ev) {

      Core._preventDefault(ev);

      var
      $el          = $(ev.target).closest('div.transcribing'),
      step         = $el.data('step'),
      $transcriber = $el.find('div#transcriber');

      if (step === 0) {

        $transcriber.removeClass('free');

        // Start $el values
        $el.data('values', Core._resetValues($el));

        // If step is 0, is starting
        Core._nextRegister($el);

      } else {

        var pending = Core._pendingRegisters($el);

        if (pending === 0) { // If has finished just save and go for the next
          Core._nextRecord($el);
        } else { // If not, show the tooltip
          Core._showRecordTooltip($el,pending,ev);
        }
      }
    },


    /**
     * Show the record tooltip
     */
    _showRecordTooltip: function($el,pending,ev) {

      var $tooltip = $el.find('div.bottom div.record div.tooltip');
      $tooltip.find('p').html(Core.options.tooltips.record.content.replace('{{pending}}',pending));

      // Local binding for clicking out
      // of the tooltip

      $tooltip.show(1,function(){
        $('body').click(function(ev){
          if ($(ev.target).closest('div.bottom div.record div.tooltip').length === 0) {
            Core._hideRecordTooltip($tooltip);
          }
        });
        $('body').keydown(function(ev){
          var keycode = ev.which;
          if (keycode == 27) {
            Core._hideRecordTooltip($tooltip);
          }
        });
      });
    },


    /**
     * Hide the record tooltip
     */
    _hideRecordTooltip: function($tooltip) {
      $('body').unbind('click');
      $('body').unbind('keydown');
      $tooltip.hide();
    },


    /**
     * Check record, if starts or finish, and check values
     */
    _createStepViewer: function() {
      var $stepviewer = $('<div>').addClass('step_viewer');

      // Select option
      $stepviewer.append('<a class="steps" href="#choose_step">1/' + (Core.options.explanations.length - 1) + '</a>');

      // Step list
      var list = '<ul class="steps">';

      for (var i = 0; i < Core.options.explanations.length; i++) {
        var obj = Core.options.explanations[i];

        if (obj.step) {
          list += '<li ' + (i==1 ? 'class="selected"' : '') + '><a href="#goto_' + i + '"><span class="circle"></span>' + obj.step + '</a></li>';
        }
      }

      list += '<span class="tail"></span></ul>';
      $stepviewer.append(list);

      // LOCAL BINDINGS

      // Manage bind of the option
      $stepviewer.find('a.steps').click(
        function(ev) {
        Core._preventDefault(ev);

        var $parent = $(ev.target).parent()
        , $steps = $parent.find('ul');

        if (!$steps.is(':visible')) {
          $steps.show(1,function(){
            $('body').click(function(ev){
              $steps.hide();
              $('body').unbind('click');
              $('body').unbind('keydown');
            });
            $('body').keydown(function(ev){
              var keycode = ev.which;
              if (keycode == 27) {
                $steps.hide();
                $('body').unbind('click');
                $('body').unbind('keydown');
              }
            });
          });
        } else {
          $steps.hide();
        }
      }
      )
      return $stepviewer;
    },


    /**
     * Check step lists
     */
    _manageStepViewer: function($el,step) {
      var // Check list
      values  = $el.data('values'),
      pending = 0,
      $list   = $el.find('ul.steps');


      // Until the end
      for (var i = 0; i < values.length; i++) {

        var
        obj       = values[i],
        completed = true,
        $li       = $list.find('li:eq(' + i + ')');

        for (name in obj) {
          if (obj[name] == '' || obj[name] == 0) {
            pending++;
            completed = false;
          }
        }

        // Selected?
        if ( i == step - 1 ) {
          $li.addClass('selected');
        } else {
          $li.removeClass('selected');
        }

        // Completed?
        if (completed) {
          $li.addClass('completed');
        } else {
          $li.removeClass('completed');
        }
      }

      var $record_button = $el.find('div.bottom a.checkRecord')
      , $step_viewer = $el.find('div.bottom div.step_viewer')

      if (pending>0) {
        $step_viewer.show();
        $record_button.removeClass('green').addClass('orange');
      } else {
        $step_viewer.hide();
        $record_button.removeClass('orange').addClass('green');
      }
    },

    /**
     * Reset values of the transcriber
     */
    _resetValues: function($el) {
      var values = [];

      for (var i = 0, _length = Core.options.explanations.length; i < _length; i++) {
        var register = Core.options.explanations[i];
        values[i ] = {};
        for (var j = 0, __length = register.inputs.length; j < __length; j++) {
          values[i ][register.inputs[j].name] = '';
        }
      }

      return values;
    },

    /**
     * Go for the next register, checking all the elements in the
     * transcriber
     */
    _nextRegister: function(unde,to) {
      var $el;

      // It could be a event or the element
      if (unde.target != undefined) {
        Core._preventDefault(unde);
        $el = $(unde.target).closest('div.transcribing');
      } else {
        $el = unde;
      }

      var
      previous = $el.data('step'),
      step     = to || Core._checkRegister($el, previous);

      $el.data('step',step);

      var stepData = Core.options.explanations[step];

      Core._saveRegister($el, previous);

      Core._manageFields($el, step, previous);
      Core._manageExplanations($el, step, previous);
      Core._manageTitles($el,step,previous);

      // Manage record
      Core._manageRecord($el,step,previous);
    },

    /**
     * Get pending registers
     */
    _pendingRegisters: function($el) {

      var
      values  = $el.data('values'),
      pending = 0;

      // Until the end
      for (var i = 0; i < values.length; i++) {

        var obj = values[i]
        , completed = true;

        for (name in obj) {
          if (obj[name] == '' || obj[name] == 0 ) {
            pending++;
          }
        }
      }

      return pending;
    },


    /**
     * Get the next step in the transcriber or finish it
     */
    _checkRegister: function($el, previous) {

      var values = $el.data('values')
      , next_step = undefined;


      // Until the end
      for (var i = previous; i < values.length; i++) {

        var obj = values[i]
        , completed = true;

        for (name in obj) {
          if (obj[name] == '' || obj[name] == 0) {
            completed = false;
            break;
          }
        }

        if (!completed) {
          next_step = i + 1;
          break;
        }
      }

      // From the start if previous wasn't 0
      if (next_step == undefined && previous!=0) {
        // From the beginning
        previous = 0;

        // Until the end
        for (var i = previous; i < values.length; i++) {

          var obj = values[i]
          , completed = true;

          for (name in obj) {
            if (obj[name] == '' || obj[name] == 0) {
              completed = false;
              break;
            }
          }

          if (!completed) {
            next_step = i + 1;
            break;
          }
        }
      }

      // If all registers are complete step == 'end'
      return next_step || 'end';
    },


    /**
     * Save the register if any change happened
     */
    _saveRegister: function($el, previous) {

      var // In the array will be previous
      values = $el.data('values'),
      $form  = $el.find('ul.fields > li:eq(' + (previous - 1) + ') form');

      // Loop values
      $form.find('select, input[type="text"]').each(function(i, ele) {

        var
        $ele  = $(ele),
        name  = $ele.attr('name'),
        value = $ele.val();

        if (( $ele.is('input') && value != '' ) || ( $ele.is('select') && value != 0 )) {
          values[previous - 1][name] = value;
        }

      });

      $el.data('values', values);

    },

    /**
     * Reset the transcriber to start from the beginning
     */
    _resetTranscriber: function($el) {
      // Reset step and drag & resize
      var previous = $el.data('step');

      $el.data({ step: 0 });
      $el.data('values', {});

      Core._resetTitles($el, previous);       // Reset top list
      Core._resetExplanations($el, previous); // Reset explanation list (bottom)
      Core._resetRecord($el, previous);       // Reset record
    },


    /**
     * Move forward the transcriber to the next record if there are more.
     */
    _nextRecord: function() {
      var $el = Core.$el;

      // Save values in the server
      Core._saveRecord($el);

      var // Add new record saved to the header count
      $counter = $('.header div.right h5'),
      count    = $counter.text();

      $counter.text(parseInt(count) + 1);

      // Reset values and enable drag and resize again
      Core._resetTranscriber($el);
      Core._removeSelection();
    },

    _loadNextImg: function() {
      var $el = Core.$el;
      Core.$el.find("img").attr("src", "http://assets.javierarce.com/biotrans/transcriber_sernac_02.png");
      Core._createLoader($el);
    },

    /**
     * Save the transcribed record.
     */
    _saveRecord: function($el) {

      // Get the element values
      var values = $el.data('values');

      var selection = { x: Core.selection_x, y: Core.selection_y, w: Core.selection_w, h: Core.selection_h };

      var data =  {
        values: values,
        selection: selection
      };

      console.log('Sending this values:', data);

      // Send them to the server
      $.ajax({ url: Core.options.saveURL, type: 'POST', data: data }, function(data) {
        // Add callback
      });

      // TODO: move the code inside the setTimeout to the callback of the ajax request
      setTimeout(function() {
        Core._loadNextImg();
      }, 1000);

    }
  };



  /***************************************************************************
   * Plugin installation
   **************************************************************************/
  $.fn[name] = function (userInput) {
    // check if such method exists
    if ( $.type( userInput ) === "string" && API[ userInput ] ) {
      return API[ userInput ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
    }
    // initialise otherwise
    else if ( $.type( userInput ) === "object" || !userInput ) {
      return Core._init.apply( this, arguments );
    } else {
      $.error( 'You cannot invoke ' + name + ' jQuery plugin with the arguments: ' + userInput );
    }
  };
})( jQuery, window );
