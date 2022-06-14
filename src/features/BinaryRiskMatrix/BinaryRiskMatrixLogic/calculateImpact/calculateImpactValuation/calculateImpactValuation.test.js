import { calculateImpactValuation } from "./calculateImpactValuation";

describe("testing the calculateImpactValuation function", () => {
  it("should return High if Q9 & Q10 are both true, and the harmCapacity is High", () => {
    const expectedImpactValuation = "High";
    const harmCapacity = "High";
    const Q9Value = true;
    const Q10Value = true;
    expect(calculateImpactValuation(harmCapacity, Q9Value, Q10Value)).toBe(
      expectedImpactValuation
    );
  });

  it("should return Medium if Q9 & Q10 are both false, and the harmCapacity is High", () => {
    const expectedImpactValuation = "Medium";
    const harmCapacity = "High";
    const Q9Value = false;
    const Q10Value = false;
    expect(calculateImpactValuation(harmCapacity, Q9Value, Q10Value)).toBe(
      expectedImpactValuation
    );
  });

  it("should return High if Q9 is false and Q10 is true, and the harmCapacity is High", () => {
    const expectedImpactValuation = "High";
    const harmCapacity = "High";
    const Q9Value = false;
    const Q10Value = true;
    expect(calculateImpactValuation(harmCapacity, Q9Value, Q10Value)).toBe(
      expectedImpactValuation
    );
  });

  it("should return High if Q9 is true and Q10 is false, and the harmCapacity is High", () => {
    const expectedImpactValuation = "High";
    const harmCapacity = "High";
    const Q9Value = true;
    const Q10Value = false;
    expect(calculateImpactValuation(harmCapacity, Q9Value, Q10Value)).toBe(
      expectedImpactValuation
    );
  });

  it("should return High if Q9 & Q10 are both true, and the harmCapacity is Medium", () => {
    const expectedImpactValuation = "High";
    const harmCapacity = "Medium";
    const Q9Value = true;
    const Q10Value = true;
    expect(calculateImpactValuation(harmCapacity, Q9Value, Q10Value)).toBe(
      expectedImpactValuation
    );
  });

  it("should return Low if Q9 & Q10 are both false, and the harmCapacity is Medium", () => {
    const expectedImpactValuation = "Low";
    const harmCapacity = "Medium";
    const Q9Value = false;
    const Q10Value = false;
    expect(calculateImpactValuation(harmCapacity, Q9Value, Q10Value)).toBe(
      expectedImpactValuation
    );
  });

  it("should return Medium if Q9 is false and Q10 is true, and the harmCapacity is Medium", () => {
    const expectedImpactValuation = "Medium";
    const harmCapacity = "Medium";
    const Q9Value = false;
    const Q10Value = true;
    expect(calculateImpactValuation(harmCapacity, Q9Value, Q10Value)).toBe(
      expectedImpactValuation
    );
  });

  it("should return Medium if Q9 is true and Q10 is false, and the harmCapacity is Medium", () => {
    const expectedImpactValuation = "Medium";
    const harmCapacity = "Medium";
    const Q9Value = true;
    const Q10Value = false;
    expect(calculateImpactValuation(harmCapacity, Q9Value, Q10Value)).toBe(
      expectedImpactValuation
    );
  });

  it("should return Medium if Q9 & Q10 are both true, and the harmCapacity is Low", () => {
    const expectedImpactValuation = "Medium";
    const harmCapacity = "Low";
    const Q9Value = true;
    const Q10Value = true;
    expect(calculateImpactValuation(harmCapacity, Q9Value, Q10Value)).toBe(
      expectedImpactValuation
    );
  });

  it("should return Low if Q9 & Q10 are both false, and the harmCapacity is Low", () => {
    const expectedImpactValuation = "Low";
    const harmCapacity = "Low";
    const Q9Value = false;
    const Q10Value = false;
    expect(calculateImpactValuation(harmCapacity, Q9Value, Q10Value)).toBe(
      expectedImpactValuation
    );
  });

  it("should return Low if Q9 is false and Q10 is true, and the harmCapacity is Low", () => {
    const expectedImpactValuation = "Low";
    const harmCapacity = "Low";
    const Q9Value = false;
    const Q10Value = true;
    expect(calculateImpactValuation(harmCapacity, Q9Value, Q10Value)).toBe(
      expectedImpactValuation
    );
  });

  it("should return Low if Q9 is true and Q10 is false, and the harmCapacity is Low", () => {
    const expectedImpactValuation = "Low";
    const harmCapacity = "Low";
    const Q9Value = true;
    const Q10Value = false;
    expect(calculateImpactValuation(harmCapacity, Q9Value, Q10Value)).toBe(
      expectedImpactValuation
    );
  });
});
