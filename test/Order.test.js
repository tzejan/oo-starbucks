var Order = require("../src/Order");
var Item = require("../src/Item")

describe('Order', () => {
    it('should create an order', () => {
        var item = new Item("Kopi-poh", 15);
        var customerName = "Batman";
        var order = new Order(item, customerName);

        expect(order.item).toEqual(item);
        expect(order.customerName).toEqual(customerName);
    });
});