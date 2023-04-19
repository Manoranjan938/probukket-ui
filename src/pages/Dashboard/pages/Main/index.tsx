import React, { type ReactElement } from "react";
import ProjectSummary from "src/pages/Dashboard/components/Summary";
import TodaysSchedules from "src/pages/Dashboard/components/Schedules";
import BarChart from "src/components/BarChart";

const Home = (): ReactElement => {
  return (
    <>
      <div className="first_row">
        <ProjectSummary />
        <TodaysSchedules />
        {/* <div className="flex w-2/3"></div>
        <div className="flex w-1/3"></div> */}
      </div>
      <div className="second_row">
        <BarChart />
      </div>
    </>
  );
};

export default Home;
