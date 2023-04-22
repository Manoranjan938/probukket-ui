import React, { useState, type ReactElement } from "react";
import { Link } from "react-router-dom";

import logo from "src/assets/logo.png";
import img from "src/assets/avatars/avatar3.png";

import { RxDashboard } from "react-icons/rx";
import {
  BsCalendar2CheckFill,
  BsCalendarCheck,
  BsFolder,
  BsFolder2Open,
} from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiCalendar, BiMessageSquareDetail } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { TbNotes } from "react-icons/tb";
import { GrCompliance, GrDocumentUser } from "react-icons/gr";

const Sidebar = (): ReactElement => {
  const [isSubnav, setSubnav] = useState<boolean>(false);
  const toggleSubnav = (): any => {
    setSubnav(!isSubnav);
  };
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
        <div className="devider" />
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
        <ul>
          <li onClick={toggleSubnav}>
            <Link to="/" className="sidebar_link">
              <div className="links">
                <div className="sidebar_icon">
                  <RxDashboard />
                </div>
                <span className="sidebar_title">Dashboard</span>
              </div>
            </Link>
          </li>
          <li onClick={toggleSubnav}>
            <Link to="#" className="sidebar_link sidebar_active">
              <div className="links">
                <div className="sidebar_icon">
                  {isSubnav ? <BsFolder2Open /> : <BsFolder />}
                </div>
                <span className="sidebar_title">Projects</span>
              </div>
              {isSubnav ? (
                <div className="sidebar_toggle_icon">
                  <IoIosArrowUp />
                </div>
              ) : (
                <div className="sidebar_toggle_icon">
                  <IoIosArrowDown />
                </div>
              )}
            </Link>
            {isSubnav ? (
              <ul>
                <li>
                  <Link to="/" className="dropdown_link">
                    <div className="dropdown_icon">
                      <RxDashboard />
                    </div>
                    <span className="dropdown_title">Project 1</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown_link dropdown_active">
                    <div className="dropdown_icon">
                      <RxDashboard />
                    </div>
                    <span className="dropdown_title">Project 2</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown_link">
                    <div className="dropdown_icon">
                      <RxDashboard />
                    </div>
                    <span className="dropdown_title">Project 3</span>
                  </Link>
                </li>
              </ul>
            ) : null}
          </li>
          <li onClick={toggleSubnav}>
            <Link to="#" className="sidebar_link">
              <div className="links">
                <div className="sidebar_icon">
                  {isSubnav ? <BsCalendar2CheckFill /> : <BsCalendarCheck />}
                </div>
                <span className="sidebar_title">Tasks</span>
              </div>
              {isSubnav ? (
                <div className="sidebar_toggle_icon">
                  <IoIosArrowUp />
                </div>
              ) : (
                <div className="sidebar_toggle_icon">
                  <IoIosArrowDown />
                </div>
              )}
            </Link>
            {isSubnav ? (
              <ul>
                <li>
                  <Link to="/" className="dropdown_link">
                    <div className="dropdown_icon">
                      <TbNotes />
                    </div>
                    <span className="dropdown_title">All Tasks</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown_link dropdown_active">
                    <div className="dropdown_icon">
                      <GrDocumentUser />
                    </div>
                    <span className="dropdown_title">My Tasks</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown_link">
                    <div className="dropdown_icon">
                      <GrCompliance />
                    </div>
                    <span className="dropdown_title">My Completed Task</span>
                  </Link>
                </li>
              </ul>
            ) : null}
          </li>
          <li>
            <Link to="/" className="sidebar_link">
              <div className="links">
                <div className="sidebar_icon">
                  <BiMessageSquareDetail />
                </div>
                <span className="sidebar_title">Messages</span>
              </div>
              <div className="badge grn">
                <span>9+</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="sidebar_link">
              <div className="links">
                <div className="sidebar_icon">
                  <BiCalendar />
                </div>
                <span className="sidebar_title">Calender</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="sidebar_link">
              <div className="links">
                <div className="sidebar_icon">
                  <IoPeopleOutline />
                </div>
                <span className="sidebar_title">Teams</span>
              </div>
              <div className="badge orng">
                <span>4</span>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
