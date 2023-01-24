import { Euro } from "../src/Euro";

describe("Euro", () => {
  it("should return true when five Euros is compared to another instance of five Euros", () => {
    expect(new Euro(5).equals(new Euro(5))).toBe(true);
  });

  it("should return false when five Euros is compared to six Euros", () => {
    expect(new Euro(5).equals(new Euro(6))).toBe(false);
  });

  it("should return five Euros if the amount given is 5", () => {
    let five = new Euro(5);
    expect(five.getAmount()).toEqual(5);
  });

  it("should return 10 whan 5 Euros is multipled by two", () => {
    let five = new Euro(5);
    let result = five.times(2);
    expect(result.getAmount()).toEqual(10);
  });

  it("should return 15 when 5 Euros is multiplied by three", () => {
    let five = new Euro(5);
    let result = five.times(3);
    expect(result.getAmount()).toEqual(15);
  });
});
