import { type ReactElement } from "react";

interface ProjectTypeProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const UserType = ({
  currentPage,
  setCurrentPage,
}: ProjectTypeProps): ReactElement => {
  return <div>UserType</div>;
};

export default UserType;
