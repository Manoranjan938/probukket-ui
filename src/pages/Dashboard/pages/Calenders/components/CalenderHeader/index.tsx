import React, { useContext, type ReactElement } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import "./style.css";
import { CalenderContext } from "src/context/CalenderContext";
import dayjs from "dayjs";

const CalenderHeader = (): ReactElement => {
  const { updateNextMonth, updatePrevMonth, monthIndex, resetMonth } =
    useContext(CalenderContext);

  return (
    <section className="calender_header_section">
      <div className="left_header">
        <div className="calender_header_icon" onClick={updatePrevMonth}>
          <HiOutlineChevronLeft />
        </div>
        <div className="calender_header_icon" onClick={updateNextMonth}>
          <HiOutlineChevronRight />
        </div>
        <div className="todays_dt">
          <span>
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          </span>
        </div>
      </div>
      <div className="right_header">
        <span className="current_day" onClick={resetMonth}>
          Today
        </span>
        <div className="calender_view_type_tabs">
          <span className="calender_view_tab active_cal_tab">Day</span>
          <span className="calender_view_tab">Week</span>
          <span className="calender_view_tab">Month</span>
        </div>
      </div>
    </section>
  );
};

export default CalenderHeader;
