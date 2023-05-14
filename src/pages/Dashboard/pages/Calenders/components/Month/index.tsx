import PropTypes from "prop-types";
import React, { type ReactElement } from "react";

import "./style.css";
import Day from "../Day";

interface MonthProps {
  month: any[][];
}

const Months = ({ month }: MonthProps): ReactElement => {
  return (
    <section className="month_section">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </section>
  );
};

Months.propTypes = {
  month: PropTypes.any.isRequired,
};

export default Months;
