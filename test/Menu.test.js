var Menu = require("../src/Menu");
describe("Menu", () => {
  it("should have a list of items", () => {
    var items = ["tea"];
    var menu = new Menu(items);

    expect(menu.items).toEqual(items);
  });
});
