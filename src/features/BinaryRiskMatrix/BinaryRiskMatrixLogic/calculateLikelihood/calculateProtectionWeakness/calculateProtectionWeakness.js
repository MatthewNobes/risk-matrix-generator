/**
 *
 * @param {string} threatScore
 * @param {boolean} Q3
 * @param {boolean} Q4
 * @returns {string} The protection weakness
 */
export const calculateProtectionWeakness = (threatScore, Q3, Q4) => {
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
