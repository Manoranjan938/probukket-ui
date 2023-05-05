import React, { type ReactElement } from "react";

import "./style.css";

const TaskItem = (): ReactElement => {
  return (
    <section className="task_item_section">
      <div className="task_item_header">
        <span>multiple types i.e meeting, task</span>
      </div>
      <div className="task_item_body">
        <span>Title and description</span>
      </div>
      <div className="task_item_footer">
        <span>Avatar Lists</span>
      </div>
    </section>
  );
};

export default TaskItem;
