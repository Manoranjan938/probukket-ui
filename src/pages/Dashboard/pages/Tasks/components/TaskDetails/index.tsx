import { type ReactElement } from "react";

import { HiUsers } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";

import Avatarlist from "src/components/AvatarList";

import "./style.css";

const TaskDetails = (): ReactElement => {
  return (
    <section className="task_full_details_section">
      <div className="task_details_header">
        <div className="task_details_content">
          <div className="task_title">
            <h2>Task Title</h2>
          </div>
          <div className="task_user_details">
            <span>By</span>
            <Avatarlist avatarCounts={1} />
            <h4>Sagar Kumar</h4>
            <p>month ago</p>
          </div>
        </div>
        <div className="task_details_icon">
          <div className="duplicate">
            <span>
              <IoCopyOutline />
            </span>
            <p>Duplicate</p>
          </div>
          <div className="permission">
            <span>
              <HiUsers />
            </span>
            <p>Permission</p>
          </div>
          <span className="delete_icon">
            <MdOutlineDeleteOutline />
          </span>
        </div>
      </div>
    </section>
  );
};

export default TaskDetails;
