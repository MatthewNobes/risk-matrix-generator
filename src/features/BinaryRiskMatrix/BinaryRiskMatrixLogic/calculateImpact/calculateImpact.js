/**
 *
 * @param {string[]} values An array of the users answers for the questions on the binary risk matrix.
 * @returns {string} Threat Impact
 */
export const calculateImpact = (values) => {
  const harmCapacity = calculateHarmCapacity(values[6], values[7]);
  const impactValuation = calculateImpactValidation(
    harmCapacity,
    values[8],
    values[9]
  );

  const threatImpact = impactValuation;
  const impactResults = [harmCapacity, impactValuation, threatImpact];
  return impactResults;
};

/**
 *
 * @param {boolean} Q7 The value of question 7, as set by the user.
 * @param {boolean} Q8 The value of question 8, as set by the user.
 * @returns {string} Harm Capacity
 */
const calculateHarmCapacity = (Q7, Q8) => {
  if (Q7 === true && Q8 === true) {
    return "High";
  } else {
    if (Q7 === true || Q8 === true) {
      return "Medium";
    } else {
      return "Low";
    }
  }
};

/**
 *
 * @param {string} harmCapacity
 * @param {boolean} Q9 The value of question 9, as set by the user.
 * @param {boolean} Q10 The value of question 10, as set by the user.
 * @returns {string} Impact Validation
 */
const calculateImpactValidation = (harmCapacity, Q9, Q10) => {
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
