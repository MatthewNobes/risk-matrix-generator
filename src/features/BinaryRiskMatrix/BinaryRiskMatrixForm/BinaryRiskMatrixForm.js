import { useState } from "react";
import "../../../css/App.css";

import calculateImpact from "../BinaryRiskMatrixLogic/calculateImpact";
import calculateLikelihood from "../BinaryRiskMatrixLogic/calculateLikelihood";
import calculateRisk from "../BinaryRiskMatrixLogic/calculateRisk";

import { calculateHarmCapacity } from "../BinaryRiskMatrixLogic/calculateImpact/calculateHarmCapacity/calculateHarmCapacity";
import { calculateImpactValuation } from "../BinaryRiskMatrixLogic/calculateImpact/calculateImpactValuation/calculateImpactValuation";

const calculateValues = (userResponses) => {
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

  return values;
};

export const BinaryRiskMatrixForm = () => {
  const [Q1, appendQ1] = useState(false);
  const [Q2, appendQ2] = useState(false);
  const [Q3, appendQ3] = useState(false);
  const [Q4, appendQ4] = useState(false);
  const [Q5, appendQ5] = useState(false);
  const [Q6, appendQ6] = useState(false);
  const [Q7, appendQ7] = useState(false);
  const [Q8, appendQ8] = useState(false);
  const [Q9, appendQ9] = useState(false);
  const [Q10, appendQ10] = useState(false);

  const [risk, appendRisk] = useState("Low");
  const [likelihood, appendLikelihood] = useState("Low");
  const [impact, appendImpact] = useState("Low");

  const [harmCapacity, appendHarmCapacity] = useState("Low");
  const [impactValuation, appendImpactValuation] = useState("Low");

  const [threatScore, appendThreatScore] = useState("Low");
  const [protectionWeakness, appendProtectionWeakness] = useState("Low");
  const [attackEfficiency, appendAttackEfficiency] = useState("Low");
  const [occurrence, appendOccurrence] = useState("Low");

  const handleChange = (value, appendFn) => {
    appendFn(!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10];
    const likelihoodResults = calculateLikelihood(values);
    const impactResults = calculateImpact(values);

    const calculatedValues = calculateValues(values);

    appendHarmCapacity(calculatedValues.harmCapacity);
    appendImpactValuation(calculatedValues.impactValuation);

    appendThreatScore(likelihoodResults[0]);
    appendProtectionWeakness(likelihoodResults[1]);
    appendAttackEfficiency(likelihoodResults[2]);
    appendOccurrence(likelihoodResults[3]);

    appendLikelihood(likelihoodResults[4]);
    appendImpact(calculatedValues.threatImpact);

    const risk = calculateRisk(likelihoodResults[4], impactResults[2]);
    appendRisk(risk);
  };

  return (
    <div className="BinaryRiskMatrix">
      <form className="BinaryRiskMatrixForm" onSubmit={(e) => handleSubmit(e)}>
        <div className="BinaryRiskMatrixForm-CheckboxBlock">
          <input
            type="checkbox"
            id="Q1"
            value={Q1}
            onChange={() => handleChange(Q1, appendQ1)}
          />
          <label for="Q1">
            Q1: Can the attack be completed with common skills?
          </label>
        </div>

        <div className="BinaryRiskMatrixForm-CheckboxBlock">
          <input
            type="checkbox"
            id="Q2"
            value={Q2}
            onChange={() => handleChange(Q2, appendQ2)}
          />
          <label for="Q2">
            Q2: Can the attack be completed without significant resources?
          </label>
        </div>

        <div className="BinaryRiskMatrixForm-CheckboxBlock">
          <input
            type="checkbox"
            id="Q3"
            value={Q3}
            onChange={() => handleChange(Q3, appendQ3)}
          />
          <label for="Q3">Q3: Is the asset undefended?</label>
        </div>

        <div className="BinaryRiskMatrixForm-CheckboxBlock">
          <input
            type="checkbox"
            id="Q4"
            value={Q4}
            onChange={() => handleChange(Q4, appendQ4)}
          />
          <label for="Q4">
            Q4: Are there weaknesses in the current defences?
          </label>
        </div>

        <div className="BinaryRiskMatrixForm-CheckboxBlock">
          <input
            type="checkbox"
            id="Q5"
            value={Q5}
            onChange={() => handleChange(Q5, appendQ5)}
          />
          <label for="Q5">
            Q5: Is the vulnerability always present in the asset?
          </label>
        </div>

        <div className="BinaryRiskMatrixForm-CheckboxBlock">
          <input
            type="checkbox"
            id="Q6"
            value={Q6}
            onChange={() => handleChange(Q6, appendQ6)}
          />
          <label for="Q6">
            Q6: Can the attack be performed without meeting any significant
            preconditions?
          </label>
        </div>

        <div className="BinaryRiskMatrixForm-CheckboxBlock">
          <input
            type="checkbox"
            id="Q7"
            value={Q7}
            onChange={() => handleChange(Q7, appendQ7)}
          />
          <label for="Q7">
            Q7: Will there be consequences from internal sources? (e.g. explain
            to company board)
          </label>
        </div>

        <div className="BinaryRiskMatrixForm-CheckboxBlock">
          <input
            type="checkbox"
            id="Q8"
            value={Q8}
            onChange={() => handleChange(Q8, appendQ8)}
          />
          <label for="Q8">
            Q8: Will there be consequences from external sources? (e.g. disclose
            to clients data theft)
          </label>
        </div>

        <div className="BinaryRiskMatrixForm-CheckboxBlock">
          <input
            type="checkbox"
            id="Q9"
            value={Q9}
            onChange={() => handleChange(Q9, appendQ9)}
          />
          <label for="Q9">
            Q9: Does the asset have a significant business value?
          </label>
        </div>

        <div className="BinaryRiskMatrixForm-CheckboxBlock">
          <input
            type="checkbox"
            id="Q10"
            value={Q10}
            onChange={() => handleChange(Q10, appendQ10)}
          />
          <label for="Q10">
            Q10: Will the asset have a significant cost of repair or
            replacement?
          </label>
        </div>
        <div className="BinaryRiskMatrixForm-Submit">
          <button className="BinaryRiskMatrixForm-SubmitButton" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="BinaryRiskMatrixResults">
        <h2
          className="BinaryRiskMatrixResults-Measurement"
          style={{
            color:
              risk === "Low" ? "Green" : risk === "Medium" ? "Orange" : "Red",
          }}
        >
          Risk: {risk}
        </h2>

        <h2
          className="BinaryRiskMatrixResults-Measurement"
          style={{
            color:
              likelihood === "Low"
                ? "Green"
                : likelihood === "Medium"
                ? "Orange"
                : "Red",
          }}
        >
          Likelihood: {likelihood}
        </h2>
        <ul>
          <h3
            className="BinaryRiskMatrixResults-Measurement"
            style={{
              color:
                threatScore === "Low"
                  ? "Green"
                  : threatScore === "Medium"
                  ? "Orange"
                  : "Red",
            }}
          >
            Threat Score: {threatScore}
          </h3>
          <h3
            className="BinaryRiskMatrixResults-Measurement"
            style={{
              color:
                protectionWeakness === "Low"
                  ? "Green"
                  : protectionWeakness === "Medium"
                  ? "Orange"
                  : "Red",
            }}
          >
            Protection Weakness: {protectionWeakness}
          </h3>
          <h3
            className="BinaryRiskMatrixResults-Measurement"
            style={{
              color:
                attackEfficiency === "Low"
                  ? "Green"
                  : attackEfficiency === "Medium"
                  ? "Orange"
                  : "Red",
            }}
          >
            Attack Efficiency: {attackEfficiency}
          </h3>
          <h3
            className="BinaryRiskMatrixResults-Measurement"
            style={{
              color:
                occurrence === "Low"
                  ? "Green"
                  : occurrence === "Medium"
                  ? "Orange"
                  : "Red",
            }}
          >
            Occurrence: {occurrence}
          </h3>
        </ul>

        <h2
          className="BinaryRiskMatrixResults-Measurement"
          style={{
            color:
              impact === "Low"
                ? "Green"
                : impact === "Medium"
                ? "Orange"
                : "Red",
          }}
        >
          Impact: {impact}
        </h2>
        <ul>
          <h3
            className="BinaryRiskMatrixResults-Measurement"
            style={{
              color:
                harmCapacity === "Low"
                  ? "Green"
                  : harmCapacity === "Medium"
                  ? "Orange"
                  : "Red",
            }}
          >
            Harm Capacity: {harmCapacity}
          </h3>
          <h3
            className="BinaryRiskMatrixResults-Measurement"
            style={{
              color:
                impactValuation === "Low"
                  ? "Green"
                  : impactValuation === "Medium"
                  ? "Orange"
                  : "Red",
            }}
          >
            Impact Valuation: {impactValuation}
          </h3>
        </ul>
      </div>
    </div>
  );
};
