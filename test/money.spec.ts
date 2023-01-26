import { Money, Dollar } from "../src/Money";

describe("Money", () => {
  it("should return the same amount given in the constructor", () => {
    const money = new Money(5);

    expect(money.getAmount()).toBe(5);
  });

  it("should return a new instance of money with the amount equals to the number given in the constructor times the number given as paramter fo the function times", () => {
    const money = new Money(5);

    const result = money.times(2);

    expect(result).toBeInstanceOf(Money);
    expect(result.getAmount()).toBe(10);
  });

  it("should return true if the objects are instances of the same object and has the same amount", () => {
    expect(new Money(2).equals(new Money(2))).toBeTruthy();
  });

  it("should return false if the objects are instances of the same object but has different amounts", () => {
    expect(new Money(2).equals(new Money(3))).toBeFalsy();
  });

  it("should return false if the objects are instance of different classes", () => {
    expect(new Money(2).equals(new Dollar(2))).toBeFalsy();
  });
});
