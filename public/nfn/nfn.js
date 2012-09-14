// entry point
(function() {

  var nfn = window.nfn = {};

  window.nfn.config          = {};
  window.nfn.core            = {};
  window.nfn.ui              = {};
  window.nfn.ui.model        = {};
  window.nfn.ui.view         = {};
  window.nfn.ui.collection   = {};
  window.nfn.ui.common       = {};

  /**
  * global variables
  */
  window.JST = window.JST || {};

  nfn.files = [
    "../vendor/jquery.min.js",
    "../vendor/jquery-ui-1.8.23.custom.min.js",
    "../vendor/jquery.jscrollpane.min.js",
    "../vendor/jquery.imagesloaded.min.js",
    "../vendor/spin.min.js",
    "../vendor/underscore-min.js",
    "../vendor/backbone-min.js",

    // Core
    'core/config.js',
    'core/log.js',
    'core/profiler.js',
    'core/template.js',
    'core/view.js',

    // UI
    'ui/transcriber.js',

  ];

  nfn.init = function(ready) {
    // define a simple class
    var Class = nfn.Class = function() {};
    _.extend(Class.prototype, Backbone.Events);

    nfn._loadJST();
    window.nfn.god = new Backbone.Model();

    ready && ready();
  };

  /**
  * load all the javascript files. For testing, do not use in production
  */
  nfn.load = function(prefix, ready) {
    var c = 0;

    var next = function() {
      var script = document.createElement('script');
      script.src = prefix + nfn.files[c];
      document.body.appendChild(script);
      ++c;
      if(c == nfn.files.length) {
        if(ready) {
          script.onload = ready;
        }
      } else {
        script.onload = next;
      }
    };

    next();

  };
})();
