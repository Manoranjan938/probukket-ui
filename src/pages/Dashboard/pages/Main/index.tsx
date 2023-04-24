import React, { type ReactElement } from "react";
import ProjectSummary from "src/pages/Dashboard/pages/Main/components/Summary";
import TodaysSchedules from "src/pages/Dashboard/pages/Main/components/Schedules";
import BarChart from "src/components/BarChart";
import MonthlyStats from "./components/Statistics";

const Home = (): ReactElement => {
  return (
    <>
      <div className="first_row">
        <ProjectSummary />
        <TodaysSchedules />
      </div>
      <div className="second_row">
        <BarChart />
        <MonthlyStats />
      </div>
    </>
  );
};

export default Home;
