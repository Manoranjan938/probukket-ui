import dayjs from "dayjs";
import { type ReactElement, createContext, useState } from "react";

interface CalenderContextType {
  monthIndex: number;
  updatePrevMonth: () => void;
  updateNextMonth: () => void;
  resetMonth: () => void;
}

const CalenderContext = createContext<CalenderContextType>({
  monthIndex: 0,
  updatePrevMonth: () => {},
  updateNextMonth: () => {},
  resetMonth: () => {},
});

const { Provider } = CalenderContext;

interface ProviderProps {
  children: ReactElement;
}

const CalenderContextProvider = ({ children }: ProviderProps) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());

  const nextMonth = () => {
    setMonthIndex((prev) => prev + 1);
  };

  const prevMonth = () => {
    setMonthIndex((prev) => prev - 1);
  };

  const resetMonth = () => {
    setMonthIndex(dayjs().month());
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
        resetMonth: () => {
          resetMonth();
        },
      }}
    >
      {children}
    </Provider>
  );
};

export { CalenderContextProvider, CalenderContext };
