import { type ReactElement, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Notification = (): ReactElement => {
  const [isOpen, setIsOpen] = useState("");
  const handleClick = (): void => {
    setIsOpen(!isOpen ? "open" : "");
  };
  return (
    <div className="wrapper">
      <div className={`search ${isOpen}`}>
        <button onClick={handleClick}>
          {isOpen ? <IoMdNotificationsOutline /> : <IoMdNotificationsOutline />}
        </button>
      </div>
      <div className={`items ${isOpen}`}>
        <button>Something</button>
      </div>
    </div>
  );
};

export default Notification;
