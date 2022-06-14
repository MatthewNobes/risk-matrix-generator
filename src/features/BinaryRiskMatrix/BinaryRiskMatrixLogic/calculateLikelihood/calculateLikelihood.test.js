import {
  calculateThreatScope,
  calculateProtectionWeakness,
  calculateAttackEfficiency,
  calculateOccurrence,
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
