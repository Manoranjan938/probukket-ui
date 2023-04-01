import React, { type ReactElement } from "react";
import { Link } from "react-router-dom";

import logo from "src/assets/logo.png";
import img from "src/assets/avatars/avatar3.png";

import { RxDashboard } from "react-icons/rx";

const Sidebar = (): ReactElement => {
  console.log(window.location);
  return (
    <aside className="sidebar_container">
      <section className="sidebar_header">
        <div className="sidebar_logo">
          <img src={logo} alt="" />
          <Link to="/" className="logo_title">
            ProBukket
          </Link>
        </div>
        <div className="sidebar_user">
          <div className="user_img">
            <img src={img} alt="" />
          </div>
          <div className="user_detail">
            <h5 className="title">Some Name</h5>
            <p className="subtitle">Project Manager</p>
          </div>
        </div>
      </section>
      <div className="devider" />
      <section className="sidebar_links">
        <Link to="/" className="sidebar_link">
          <div className="sidebar_icon">
            <RxDashboard />
          </div>
          <span className="sidebar_title">Dashboard</span>
        </Link>
      </section>
    </aside>
  );
};

export default Sidebar;
