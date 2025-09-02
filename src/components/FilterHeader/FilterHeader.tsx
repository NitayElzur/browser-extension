import type { Selection } from "../Main/Main";
import RadioButton from "../RadioButton/RadioButton";
import "./FilterHeader.css";
const FilterHeader = ({
  selectedOption,
  setSelectedOption,
}: {
  selectedOption: Selection;
  setSelectedOption: React.Dispatch<React.SetStateAction<Selection>>;
}) => {
  function handleClick(value: Selection) {
    setSelectedOption(value);
  }
  return (
    <div className="filter-header noto-sans-700">
      <p>Extensions List</p>
      <div className="filter-options noto-sans-400">
        {["all", "active", "inactive"].map((value) => {
          if (value === selectedOption)
            return (
              <RadioButton
                key={value}
                name="filter"
                id={value}
                defaultChecked
                onChange={() => handleClick(value)}
              />
            );
          else if (
            value === "all" ||
            value === "active" ||
            value === "inactive"
          )
            return (
              <RadioButton
                key={value}
                name="filter"
                id={value}
                onChange={() => handleClick(value)}
              />
            );
        })}
      </div>
    </div>
  );
};

export default FilterHeader;
