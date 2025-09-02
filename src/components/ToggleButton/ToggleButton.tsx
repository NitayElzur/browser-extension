import "./ToggleButton.css";

const ToggleButton = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className="switch" tabIndex={0}>
      <input type="checkbox" {...props} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleButton;
