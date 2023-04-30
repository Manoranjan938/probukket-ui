import { useState, type ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "src/assets/logo.png";
import img from "src/assets/avatars/avatar3.png";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { addBarType } from "src/store/slices/sidebarSlice";
import { sidebarData } from "./sidebarData";

interface MenuTypes {
  id: number;
  title: string;
  inActiveIcon: any;
  activeIcon: any;
  path: string;
  badge: string;
  submenu: [];
}

const Sidebar = (): ReactElement => {
  const [menus, setMenus] = useState<any>([]);
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.sidebar);

  // console.log(window.location);

  const toggleActive = (current: string, sublink: boolean): void => {
    dispatch(
      addBarType({
        bar: "main-sidebar",
        currentActive: current,
        hasSubLink: sublink,
        dependantLink: current,
      }),
    );
  };

  useEffect(() => {
    dispatch(
      addBarType({
        bar: "main-sidebar",
        currentActive: "Dashboard",
        hasSubLink: false,
        dependantLink: "none",
      }),
    );
    const menu = sidebarData.filter((item) => item.type === "main-sidebar");
    setMenus(menu[0]?.menus);
  }, []);
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
          {menus.map((it: MenuTypes) => (
            <li
              key={it.id}
              onClick={() => {
                toggleActive(it.title, Boolean(it.submenu));
              }}
            >
              <Link
                to={it?.path ? it.path : "#"}
                className={
                  data.currentlyActiveLink === it.title
                    ? "sidebar_link sidebar_active"
                    : "sidebar_link"
                }
              >
                <div className="links">
                  <div className="sidebar_icon">{it.inActiveIcon}</div>
                  <span className="sidebar_title">{it.title}</span>
                </div>
                {it.submenu ? (
                  data.doActiveLinkHasSubLink &&
                  it.title === data.submenuLinksFor ? (
                    <div className="sidebar_toggle_icon">
                      <IoIosArrowUp />
                    </div>
                  ) : (
                    <div className="sidebar_toggle_icon">
                      <IoIosArrowDown />
                    </div>
                  )
                ) : null}
                {it.badge ? (
                  <div
                    className={`badge ${
                      it.title === "Messages" ? "grn" : "orng"
                    }`}
                  >
                    <span>{it.badge}</span>
                  </div>
                ) : null}
              </Link>
              {it.submenu &&
              data.doActiveLinkHasSubLink &&
              it.title === data.submenuLinksFor ? (
                <ul>
                  {it.submenu.map((subMenu: any) => (
                    <li key={subMenu?.id}>
                      <Link to={subMenu?.path} className="dropdown_link">
                        <div className="dropdown_icon">{subMenu.icon}</div>
                        <span className="dropdown_title">{subMenu.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
