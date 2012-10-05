
/*
* common.ui.view.Tooltip
*
*/
describe("common.ui.view.Tooltip", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip(),
      template: $("#tooltip-template").html()
    });

  });

  afterEach(function() {

    widget.clean();

  });

  it("should load an image", function() {

    var widget2 = new nfn.ui.view.Tooltip({

      model: new nfn.ui.model.Tooltip({
        url: "http://placehold.it/100x100"
      }),

      template: $("#tooltip-example-template").html()

    });

    widget2.render();

    waits(250);

    runs(function () {
      expect(widget2.$el.find("img").length).toEqual(1);
    });

  });

  it("should allow to change the template", function() {

    widget.render();

    widget.model.set("template", "<span>Hola</span>");
    expect(widget.$el.find("span").length).toEqual(1);

  });

  it("should have a title", function() {

    widget.render();

    expect(widget.$title).toEqual(widget.$el.find(".title"));
    expect(widget.$el.find(".title").length).toBeTruthy();

  });

  it("should have a description", function() {

    widget.render();

    expect(widget.$description).toEqual(widget.$el.find(".description"));
    expect(widget.$el.find(".description").length).toBeTruthy();

  });

  it("should have a main button", function() {

    widget.render();

    expect(widget.$mainButton).toEqual(widget.$el.find(".main"));
    expect(widget.$el.find(".main").length).toBeTruthy();

  });

  it("should fire an event when the user clicks in the main button", function() {

    widget.render();

    var spy = spyOn(widget, 'onMainClick');

    widget.delegateEvents();
    widget.$mainButton.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should have a secondary button", function() {

    widget.render();

    expect(widget.$secondaryButton).toEqual(widget.$el.find(".secondary"));
    expect(widget.$el.find(".secondary").length).toBeTruthy();

  });

  it("should fire an event when the user clicks in the secondary button", function() {

    widget.render();

    var spy = spyOn(widget, 'onSecondaryClick');

    widget.delegateEvents();
    widget.$secondaryButton.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should fire a close event when the user press the esc key", function() {

    widget.render();

    var spy = spyOn(widget, 'onEscKey');

    widget.delegateEvents();
    $(document).trigger({ type: 'keyup', which: "27" });

    expect(spy).toHaveBeenCalled();

  });

});
