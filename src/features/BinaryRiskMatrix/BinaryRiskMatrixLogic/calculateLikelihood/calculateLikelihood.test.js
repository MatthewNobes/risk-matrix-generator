import { calculateThreatScope } from "./calculateLikelihood";

describe("testing the calculateThreatScope function", () => {
  it("should return High if Q1 & Q2 are both true", () => {
    const expectValue = "High";
    const Q1Value = true;
    const Q2Value = true;
    expect(calculateThreatScope(Q1Value, Q2Value)).toBe(expectValue);
  });

  it("should return Low if Q1 & Q2 are both true", () => {
    const expectValue = "Low";
    const Q1Value = false;
    const Q2Value = false;
    expect(calculateThreatScope(Q1Value, Q2Value)).toBe(expectValue);
  });

  it("should return Medium if Q1 is true & Q2 is false", () => {
    const expectValue = "Medium";
    const Q1Value = true;
    const Q2Value = false;
    expect(calculateThreatScope(Q1Value, Q2Value)).toBe(expectValue);
  });

  it("should return Medium if Q1 is false & Q2 is true", () => {
    const expectValue = "Medium";
    const Q1Value = false;
    const Q2Value = true;
    expect(calculateThreatScope(Q1Value, Q2Value)).toBe(expectValue);
  });
});
