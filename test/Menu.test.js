var Menu = require("../src/Menu");
var Item = require("../src/Item");

describe("Menu", () => {
  it("should have a list of items", () => {
    var nitro = new Item("Cold Nitro Brew", 4);
    var items = [nitro];
    var menu = new Menu(items);

    expect(menu.items).toHaveLength(1);
    expect(menu.items).toEqual(items);
  });
});
