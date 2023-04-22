import { LinearProgress } from "@mui/material";
import { type ReactElement } from "react";
import RadialChart from "src/components/RadialChart";

import "./style.css";

const MonthlyStats = (): ReactElement => {
  return (
    <div className="stat_container">
      <div className="stat_chart">
        <RadialChart />
      </div>
      <div className="progress_content">
        <div className="task_progress_content">
          <span className="progress_title">Tasks</span>
          <h5 className="progress_complete_percent">50%</h5>
        </div>
        <div className="task_progress_bar">
          <LinearProgress color="secondary" variant="determinate" value={50} />
        </div>
      </div>
      <div className="progress_content">
        <div className="task_progress_content">
          <span className="progress_title">Hours in Meeting</span>
          <h5 className="progress_complete_percent">80%</h5>
        </div>
        <div className="task_progress_bar">
          <LinearProgress color="info" variant="determinate" value={80} />
        </div>
      </div>
      <div className="progress_content">
        <div className="task_progress_content">
          <span className="progress_title">Storage Used</span>
          <h5 className="progress_complete_percent">34%</h5>
        </div>
        <div className="task_progress_bar">
          <LinearProgress color="warning" variant="determinate" value={34} />
        </div>
      </div>
    </div>
  );
};

export default MonthlyStats;
