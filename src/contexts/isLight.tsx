import { createContext, useContext, useState } from "react";

type Props = {
  isLight: boolean;
  ToggleLight: () => void;
};

const isLightContext = createContext<Props | null>(null);

export const useLightDark = () => {
  const context = useContext(isLightContext);
  if (!context) {
    throw new Error("This component must be wrapped in a IsLightProvider");
  }
  const { isLight, ToggleLight } = context;

  return { isLight, ToggleLight };
};

export const IsLightProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLight, setIsLight] = useState<boolean>(true);

  const ToggleLight = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <isLightContext.Provider value={{ isLight, ToggleLight }}>
      <div className={"theme-" + (isLight ? "light" : "dark")}>{children}</div>
    </isLightContext.Provider>
  );
};
