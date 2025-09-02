import type { cardData } from "../../types";
import Button from "../Button/Button";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./ExtensionCard.css";

const ExtensionCard = ({
  logo,
  name,
  description,
  isActive,
  remove,
  onChange,
}: cardData & { remove: () => void; onChange: () => void }) => {
  return (
    <div className="extension-card noto-sans-400">
      <div className="upper">
        <img src={logo} alt="" />
        <div className="content">
          <p className="card-title noto-sans-500">{name}</p>
          <p className="card-description">{description}</p>
        </div>
      </div>
      <div className="lower">
        <Button onClick={remove}>Remove</Button>
        <ToggleButton defaultChecked={isActive} onChange={onChange} />
      </div>
    </div>
  );
};

export default ExtensionCard;
