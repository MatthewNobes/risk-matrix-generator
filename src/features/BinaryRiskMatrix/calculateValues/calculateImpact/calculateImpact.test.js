import { calculateImpact } from "./calculateImpact";

describe("testing the calculateImpact function", () => {
  it("should return High if the impactValuation is High", () => {
    const expectValue = "High";
    const impactValuation = "High";
    expect(calculateImpact(impactValuation)).toBe(expectValue);
  });

  it("should return Medium if the impactValuation is Medium", () => {
    const expectValue = "Medium";
    const impactValuation = "Medium";
    expect(calculateImpact(impactValuation)).toBe(expectValue);
  });

  it("should return Low if the impactValuation is Low", () => {
    const expectValue = "Low";
    const impactValuation = "Low";
    expect(calculateImpact(impactValuation)).toBe(expectValue);
  });
});
