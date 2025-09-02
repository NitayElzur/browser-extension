import ExtensionCard from "../ExtensionCard/ExtensionCard";
import jsonData from "../../assets/data.json";
import "./ExtensionList.css";
import { useEffect, useState } from "react";
import type { cardData } from "../../types";
import type { Selection } from "../Main/Main";

const ExtensionList = ({ selectedOption }: { selectedOption: Selection }) => {
  const [data, setData] = useState<({ id: string } & cardData)[]>();
  useEffect(() => {
    setData(jsonData.map((value) => ({ ...value, id: crypto.randomUUID() })));
  }, []);

  function handleRemoveCard(id: string) {
    setData((prev) => prev?.filter((card) => card.id !== id));
  }

  function handleToggleCard(id: string) {
    setData((prev) =>
      prev?.map((card) =>
        card.id === id ? { ...card, isActive: !card.isActive } : card
      )
    );
  }

  return (
    <div className="extension-list">
      {data &&
        data
          .filter(
            (card) =>
              selectedOption === "all" ||
              (card.isActive && selectedOption === "active") ||
              (!card.isActive && selectedOption === "inactive")
          )
          .map((card) => (
            <ExtensionCard
              key={card.id}
              name={card.name}
              description={card.description}
              isActive={card.isActive}
              logo={card.logo}
              remove={() => handleRemoveCard(card.id)}
              onChange={() => handleToggleCard(card.id)}
            />
          ))}
    </div>
  );
};

export default ExtensionList;
