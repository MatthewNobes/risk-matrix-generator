import { useState } from "react";
import BinaryRiskMatrixForm from "./BinaryRiskMatrixForm";
import ResultsPanel from "./ResultsPanel";
import calculateValues from "./calculateValues";

export const BinaryRiskMatrix = () => {
  const [risk, appendRisk] = useState("Low");
  const [likelihood, appendLikelihood] = useState("Low");
  const [impact, appendImpact] = useState("Low");

  const [harmCapacity, appendHarmCapacity] = useState("Low");
  const [impactValuation, appendImpactValuation] = useState("Low");

  const [threatScore, appendThreatScore] = useState("Low");
  const [protectionWeakness, appendProtectionWeakness] = useState("Low");
  const [attackEfficiency, appendAttackEfficiency] = useState("Low");
  const [occurrence, appendOccurrence] = useState("Low");

  const runCalculation = (userResponses) => {
    const calculatedValues = calculateValues(userResponses);

    appendHarmCapacity(calculatedValues.harmCapacity);
    appendImpactValuation(calculatedValues.impactValuation);
    appendThreatScore(calculatedValues.threatScore);
    appendProtectionWeakness(calculatedValues.protectionWeakness);
    appendAttackEfficiency(calculatedValues.attackEfficiency);
    appendOccurrence(calculatedValues.occurrence);
    appendLikelihood(calculatedValues.threatLikelihood);
    appendImpact(calculatedValues.threatImpact);
    appendRisk(calculatedValues.threatRisk);
  };

  return (
    <div>
      <h1 className="PageTitle">Binary Risk Matrix</h1>
      <div className="BinaryRiskMatrix">
        <BinaryRiskMatrixForm onSubmitFn={runCalculation} />
        <ResultsPanel
          risk={risk}
          likelihood={likelihood}
          threatScore={threatScore}
          protectionWeakness={protectionWeakness}
          attackEfficiency={attackEfficiency}
          occurrence={occurrence}
          impact={impact}
          harmCapacity={harmCapacity}
          impactValuation={impactValuation}
        />
      </div>
    </div>
  );
};
