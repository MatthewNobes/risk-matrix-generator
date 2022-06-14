/**
 *
 * @param {string} attackEfficiency The attack efficiency
 * @param {boolean} Q5 The answer to Q5.
 * @param {boolean} Q6 The answer to Q6.
 * @returns {string} The threat occurrence
 */
export const calculateOccurrence = (attackEfficiency, Q5, Q6) => {
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
