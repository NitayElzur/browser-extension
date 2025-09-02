import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import "./LightModeDarkMode.css";
import { useLightDark } from "../../contexts/isLight";

const LightModeDarkMode = () => {
  const { isLight, ToggleLight } = useLightDark();
  return (
    <img
      src={!isLight ? sun : moon}
      alt=""
      className="header-logo"
      onClick={() => ToggleLight()}
    />
  );
};

export default LightModeDarkMode;
