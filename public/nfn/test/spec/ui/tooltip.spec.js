
/*
* common.ui.view.Tooltip
*
*/
describe("common.ui.view.Tooltip", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip({
        description: "If you can’t find the value, you can see <a href='#' class='action' data-action='show-example'>examples</a> that surely will help you",
      }),
      template: $("#tooltip-template").html()
    });

    $("body").append(widget.render());
    widget.$el.show();

  });

  afterEach(function() {

    widget.clean();

  });

  it("should have nextPhoto method", function() {
    expect(widget.nextPhoto).toBeDefined();
  });

  it("should have previousPhoto method", function() {
    expect(widget.previousPhoto).toBeDefined();
  });

  it("should allow to increase the photo counter", function() {
    var urls = ["../../nfn/ui/herbarium/examples/ex_state.png", "../../nfn/ui/herbarium/examples/ex_county.png", "../../nfn/ui/herbarium/examples/ex_scientific_name.png"];

    widget.model.set({ urls: urls, photoCount: 10, currentPhoto: 5 }, { silent: true });

    widget.nextPhoto();

    expect(widget.model.get("currentPhoto")).toEqual(6);
  });

  it("should allow to decrease the photo counter", function() {
    var urls = ["../../nfn/ui/herbarium/examples/ex_state.png", "../../nfn/ui/herbarium/examples/ex_county.png", "../../nfn/ui/herbarium/examples/ex_scientific_name.png"];

    widget.model.set({ urls: urls, photoCount: 10, currentPhoto: 5 }, { silent: true });

    widget.previousPhoto();

    expect(widget.model.get("currentPhoto")).toEqual(4);
  });

  it("nextPhoto should show the next photo", function() {

    var urls = ["../../nfn/ui/herbarium/examples/ex_state.png", "../../nfn/ui/herbarium/examples/ex_county.png", "../../nfn/ui/herbarium/examples/ex_scientific_name.png"];

    widget.model.set("urls", urls);
    widget.nextPhoto();

    waits(500);

    runs(function() {
      expect(widget.$el.find("img").attr("src")).toEqual(urls[1]);
    });

  });

  it("should return back to the last photo from the first one", function() {

    var urls = ["../../nfn/ui/herbarium/examples/ex_state.png", "../../nfn/ui/herbarium/examples/ex_county.png", "../../nfn/ui/herbarium/examples/ex_scientific_name.png"];

    widget.model.set({ urls: urls, photoCount: 10, currentPhoto: 0 }, { silent: true });

    widget.previousPhoto();

    expect(widget.model.get("currentPhoto")).toEqual(9);

  });

  it("should return back to zero after the next photo", function() {

    var urls = ["../../nfn/ui/herbarium/examples/ex_state.png", "../../nfn/ui/herbarium/examples/ex_county.png", "../../nfn/ui/herbarium/examples/ex_scientific_name.png"];

    widget.model.set({ urls: urls, photoCount: 10, currentPhoto: 10 }, { silent: true });

    widget.nextPhoto();

    expect(widget.model.get("currentPhoto")).toEqual(0);

  });

  it("should have currentPhoto variable", function() {
    expect(widget.model.get("currentPhoto")).toBeDefined();
    expect(widget.model.get("currentPhoto")).toEqual(0);
  });

  it("should have photoCount variable", function() {
    expect(widget.model.get("photoCount")).toBeDefined();
    expect(widget.model.get("photoCount")).toEqual(0);
  });

  it("photoCount should be equal to 1 when there's just one photo", function() {

    widget.model.set("urls", 'http://placehold.it/100x100');
    expect(widget.model.get("photoCount")).toEqual(1);

  });

  it("photoCount should be equal to 1 when there's just one photo (array version)", function() {

    widget.model.set("urls", ['http://placehold.it/100x100']);
    expect(widget.model.get("photoCount")).toEqual(1);

  });

  it("photoCount should be equal to n when there are several photos", function() {

    widget.model.set("urls", ['http://placehold.it/100x100', 'http://placehold.it/100x100', 'http://placehold.it/100x100']);
    expect(widget.model.get("photoCount")).toEqual(3);

  });

  it("should load an image", function() {

    var widget2 = new nfn.ui.view.Tooltip({

      model: new nfn.ui.model.Tooltip({
        urls: ["../../nfn/ui/herbarium/examples/ex_county.png"]
      }),

      template: $("#tooltip-example-template").html()

    });

    $("body").append(widget2.render());
    widget2.$el.show();

    waits(250);

    runs(function () {
      expect(widget2.$el.find("img").length).toEqual(1);
    });

  });

  it("should allow to load a photo", function() {

    var src = ["../../nfn/ui/herbarium/examples/ex_county.png"];

    widget.model.set("urls", src);

  });

  it("should allow to change the template", function() {

    widget.model.set("template", "<span>Hola</span>");
    expect(widget.$el.find("span").length).toEqual(1);

  });

  it("should have a title", function() {


    expect(widget.$title).toEqual(widget.$el.find(".title"));
    expect(widget.$el.find(".title").length).toBeTruthy();

  });

  it("should have a description", function() {

    expect(widget.$description).toEqual(widget.$el.find(".description"));
    expect(widget.$el.find(".description").length).toBeTruthy();

  });

  it("should have a main button", function() {


    expect(widget.$mainButton).toEqual(widget.$el.find(".main"));
    expect(widget.$el.find(".main").length).toBeTruthy();

  });

  it("should fire an event when the user clicks in the main button", function() {


    var spy = spyOn(widget, 'onMainClick');

    widget.delegateEvents();
    widget.$mainButton.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should fire an event when the user clicks in an action link", function() {

    var spy = spyOn(widget, 'onActionClick');

    widget.delegateEvents();
    widget.$description.find(".action").click();

    expect(spy).toHaveBeenCalled();

  });

  it("should have a secondary button", function() {


    expect(widget.$secondaryButton).toEqual(widget.$el.find(".secondary"));
    expect(widget.$el.find(".secondary").length).toBeTruthy();

  });

  it("should fire an event when the user clicks in the secondary button", function() {


    var spy = spyOn(widget, 'onSecondaryClick');

    widget.delegateEvents();
    widget.$secondaryButton.click();

    expect(spy).toHaveBeenCalled();

  });

  it("should fire a close event when the user press the esc key", function() {


    var spy = spyOn(widget, 'onEscKey');

    widget.delegateEvents();
    $(document).trigger({ type: 'keyup', which: "27" });

    expect(spy).toHaveBeenCalled();

  });

});
