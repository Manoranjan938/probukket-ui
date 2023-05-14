import { useState, type ReactElement, useContext, useEffect } from "react";
import getMonth from "src/utils/CalenderGen";
import CalenderContext from "src/context/CalenderContext";
import CalenderHeader from "./components/CalenderHeader";
import Months from "./components/Month";

import "./style.css";

const Calender = (): ReactElement => {
  const [currentMonths, setCurrentMonths] = useState<any>(getMonth());
  const { monthIndex } = useContext(CalenderContext);

  useEffect(() => {
    setCurrentMonths(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <section className="calender_section">
      <CalenderHeader />
      <Months month={currentMonths} />
    </section>
  );
};

export default Calender;
