import { createContext } from "react";

const CalenderContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index: any) => {},
});

export default CalenderContext;
