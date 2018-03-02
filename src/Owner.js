var Order = require("../src/Order");

class Owner {
    constructor(){
        this.orders = []
    }

    createOrder(item, customerName){
        this.orders.push(new Order(item, customerName));
    }
}

module.exports = Owner;
