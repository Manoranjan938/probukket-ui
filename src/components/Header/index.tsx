import { type ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import { IoBriefcaseOutline } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { MdLogin } from "react-icons/md";
import { GrUserNew } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import "./style.css";
import Button from "../Button";

const Header = (): ReactElement => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          ProBukket
        </Link>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__lists">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <IoBriefcaseOutline className="nav__icons" /> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <CgOrganisation className="nav__icons" /> Features
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <MdLogin className="nav__icons" /> Services
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <GrUserNew className="nav__icons" /> Products
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <GrUserNew className="nav__icons" /> Pricings
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <GrUserNew className="nav__icons" /> Docs
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <Button classes="small-btn outlined-grn-btn" title="Sign in" />
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <Button classes="small-btn orng-btn" title="Sign up" />
              </Link>
            </li>
          </ul>
          <FaTimes className="nav__close" onClick={handleToggle} />
        </div>
        <div
          className="nav__toggle"
          onClick={handleToggle}
          onMouseDown={handleToggle}
        >
          <AiOutlineMenuUnfold />
        </div>
      </nav>
    </header>
  );
};

export default Header;
