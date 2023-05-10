import { type ReactElement } from "react";

import "./style.css";

interface TaskDetailsExtraProps {
  children: ReactElement;
  title: string;
  content: string;
}

const TaskDetailsExtra = ({
  children,
  title,
  content,
}: TaskDetailsExtraProps): ReactElement => {
  return (
    <div className="task_extra_section">
      <h4>{title}</h4>
      <div className="task_details_extra_content">
        <span className="task_extra_content_icon">{children}</span>
        <span className="task_extra_content_">{content}</span>
      </div>
    </div>
  );
};

export default TaskDetailsExtra;
