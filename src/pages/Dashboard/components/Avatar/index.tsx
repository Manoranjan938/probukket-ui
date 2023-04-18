import { useState, type ReactElement } from "react";

import img from "src/assets/avatars/avatar1.png";

import "./style.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const UserAvatar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState("");
  const handleClick = (): void => {
    setIsOpen(!isOpen ? "open" : "");
  };
  return (
    <div className="avatar_container">
      <button className="avatar" onClick={handleClick}>
        <div className="avatar_img">
          <img src={img} alt="" />
        </div>
        <div className="avatar_name">
          <span>
            Hey, <b>Some name</b>
          </span>
          <span className="chevron-icon">
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
      </button>
      <div className={`avatar-items ${isOpen}`}>
        <button>Something</button>
      </div>
    </div>
  );
};

export default UserAvatar;
