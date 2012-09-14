describe("log", function() {

  it("should exist a global log", function() {
      expect(nfn.log).toBeTruthy();
  });

  it("should exist a global errorlist", function() {
      expect(nfn.errors).toBeTruthy();
  });


  describe("Log", function() {

    it("should has error, log and debug", function() {
      var log = new nfn.core.Log({tag: 'test'});
      expect(log.error).toBeTruthy();
      expect(log.debug).toBeTruthy();
      expect(log.log).toBeTruthy();
    });

    it("should generate error when error is called", function() {
      nfn.errors.reset([]);
      var log = new nfn.core.Log({tag: 'test'});
      log.error('this is an error');
      expect(nfn.errors.size()).toEqual(1);
    });

  });

  describe("Error", function() {
    it("should set a browser info when created", function() {
      var err = new nfn.core.Error({});
      expect(err.get('browser')).toEqual(JSON.stringify($.browser));
    });
  });
});
