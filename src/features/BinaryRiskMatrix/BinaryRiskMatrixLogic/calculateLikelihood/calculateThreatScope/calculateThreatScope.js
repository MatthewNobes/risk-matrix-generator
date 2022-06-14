/**
 *
 * @param {boolean} Q1 The users answer for Q1.
 * @param {boolean} Q2 The users answer for Q2.
 * @returns {string} The threat scope
 */
export const calculateThreatScope = (Q1, Q2) => {
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
