import type { Selection } from "../Main/Main";
// import RadioButton from "../RadioButton/RadioButton";
import "./FilterHeader.css";
const FilterHeader = ({
  selectedOption,
  setSelectedOption,
}: {
  selectedOption: Selection;
  setSelectedOption: React.Dispatch<React.SetStateAction<Selection>>;
}) => {
  // function handleClick(value: Selection) {
  //   setSelectedOption(value);
  // }
  return (
    <div className="filter-header noto-sans-700">
      <p>Extensions List</p>
      <div className="filter-options noto-sans-400">
        {(["all", "active", "inactive"] as const).map((value) => (
          <label key={value} className="radio-label">
            <input
              type="radio"
              name="filter"
              value={value}
              checked={selectedOption === value}
              onChange={() => setSelectedOption(value)}
            />
            <span className="radio-text">{value}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterHeader;
