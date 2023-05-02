import { type ReactElement } from "react";

import { BsThreeDots } from "react-icons/bs";
import "./style.css";

const BoardView = (): ReactElement => {
  return (
    <section className="board_view_section">
      <div className="board_view_header">
        <div className="task_board">
          <div className="board_details">
            <span className="header_title">To Do</span>
            <span className="counter">2 Tasks</span>
          </div>
          <div className="board_icon">
            <BsThreeDots />
          </div>
        </div>
        <div className="task_board">
          <div className="board_details">
            <span className="header_title">To Do</span>
            <span className="counter">2 Tasks</span>
          </div>
        </div>
        <div className="task_board">
          <div className="board_details">
            <span className="header_title">To Do</span>
            <span className="counter">2 Tasks</span>
          </div>
        </div>
        <div className="task_board">
          <div className="board_details">
            <span className="header_title">To Do</span>
            <span className="counter">2 Tasks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardView;
