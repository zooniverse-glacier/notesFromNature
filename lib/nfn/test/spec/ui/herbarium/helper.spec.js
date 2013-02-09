/*
* common.ui.view.Helper
*
*/
describe("common.ui.view.Helper", function() {

  var widget;

  beforeEach(function() {

    widget = new nfn.ui.view.Helper({
      model: new nfn.ui.model.Helper(),
      template: $("#helper-template").html()
    });

    $("body").append(widget.render());

  });

  afterEach(function() {
    widget.clean();
  });

  it("should have a title", function() {
    expect(widget.$title).toEqual(widget.$el.find(".title"));
    expect(widget.$el.find('.title').length).toEqual(1);
  });

  it("should have a description", function() {
    expect(widget.$description).toEqual(widget.$el.find(".description"));
    expect(widget.$el.find('.description').length).toEqual(1);
  });

  it("should allow to change the title", function() {

    widget.model.set("title", "This is a test title");

    waits(300);

    runs(function() {
      expect(widget.$title.text()).toEqual("This is a test title");
    });

  });

  it("should allow to change the description", function() {

    widget.model.set("description", 'This is a test description <a href="#" data-src="#">See example.</a>');

    waits(300);

    runs(function() {
      expect(widget.$description.html()).toEqual('This is a test description <a href="#" data-src="#">See example.</a>');
    });

  });

  it("should fire a showExample event when the user clicks in the example link", function() {

        var spy = spyOn(widget, 'showExample');
    widget.model.set("description", '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a>');

      waits(300);

      runs(function() {

        widget.delegateEvents();

        widget.$exampleLink.click();

        expect(spy).toHaveBeenCalled();
      });

  });

  it("should close the tooltip when the user press the esc key", function() {

    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a>');

      widget.$exampleLink.click();

      $(document).trigger({ type: 'keyup', which: "27" });

      expect(widget.$el.find(".tooltip").length).toEqual(0);
      expect(widget.tooltip).not.toBeDefined();

  });

  it("should create a tooltip with one image from the urls array", function() {

    widget.model.set('description', '<a href="#" class="example">See example</a>');
    widget.model.set('urls', ["../../nfn/ui/herbarium/examples/ex_state.png"]);

    waits(300);

    runs(function() {
      widget.$exampleLink.click();

      expect(widget.$el.find(".tooltip").length).toEqual(1);
      expect(widget.tooltip.model.get("hidden")).toEqual(false);
      expect(widget.tooltip.$el.find("img").length).toEqual(1);
    });

  });

  it("if there's several images in the array, there should be a button labeled more", function() {

    widget.model.set('description', '<a href="#" class="example">See example</a>');
    widget.model.set('urls', [ "../../nfn/ui/herbarium/examples/ex_state.png", "../../nfn/ui/herbarium/examples/ex_state.png" ]);

    waits(350);

    runs(function() {

      widget.$exampleLink.click();

      expect(widget.$el).toBeVisible();
      expect(widget.$el.find(".tooltip").length).toEqual(1);
      expect(widget.tooltip.model.get("hidden")).toEqual(false);
      expect(widget.tooltip.$el.find("img").length).toEqual(1);
      expect(widget.tooltip.$mainButton).toBeVisible();
      expect(widget.tooltip.$mainButton.text()).toEqual("More");
      console.log(widget.tooltip.$el);
    });

  });

  it("clicking in the example link should open a tooltip", function() {

    widget.model.set('description', '<a href="#" class="example">See example</a>');
    widget.model.set('urls', ["../../nfn/ui/herbarium/examples/ex_state.png"]);

    waits(400);

    runs(function() {

      widget.$exampleLink.click();

      expect(widget.tooltip.$el).toBeVisible();
    });
  });

  it("if there's only one image in the array, it shouldn't show a button", function() {

    widget.model.set('description', '<a href="#" class="example">See example</a>');
    widget.model.set('urls', [ "../../nfn/ui/herbarium/examples/ex_state.png" ]);

    waits(400);

    runs(function() {

      widget.$exampleLink.click();

      expect(widget.tooltip.model.get("hidden")).toEqual(false);
      expect(widget.tooltip.$el.find("img").length).toEqual(1);
      expect(widget.tooltip.$el.find("img")).toBeVisible();
      expect(widget.tooltip.$el.find(".btn.main")).toBeHidden();

    });

  });

  it("should create a tooltip when the user cliks in the example link", function() {

    widget.model.set("description", "<a href='#' data-src='http://placehold.it/100x100' class='example'>See example</a>");

      waits(300);

      runs(function() {

        widget.$exampleLink.click();

        expect(widget.$el.find(".tooltip").length).toEqual(1);
        expect(widget.tooltip.model.get("hidden")).toEqual(false);

      });

  });

  it("shouldn't create another tooltip when the user cliks in the example link several times", function() {

    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a>');

      waits(300);

      runs(function() {
        widget.$exampleLink.click();

        expect(widget.$el.find(".tooltip").length).toEqual(1);
      });

  });

  it("should show more examples in the tooltip when the user clicks in the secondary button", function() {

    var urls = ["../../nfn/ui/herbarium/examples/ex_state.png", "../../nfn/ui/herbarium/examples/ex_county.png", "../../nfn/ui/herbarium/examples/ex_scientific_name.png"];

    widget.model.set('description', '<a href="#" class="example">See example</a>');
    widget.model.set('urls', urls);

    waits(300);

    runs(function() {

      widget.$exampleLink.click();

      waits(300);
      runs(function() {

        expect(widget.tooltip.$el.find("img").attr("src")).toEqual(urls[0]);

        widget.tooltip.$mainButton.click();

        waits(400);

        runs(function() {
          expect(widget.tooltip.$el.find("img").length).toEqual(1);
          expect(widget.tooltip.$el.find("img").attr("src")).toEqual(urls[1]);

          widget.tooltip.$mainButton.click();
          waits(400);

          runs(function() {
            expect(widget.tooltip.$el.find("img").length).toEqual(1);
            expect(widget.tooltip.$el.find("img").attr("src")).toEqual(urls[2]);
          });
        });
      });
    });
  });

  it("should load an image inside the tooltip", function() {

    widget.model.set('description', '<a href="#" data-src="http://placehold.it/100x100" class="example">See example</a>');

      waits(300);

      runs(function() {
        widget.$exampleLink.click();

        expect(widget.$el.find(".tooltip").length).toEqual(1);

        expect(widget.$el.find(".tooltip img").length).toEqual(1);
        expect(widget.$el.find(".tooltip img").attr("src")).toEqual("http://placehold.it/100x100");
      });

  });

});
