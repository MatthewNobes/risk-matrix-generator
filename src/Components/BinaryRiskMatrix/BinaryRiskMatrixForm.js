import { useState } from 'react';
import '../../css/App.css';

export default function BinaryRiskMatrixForm() {
    
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

    const [risk, appendRisk] = useState('Low')
    const [likelihood, appendLikelihood] = useState('Low')
    const [impact, appendImpact] = useState('Low')

    const handleChange = (value, appendFn) => {
        appendFn(!value);   
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        debugger;

        const likelihood = calculateLikelihood();
        const impact = calculateImpact();
        const risk = calculateRisk(likelihood, impact);

        appendRisk(risk);
        appendLikelihood(likelihood);
        appendImpact(impact);
    }
    
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

    const calculateLikelihood = () => {
        const threatScore = calculateThreatScope();
        const protectionWeakness = calculateProtectionWeakness(threatScore);
        const attackEfficacy = calculateAttackEfficacy(protectionWeakness);
        const occurrence = calculateOccurrence(attackEfficacy);

        const threatLikelihood = occurrence;
        return threatLikelihood;
    }

    const calculateThreatScope = () => {
        if (Q1 === true && Q2 === true) {
            return 'High'
        } else {
            if (Q1 === true || Q2 === true) {
                return 'Medium';
            } else {
                return 'Low'
            }
        }
    }

    const calculateProtectionWeakness = (threatScore) => {
        if (Q3 === true && Q4 === true) {
            if (threatScore === 'Low'){
                return 'Medium';
            } else {
                return 'High';
            }
        } else {
            if (Q3 === true || Q4 === true) {
                return threatScore;
            } else {
                if (threatScore === 'High') {
                    return 'Medium'
                } else {
                    return 'Low'
                }
            }
        }
    }

    const calculateAttackEfficacy = (protectionWeakness) => {
        return protectionWeakness;
    }

    const calculateOccurrence = (attackEfficacy) => {
        if (Q5 === true && Q6 === true) {
            if (attackEfficacy === 'Low'){
                return 'Medium';
            } else {
                return 'High';
            }
        } else {
            if (Q5 === true || Q6 === true) {
                return attackEfficacy;
            } else {
                if (attackEfficacy === 'High') {
                    return 'Medium'
                } else {
                    return 'Low'
                }
            }
        }
    }

    const calculateImpact = () => {
        const harmCapacity = calculateHarmCapacity();
        const impactValuation = calculateImpactValidation(harmCapacity);
        
        const threatImpact = impactValuation;
        return threatImpact;
    }

    const calculateHarmCapacity = () => {
        if (Q7 === true && Q8 === true){
            return 'High'
        } else {
            if (Q7 === true || Q8 === true) {
                return 'Medium'
            } else {
                return 'Low'
            }
        }
    }

    const calculateImpactValidation = (harmCapacity) => {
        if (Q9 === false && Q10 === false) {
            if (harmCapacity === 'High') {
                return 'Medium';
            } else {
                return 'Low'
            }
        } else {
            if (Q9 === true && Q10 === true){
                if (harmCapacity === 'Low') {
                    return 'Medium';
                } else {
                    return 'High'
                }
            } else {
                if (Q9 === true || Q10 === true) {
                    return harmCapacity;
                }
            }
        }
    }

    return (
        <div className="BinaryRiskMatrix">
            <form className="BinaryRiskMatrixForm" onSubmit={(e) => handleSubmit(e)}> 
                <div className="BinaryRiskMatrixForm-CheckboxBlock">
                    <input type='checkbox' id='Q1' value={Q1} onChange={() => handleChange(Q1, appendQ1)}/>
                    <label for='Q1'>Q1: Can the attack be completed with common skills?</label>
                </div>
                
                <div className="BinaryRiskMatrixForm-CheckboxBlock">
                    <input type='checkbox' id='Q2' value={Q2} onChange={() => handleChange(Q2, appendQ2)}/>
                    <label for='Q2'>Q2: Can the attack be completed without significant resources?</label>
                </div>

                <div className="BinaryRiskMatrixForm-CheckboxBlock">
                    <input type='checkbox' id='Q3' value={Q3} onChange={() => handleChange(Q3, appendQ3)}/>
                    <label for='Q3'>Q3: is the asset undefended?</label>
                </div>

                <div className="BinaryRiskMatrixForm-CheckboxBlock">
                    <input type='checkbox' id='Q4' value={Q4} onChange={() => handleChange(Q4, appendQ4)}/>
                    <label for='Q4'>Q4: Are there weaknesses in the current defences?</label>
                </div>

                <div className="BinaryRiskMatrixForm-CheckboxBlock">
                    <input type='checkbox' id='Q5' value={Q5} onChange={() => handleChange(Q5, appendQ5)}/>
                    <label for='Q5'>Q5: is the vulnerability always present in the asset?</label>
                </div>

                <div className="BinaryRiskMatrixForm-CheckboxBlock">
                    <input type='checkbox' id='Q6' value={Q6} onChange={() => handleChange(Q6, appendQ6)}/>
                    <label for='Q6'>Q6: Can the attack be performed without meeting any significant preconditions?</label>
                </div>

                <div className="BinaryRiskMatrixForm-CheckboxBlock">
                    <input type='checkbox' id='Q7' value={Q7} onChange={() => handleChange(Q7, appendQ7)}/>
                    <label for='Q7'>Q7: Will there be consequences from internal sources? (e.g. explain to company board)</label>
                </div>

                <div className="BinaryRiskMatrixForm-CheckboxBlock">
                    <input type='checkbox' id='Q8' value={Q8} onChange={() => handleChange(Q8, appendQ8)}/>
                    <label for='Q8'>Q8: Will there be consequences from external sources? (e.g. disclose to clients data theft)</label>
                </div>

                <div className="BinaryRiskMatrixForm-CheckboxBlock">
                    <input type='checkbox' id='Q9' value={Q9} onChange={() => handleChange(Q9, appendQ9)}/>
                    <label for='Q9'>Q9: Does the asset have a significant business value?</label>
                </div>

                <div className="BinaryRiskMatrixForm-CheckboxBlock">
                    <input type='checkbox' id='Q10' value={Q10} onChange={() => handleChange(Q10, appendQ10)}/>
                    <label for='Q10'>Q10: Will the asset have a significant cost of repair or replacement?</label>
                </div>
                <div className="BinaryRiskMatrixForm-Submit">
                    <button className="BinaryRiskMatrixForm-SubmitButton" type="submit">Submit</button>
                </div>
            </form>

            <div className="BinaryRiskMatrixResults">
                <h2 className="BinaryRiskMatrixResults-Measurement">Risk: {risk}</h2>
                <h2 className="BinaryRiskMatrixResults-Measurement">Likelihood: {likelihood}</h2>
                <h2 className="BinaryRiskMatrixResults-Measurement">Impact: {impact}</h2>
            </div>
            
        </div>
    );
  }