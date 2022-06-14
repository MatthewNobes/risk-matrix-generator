/**
 *
 * @param {string} harmCapacity
 * @param {boolean} Q9 The value of question 9, as set by the user.
 * @param {boolean} Q10 The value of question 10, as set by the user.
 * @returns {string} Impact Validation
 */
export const calculateImpactValuation = (harmCapacity, Q9, Q10) => {
  if (Q9 === false && Q10 === false) {
    if (harmCapacity === "High") {
      return "Medium";
    } else {
      return "Low";
    }
  } else {
    if (Q9 === true && Q10 === true) {
      if (harmCapacity === "Low") {
        return "Medium";
      } else {
        return "High";
      }
    } else {
      if (Q9 === true || Q10 === true) {
        return harmCapacity;
      }
    }
  }
};
