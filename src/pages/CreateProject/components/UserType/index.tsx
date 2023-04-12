import { type ReactElement } from "react";
import Button from "src/components/Button";

import "./style.css";

interface ProjectTypeProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const UserType = ({
  currentPage,
  setCurrentPage,
}: ProjectTypeProps): ReactElement => {
  const handleNext = (): void => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrev = (): void => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <section className="user_type_section">
      <div className="type_header">
        <h2>Who can manage projects</h2>
        <p>Don&apos;t panic - You can also customize this types in settings</p>
      </div>
      <div className="user_type_container">
        <div className="user_type_card">
          <input type="radio" name="option" id="" />
          <div className="type_option_content">
            <div className="icon">
              <i className="fas fa-user-graduate" />
            </div>
            <div className="content">
              <h4>Personal Project</h4>
              <p>You can only manage the project</p>
            </div>
          </div>
        </div>
        <div className="user_type_card">
          <input type="radio" name="option" id="" />
          <div className="type_option_content">
            <div className="icon">
              <i className="fas fa-user-graduate" />
            </div>
            <div className="content">
              <h4>Team Managed Project</h4>
              <p>Only team lead can manage the project</p>
            </div>
          </div>
        </div>
        <div className="user_type_card">
          <input type="radio" name="option" id="" />
          <div className="type_option_content">
            <div className="icon">
              <i className="fas fa-user-graduate" />
            </div>
            <div className="content">
              <h4>Organisation Managed Project</h4>
              <p>Only organisations admin can manage the project</p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-group">
        <Button
          title="Next"
          classes="small-btn grn-btn project-next-btn"
          onClick={handleNext}
        />
        <Button
          title="Back"
          classes="small-btn grn-btn project-next-btn"
          onClick={handlePrev}
        />
      </div>
    </section>
  );
};

export default UserType;
