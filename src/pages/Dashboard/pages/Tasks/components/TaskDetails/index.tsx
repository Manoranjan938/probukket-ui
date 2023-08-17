import { type ReactElement, useEffect, useState } from "react";

import { HiOutlineCalendar, HiUsers } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import {
  MdOutlineDeleteOutline,
  MdOutlinePermMedia,
  MdOutlineTimer,
} from "react-icons/md";
import { TbSubtask } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

import Avatarlist from "src/components/AvatarList";

import "./style.css";
import Editor from "src/components/CustomEditor";
import Button from "src/components/Button";
import TaskDetailsExtra from "../TaskDetailsExtra";
import TaskHistory from "../TaskHistory";
import useGetUsers from "src/hooks/GetDemoUsers/useGetUsers";

const TaskDetails = (): ReactElement => {
  const [users, setUsers] = useState<[]>([]);
  const [getUsersList] = useGetUsers();

  useEffect(() => {
    getUsersList().then((it: any) => {
      setUsers(it);
    });
  }, []);

  return (
    <section className="task_full_details_section">
      <div className="task_details_header">
        <div className="task_details_content">
          <div className="task_title">
            <h2>Task Title</h2>
          </div>
          <div className="task_user_details">
            <span>By</span>
            <Avatarlist avatarCounts={1} data={users} />
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
      <div className="task_details_body">
        <div className="main_content">
          <div className="description">
            <Editor />
          </div>
          <div className="btn-grp-end">
            <Button title="Add Subtask" classes="small-btn outlined-blu-btn">
              <TbSubtask />
            </Button>
            <Button title="Attach Media" classes="small-btn outlined-blu-btn">
              <MdOutlinePermMedia />
            </Button>
            <Button title="Update" classes="small-btn blu-btn" />
          </div>
          <div className="devider" />
        </div>
        <div className="extra_task_content">
          <TaskDetailsExtra title="Due Date" content="No Due Date">
            <HiOutlineCalendar />
          </TaskDetailsExtra>
          <TaskDetailsExtra
            title="Task Completion Timer"
            content="No Time Counted"
          >
            <MdOutlineTimer />
          </TaskDetailsExtra>
          <TaskDetailsExtra title="Assignee" content="No Assignee">
            <FaRegUser />
          </TaskDetailsExtra>
          <TaskHistory />
        </div>
      </div>
    </section>
  );
};

export default TaskDetails;
