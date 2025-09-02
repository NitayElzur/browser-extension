import { useState } from "react";
import ExtensionList from "../ExtensionList/ExtensionList";
import FilterHeader from "../FilterHeader/FilterHeader";
import "./Main.css";

export type Selection = "all" | "active" | "inactive";

const Main = () => {
  const [selectedOption, setSelectedOption] = useState<Selection>("all");
  return (
    <main className="main">
      <FilterHeader
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <ExtensionList selectedOption={selectedOption} />
    </main>
  );
};

export default Main;
