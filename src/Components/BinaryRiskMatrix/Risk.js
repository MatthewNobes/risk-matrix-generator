/**
 * This function determines the overall risk combining everything else calculated.
 * @param {string} threatLikelihood The threat likelihood.
 * @param {string} threatImpact The threat impact.
 * @returns {string} The overall risk.
 */
const calculateRisk = (threatLikelihood, threatImpact) => {
    if (threatImpact === threatLikelihood) {
        return threatLikelihood;
    } else {
        if ((threatLikelihood === 'High' && threatImpact === 'Medium') || (threatLikelihood === 'Medium' && threatImpact === 'High')) {
            return 'High';
        } else {
            if ((threatLikelihood === 'High' && threatImpact === 'Low') || (threatLikelihood === 'Low' && threatImpact === 'Medium')) {
                return 'Medium';
            } else {
                return 'Low';
            }
        }
    }
}

export default calculateRisk;