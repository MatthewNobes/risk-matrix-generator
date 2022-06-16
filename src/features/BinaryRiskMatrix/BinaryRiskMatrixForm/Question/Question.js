import css from "./Question.module.css";

export const Question = (props) => {
  const question = props.question;
  const changeFn = props.changeFn;
  const value = props.value;
  const id = props.id;

  return (
    <div className={css.Question} id={"Q" + id}>
      <input type="checkbox" id={id} value={value} onChange={changeFn} />
      <label htmlFor={id}>{question}</label>
    </div>
  );
};
