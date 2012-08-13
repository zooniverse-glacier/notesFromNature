/**
* Stylish Select 0.4.6 - jQuery plugin to replace a select drop down box with a stylable unordered list
* http://github.com/scottdarby/Stylish-Select
* 
* Requires: jQuery 1.3 or newer
* 
* Contributions from Justin Beasley: http://www.harvest.org/ Anatoly Ressin: http://www.artazor.lv/ Wilfred Hughes: https://github.com/Wilfred
* 
* Dual licensed under the MIT and GPL licenses.
*/
(function($){
    //add class to html tag
    $('html').addClass('stylish-select');

    //Cross-browser implementation of indexOf from MDN: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
    if (!Array.prototype.indexOf){
        Array.prototype.indexOf = function(searchElement /*, fromIndex */){
            if (this === void 0 || this === null)
                throw new TypeError();

            var t = Object(this);
            var len = t.length >>> 0;
            if (len === 0)
                return -1;

            var n = 0;
            if (arguments.length > 0){
                n = Number(arguments[1]);
                if (n !== n) // shortcut for verifying if it's NaN
                    n = 0;
                else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }

            if (n >= len)
                return -1;

            var k = n >= 0
            ? n
            : Math.max(len - Math.abs(n), 0);

            for (; k < len; k++){
                if (k in t && t[k] === searchElement)
                    return k;
            }
            return -1;
        };
    }

    //utility methods
    $.fn.extend({
        getSetSSValue: function(value){
            if (value){
                //set value and trigger change event
                $(this).val(value).change();
                return this;
            } else {
                return $(this).find(':selected').val();
            }
        },
        //added by Justin Beasley
        resetSS: function(){
            var oldOpts = $(this).data('ssOpts');
            $this = $(this);
            $this.next().remove();
            //unbind all events and redraw
            $this.unbind('.sSelect').sSelect(oldOpts);
        }
    });

    $.fn.sSelect = function(options){
        return this.each(function(){
            var defaults = {
                defaultText:    'Please select',
                animationSpeed: 0, //set speed of dropdown
                ddMaxHeight:    '120', //set css max-height value of dropdown
                containerClass: '' //additional classes for container div
            };

            //initial variables
            var opts = $.extend(defaults, options),
            $input = $(this),
            $containerDivText    = $('<div class="selectedTxt"><span></span></div>'),
            $containerDiv        = $('<div class="newListSelected ' + opts.containerClass + '"></div>'),
            $containerDivWrapper = $('<div class="SSContainerDivWrapper" style="visibility:hidden;"></div>'),
            $newUl               = $('<ul class="newList"></ul>'),
            itemIndex            = -1,
            currentIndex         = -1,
            prevIndex            = -1,
            keys                 = [],
            prevKey              = false,
            prevented            = false,
            $newLi;

            //added by Justin Beasley
            $(this).data('ssOpts',options);

            // Get parent width to set to the elements :)
            defaults.width = $(this).parent().width();

            //build new list
            $containerDiv.insertAfter($input);
            $containerDiv.attr("tabindex", $input.attr("tabindex") || "0");
            $containerDivText.prependTo($containerDiv);
            $newUl.appendTo($containerDiv);
            $newUl.wrap($containerDivWrapper);
            $containerDivWrapper = $newUl.parent();
            $input.hide();

            // Set width dimensions
            $containerDiv.find('.selectedTxt').width(defaults.width - 18);
            $containerDiv.find('.SSContainerDivWrapper').width(defaults.width);

            //added by Justin Beasley (used for lists initialized while hidden)
            $containerDivText.data('ssReRender',!$containerDivText.is(':visible'));


            //test for optgroup
            if ($input.children('optgroup').length == 0){
                $input.children().each(function(i){
                    var option = $(this).text();
                    var key = $(this).val();

                    //add first letter of each word to array
                    keys.push(option.charAt(0).toLowerCase());
                    if ($(this).attr('selected') == 'selected' || $(this).attr('selected') == true){
                        opts.defaultText = option;
                        currentIndex = prevIndex = i;
                    }
                    $newUl.append($('<li style="' + (i==0? 'display:none' : '') + '"><a href="JavaScript:void(0);">'+option+'</a></li>').data('key', key));

                });
                //cache list items object
                $newLi = $newUl.children().children();

            } else { //optgroup
                $input.children('optgroup').each(function(){
                    var optionTitle = $(this).attr('label'),
                    $optGroup = $('<li class="newListOptionTitle">'+optionTitle+'</li>'),
                    $optGroupList = $('<ul></ul>');

                    $optGroup.appendTo($newUl);
                    $optGroupList.appendTo($optGroup);

                    $(this).children().each(function(){
                        ++itemIndex;
                        var option = $(this).text();
                        var key = $(this).val();
                        //add first letter of each word to array
                        keys.push(option.charAt(0).toLowerCase());
                        if ($(this).attr('selected') == 'selected' || $(this).attr('selected') == true)
                        {
                            opts.defaultText = option;
                            currentIndex = prevIndex = itemIndex;
                        }
                        $optGroupList.append($('<li><a href="JavaScript:void(0);">'+option+'</a></li>').data('key',key));
                    })
                });
                //cache list items object
                $newLi = $newUl.find('ul li a');
            }

            //get heights of new elements for use later

            var _height = 15 * $newUl.find('li').size();
            
            //$newUl.height(_height);
            //$containerDivWrapper.height(_height);


            var newUlHeight = _height,
            containerHeight = _height,
            newLiLength     = $newLi.length;


            //check if a value is selected
            if (currentIndex != -1){
                navigateList(currentIndex);
            } else {
                //set placeholder text
                $containerDivText.html(opts.defaultText + '<span></span>');
            }

            //decide if to place the new list above or below the drop-down
            function newUlPos(){
                var containerPosY = $containerDiv.offset().top,
                docHeight         = $(window).height(),
                scrollTop         = $(window).scrollTop();

                //if height of list is greater then max height, set list height to max height value
                if (newUlHeight > parseInt(opts.ddMaxHeight)){
                    newUlHeight = parseInt(opts.ddMaxHeight);
                }

                // containerPosY = containerPosY-scrollTop;
                // if (containerPosY+newUlHeight >= docHeight){
                //     $newUl.css({
                //         height: newUlHeight
                //     });
                //     $containerDivWrapper.css({
                //         top:    '-'+newUlHeight+'px',
                //         height: newUlHeight
                //     });
                //     $input.onTop = true;
                // } else {

                    $newUl.css({
                        height: newUlHeight + 'px'
                    });
                    $containerDivWrapper.css({
                        top:     containerHeight - 3 +'px',
                        height: newUlHeight + 'px'
                    });
                    $input.onTop = false;
                //}
            }

            //run function on page load
            newUlPos();

            //run function on browser window resize
            $(window).bind('resize.sSelect scroll.sSelect', newUlPos);

            //positioning
            function positionFix(){
                $containerDiv.css('position','relative');
            }

            function positionHideFix(){
                $containerDiv.css(
                {
                    position: 'static'
                });
            }

            $containerDivText.bind('click.sSelect',function(event){
                event.stopPropagation();


                //added by Justin Beasley
                if($(this).data('ssReRender')){
                	//var _height = 15 * $newUl.find('li').size();
                  newUlHeight = $newUl.height('').height();
                  //newUlHeight = _height;
                  $containerDivWrapper.height('');
                  containerHeight = $containerDiv.height();
                  //containerHeight = _height;

                  $(this).data('ssReRender',false);
                  newUlPos();
                }

                //hide all menus apart from this one
                $('.SSContainerDivWrapper')
                .not($(this).next())
                .hide()
                .parent()
                .css('position', 'static')
                .removeClass('newListSelFocus');

                if ($containerDivWrapper.is(':visible')) {
                	$(this).closest('.newListSelected').removeClass('newListOpened');
                } else {
                	$(this).closest('.newListSelected').addClass('newListOpened');
                }

                //show/hide this menu
                $containerDivWrapper.toggle();

                // HACK for lionbars
                if ($newUl.attr('vratio')==undefined) {
									$newUl.lionbars();
                }
                
                positionFix();

                //scroll list to selected item
                if(currentIndex == -1) currentIndex = 0;
                $newLi.eq(currentIndex).focus();
            });

            function closeDropDown(fireChange, resetText){
                if(fireChange == true){
                    prevIndex = currentIndex;
                    $input.change();
                }

                if(resetText == true){
                    currentIndex = prevIndex;
                    navigateList(currentIndex);
                }

                $containerDivText.closest('.newListSelected').removeClass('newListOpened newListSelHover');
                $containerDivWrapper.hide();
                positionHideFix();
            }

            $newLi.bind('click.sSelect',function(e){
                var $clickedLi = $(e.target);

                //update counter
                currentIndex = $newLi.index($clickedLi);

                //remove all hilites, then add hilite to selected item
                prevented = true;
                navigateList(currentIndex, true);
                closeDropDown();
            });

            $newLi.bind('mouseenter.sSelect',
                function(e){
                    var $hoveredLi = $(e.target);
                    $hoveredLi.addClass('newListHover');
                }).bind('mouseleave.sSelect',
                function(e){
                    var $hoveredLi = $(e.target);
                    $hoveredLi.removeClass('newListHover');
                });

            function navigateList(currentIndex, fireChange){
                if(currentIndex == -1){
                    $containerDivText.html(opts.defaultText + '<span></span>');
                    $newLi.removeClass('hiLite');
                } else {
                    $newLi.removeClass('hiLite')
                    .eq(currentIndex)
                    .addClass('hiLite');

                    var text = $newLi.eq(currentIndex).text(),
                    val = $newLi.eq(currentIndex).parent().data('key');

                    try {
                        $input.val(val)
                    } catch(ex) {
                        // handle ie6 exception
                        $input[0].selectedIndex = currentIndex;
                    }

                    $containerDivText.html(text + '<span></span>');

                    //only fire change event if specified
                    if(fireChange == true){
                        prevIndex = currentIndex;
                        $input.change();
                    }

                    if ($containerDivWrapper.is(':visible')){
                        $newLi.eq(currentIndex).focus();
                    }
                }
            }

            $input.bind('change.sSelect',function(event){
                var $targetInput = $(event.target);
                //stop change function from firing
                if (prevented == true){
                    prevented = false;
                    return false;
                }
                var $currentOpt  = $targetInput.find(':selected');
                currentIndex = $targetInput.find('option').index($currentOpt);
                navigateList(currentIndex);
            });

            //handle up and down keys
            function keyPress(element){
                //when keys are pressed
                $(element).unbind('keydown.sSelect').bind('keydown.sSelect',function(e){
                    var keycode = e.which
                    	, shift = e.shiftKey;

                    //prevent change function from firing
                    prevented = true;

                    switch(keycode){
                        case 40: //down
                        case 39: //right
                            incrementList();
                            return false;
                            break;
                        case 38: //up
                        case 37: //left
                            decrementList();
                            return false;
                            break;
                        case 33: //page up
                        case 36: //home
                            gotoFirst();
                            return false;
                            break;
                        case 34: //page down
                        case 35: //end
                            gotoLast();
                            return false;
                            break;
                        case 13: //enter
                        case 27: //esc
                            closeDropDown(true);
                            return false;
                            break;
                        case 9: //tab
                            closeDropDown(true);
                            if (!shift) {
                            	nextFormElement();
                            } else {
                            	previousFormElement();
                            }

                            return false;
                            break;
                    }

                    //check for keyboard shortcuts
                    keyPressed = String.fromCharCode(keycode).toLowerCase();
                    
                    var currentKeyIndex = keys.indexOf(keyPressed);

                    if (typeof currentKeyIndex != 'undefined'){ //if key code found in array
                        ++currentIndex;
                        currentIndex = keys.indexOf(keyPressed, currentIndex); //search array from current index

                        if (currentIndex == -1 || currentIndex == null || prevKey != keyPressed){
                            // if no entry was found or new key pressed search from start of array
                            currentIndex = keys.indexOf(keyPressed);
                        }

                        navigateList(currentIndex);
                        //store last key pressed
                        prevKey = keyPressed;
                        return false;
                    }
                });
            }

            function incrementList(){
                if (currentIndex < (newLiLength-1)){
                    ++currentIndex;
                    navigateList(currentIndex);
                }
            }

            function decrementList(){
                if (currentIndex > 0){
                    --currentIndex;
                    navigateList(currentIndex);
                }
            }

            function gotoFirst(){
                currentIndex = 0;
                navigateList(currentIndex);
            }

            function gotoLast(){
                currentIndex = newLiLength-1;
                navigateList(currentIndex);
            }

            $containerDiv.bind('click.sSelect',function(e){
                e.stopPropagation();
                keyPress(this);
            });

            $containerDiv.bind('focus.sSelect',function(){
                $(this).addClass('newListSelFocus');
                keyPress(this);
            });

            $containerDiv.bind('blur.sSelect',function(){
                $(this).removeClass('newListSelFocus');
            });

            //hide list on blur
            $(document).bind('click.sSelect',function(){
                $containerDiv.removeClass('newListSelFocus');
                if ($containerDivWrapper.is(':visible')){
                    closeDropDown(false, true);
                } else {
                    closeDropDown(false);
                }
            });

            //select next form element in document
            function nextFormElement() {
                var fields = $('body').find('button,input,textarea,select');
                var index = fields.index($input);

                if (index > -1 && (index + 1) < fields.length) {
                    fields.eq(index + 1).focus();
                }
                return false;
            }


            //select next form element in document
            function previousFormElement() {
                var fields = $('body').find('button,input,textarea,select');
                var index = fields.index($input);
                if (index > -1 && (index - 1) > 0) {
                    fields.eq(index - 1).focus();
                }
                return false;
            }


            // handle focus on original select element
            $input.focus(function(){
                $input.next().focus();
            })

            //add classes on hover
            $containerDivText.bind('mouseenter.sSelect',
                function(e){
                    var $hoveredTxt = $(e.target);
                    $hoveredTxt.parent().addClass('newListSelHover');
                }).bind('mouseleave.sSelect',
                function(e){
                    var $hoveredTxt = $(e.target);
                    $hoveredTxt.parent().removeClass('newListSelHover');
                });

            //reset left property and hide
            $containerDivWrapper.css({
                left: '0',
                display: 'none',
                visibility: 'visible'
            });

        });

    };
})(jQuery);







// LION BARS v0.3
(function( $ ) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    };
	$.fn.lionbars = function(options) {
		options = options || {};
		autohide = options.autohide;
		
		// Flags
		var timeout,
			HDragging=false,
			VDragging=false,
			activeScroll=0,
			activeWrap=0,
			eventX,
			eventY,
			mouseX,
			mouseY,
			currentRatio,
			initPos,
			scrollValue,
			hideTimeoutSet=false,
			vEventFired = false,
			hEventFired = false;
		
		// Initialization
		var elements = $(this),
			id = 0,
			vScrollWidth=0, hScrollWidth=0,
			addHScroll=false, addVScroll=false,
			paddingTop=0, paddingLeft=0, paddingBottom=0, paddingRight=0,
			borderTop=0, borderRight=0, borderBottom=0, borderLeft=0,
			scrollHeight=0, scrollWidth=0, offsetWidth=0, offsetHeight=0, clientWidth=0, clientHeight=0,
			vRatio=0, hRatio=0,
			vSliderHeight=0, hSliderHeight=0,
			vLbHeight=0, hLbHeight=0;
		
		// Main Loop
		mainLoop();
		
		function mainLoop() {
			for (var i=0; elements[i] !== undefined; i++) {
				if (needScrollbars(elements[i]) && !$(elements[i]).hasClass('nolionbars')) {
					// add the element to the main array
					target = elements[i];
					
					// get some values before the element is wrapped
					getDimentions(target);
					
					// wrap the element
					wrap(target, addVScroll, addHScroll);
					
					// hide the default scrollbar
					hideScrollbars(target, addVScroll, addHScroll);
					
					// Calculate the size of the scrollbars
					reduceScrollbarsWidthHeight(target);
					setSlidersHeight(target);
					
					// Set variables needed to calculate scroll speed, etc.
					setScrollRatios(target);
					
					// Set events
					setEvents(target);
					
					// prepare for next element
					resetVars();

				}
			}
		}
		
		// Set document events
		$(document).mousemove(function(e) {
			if (VDragging) {
				mouseY = e.pageY;
				activeWrap.scrollTop((initPos + mouseY - eventY) * Math.abs(currentRatio));
			}
			if (HDragging) {
				mouseX = e.pageX;
				activeWrap.scrollLeft((initPos + mouseX - eventX) * Math.abs(currentRatio));
			}
		});
		$(document).mouseup(function(e) {
			if (VDragging) {
				VDragging = false;
			}
			if (HDragging) {
				HDragging = false;
			}
		});
		
		// Core functions
		function setEvents(elem) {
			var el = $(elem);
			
			if (addVScroll || addHScroll) {
				el.find('.lb-wrap').scroll(function(e) {
					el.find('.lb-v-scrollbar-slider').css({ "top" : -$(this).scrollTop()/el.attr('vratio') });
					el.find('.lb-h-scrollbar-slider').css({ "left" : -$(this).scrollLeft()/el.attr('hratio') });
					
					if (el.find('.lb-v-scrollbar').height() == (parseInt(el.find('.lb-v-scrollbar-slider').css('top')) + el.find('.lb-v-scrollbar-slider').height())
						&& typeof(options.reachedBottom) == 'function'
						&& !vEventFired
					) {
						vEventFired = true;
						var self = $(this);
						
						options.reachedBottom.apply($(this).children('.lb-content'), [function () {
							getDimentions($(self).parent(), {
								height: $(self).children('.lb-content').get(0).scrollHeight,
								width: $(self).children('.lb-content').get(0).scrollWidth
							});
							
							// Calculate the size of the scrollbars
							reduceScrollbarsWidthHeight($(self).parent());
							setSlidersHeight($(self).parent());
							
							// Set variables needed to calculate scroll speed, etc.
							setScrollRatios($(self).parent());
							
							// prepare for next element
							resetVars();
							
							vEventFired = false;
						}]);
					}
					
					if (el.find('.lb-h-scrollbar').width() == (parseInt(el.find('.lb-h-scrollbar-slider').css('left')) + el.find('.lb-h-scrollbar-slider').width())
						&& typeof(options.reachedRight) == 'function'
						&& !hEventFired
					) {
						hEventFired = true;
						var self = $(this);
						
						options.reachedRight.apply($(this).children('.lb-content'), [function () {
							getDimentions($(self).parent(), {
								height: $(self).children('.lb-content').get(0).scrollHeight,
								width: $(self).children('.lb-content').get(0).scrollWidth
							});
							
							// Calculate the size of the scrollbars
							reduceScrollbarsWidthHeight($(self).parent());
							setSlidersHeight($(self).parent());
							
							// Set variables needed to calculate scroll speed, etc.
							setScrollRatios($(self).parent());
							
							// prepare for next element
							resetVars();
							
							hEventFired = false;
						}]);
					}
					
					if (autohide) {
						el.find('.lb-v-scrollbar, .lb-h-scrollbar').fadeIn(150);
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							el.find('.lb-v-scrollbar, .lb-h-scrollbar').fadeOut(150);
						}, 2000);
					}
				});
			}
			
			if (addVScroll) {
				el.find('.lb-v-scrollbar-slider').mousedown(function(e) {
					eventY = e.pageY;
				
					VDragging = true;
					activeScroll = $(this);
					activeWrap = el.find('.lb-wrap');
					currentRatio = activeWrap.parent().attr('vratio');
					initPos = activeScroll.position().top;
					return false;
				});
				el.find('.lb-v-scrollbar').mousedown(function(e) {
					if (!$(e.target).hasClass('lb-v-scrollbar-slider')) {
						el.find('.lb-wrap').scrollTop((e.pageY - $(this).offset().top) * Math.abs(el.attr('vratio')) - $(this).find('.lb-v-scrollbar-slider').height()/2);
					}
					return false;
				});
			}
			
			if (addHScroll) {
				el.find('.lb-h-scrollbar-slider').mousedown(function(e) {
					eventX = e.pageX;
					
					HDragging = true;
					activeScroll = $(this);
					activeWrap = el.find('.lb-wrap');
					currentRatio = activeWrap.parent().attr('hratio');
					initPos = activeScroll.position().left;
					return false;					
				});
				el.find('.lb-h-scrollbar').mousedown(function(e) {
					if (!$(e.target).hasClass('lb-h-scrollbar-slider')) {
						el.find('.lb-wrap').scrollLeft((e.pageX - $(this).offset().left) * Math.abs(el.attr('hratio')) - $(this).find('.lb-h-scrollbar-slider').width()/2);
					}
					return false;
				});
			}
			
			if ((addVScroll || addHScroll) && autohide) {
				el.find('.lb-v-scrollbar, .lb-h-scrollbar').hide();
				
				el.hover(function() {
				}, function() {
					el.find('.lb-v-scrollbar, .lb-h-scrollbar').fadeOut(150);
				});
			}
		}
		function setScrollRatios(elem) {
			vRatio = (offsetHeight - $(elem).find('.lb-wrap').get(0).scrollHeight - borderTop - borderBottom)/(vLbHeight - vSliderHeight);
			hRatio = (offsetWidth - $(elem).find('.lb-wrap').get(0).scrollWidth - borderLeft - borderRight)/(hLbHeight - hSliderHeight);
			
			var el = $(elem);
			el.attr('vratio', vRatio);
			el.attr('hratio', hRatio);
		}
		function setSlidersHeight(elem) {
			var el = $(elem);
			var hmin, hmax, gap;
			
			if (el.find('.lb-v-scrollbar').length != 0) {
				hmin = 20;
				gap = offsetHeight - el.find('.lb-v-scrollbar').height();
				hmax = offsetHeight - gap - hmin;
				vSliderHeight = Math.round((offsetHeight*hmax)/scrollHeight);
				vSliderHeight = (vSliderHeight < hmin) ? hmin : vSliderHeight;
			}
			
			if (el.find('.lb-h-scrollbar').length != 0) {
				hmin = 20;
				gap = offsetWidth - el.find('.lb-h-scrollbar').width();
				hmax = offsetWidth - gap - hmin;
				hSliderHeight = Math.round((offsetWidth*hmax)/scrollWidth);
				hSliderHeight = (hSliderHeight < hmin) ? hmin : hSliderHeight;
			}
			el.find('.lb-v-scrollbar-slider').css({ "height" : vSliderHeight });
			el.find('.lb-h-scrollbar-slider').css({ "width" : hSliderHeight });
		}
		function resetVars() {
			vScrollWidth = 0;
			hScrollWidth = 0;
			addHScroll=false;
			addVScroll=false;
			paddingTop = 0;
			paddingLeft = 0;
			paddingBottom = 0;
			paddingRight = 0;
			borderTop = 0;
			borderLeft = 0;
			borderBottom = 0;
			borderRight = 0;
			scrollHeight = 0;
			scrollWidth = 0;
			offsetWidth = 0;
			offsetHeight = 0;
			clientWidth = 0;
			clientHeight = 0;
			// vRatio = 0;
			// hRatio = 0;
			vSliderHeight = 0;
			hSliderHeight = 0;
			vLbHeight = 0;
			hLbHeight = 0;
		}
		function reduceScrollbarsWidthHeight(elem) {
			var el = $(elem);
			
			if (addVScroll && addHScroll) {
				vLbHeight = el.height()-12;
				hLbHeight = el.width()-12;
				el.find('.lb-v-scrollbar').css({ "height" : vLbHeight });
				el.find('.lb-h-scrollbar').css({ "width" : hLbHeight });
			} else {
				vLbHeight = el.height()-4;
				hLbHeight = el.width()-4;
				el.find('.lb-v-scrollbar').css({ "height" : vLbHeight });
				el.find('.lb-h-scrollbar').css({ "width" : hLbHeight });
			}
		}
		function hideScrollbars(elem, vscroll, hscroll) {
			var el = $(elem);
			
			if (vscroll || hscroll) {
				el.css({ "overflow" : 'hidden' });
				movePadding(el, el.find('.lb-wrap'));
				resizeMainBox(el);
				resizeInnerWrap(el, el.find('.lb-wrap'));
			}
		}
		function resizeMainBox(elem) {
			var el = $(elem);
			el.css({ "width" : el.width() + paddingLeft + paddingRight, "height" : el.height() + paddingTop + paddingBottom });
		}
		function movePadding(from, to) {
			var fromEl = $(from);
			var toEl = $(to);
			
			fromEl.css({ "padding" : 0 });
			toEl.css({
				"padding-top" : paddingTop+'px',
				"padding-left" : paddingLeft+'px',
				"padding-bottom" : paddingBottom+'px',
				"padding-right" : paddingRight+'px' 
			});
		}
		function resizeInnerWrap(main, child) {
			var mainEl = $(main);
			var childEl = $(child);
			mainEl.css({ "position" : 'relative' });
			childEl.css({
				"width" : mainEl.width()+vScrollWidth - paddingLeft - paddingRight, 
				"height" : mainEl.height()+hScrollWidth - paddingTop - paddingBottom 
			});
		}
		function setVScrollbarWidth(elem) {
			var el = $(elem);
			el.css({ "overflow" : 'auto' });
			vScrollWidth = offsetWidth - clientWidth - borderLeft - borderRight;
			el.css({ "overflow" : 'hidden' });
		}
		function setHScrollbarWidth(elem) {
			var el = $(elem);
			el.css({ "overflow" : 'auto' });
			hScrollWidth = offsetHeight - clientHeight - borderTop - borderBottom;
			el.css({ "overflow" : 'hidden' });
		}
		function wrap(elem, vscroll, hscroll) {
			var el = $(elem);
			var elemId = el.attr('id');
			var wrap = 0;
			
			if (elemId !== undefined) {
				el.wrapInner('<div class="lb-wrap" id="lb-wrap-'+id+'-'+elemId+'"></div>');
				wrap = $('#lb-wrap-'+id+'-'+elemId);
			} else {
				el.wrapInner('<div class="lb-wrap" id="lb-wrap-'+id+'"></div>');
				wrap = $('#lb-wrap-'+id);
			}
			wrap.wrapInner('<div class="lb-content"></div>');
			if (vscroll) {
				el.prepend('<div class="lb-v-scrollbar"></div>');
				el.find('.lb-v-scrollbar').append('<div class="lb-v-scrollbar-slider"></div>');
			}
			if (hscroll) {
				el.prepend('<div class="lb-h-scrollbar"></div>');
				el.find('.lb-h-scrollbar').append('<div class="lb-h-scrollbar-slider"></div>');
			}

			// preparation for the next element
			id = id + 1;
		}
		function needScrollbars(elem) {
			var el = $(elem);
			addVScroll = false;
			addHScroll = false;
			
			getPadding(el);
			getBorders(el);
			
			el.css({ "overflow" : 'hidden' });
			
			// check for vertical scrollbars

			if (el.get(0).scrollHeight > el.get(0).clientHeight) {
				addVScroll = true;
				// setVScrollbarWidth(el);
			}

			// check for horizontal scrollbars
			if (el.get(0).scrollWidth > el.get(0).clientWidth) {
				addHScroll = true;
				// setHScrollbarWidth(el);
			}
			
			el.css({ "overflow" : 'auto' });
			
			if (addVScroll || addHScroll) {
 				return true;
 			}
		}
		function getPadding(elem) {
			var el = $(elem);
			
			paddingTop = parseInt(el.css('padding-top').replace('px', ''));
			paddingLeft = parseInt(el.css('padding-left').replace('px', ''));
			paddingBottom = parseInt(el.css('padding-bottom').replace('px', ''));
			paddingRight = parseInt(el.css('padding-right').replace('px', ''));
		}
		function getBorders(elem) {
			var el = $(elem);
			
			borderTop = parseInt(el.css('border-top-width').replace('px', ''));
			borderRight = parseInt(el.css('border-right-width').replace('px', ''));
			borderBottom = parseInt(el.css('border-bottom-width').replace('px', ''));
			borderLeft = parseInt(el.css('border-left-width').replace('px', ''));
		}
		function getDimentions(elem, scroll) {
			var el = $(elem).get(0);
			
			scrollHeight = (typeof(scroll) != 'undefined') ? scroll.height : el.scrollHeight;
			scrollWidth = (typeof(scroll) != 'undefined') ? scroll.width : el.scrollWidth;
			clientHeight = el.clientHeight;
			clientWidth = el.clientWidth;
			offsetHeight = el.offsetHeight;
			offsetWidth = el.offsetWidth;
			
			setVScrollbarWidth($(elem));
			setHScrollbarWidth($(elem));
		}
		
		return this.each(function() {
			//var $this = $(this);
		});
	};
})( jQuery );