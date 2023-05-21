import { useState, type ReactElement, useContext, useEffect } from "react";
import getMonth from "src/utils/CalenderGen";
import {
  CalenderContext,
  CalenderContextProvider,
} from "src/context/CalenderContext";
import CalenderHeader from "./components/CalenderHeader";
import Months from "./components/Month";

import "./style.css";

const Calender = (): ReactElement => {
  const [currentMonthDates, setCurrentMonths] = useState<any>(getMonth());
  const { monthIndex } = useContext(CalenderContext);

  useEffect(() => {
    console.log(monthIndex);
    setCurrentMonths(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <CalenderContextProvider>
      <section className="calender_section">
        <CalenderHeader />
        <Months month={currentMonthDates} />
      </section>
    </CalenderContextProvider>
  );
};

export default Calender;
