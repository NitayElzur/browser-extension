import "./Button.css";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={props.className + " button"}></button>;
};

export default Button;
