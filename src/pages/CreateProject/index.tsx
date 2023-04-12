import { useState, type ReactElement } from "react";
import ProjectType from "./components/ProjectType";
import UserType from "./components/UserType";

const CreateProject = (): ReactElement => {
  const [activePage, setActivePage] = useState<number>(0);

  const showActivePage = (): any => {
    if (activePage === 0) {
      return (
        <ProjectType currentPage={activePage} setCurrentPage={setActivePage} />
      );
    }
    if (activePage === 1) {
      return (
        <UserType currentPage={activePage} setCurrentPage={setActivePage} />
      );
    }
  };

  return showActivePage();
};

export default CreateProject;
