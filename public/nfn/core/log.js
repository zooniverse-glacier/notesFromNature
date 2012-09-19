/**
* logging
*/

(function() {

  // Error management
  nfn.core.Error = Backbone.Model.extend({
    url: nfn.config.REPORT_ERROR_URL,
    initialize: function() {
      this.set({browser: JSON.stringify($.browser) });
    }
  });

  nfn.core.ErrorList = Backbone.Collection.extend({
    model: nfn.core.Error
  });

  /** contains all of the app errors */
  nfn.errors = new nfn.core.ErrorList();

  // error tracking!
  if(nfn.config.ERROR_TRACK_ENABLED) {
    window.onerror = function(msg, url, line) {
      nfn.errors.create({
        msg: msg,
        url: url,
        line: line
      });
    };
  }


  // logging
  var _fake_console = function() {};
  _fake_console.prototype.error = function(){};
  _fake_console.prototype.log= function(){};

  //IE7 love
  if(typeof console !== "undefined") {
    _console = console;
  } else {
    _console = new _fake_console();
  }

  nfn.core.Log = Backbone.Model.extend({

    error: function() {
      _console.error.apply(_console, arguments);
      nfn.errors.create({
        msg: Array.prototype.slice.call(arguments).join('')
      });
    },

    log: function() {
      _console.log.apply(_console, arguments);
    },

    info: function() {
      _console.log.apply(_console, arguments);
    },

    debug: function() {
      _console.log.apply(_console, arguments);
    }
  });

})();

nfn.log = new nfn.core.Log({tag: 'nfn'});
