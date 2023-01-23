import { Dollar } from "../src/Dollar";

describe("Dollar", () => {
  it("should return 10 whan 5 dollars is multipled by two", () => {
    let five = new Dollar(5);
    five.times(2);
    expect(five.amount).toEqual(10);
  });
});
