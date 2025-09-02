import "./RadioButton.css";

const RadioButton = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <label htmlFor={props.id} className="radio-label">
        <input type="radio" {...props} />
        {props.id}
      </label>
    </>
  );
};

export default RadioButton;
