import { calculateLikelihood } from "./calculateLikelihood";

describe("testing the calculateLikelihood function", () => {
  it("should return High if the occurrence is High", () => {
    const expectValue = "High";
    const occurrence = "High";
    expect(calculateLikelihood(occurrence)).toBe(expectValue);
  });

  it("should return Medium if the occurrence is Medium", () => {
    const expectValue = "Medium";
    const occurrence = "Medium";
    expect(calculateLikelihood(occurrence)).toBe(expectValue);
  });

  it("should return Low if the occurrence is Low", () => {
    const expectValue = "Low";
    const occurrence = "Low";
    expect(calculateLikelihood(occurrence)).toBe(expectValue);
  });
});
