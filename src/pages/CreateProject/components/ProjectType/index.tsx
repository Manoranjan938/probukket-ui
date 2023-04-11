import React, { type ReactElement } from "react";

import "../../style.css";

interface ProjectTypeProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectType = ({
  currentPage,
  setCurrentPage,
}: ProjectTypeProps): ReactElement => {
  return (
    <div className="project_type_section">
      <div className="project_type_card">
        <input type="radio" name="option" id="" />
        <div className="option_content">
          <i className="fas fa-user-graduate" />
          <h4>Personal Project</h4>
        </div>
      </div>
      <div className="project_type_card">
        <input type="radio" name="option" id="" />
        <div className="option_content">
          <i className="fas fa-user-graduate" />
          <h4>Team Managed Project</h4>
        </div>
      </div>
      <div className="project_type_card">
        <input type="radio" name="option" id="" />
        <div className="option_content">
          <i className="fas fa-user-graduate" />
          <h4>Organisation Managed Project</h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectType;
