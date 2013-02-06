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
    "vendor/jquery.min.js",
    "vendor/jquery-1.8.1.js",
    "vendor/jquery-ui-1.8.24.custom.min.js",
    "vendor/jquery.easing.min.js",
    //"vendor/jquery.mousewheel.min.js",
    "vendor/jquery.imagesloaded.min.js",
    "vendor/jquery.mCustomScrollbar.js",
    "vendor/jquery.ui.addresspicker.js",
    "vendor/jquery.stylishSelect.js",
    "vendor/spin.min.js",
    //"vendor/jquery.jscrollpane.js",
    //"vendor/underscore-min.js",
    //"vendor/backbone-min.js",
    "vendor/mustache.js",

    // Core
    'core/config.js',
    'core/log.js',
    'core/profiler.js',
    'core/template.js',
    'core/view.js',
    'core/god.js',

    // UI
    'ui/widget.js',
    'ui/spinner.js',
    'ui/backdrop.js',
    'ui/tooltip.js',
    'ui/statusbar.js',
    'ui/transcriptions.js',
    'ui/transcriber.js',
    'ui/photos.js',
    'ui/closer.js',

    // Birds
    'ui/birds/photos.js',
    'ui/birds/transcriber.js',
    'ui/birds/widget.js',

    // Herbarium
    'ui/herbarium/transcriber.js',
    'ui/herbarium/widget.js',
    'ui/herbarium/launcher.js',
    'ui/herbarium/magnifier.js',
    'ui/herbarium/selection.js',
    'ui/herbarium/highlight.js',
    'ui/herbarium/helper.js',

    // Bugs
    'ui/bugs/transcriber.js',
    'ui/bugs/widget.js',
    'ui/bugs/launcher.js',
    'ui/bugs/magnifier.js',
    'ui/bugs/selection.js',
    'ui/bugs/highlight.js',
    'ui/bugs/helper.js'
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
