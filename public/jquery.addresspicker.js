/*
 * jQuery UI addresspicker @VERSION
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 *   jquery.ui.autocomplete.js
 */
(function( $, undefined ) {

$.widget( "ui.addresspicker", {
	options: {
	  appendAddressString: "",
		elements: {
		  map: false,
		  lat: false,
		  lng: false,
		  locality: false,
		  country: false
		}
	},

  
  selected: function() {
    return this.selectedResult;
  },
  
	_create: function() {
	  this.geocoder = new google.maps.Geocoder();
	  this.element.autocomplete({
			source: $.proxy(this._geocode, this),  
			focus:  $.proxy(this._focusAddress, this),
			select: $.proxy(this._selectAddress, this)
		});
	},
 
  // Autocomplete source method: fill its suggests with google geocoder results
  _geocode: function(request, response) {
    var address = request.term, self = this;
    this.geocoder.geocode( { 'address': address + this.options.appendAddressString}, function(results, status) {
    	
    	// Limit results to max 3
    	if (results.length>4) {
    		results = results.slice(0,4);
    	}

      if (status == google.maps.GeocoderStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          results[i].label =  results[i].formatted_address;
        };
      } 
      response(results);
    })
  },
  
  _findInfo: function(result, type) {
    for (var i = 0; i < result.address_components.length; i++) {
      var component = result.address_components[i];
      if (component.types.indexOf(type) !=-1) {
        return component.long_name;
      }
    }
    return false;
  },
  
  _focusAddress: function(event, ui) {
    var address = ui.item;
    if (!address) {
      return;
    }
    
    if (this.locality) {
      this.locality.val(this._findInfo(address, 'locality'));
    }
    if (this.country) {
      this.country.val(this._findInfo(address, 'country'));
    }
  },
  
  _selectAddress: function(event, ui) {
    this.selectedResult = ui.item;
  }
});

$.extend( $.ui.addresspicker, {
	version: "@VERSION"
});


// make IE think it doesn't suck
if(!Array.indexOf){
	Array.prototype.indexOf = function(obj){
		for(var i=0; i<this.length; i++){
			if(this[i]==obj){
				return i;
			}
		}
		return -1;
	}
}

})( jQuery );