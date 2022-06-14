/**
 *
 * @param {boolean} Q7 The value of question 7, as set by the user.
 * @param {boolean} Q8 The value of question 8, as set by the user.
 * @returns {string} Harm Capacity
 */
export const calculateHarmCapacity = (Q7, Q8) => {
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
