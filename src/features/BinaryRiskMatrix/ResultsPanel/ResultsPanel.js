export const ResultsPanel = (props) => {
  const {
    risk,
    likelihood,
    threatScore,
    protectionWeakness,
    attackEfficiency,
    occurrence,
    impact,
    harmCapacity,
    impactValuation,
  } = props;
  return (
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
            impact === "Low" ? "Green" : impact === "Medium" ? "Orange" : "Red",
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
  );
};
