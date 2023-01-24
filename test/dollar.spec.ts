import { Dollar } from "../src/Dollar";

describe("Dollar", () => {
  it("should return true when five dollars is compared to another instance of five dollars", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  });

  it("should return false when five dollars is compared to six dollars", () => {
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });

  it("should return five dollars if the amount given is 5", () => {
    let five = new Dollar(5);
    expect(five.getAmount()).toEqual(5);
  });

  it("should return 10 whan 5 dollars is multipled by two", () => {
    let five = new Dollar(5);
    let result = five.times(2);
    expect(result.getAmount()).toEqual(10);
  });

  it("should return 15 when 5 dollars is multiplied by three", () => {
    let five = new Dollar(5);
    let result = five.times(3);
    expect(result.getAmount()).toEqual(15);
  });
});
