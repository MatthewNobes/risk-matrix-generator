import { useState } from "react";
import "../../../css/App.css";
import Question from "./Question";

export const BinaryRiskMatrixForm = (props) => {
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

  const questionDetails = [
    {
      questionNumber: 1,
      question: "Q1: Can the attack be completed with common skills?",
      value: Q1,
      changeFn: () => handleChange(Q1, appendQ1),
    },
    {
      questionNumber: 2,
      question:
        "Q2: Can the attack be completed without significant resources?",
      value: Q2,
      changeFn: () => handleChange(Q2, appendQ2),
    },
    {
      questionNumber: 3,
      question: "Q3: Is the asset undefended?",
      value: Q3,
      changeFn: () => handleChange(Q3, appendQ3),
    },
    {
      questionNumber: 4,
      question: "Q4: Are there weaknesses in the current defences?",
      value: Q4,
      changeFn: () => handleChange(Q4, appendQ4),
    },
    {
      questionNumber: 5,
      question: "Q5: Is the vulnerability always present in the asset?",
      value: Q5,
      changeFn: () => handleChange(Q5, appendQ5),
    },
    {
      questionNumber: 6,
      question:
        "Q6: Can the attack be performed without meeting any significant preconditions?",
      value: Q6,
      changeFn: () => handleChange(Q6, appendQ6),
    },
    {
      questionNumber: 7,
      question:
        "Q7: Will there be consequences from internal sources? (e.g. explain to company board)",
      value: Q7,
      changeFn: () => handleChange(Q7, appendQ7),
    },
    {
      questionNumber: 8,
      question:
        "Q8: Will there be consequences from external sources? (e.g. disclose to clients data theft)",
      value: Q8,
      changeFn: () => handleChange(Q8, appendQ8),
    },
    {
      questionNumber: 9,
      question: "Q9: Does the asset have a significant business value?",
      value: Q9,
      changeFn: () => handleChange(Q9, appendQ9),
    },
    {
      questionNumber: 10,
      question:
        "Q10: Will the asset have a significant cost of repair or replacement?",
      value: Q10,
      changeFn: () => handleChange(Q10, appendQ10),
    },
  ];

  const handleChange = (value, appendFn) => {
    appendFn(!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userResponses = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10];
    props.onSubmitFn(userResponses);
  };

  return (
    <form className="BinaryRiskMatrixForm" onSubmit={(e) => handleSubmit(e)}>
      {questionDetails.map((question) => {
        return (
          <Question
            key={question.questionNumber}
            value={question.value}
            id={question.questionNumber}
            changeFn={question.changeFn}
            question={question.question}
          />
        );
      })}
      <div className="BinaryRiskMatrixForm-Submit">
        <button className="BinaryRiskMatrixForm-SubmitButton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
