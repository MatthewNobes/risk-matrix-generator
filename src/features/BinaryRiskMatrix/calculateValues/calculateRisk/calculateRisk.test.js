import { calculateRisk } from "./calculateRisk";

test("takes in a likelihood of High, impact of High and returns High for its risk", () => {
  const expectedRisk = "High";
  const likelihood = "High";
  const impact = "High";
  expect(calculateRisk(likelihood, impact)).toBe(expectedRisk);
});

test("takes in a likelihood of Medium, impact of Medium and returns Medium for its risk", () => {
  const expectedRisk = "Medium";
  const likelihood = "Medium";
  const impact = "Medium";
  expect(calculateRisk(likelihood, impact)).toBe(expectedRisk);
});

test("takes in a likelihood of Low, impact of Low and returns Low for its risk", () => {
  const expectedRisk = "Low";
  const likelihood = "Low";
  const impact = "Low";
  expect(calculateRisk(likelihood, impact)).toBe(expectedRisk);
});

test("takes in a likelihood of Low, impact of Medium and returns Medium for its risk", () => {
  const expectedRisk = "Medium";
  const likelihood = "Low";
  const impact = "Medium";
  expect(calculateRisk(likelihood, impact)).toBe(expectedRisk);
});

test("takes in a likelihood of Low, impact of High and returns Medium for its risk", () => {
  const expectedRisk = "Medium";
  const likelihood = "Low";
  const impact = "High";
  expect(calculateRisk(likelihood, impact)).toBe(expectedRisk);
});

test("takes in a likelihood of Medium, impact of Low and returns Low for its risk", () => {
  const expectedRisk = "Low";
  const likelihood = "Medium";
  const impact = "Low";
  expect(calculateRisk(likelihood, impact)).toBe(expectedRisk);
});

test("takes in a likelihood of Medium, impact of High and returns High for its risk", () => {
  const expectedRisk = "High";
  const likelihood = "Medium";
  const impact = "High";
  expect(calculateRisk(likelihood, impact)).toBe(expectedRisk);
});

test("takes in a likelihood of High, impact of Low and returns Medium for its risk", () => {
  const expectedRisk = "Medium";
  const likelihood = "High";
  const impact = "Low";
  expect(calculateRisk(likelihood, impact)).toBe(expectedRisk);
});

test("takes in a likelihood of High, impact of Medium and returns High for its risk", () => {
  const expectedRisk = "High";
  const likelihood = "High";
  const impact = "Medium";
  expect(calculateRisk(likelihood, impact)).toBe(expectedRisk);
});
