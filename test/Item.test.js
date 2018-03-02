var Item = require("../src/Item");

describe('Item', () => {
    it('should have a name and price', () => {
        var caffe = "Cold Brew Nitro";
        var price = 5;
        var item = new Item(caffe, price);

        expect(item.name).toBe(caffe);
        expect(item.price).toBe(price);
    });
});