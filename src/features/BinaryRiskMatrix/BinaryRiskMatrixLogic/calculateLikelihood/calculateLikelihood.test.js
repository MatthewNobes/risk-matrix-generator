import {
  calculateThreatScope,
  calculateProtectionWeakness,
} from "./calculateLikelihood";

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

describe("testing the calculateProtectionWeakness function", () => {
  it("should return Medium if the threat score is Low, and Q3 & Q4 are both true", () => {
    const expectValue = "Medium";
    const threatScore = "Low";
    const Q3Value = true;
    const Q4Value = true;
    expect(calculateProtectionWeakness(threatScore, Q3Value, Q4Value)).toBe(
      expectValue
    );
  });

  it("should return Low if the threat score is Low, and Q3 & Q4 are both false", () => {
    const expectValue = "Low";
    const threatScore = "Low";
    const Q3Value = false;
    const Q4Value = false;
    expect(calculateProtectionWeakness(threatScore, Q3Value, Q4Value)).toBe(
      expectValue
    );
  });

  it("should return Low if the threat score is Low, and Q3 is true & Q4 is false", () => {
    const expectValue = "Low";
    const threatScore = "Low";
    const Q3Value = true;
    const Q4Value = false;
    expect(calculateProtectionWeakness(threatScore, Q3Value, Q4Value)).toBe(
      expectValue
    );
  });

  it("should return Low if the threat score is Low, and Q3 is false & Q4 is true", () => {
    const expectValue = "Low";
    const threatScore = "Low";
    const Q3Value = false;
    const Q4Value = true;
    expect(calculateProtectionWeakness(threatScore, Q3Value, Q4Value)).toBe(
      expectValue
    );
  });

  it("should return High if the threat score is Medium, and Q3 & Q4 are both true", () => {
    const expectValue = "High";
    const threatScore = "Medium";
    const Q3Value = true;
    const Q4Value = true;
    expect(calculateProtectionWeakness(threatScore, Q3Value, Q4Value)).toBe(
      expectValue
    );
  });

  it("should return Low if the threat score is Medium, and Q3 & Q4 are both false", () => {
    const expectValue = "Low";
    const threatScore = "Medium";
    const Q3Value = false;
    const Q4Value = false;
    expect(calculateProtectionWeakness(threatScore, Q3Value, Q4Value)).toBe(
      expectValue
    );
  });

  it("should return Medium if the threat score is Medium, and Q3 is true & Q4 is false", () => {
    const expectValue = "Medium";
    const threatScore = "Medium";
    const Q3Value = true;
    const Q4Value = false;
    expect(calculateProtectionWeakness(threatScore, Q3Value, Q4Value)).toBe(
      expectValue
    );
  });

  it("should return Medium if the threat score is Medium, and Q3 is false & Q4 is true", () => {
    const expectValue = "Medium";
    const threatScore = "Medium";
    const Q3Value = false;
    const Q4Value = true;
    expect(calculateProtectionWeakness(threatScore, Q3Value, Q4Value)).toBe(
      expectValue
    );
  });

  it("should return High if the threat score is High, and Q3 & Q4 are both true", () => {
    const expectValue = "High";
    const threatScore = "High";
    const Q3Value = true;
    const Q4Value = true;
    expect(calculateProtectionWeakness(threatScore, Q3Value, Q4Value)).toBe(
      expectValue
    );
  });

  it("should return Medium if the threat score is High, and Q3 & Q4 are both false", () => {
    const expectValue = "Medium";
    const threatScore = "High";
    const Q3Value = false;
    const Q4Value = false;
    expect(calculateProtectionWeakness(threatScore, Q3Value, Q4Value)).toBe(
      expectValue
    );
  });

  it("should return High if the threat score is High, and Q3 is true & Q4 is false", () => {
    const expectValue = "High";
    const threatScore = "High";
    const Q3Value = true;
    const Q4Value = false;
    expect(calculateProtectionWeakness(threatScore, Q3Value, Q4Value)).toBe(
      expectValue
    );
  });

  it("should return High if the threat score is High, and Q3 is false & Q4 is true", () => {
    const expectValue = "High";
    const threatScore = "High";
    const Q3Value = false;
    const Q4Value = true;
    expect(calculateProtectionWeakness(threatScore, Q3Value, Q4Value)).toBe(
      expectValue
    );
  });
});
