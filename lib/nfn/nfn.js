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

  nfn.init = function(ready) {
    // define a simple class
    var Class = nfn.Class = function() {};
    _.extend(Class.prototype, Backbone.Events);

    nfn._loadJST();
    window.nfn.god = new Backbone.Model();

    ready && ready();
  };
})();
