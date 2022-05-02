/**
 *
 * @param {boolean[]} values The users selected values for the questions in the binary risk matrix.
 * @returns {string} The threat likelihood.
 */
export const calculateLikelihood = (values) => {
  const threatScore = calculateThreatScope(values[0], values[1]);
  const protectionWeakness = calculateProtectionWeakness(
    threatScore,
    values[2],
    values[3]
  );
  const attackEfficiency = calculateAttackEfficiency(protectionWeakness);
  const occurrence = calculateOccurrence(
    attackEfficiency,
    values[4],
    values[5]
  );

  const threatLikelihood = occurrence;
  const likelihoodResults = [
    threatScore,
    protectionWeakness,
    attackEfficiency,
    occurrence,
    threatLikelihood,
  ];
  return likelihoodResults;
};

/**
 *
 * @param {boolean} Q1 The users answer for Q1.
 * @param {boolean} Q2 The users answer for Q2.
 * @returns {string} The threat scope
 */
const calculateThreatScope = (Q1, Q2) => {
  if (Q1 === true && Q2 === true) {
    return "High";
  } else {
    if (Q1 === true || Q2 === true) {
      return "Medium";
    } else {
      return "Low";
    }
  }
};

/**
 *
 * @param {string} threatScore
 * @param {boolean} Q3
 * @param {boolean} Q4
 * @returns {string} The protection weakness
 */
const calculateProtectionWeakness = (threatScore, Q3, Q4) => {
  if (Q3 === true && Q4 === true) {
    if (threatScore === "Low") {
      return "Medium";
    } else {
      return "High";
    }
  } else {
    if (Q3 === true || Q4 === true) {
      return threatScore;
    } else {
      if (threatScore === "High") {
        return "Medium";
      } else {
        return "Low";
      }
    }
  }
};

/**
 *
 * @param {string} protectionWeakness The protection weakness (see calculateProtectionWeakness)
 * @returns {string} The attack efficiency
 */
const calculateAttackEfficiency = (protectionWeakness) => {
  return protectionWeakness;
};

/**
 *
 * @param {string} attackEfficiency The attack efficiency
 * @param {boolean} Q5 The answer to Q5.
 * @param {boolean} Q6 The answer to Q6.
 * @returns {string} The threat occurrence
 */
const calculateOccurrence = (attackEfficiency, Q5, Q6) => {
  if (Q5 === true && Q6 === true) {
    if (attackEfficiency === "Low") {
      return "Medium";
    } else {
      return "High";
    }
  } else {
    if (Q5 === true || Q6 === true) {
      return attackEfficiency;
    } else {
      if (attackEfficiency === "High") {
        return "Medium";
      } else {
        return "Low";
      }
    }
  }
};
