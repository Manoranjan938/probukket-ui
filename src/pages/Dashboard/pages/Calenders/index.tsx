import { useState, type ReactElement } from "react";
import getMonth from "src/utils/CalenderGen";
import CalenderHeader from "./components/CalenderHeader";
import Months from "./components/Month";

import "./style.css";

const Calender = (): ReactElement => {
  console.log(getMonth());
  const [currentMonths] = useState(getMonth());
  return (
    <section className="calender_section">
      <CalenderHeader />
      <Months month={currentMonths} />
    </section>
  );
};

export default Calender;
