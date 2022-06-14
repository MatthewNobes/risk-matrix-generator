import { calculateAttackEfficiency } from "./calculateAttackEfficiency";

describe("testing the calculateAttackEfficiency function", () => {
  it("should return High if the protectionWeakness is High", () => {
    const expectValue = "High";
    const protectionWeakness = "High";
    expect(calculateAttackEfficiency(protectionWeakness)).toBe(expectValue);
  });

  it("should return Medium if the protectionWeakness is Medium", () => {
    const expectValue = "Medium";
    const protectionWeakness = "Medium";
    expect(calculateAttackEfficiency(protectionWeakness)).toBe(expectValue);
  });

  it("should return Low if the protectionWeakness is Low", () => {
    const expectValue = "Low";
    const protectionWeakness = "Low";
    expect(calculateAttackEfficiency(protectionWeakness)).toBe(expectValue);
  });
});
