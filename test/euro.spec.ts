import { Euro, Dollar, Money } from "../src/Money";

describe("Euro", () => {
  it("should return true when five Euros is compared to another instance of five Euros", () => {
    expect(Money.euro(5).equals(Money.euro(5))).toBeTruthy();
  });

  it("should return false when five Euros is compared to six Euros", () => {
    expect(Money.euro(5).equals(Money.euro(6))).toBeFalsy();
  });

  it("should return false when euro is compared to another coin", () => {
    expect(Money.euro(5).equals(Money.dollar(5))).toBeFalsy();
  });

  it("should return five Euros if the amount given is 5", () => {
    const euro = Money.euro(5);
    expect(euro.getAmount()).toEqual(5);
  });

  it("should return 10 whan 5 Euros is multipled by two", () => {
    const euro = Money.euro(5);
    const result = euro.times(2);
    expect(result).toBeInstanceOf(Euro);
    expect(result.getAmount()).toEqual(10);
  });

  it("should return 15 when 5 Euros is multiplied by three", () => {
    const euro = Money.euro(5);
    const result = euro.times(3);
    expect(result).toBeInstanceOf(Euro);
    expect(result.getAmount()).toEqual(15);
  });

  it("should correctly handle the currency", () => {
    expect(Money.euro(1).getCurrency()).toBe("EUR");
  });
});
