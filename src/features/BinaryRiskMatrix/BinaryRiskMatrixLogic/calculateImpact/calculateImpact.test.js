import {
  calculateImpact,
  calculateImpactValidation,
  calculateHarmCapacity,
} from "./calculateImpact";

describe("testing the calculateHarmCapacity function", () => {
  it("should return High if Q7 & Q8 are both true", () => {
    const expectValue = "High";
    const Q7Value = true;
    const Q8Value = true;
    expect(calculateHarmCapacity(Q7Value, Q8Value)).toBe(expectValue);
  });

  it("should return Low if Q7 & Q8 are both false", () => {
    const expectValue = "Low";
    const Q7Value = false;
    const Q8Value = false;
    expect(calculateHarmCapacity(Q7Value, Q8Value)).toBe(expectValue);
  });

  it("should return Medium if Q7 is false and Q8 is true", () => {
    const expectValue = "Medium";
    const Q7Value = false;
    const Q8Value = true;
    expect(calculateHarmCapacity(Q7Value, Q8Value)).toBe(expectValue);
  });

  it("should return Medium if Q7 is true and Q8 is false", () => {
    const expectValue = "Medium";
    const Q7Value = true;
    const Q8Value = false;
    expect(calculateHarmCapacity(Q7Value, Q8Value)).toBe(expectValue);
  });
});
