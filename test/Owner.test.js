var Owner = require("../src/Owner");

describe("Owner", () => {
  it("should create an owner successfully", () => {
    var owner = new Owner();

    expect(owner).toBeDefined;
    expect(owner).toBeInstanceOf(Owner);
  });
});
