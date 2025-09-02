import LightModeDarkMode from "../LightModeDarkMode/LightModeDarkMode";
import "./Header.css";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <LightModeDarkMode />
    </header>
  );
};

export default Header;
