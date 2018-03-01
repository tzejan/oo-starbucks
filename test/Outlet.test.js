var Outlet = require("../src/Outlet");
var Owner = require("../src/Owner");
var Menu = require("../src/Menu");

describe("Outlet", () => {
  it("should have an owner and a menu", () => {
    var menu = new Menu();
    var owner = new Owner();
    
    var outlet = new Outlet(owner, menu);

    expect(outlet.menu).toEqual(menu);
    expect(outlet.owner).toEqual(owner);
  });
});
