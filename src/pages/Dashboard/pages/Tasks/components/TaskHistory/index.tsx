import { type ReactElement } from "react";

import "./style.css";
import { Link } from "react-router-dom";

const TaskHistory = (): ReactElement => {
  return (
    <section className="task_history_section">
      <h4>History of the task</h4>
      <p>
        <Link to="/">Sagar</Link> created task <Link to="/">This task</Link>
      </p>
    </section>
  );
};

export default TaskHistory;
