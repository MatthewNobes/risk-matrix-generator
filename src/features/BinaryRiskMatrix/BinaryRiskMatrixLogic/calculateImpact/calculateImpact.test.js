import {
  calculateImpact,
  calculateImpactValuation,
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
