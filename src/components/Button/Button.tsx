import "./Button.css";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={"button " + (props.className ? props.className : "")}
    >
      {props?.children}
    </button>
  );
};

export default Button;
