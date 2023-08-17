import React, { type ReactElement } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiNotepad } from "react-icons/bi";

import Avatarlist from "src/components/AvatarList";

import "./style.css";
import { CircularProgress } from "@mui/material";
import { HiOutlineUserGroup } from "react-icons/hi";

const ProjectSummary = (): ReactElement => {
  return (
    <section className="summary_card">
      <div className="flex justify-between items-center">
        <IoDocumentTextOutline className="flex text-2" />
        <span className="flex items-center font-semibold ml-1 text-xl">
          50 Projects
        </span>
      </div>
      <div className="project_content">
        <div className="project_estimate">
          <div className="flex justify-between items-center">
            <BiNotepad className="flex text-2" />
            <span className="flex items-center font-semibold ml-1 text-xl">
              Project estimates
            </span>
          </div>
          <div className="grid grid-4 mt-2">
            <div className="card">
              <IoDocumentTextOutline className="flex text-3 items-center" />
              <div className="flex flex-col">
                <h4 className="text-base">Discussion</h4>
                <h3 className="text-2 font-medium">5</h3>
              </div>
            </div>
            <div className="card">
              <IoDocumentTextOutline className="flex text-3 items-center" />
              <div className="flex flex-col">
                <h4 className="text-base">Discussion</h4>
                <h3 className="text-2 font-medium">5</h3>
              </div>
            </div>
            <div className="card">
              <IoDocumentTextOutline className="flex text-3 items-center" />
              <div className="flex flex-col">
                <h4 className="text-base">Discussion</h4>
                <h3 className="text-2 font-medium">5</h3>
              </div>
            </div>
            <div className="card">
              <IoDocumentTextOutline className="flex text-3 items-center" />
              <div className="flex flex-col">
                <h4 className="text-base">Discussion</h4>
                <h3 className="text-2 font-medium">5</h3>
              </div>
            </div>
          </div>
          <div className="project_completion_time">
            <h4 className="text-base">On time completion rate: </h4>
            <h3 className="text-2 font-medium">92%</h3>
          </div>
        </div>
        <div className="project_teams">
          <div className="flex justify-between items-center">
            <HiOutlineUserGroup className="flex text-2" />
            <span className="flex items-center font-semibold ml-1 text-xl">
              Our team
            </span>
          </div>
          <div className="teams">
            <span className="flex items-center font-semibold text-xl">
              Team members
            </span>
            <Avatarlist avatarCounts={3} />
            <div className="hours_card">
              <div className="spend_hours">
                <span className="text-xl font-semibold">Hours</span>
                <span className="text-2 font-medium">134</span>
              </div>
              <CircularProgress variant="determinate" value={65} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSummary;
