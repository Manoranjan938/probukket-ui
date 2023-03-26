import { type ReactElement } from "react";
import { Link } from "react-router-dom";

import { IoBriefcaseOutline } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { MdLogin } from "react-icons/md";
import { GrUserNew } from "react-icons/gr";

const Header = (): ReactElement => {
  return (
    <header className="header">
      <nav className="nav conatiner">
        <Link to="/">ProBukket</Link>
        <div className="nav_menus">
          <ul className="nav__lists">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <IoBriefcaseOutline className="nav__icons" /> Jobs
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <CgOrganisation className="nav__icons" /> Companies
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link small-button-outlined-green">
                <MdLogin className="nav__icons" /> Login
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link small-button button-green">
                <GrUserNew className="nav__icons" /> Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
