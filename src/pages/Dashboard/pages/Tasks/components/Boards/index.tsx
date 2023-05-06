import { type ReactElement } from "react";

import { BsThreeDots } from "react-icons/bs";
import { GoPlus } from "react-icons/go";

import "./style.css";
import TaskItem from "../TaskItem";

const BoardView = (): ReactElement => {
  return (
    <section className="board_view_section">
      <div className="board_view_header">
        <div className="first_board">
          <div className="task_board">
            <div className="board_details">
              <span className="header_title todo">To Do</span>
              <span className="counter">2 Tasks</span>
            </div>
            <div className="board_icon">
              <BsThreeDots />
            </div>
          </div>
          <div className="create_btn">
            <GoPlus />
          </div>
          <div className="board_item">
            <TaskItem />
            <TaskItem />
            <TaskItem />
          </div>
        </div>
        <div className="second_board">
          <div className="task_board">
            <div className="board_details">
              <span className="header_title inprogress">InProgress</span>
              <span className="counter">2 Tasks</span>
            </div>
            <div className="board_icon">
              <BsThreeDots />
            </div>
          </div>
          <div className="create_btn">
            <GoPlus />
          </div>
          <div className="board_item">
            <TaskItem />
          </div>
        </div>
        <div className="third_board">
          <div className="task_board">
            <div className="board_details">
              <span className="header_title completed">Completed</span>
              <span className="counter">2 Tasks</span>
            </div>
            <div className="board_icon">
              <BsThreeDots />
            </div>
          </div>
          <div className="create_btn">
            <GoPlus />
          </div>
          <div className="board_item">
            <TaskItem />
          </div>
        </div>
        <div className="last_board">
          <div className="task_board">
            <div className="board_details">
              <span className="header_title">Add New Header</span>
              {/* <span className="counter">2 Tasks</span> */}
            </div>
            <div className="board_icon">
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardView;
