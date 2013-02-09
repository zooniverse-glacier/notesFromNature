

(function(/*! Stitch !*/) {
  if (!this.specs) {
    var modules = {}, cache = {}, require = function(name, root) {
      var path = expand(root, name), module = cache[path], fn;
      if (module) {
        return module.exports;
      } else if (fn = modules[path] || modules[path = expand(path, './index')]) {
        module = {id: path, exports: {}};
        try {
          cache[path] = module;
          fn(module.exports, function(name) {
            return require(name, dirname(path));
          }, module);
          return module.exports;
        } catch (err) {
          delete cache[path];
          throw err;
        }
      } else {
        throw 'module \'' + name + '\' not found';
      }
    }, expand = function(root, name) {
      var results = [], parts, part;
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    }, dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };
    this.specs = function(name) {
      return require(name, '');
    }
    this.specs.define = function(bundle) {
      for (var key in bundle)
        modules[key] = bundle[key];
    };
    this.specs.modules = modules;
    this.specs.cache   = cache;
  }
  return this.specs.define;
}).call(this)({
  "controllers/AboutController": function(exports, require, module) {(function() {
  var require;

  require = window.require;

  describe('AboutController', function() {
    var AboutController;
    AboutController = require('controllers/aboutcontroller');
    return it('can noop', function() {});
  });

}).call(this);
}, "controllers/HomeController": function(exports, require, module) {(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  describe('HomeController', function() {
    var HomeController;
    HomeController = null;
    beforeEach(function() {
      return HomeController = (function(_super) {

        __extends(HomeController, _super);

        function HomeController() {
          return HomeController.__super__.constructor.apply(this, arguments);
        }

        return HomeController;

      })(Spine.Controller);
    });
    return it('can noop', function() {});
  });

}).call(this);
}, "controllers/Museum": function(exports, require, module) {(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  describe('Museum', function() {
    var Museum;
    Museum = null;
    beforeEach(function() {
      return Museum = (function(_super) {

        __extends(Museum, _super);

        function Museum() {
          return Museum.__super__.constructor.apply(this, arguments);
        }

        return Museum;

      })(Spine.Controller);
    });
    return it('can noop', function() {});
  });

}).call(this);
}, "controllers/ProfileController": function(exports, require, module) {(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  describe('ProfileController', function() {
    var ProfileController;
    ProfileController = null;
    beforeEach(function() {
      return ProfileController = (function(_super) {

        __extends(ProfileController, _super);

        function ProfileController() {
          return ProfileController.__super__.constructor.apply(this, arguments);
        }

        return ProfileController;

      })(Spine.Controller);
    });
    return it('can noop', function() {});
  });

}).call(this);
}, "models/Collection": function(exports, require, module) {(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  describe('Collection', function() {
    var Collection;
    Collection = null;
    beforeEach(function() {
      return Collection = (function(_super) {

        __extends(Collection, _super);

        function Collection() {
          return Collection.__super__.constructor.apply(this, arguments);
        }

        Collection.configure('Collection');

        return Collection;

      })(Spine.Model);
    });
    return it('can noop', function() {});
  });

}).call(this);
}, "models/Museum": function(exports, require, module) {(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  describe('Museum', function() {
    var Museum;
    Museum = null;
    beforeEach(function() {
      return Museum = (function(_super) {

        __extends(Museum, _super);

        function Museum() {
          return Museum.__super__.constructor.apply(this, arguments);
        }

        Museum.configure('Museum');

        return Museum;

      })(Spine.Model);
    });
    return it('can noop', function() {});
  });

}).call(this);
}, "models/Subject": function(exports, require, module) {(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  describe('Subject', function() {
    var Subject;
    Subject = null;
    beforeEach(function() {
      return Subject = (function(_super) {

        __extends(Subject, _super);

        function Subject() {
          return Subject.__super__.constructor.apply(this, arguments);
        }

        Subject.configure('Subject');

        return Subject;

      })(Spine.Model);
    });
    return it('can noop', function() {});
  });

}).call(this);
}, "models/User": function(exports, require, module) {(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  describe('User', function() {
    var User;
    User = null;
    beforeEach(function() {
      return User = (function(_super) {

        __extends(User, _super);

        function User() {
          return User.__super__.constructor.apply(this, arguments);
        }

        User.configure('User');

        return User;

      })(Spine.Model);
    });
    return it('can noop', function() {});
  });

}).call(this);
}
});

require('lib/setup'); for (var key in specs.modules) specs(key);