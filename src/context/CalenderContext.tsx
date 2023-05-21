import { type ReactElement, createContext, useState } from "react";

interface CalenderContextType {
  monthIndex: number;
  updatePrevMonth: () => void;
  updateNextMonth: () => void;
}

const CalenderContext = createContext<CalenderContextType>({
  monthIndex: 0,
  updatePrevMonth: () => {},
  updateNextMonth: () => {},
});

const { Provider } = CalenderContext;

interface ProviderProps {
  children: ReactElement;
}

const CalenderContextProvider = ({ children }: ProviderProps) => {
  const [monthIndex, setMonthIndex] = useState(0);

  const nextMonth = () => {
    console.log("Next");
    setMonthIndex((prev) => prev + 1);
  };

  const prevMonth = () => {
    console.log("Prv");
    setMonthIndex((prev) => prev - 1);
  };

  return (
    <Provider
      value={{
        monthIndex,
        updatePrevMonth: () => {
          prevMonth();
        },
        updateNextMonth: () => {
          nextMonth();
        },
      }}
    >
      {children}
    </Provider>
  );
};

export { CalenderContextProvider, CalenderContext };
