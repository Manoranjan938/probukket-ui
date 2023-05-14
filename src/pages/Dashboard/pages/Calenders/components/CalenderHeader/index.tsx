import React, { type ReactElement } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import "./style.css";

const CalenderHeader = (): ReactElement => {
  return (
    <section className="calender_header_section">
      <div className="left_header">
        <div className="calender_header_icon">
          <HiOutlineChevronLeft />
        </div>
        <div className="calender_header_icon">
          <HiOutlineChevronRight />
        </div>
        <div className="todays_dt">
          <span>Mar 24, 2023</span>
        </div>
      </div>
      <div className="right_header">
        <span className="current_day">Today</span>
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
