import { Dollar } from "../src/Dollar";

describe("Dollar", () => {
  it("should return 10 whan 5 dollars is multipled by two", () => {
    let five = new Dollar(5);
    let result = five.times(2);
    expect(result.amount).toEqual(10);
  });

  it("should return 15 when 5 dollars is multiplied by three", () => {
    let five = new Dollar(5);
    let result = five.times(3);
    expect(result.amount).toEqual(15);
  });
});
