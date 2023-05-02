import { type ReactElement } from "react";
import BoardView from "./components/Boards";
import Avatarlist from "src/components/AvatarList";

import "./style.css";
import { CiFilter } from "react-icons/ci";
import { BiChevronDown, BiSortDown } from "react-icons/bi";
import { HiOutlineViewBoards } from "react-icons/hi";
import { TfiViewList } from "react-icons/tfi";
import { RxGrid } from "react-icons/rx";

const ProjectTasks = (): ReactElement => {
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
              <div className="board_view active_view">
                <HiOutlineViewBoards />
              </div>
              <div className="grid_view">
                <RxGrid />
              </div>
              <div className="list_view">
                <TfiViewList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BoardView />
    </section>
  );
};

export default ProjectTasks;
