import { useState, type ReactElement } from "react";

import "./style.css";
import CustomBadge from "src/components/CustomBadge";
import Avatarlist from "src/components/AvatarList";

import { ImAttachment } from "react-icons/im";

import img from "src/assets/avatars/avatar2.png";
import { BsChat } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import CustomDrawer from "src/components/CustomDrawer";
import TaskDetails from "../TaskDetails";
import DrawerContext from "src/context/DrawerContext";

const TaskItem = (): ReactElement => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = (): void => {
    console.log("somthing happenig");
    setShowDrawer(true);
  };

  const closeDrawer = (): void => {
    setShowDrawer(false);
  };

  return (
    <DrawerContext.Provider value={{ showDrawer, toggle: closeDrawer }}>
      <section className="task_item_section" onClick={toggleDrawer}>
        <div className="task_item_container">
          <div className="task_item_header">
            <CustomBadge classes="meeting" title="Meeting List" />
          </div>
          <div className="task_item_body">
            <h2>Some title</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              sequi incidunt at earum deserunt similique!
            </p>
            <div className="task_body_img">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="task_item_footer">
            <Avatarlist avatarCounts={1} />
            <div className="footer_extras">
              <div className="task_attachment_icon">
                <span className="footer_extra_icon">
                  <ImAttachment />
                </span>
                <span>4</span>
              </div>
              <div className="task_comment_icon">
                <span className="footer_extra_icon">
                  <BsChat />
                </span>
                <span>6</span>
              </div>
              <div className="task_priority_icon">
                <span className="footer_extra_icon">
                  <AiOutlineExclamationCircle />
                </span>
                <span>8</span>
              </div>
            </div>
          </div>
        </div>
        <CustomDrawer>
          <TaskDetails />
        </CustomDrawer>
      </section>
    </DrawerContext.Provider>
  );
};

export default TaskItem;
