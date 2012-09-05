/**************************************************************************
 * TRANSCRIBING PLUGIN
 **************************************************************************/
(function($, window, undefined) {

  // IE 9
  // Chrome
  // Mozilla Firefox
  // Safari
  // Opera


  /*
     TODO
     - Check tabs navigation | flow
     --------------------------------------------------------------------------------
     - Decide what to do when finish a record, leave some inputs as they were or what
     - Decide what to do when finish a record, let user go back
     - Species autocomplete url
     - Examples images controller
     - Save controller
     */

  // constants
  var
  TRUE = true, FALSE = true, NULL = null,
  name = 'transcriber',
  scrollpane,
  // Plugin parts
  Core, API, Helper,
  // default options

  speciesURL = '';


  /***************************************************************************
   * Private methods
   **************************************************************************/
  Core = {
    pluginName : name,
    options : null,

    _init : function (options) {
      // take user options in consideration
      Core.options = $.extend( true, transcriberData, options );
      return this.each( function () {
        var $el = $(this);

        // Create loader
        // Core._createLoader($el);

        // Create transcriber
        Core._createTranscriber($el);

        // Bind events
        Core._bind($el);
        Core._startTranscription();
      });
    },


    _bind: function($el) {
      // Start or finish record
      $el.find('a.checkRecord').on('click', Core._checkRecord);

      $el.find('form').on('submit', Core._nextRegister);

      // Step list
      $el.find('ul.steps li a').on('click', function(e) {
        var nextStep = parseInt($(e.target).attr('href').replace('#goto_',''), 10);
        Core._nextRegister(e, nextStep);
      });

      // See the example
      $el.find('a.example').on('click', Core._showExampleTooltip);

      // Skip the field
      $el.find('ul.explanations li').find('a.skip').on('click', Core._showSkipTooltip);
    },

    /**
     * Stop propagation function
     */
    _preventDefault: function(ev) {
      ev.preventDefault();
    },


    /**
     * Create a loader for the image
     */
    _createLoader: function($el) {
      // Create loader
      var loader = $('<div>').addClass('loader')
      , spinner = new Spinner({color:'white'}).spin();

      // Add it to its parent
      loader.append(spinner.el);

      // Add loader to the stage
      $el.append(loader);

      // Bind load image
      $el.find('img').imagesLoaded(Core._startTranscription);
    },


    /**
     * Remove the loader after the image is loaded
     */
    _removeLoader: function($el) {
      $el.find('div.loader').animate({
        opacity:0
      },500,function(ev){
        $(this).remove();
      })
    },


    /**
     * Start the transcription after the image is loaded
     */
    _startTranscription: function(ev) {

      var
      $img = $("div.transcribing.double img"),
      $el = $img.closest('div.transcribing');

      // Remove Loader
      // Core._removeLoader($el);

      // Show footer
      $('.footer').show();

      // Scrolls to top
      // $('html, body').animate({scrollTop: 0, scrollLeft: 0}, 150);

      var width = $(document).width() - 40;

      var left = $img.position().left;
      // Set transcriptor width
      $el.find('div#transcriber').css({ marginLeft: left, width: 1200, maxWidth: width });

      $img.fadeIn(250);

      $el.find(".scrollpane").css({width:$(window).width()*0.7, height: $(window).height() });
      Core.scrollpane = $el.find(".scrollpane").jScrollPane({ showArrows: true });

      // Enable transcription
      $el.find('div#transcriber').css({ maxWidth: $(window).width() - 40 });
      $el.find('div#transcriber').show().animate({ opacity:1, marginTop: '20px' }, 500);
    },

    /**
     * Create the transcriber, adding one by one the neccessary elements
     */
    _createTranscriber: function($el) {
      var $transcriber = $('<div>').attr('id','transcriber').addClass('free')
      , $top = $('<div>').addClass('top')
      , $bottom = $('<div>').addClass('bottom');

      // ADD THE DIFFERENT ELEMENTS
      // - title top list
      $top.append(Core._createTitles());

      // - add hack for transcripter
      $top.append('<span class="tail left"></span><span class="tail right"></span>');

      // - explanations bottom list
      $bottom.append(Core._createExplanations());

      // - record steps bottom
      $bottom.append(Core._createRecord());

      // - append skip tooltip
      $bottom.append(Core._createSkipTooltip());

      // - append example tooltip
      $bottom.append(Core._createExampleTooltip());

      // Add all elements to the transcriber
      $transcriber.append($bottom);
      $transcriber.append($top);

      // Add to the stage
      $el.append($transcriber);

      // Give it resize and move funcionalities
      var _width   = $transcriber.parent().width();
      var minWidth = 300;


      $(window).resize(function() {
        $el.find(".scrollpane").css({width:$(window).width(), height: $(window).height() });
        Core.scrollpane = $el.find(".scrollpane").jScrollPane({ showArrows: true });

        $el.find('div#transcriber').css({ maxWidth:$(window).width() - 40 });
      });

      $transcriber.
        resizable({ containment: 'parent', minHeight: 80, handles: 'se', minWidth: minWidth }).
        draggable({ axis: "xy", handle: 'div.top, div.bottom', cancel: 'ul, div.record' });

      // Start variables (step, values, ...)
      $el.data('step', 0);
      $el.data('values',{});
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
    _manageTitles: function($el,step,previous) {
      var $list = $el.find('div.top > ul.titles');

      if (step == previous) return false;

      var $previousStep = $list.find('> li:eq(' + previous + ')');
      var $currentStep  = $list.find('> li:eq(' + step + ')');

      $previousStep.fadeOut(300, function(ev) {
        $currentStep.fadeIn(300);
      });

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
      var $list = $('<ul>').addClass('explanations');


      // Add titles list
      for (var i = 0, _length = Core.options.explanations.length; i < _length ; i++) {
        var
        li  = '<li ' + (i === 0 ? 'class="selected"' : '') + '>',
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
          li += '<input type="submit" value="ok" class="button green small" />';

          // End form
          li += '</form>';
        }

        // Add the label
        li += '<p>' + obj.label;
        // Add help buttons
        if (obj.inputs) {
          li += ' <a href="#example" class="example">See example</a> | <a href="#skip" class="skip">Skip this field</a><span class="tail"></span>';
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
     * manage explanations every change or step
     */
    _manageExplanations: function($el,step,previous) {
      var $list = $el.find('ul.explanations');

      if (step == previous) return false;

      $('html, body').animate({scrollTop: 0, scrollLeft: 0}, 150);

      $list.find('> li:eq(' + previous + ')').fadeOut(300, function(ev) {
        $list.find('> li:eq(' + (step) + ')').addClass('selected').fadeIn(300, function(ev){
          $(this).find('form input, form select').first().focus();
        });
      });
    },

    /**
     * reset explanations list every time a record start
     */
    _resetExplanations: function($el,previous) {
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
      $tooltip.append('<a class="cancel white button small" href="#' + Core.options.tooltips.skip.white.toLowerCase().replace(/ /g,'_') + '">' + Core.options.tooltips.skip.white + '</a>');

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
      $tooltip.find('a.continue').click(
        function(ev) {
        Core._preventDefault(ev);
        Core._nextRegister($tooltip.closest('div.transcribing'));
        Core._hideSkipTooltip($tooltip);
      }
      );

      return $tooltip;
    },

    _disableScroll: function() {
      if (Core.disabledScroll) return;

      Core.disabledScroll = true;
      var api = Core.scrollpane.data('jsp');
      api.destroy();
    },

    _enableScroll: function() {
      if (!Core.disabledScroll) return;

      Core.disabledScroll = false;

      $img = $("div.transcribing.double img"),
      $el  = $img.closest('div.transcribing');
      $el.find(".scrollpane").css({width:$(window).width()*0.7, height: $(window).height() });
      Core.scrollpane = $el.find(".scrollpane").jScrollPane({ showArrows: true });
    },


    /**
     * Show the record tooltip
     */
    _showSkipTooltip: function(ev) {

      Core._preventDefault(ev);

      var
      $el          = $(ev.target).closest('div.transcribing'),
      $tooltip     = $el.find('div.bottom > div.tooltip.skip'),
      tooltipWidth = $tooltip.width(),
      $p           = $el.find('ul.explanations li:eq(' + $el.data('step') + ')').find('p'),
      left         = $p.position().left + $p.width() - 115;


      $tooltip.css({ left: left + 'px' });

      // Local binding for clicking out
      // of the tooltip
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
      var imageLoader = new Spinner({lines: 10,length: 3,width: 4,radius: 8,color: '#333'}).spin();

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
     * Show the record tooltip
     */
    _showExampleTooltip: function(ev) {

      Core._preventDefault(ev);


      var
      $el      = $(ev.target).closest('div.transcribing'),
      $example = $el.find('div.bottom > div.tooltip.example');

      var $p = $el.find('ul.explanations li:eq(' + $el.data('step') + ')').find('p');

      if ($p.length > 0) {

        var left   = $p.position().left + $p.width() - 150;

        $example.css({ right: "auto", left: left + 'px' });

        // Local binding for clicking out of the tooltip
        $example.show(1, function(){
          $('body').click(function(ev){
            if ($(ev.target).closest('div.bottom > div.tooltip.example').length === 0) {
              Core._hideRecordTooltip($example);
            }
          });
          $('body').keydown(function(ev){
            var keycode = ev.which;
            if (keycode == 27) {
              Core._hideRecordTooltip($example);
            }
          });
        });
      }

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
     * CREATE, MANAGE AND RESET RECORD BOTTOM CONTENT
     */

    /**
     * first create the record content
     */
    _createRecord: function() {
      var $record = $('<div>').addClass('record right');

      $record.append('<div class="right"><a class="button green checkRecord" href="#start">START THIS RECORD</a></div>');

      // Create step_viewer
      $record.find('div.right').append(Core._createStepViewer());

      // Create record tooltip
      $record.find('div.right').append(Core._createRecordTooltip());

      return $record;
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
        $el.find('div.bottom div.record a.choose_step').text(step + '/' + (Core.options.explanations.length - 1));

        Core._manageStepViewer($el,step);
      }
    },

    /**
     * Reset record
     */
    _resetRecord: function($el,previous) {
      Core._manageRecord($el,$el.data('step'),previous);
    },


    /**
     * Start/finish record + check values
     */
    _checkRecord: function(ev) {

      //Core._disableScroll();

      Core._preventDefault(ev);

      var $el = $(ev.target).closest('div.transcribing')
      , step = $el.data('step')
      , $transcriber = $el.find('div#transcriber');


      if (step === 0) {

        // Disable drag and resize
        $transcriber
        .resizable({ disabled: false })
        .draggable({ disabled: false });

        //$transcriber.removeClass('free');

        // Start $el values
        $el.data('values',Core._resetValues($el));

        // Show step viewer
        $el.find('div.step_viewer').fadeIn(300);

        // If step is 0, is starting
        Core._nextRegister($el);

      } else {

        var pending = Core._pendingRegisters($el);
        if (pending==0) {
          // If has finished just save and go for the next
          Core._nextRecord($el);
        } else {
          // If not, show the tooltip
          Core._showRecordTooltip($el,pending,ev);
        }
      }
    },


    /**
     * Create record tooltip
     */
    _createRecordTooltip: function() {
      // Tooltip
      var $tooltip = $('<div>').addClass('tooltip ' + Core.options.tooltips.record.tail);

      // Title
      $tooltip.append('<h5>' + Core.options.tooltips.record.title + '</h5>');

      // Content
      $tooltip.append('<p>' + Core.options.tooltips.record.content + '</p>');

      // Buttons
      $tooltip.append('<a class="continue orange button small" href="#' + Core.options.tooltips.record.orange.toLowerCase().replace(/ /g,'_') + '">' + Core.options.tooltips.record.orange + '</a>');
      $tooltip.append('<a class="cancel white button small" href="#' + Core.options.tooltips.record.white.toLowerCase().replace(/ /g,'_') + '">' + Core.options.tooltips.record.white + '</a>');

      // Tail
      $tooltip.append('<span class="tail"></span>');


      // LOCAL BINDINGS

      // Cancel
      $tooltip.find('a.cancel').click(
        function(ev) {
        Core._preventDefault(ev);
        Core._hideRecordTooltip($tooltip);
      }
      );

      // Continue
      $tooltip.find('a.continue').click(
        function(ev) {
        Core._preventDefault(ev);
        Core._nextRecord($tooltip.closest('div.transcribing'));
        Core._hideRecordTooltip($tooltip);
      }
      );

      return $tooltip;
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
      $stepviewer.append('<a class="choose_step" href="#choose_step">1/' + (Core.options.explanations.length - 1) + '</a>');

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
      $stepviewer.find('a.choose_step').click(
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
      // Check list
      var values = $el.data('values')
      , pending = 0
      , $list = $el.find('ul.steps');


      // Until the end
      for (var i = 0; i < values.length; i++) {

        var obj = values[i]
        , completed = true
        , $li = $list.find('li:eq(' + i + ')');

        for (name in obj) {
          if (obj[name] == '' || obj[name] == 0) {
            pending++;
            completed = false;
          }
        }

        // Selected?
        if (i==(step-1)) {
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

      for (var i = 1, _length = Core.options.explanations.length; i < _length; i++) {
        var register = Core.options.explanations[i];
        values[i - 1] = {};
        for (var j = 0, __length = register.inputs.length; j < __length; j++) {
          values[i - 1][register.inputs[j].name] = '';
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
      if (unde.target!=undefined) {
        Core._preventDefault(unde);
        $el = $(unde.target).closest('div.transcribing');
      } else {
        $el = unde;
      }

      var
      previous = $el.data('step'),
      step = to || Core._checkRegister($el,previous);

      $el.data('step', step);

      var stepData = Core.options.explanations[step];

      var x = stepData.x;
      var y = stepData.y;

      // Hacks to move to the original position
      if (x == 0) { x = -1; }
      if (y == 0) { y = -1; }

      //Core._enableScroll();
      console.log(x, y);

      if (x != undefined && y != undefined) {
        Core.scrollpane.data('jsp').scrollTo(x, y, true);
      } else if (x != undefined) {
        Core.scrollpane.data('jsp').scrollToX(x, true);
      } else if (y != undefined) {
        Core.scrollpane.data('jsp').scrollToY(y, true);
      }

      //Core._disableScroll();

      Core._saveRegister($el,previous);

      // Manage explanations list
      Core._manageExplanations($el,step,previous);

      // Manage titles list
      Core._manageTitles($el,step,previous);

      // Manage record
      Core._manageRecord($el,step,previous);
    },



    /**
     * Get pending registers
     */
    _pendingRegisters: function($el) {

      var values = $el.data('values')
      , pending = 0;

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
    _checkRegister: function($el,previous) {

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
      if (next_step==undefined && previous!=0) {
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
    _saveRegister: function($el,previous) {

      // In the array will be previous - 1
      var values = $el.data('values'),
      $form = $el.find('ul.explanations > li:eq(' + previous + ') form');

      var stepData = Core.options.explanations[$el.data('step')];

      var tWidth = $el.find("#transcriber").width();
      var tTop   = parseInt($el.find('img').css("margin-top").replace("px", ""), 10);
      var tX     = stepData.x;
      var tY     = stepData.y;

      // Loop values
      $form.find('select,input[type="text"]').each(function(i,ele){

        var
        $ele  = $(ele),
        name  = $ele.attr('name'),
        value = $ele.val();

        if (($ele.is('input') && value != '') || ($ele.is('select') && value!=0)) {
          values[previous-1][name] = value;
          values[previous-1]["width"] = tWidth;
          values[previous-1]["top"] = tTop;
          values[previous-1]["x"] = tX;
          values[previous-1]["y"] = tY;
        }

      });

      $el.data('values', values);
    },

    /**
     * Reset the transcriber to start from the beginning
     */
    _resetTranscriber: function($el) {

      console.log('resets transcriber');
      // Reset step and drag&resize
      var previous = $el.data('step');

      $el.data({step:0});

      var $transcriber = $el.find('div#transcriber');

      $transcriber
      .resizable({ disabled: false })
      .draggable({ disabled: false });

      $transcriber.addClass('free');

      // Reset top list
      Core._resetTitles($el,previous);

      // Reset explanation list (bottom)
      Core._resetExplanations($el,previous);

      // Reset record
      Core._resetRecord($el,previous);
    },


    /**
     * Move forward the transcriber to the next record if there are more.
     */
    _nextRecord: function($el) {

      var
      trans_h = $el.find('div#transcriber').position().top,
      trans_y = $el.find('div#transcriber > div.top').height();

      // Save values in the server
      Core._saveRecord($el);

      var // add new record saved to the header count
      $counter = $('.header div.right h5'),
      count    = $counter.text();

      $counter.text(parseInt(count) + 1);

      // Reset values and enable drag and resize again
      Core._resetTranscriber($el);

      var marginTop = (trans_h + trans_y - 10);

      // Advance
      $el.find('img').animate({ marginTop: '-=' + marginTop + 'px' }, 500, function() {
        Core.scrollpane.data('jsp').scrollToX(0, true); // scroll to the left
      });


    },


    /**
     * Save the transcribed record.
     */
    _saveRecord: function($el) {
      // Get the element values
      var values = $el.data('values');

      console.log('Sending this values:', values);

      // Send them to the server
      console.log("values are ", values);
      $("body").trigger({
        type : 'doneClassification',
        values: values });
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
