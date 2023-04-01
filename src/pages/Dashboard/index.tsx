import { type ReactNode, type ReactElement } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/Header";

import "./style.css";

interface DashboardProps {
  children: ReactNode;
}

const Dashboard = ({ children }: DashboardProps): ReactElement => {
  return (
    <div className="dashboard_layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_content">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
