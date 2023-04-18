import { type ReactElement, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

import "./style.css";

const Notification = (): ReactElement => {
  const [isOpen, setIsOpen] = useState("");
  const handleClick = (): void => {
    setIsOpen(!isOpen ? "open" : "");
  };
  return (
    <div className="wrapper">
      <div className={`notification ${isOpen}`}>
        <button onClick={handleClick}>
          {isOpen ? <IoMdNotificationsOutline /> : <IoMdNotificationsOutline />}
        </button>
      </div>
      <div className={`notification-items ${isOpen}`}>
        <button>Something</button>
      </div>
    </div>
  );
};

export default Notification;
