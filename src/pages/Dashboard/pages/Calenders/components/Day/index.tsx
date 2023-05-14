import React, { type ReactElement } from "react";
import dayjs from "dayjs";

import "./style.css";

interface DayProps {
  day: any;
  rowIdx: number;
}

const Day = ({ day, rowIdx }: DayProps): ReactElement => {
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "active_date"
      : "";
  }

  return (
    <div className="day_container">
      <header className="days_header">
        {rowIdx === 0 ? (
          <p className="days_header_name">{day.format("ddd").toUpperCase()}</p>
        ) : null}
        <p className={`days_date ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
};

export default Day;
