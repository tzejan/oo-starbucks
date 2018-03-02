var Owner = require("../src/Owner");
var Item = require("../src/Item");
var Order = require("../src/Order");

describe("Owner", () => {
  it("should create an owner successfully", () => {
    var owner = new Owner();

    expect(owner).toBeDefined();
    expect(owner).toBeInstanceOf(Owner);
    expect(owner.orders.length).toBe(0);
  });

  it('should create an order containing item and customer name', () => {
    var item = new Item("Long black", 1);
    var customerName = "kitty";
    var order = new Order(item, customerName);
    var owner = new Owner();

    owner.createOrder(item, customerName);

    expect(owner.orders).toHaveLength(1);
    expect(owner.orders[0]).toEqual(order); // breaks the Dependency Inversion Principle
  });
});
