import { type ReactElement } from "react";
import Button from "src/components/Button";

import "./style.css";
import CustomRadio from "src/components/CustomRadio";
import { FaUser, FaUserFriends, FaUserShield } from "react-icons/fa";

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
          <CustomRadio
            title="Personal Managed Project"
            subtitle="Only you can manage the project"
            classes="flex_content"
            icon={<FaUser />}
          />
        </div>
        <div className="user_type_card">
          <CustomRadio
            title="Team Managed Project"
            subtitle="Only team lead can manage the project"
            classes="flex_content"
            icon={<FaUserFriends />}
          />
        </div>
        <div className="user_type_card">
          <CustomRadio
            title="Organisation Managed Project"
            subtitle="Only organisations admin can manage the project"
            classes="flex_content"
            icon={<FaUserShield />}
          />
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
