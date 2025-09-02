import "./RadioButton.css";

const RadioButton = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { id } = props;
  return (
    <>
      <label htmlFor={props.id} className="radio-label">
        <input type="radio" {...props} />
        <span className="radio-text">{id}</span>
      </label>
    </>
  );
};

export default RadioButton;
