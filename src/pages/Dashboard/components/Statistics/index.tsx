import React, { type ReactElement } from "react";
import RadialChart from "src/components/RadialChart";

const MonthlyStats = (): ReactElement => {
  return (
    <div className="stat_chart">
      <RadialChart />
    </div>
  );
};

export default MonthlyStats;
