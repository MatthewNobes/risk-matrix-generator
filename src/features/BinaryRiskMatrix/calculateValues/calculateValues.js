import calculateImpact from "../calculateValues/calculateImpact";
import calculateLikelihood from "../calculateValues/calculateLikelihood";
import calculateRisk from "../calculateValues/calculateRisk";
import { calculateHarmCapacity } from "../calculateValues/calculateImpact/calculateHarmCapacity/calculateHarmCapacity";
import { calculateImpactValuation } from "../calculateValues/calculateImpact/calculateImpactValuation/calculateImpactValuation";
import { calculateThreatScope } from "../calculateValues/calculateLikelihood/calculateThreatScope/calculateThreatScope";
import { calculateProtectionWeakness } from "../calculateValues/calculateLikelihood/calculateProtectionWeakness/calculateProtectionWeakness";
import { calculateAttackEfficiency } from "../calculateValues/calculateLikelihood/calculateAttackEfficiency/calculateAttackEfficiency";
import { calculateOccurrence } from "../calculateValues/calculateLikelihood/calculateOccurrence/calculateOccurrence";

export const calculateValues = (userResponses) => {
  const values = {};

  values.harmCapacity = calculateHarmCapacity(
    userResponses[6],
    userResponses[7]
  );
  values.impactValuation = calculateImpactValuation(
    values.harmCapacity,
    userResponses[8],
    userResponses[9]
  );
  values.threatImpact = calculateImpact(values.impactValuation);

  values.threatScore = calculateThreatScope(userResponses[0], userResponses[1]);
  values.protectionWeakness = calculateProtectionWeakness(
    values.threatScore,
    userResponses[2],
    userResponses[3]
  );
  values.attackEfficiency = calculateAttackEfficiency(
    values.protectionWeakness
  );
  values.occurrence = calculateOccurrence(
    values.attackEfficiency,
    userResponses[4],
    userResponses[5]
  );
  values.threatLikelihood = calculateLikelihood(values.occurrence);

  values.threatRisk = calculateRisk(
    values.threatLikelihood,
    values.threatImpact
  );
  return values;
};
