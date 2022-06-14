import { calculateOccurrence } from "./calculateOccurrence";

describe("testing the calculateOccurrence function", () => {
  it("should return Medium if the attackEfficiency is Low, and Q5 & Q6 are both true", () => {
    const expectValue = "Medium";
    const attackEfficiency = "Low";
    const Q5Value = true;
    const Q6Value = true;
    expect(calculateOccurrence(attackEfficiency, Q5Value, Q6Value)).toBe(
      expectValue
    );
  });

  it("should return Low if the attackEfficiency is Low, and Q5 & Q6 are both false", () => {
    const expectValue = "Low";
    const attackEfficiency = "Low";
    const Q5Value = false;
    const Q6Value = false;
    expect(calculateOccurrence(attackEfficiency, Q5Value, Q6Value)).toBe(
      expectValue
    );
  });

  it("should return Low if the attackEfficiency is Low, and Q5 is true & Q6 is false", () => {
    const expectValue = "Low";
    const attackEfficiency = "Low";
    const Q5Value = true;
    const Q6Value = false;
    expect(calculateOccurrence(attackEfficiency, Q5Value, Q6Value)).toBe(
      expectValue
    );
  });

  it("should return Low if the attackEfficiency is Low, and Q5 is false & Q6 is true", () => {
    const expectValue = "Low";
    const attackEfficiency = "Low";
    const Q5Value = false;
    const Q6Value = true;
    expect(calculateOccurrence(attackEfficiency, Q5Value, Q6Value)).toBe(
      expectValue
    );
  });

  it("should return High if the attackEfficiency is Medium, and Q5 & Q6 are both true", () => {
    const expectValue = "High";
    const attackEfficiency = "Medium";
    const Q5Value = true;
    const Q6Value = true;
    expect(calculateOccurrence(attackEfficiency, Q5Value, Q6Value)).toBe(
      expectValue
    );
  });

  it("should return Low if the attackEfficiency is Medium, and Q5 & Q6 are both false", () => {
    const expectValue = "Low";
    const attackEfficiency = "Medium";
    const Q5Value = false;
    const Q6Value = false;
    expect(calculateOccurrence(attackEfficiency, Q5Value, Q6Value)).toBe(
      expectValue
    );
  });

  it("should return Medium if the attackEfficiency is Medium, and Q5 is true & Q6 is false", () => {
    const expectValue = "Medium";
    const attackEfficiency = "Medium";
    const Q5Value = true;
    const Q6Value = false;
    expect(calculateOccurrence(attackEfficiency, Q5Value, Q6Value)).toBe(
      expectValue
    );
  });

  it("should return Medium if the attackEfficiency is Medium, and Q5 is false & Q6 is true", () => {
    const expectValue = "Medium";
    const attackEfficiency = "Medium";
    const Q5Value = false;
    const Q6Value = true;
    expect(calculateOccurrence(attackEfficiency, Q5Value, Q6Value)).toBe(
      expectValue
    );
  });

  it("should return High if the attackEfficiency is High, and Q5 & Q6 are both true", () => {
    const expectValue = "High";
    const attackEfficiency = "High";
    const Q5Value = true;
    const Q6Value = true;
    expect(calculateOccurrence(attackEfficiency, Q5Value, Q6Value)).toBe(
      expectValue
    );
  });

  it("should return Medium if the attackEfficiency is High, and Q5 & Q6 are both false", () => {
    const expectValue = "Medium";
    const attackEfficiency = "High";
    const Q5Value = false;
    const Q6Value = false;
    expect(calculateOccurrence(attackEfficiency, Q5Value, Q6Value)).toBe(
      expectValue
    );
  });

  it("should return High if the attackEfficiency is High, and Q5 is true & Q6 is false", () => {
    const expectValue = "High";
    const attackEfficiency = "High";
    const Q5Value = true;
    const Q6Value = false;
    expect(calculateOccurrence(attackEfficiency, Q5Value, Q6Value)).toBe(
      expectValue
    );
  });

  it("should return High if the attackEfficiency is High, and Q5 is false & Q6 is true", () => {
    const expectValue = "High";
    const attackEfficiency = "High";
    const Q5Value = false;
    const Q6Value = true;
    expect(calculateOccurrence(attackEfficiency, Q5Value, Q6Value)).toBe(
      expectValue
    );
  });
});
