import { Euro, Dollar, Money } from "../src/Money";

describe("Dollar", () => {
  it("should return true when five dollars is compared to another instance of five dollars", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  });

  it("should return false when five dollars is compared to six dollars", () => {
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  });

  it("should return false when dollar is compared to another coin", () => {
    expect(Money.dollar(5).equals(Money.euro(5))).toBe(false);
  });

  it("should return five dollars if the amount given is 5", () => {
    const dollars = Money.dollar(5);
    expect(dollars.getAmount()).toEqual(5);
  });

  it("should return 10 whan 5 dollars is multipled by two", () => {
    const dollar = Money.dollar(5);
    const result = dollar.times(2);
    expect(result.getAmount()).toEqual(10);
  });

  it("should return 15 when 5 dollars is multiplied by three", () => {
    const dollar = Money.dollar(5);
    const result = dollar.times(3);
    expect(result.getAmount()).toEqual(15);
  });
});
