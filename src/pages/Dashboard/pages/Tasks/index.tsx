import { useState, type ReactElement } from "react";
import BoardView from "./components/Boards";
import Avatarlist from "src/components/AvatarList";

import "./style.css";
import { CiFilter } from "react-icons/ci";
import { BiChevronDown, BiSortDown } from "react-icons/bi";
import { HiOutlineViewBoards } from "react-icons/hi";
import { TfiViewList } from "react-icons/tfi";
import { RxGrid } from "react-icons/rx";

const ProjectTasks = (): ReactElement => {
  const [viewType, setViewType] = useState<number>(1);

  const toggleViewType = (n: number): void => {
    setViewType(n);
  };
  return (
    <section className="task_board_section">
      <div className="task_board_header">
        <h1>Project Name</h1>
        <div className="task_board_extras">
          <div className="team_members">
            <span>All Team members: 18</span>
            <Avatarlist avatarCounts={4} />
          </div>
          <div className="filter_options">
            <div className="filter_btn">
              <button>
                <div className="filter_icon">
                  <CiFilter />
                </div>
                Filter
                <BiChevronDown />
              </button>
            </div>
            <div className="sort_btn">
              <button>
                <div className="filter_icon">
                  <BiSortDown />
                </div>
                Sort
                <BiChevronDown />
              </button>
            </div>
            <div className="view_type_btn">
              <div
                className={
                  viewType === 1 ? "board_view active_view" : "board_view"
                }
                onClick={() => {
                  toggleViewType(1);
                }}
              >
                <HiOutlineViewBoards />
              </div>
              <div
                className={
                  viewType === 2 ? "grid_view active_view" : "grid_view"
                }
                onClick={() => {
                  toggleViewType(2);
                }}
              >
                <RxGrid />
              </div>
              <div
                className={
                  viewType === 3 ? "list_view active_view" : "list_view"
                }
                onClick={() => {
                  toggleViewType(3);
                }}
              >
                <TfiViewList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="task_board_view">
        <BoardView />
      </div>
    </section>
  );
};

export default ProjectTasks;
