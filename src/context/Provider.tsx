import React, { useState, type ReactElement } from "react";
import CalenderContext from "./CalenderContext";
import dayjs from "dayjs";

interface ProviderProps {
  children: ReactElement;
}

const Provider = ({ children }: ProviderProps): ReactElement => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <CalenderContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </CalenderContext.Provider>
  );
};

export default Provider;
