import React, { type ReactElement } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

import "./style.css";

const ProjectSummary = (): ReactElement => {
  return (
    <section className="summary_card">
      <div className="flex justify-between">
        <div className="flex items-center">
          <IoDocumentTextOutline className="flex text-xl" />
          <span className="flex items-center font-semibold ml-2 text-xl">
            50 Projects
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-3">
        <div className="card">
          <IoDocumentTextOutline className="flex text-4xl items-center" />
          <div className="flex flex-col">
            <h4 className="text-base">Discussion</h4>
            <h3 className="text-2xl font-medium">5</h3>
          </div>
        </div>
        <div className="card">
          <IoDocumentTextOutline className="flex text-4xl items-center" />
          <div className="flex flex-col">
            <h4 className="text-base">Discussion</h4>
            <h3 className="text-2xl font-medium">5</h3>
          </div>
        </div>
        <div className="card">
          <IoDocumentTextOutline className="flex text-4xl items-center" />
          <div className="flex flex-col">
            <h4 className="text-base">Discussion</h4>
            <h3 className="text-2xl font-medium">5</h3>
          </div>
        </div>
        <div className="card">
          <IoDocumentTextOutline className="flex text-4xl items-center" />
          <div className="flex flex-col">
            <h4 className="text-base">Discussion</h4>
            <h3 className="text-2xl font-medium">5</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSummary;
