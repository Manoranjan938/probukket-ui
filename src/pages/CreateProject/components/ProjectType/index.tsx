import React, { type ReactElement } from "react";

import "./style.css";
import Button from "src/components/Button";
import CustomRadio from "src/components/CustomRadio";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoBugOutline } from "react-icons/io5";
import { VscDebugConsole } from "react-icons/vsc";

interface ProjectTypeProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectType = ({
  currentPage,
  setCurrentPage,
}: ProjectTypeProps): ReactElement => {
  const handleNext = (): void => {
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <section className="project_type_section">
      <div className="type_header">
        <h2>Choose Project Type</h2>
        <p>Don&apos;t panic - You can also customize this types in settings</p>
      </div>
      <div className="project_type_container">
        <div className="project_type_card">
          <CustomRadio
            title="Project"
            icon={<AiOutlineFundProjectionScreen />}
            classes="option_content"
          />
        </div>
        <div className="project_type_card">
          <CustomRadio
            title="Bug"
            classes="option_content"
            icon={<IoBugOutline />}
          />
        </div>
        <div className="project_type_card">
          <CustomRadio
            title="Project & Bug"
            classes="option_content"
            icon={<VscDebugConsole />}
          />
        </div>
      </div>
      <Button
        title="Next"
        classes="small-btn grn-btn project-next-btn"
        onClick={handleNext}
      />
    </section>
  );
};

export default ProjectType;
