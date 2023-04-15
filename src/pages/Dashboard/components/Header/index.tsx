import { type ReactElement } from "react";
import Dropdown from "src/components/Dropdown";

import { HiOutlineDocumentText, HiOutlineShare } from "react-icons/hi";
import Search from "src/components/Search";
import Notification from "../Notification";

const DashboardHeader = (): ReactElement => {
  return (
    <div className="dashborad_header_container">
      <div className="header_left">
        <Dropdown />
        <HiOutlineDocumentText className="header_icon" />
        <HiOutlineShare className="header_icon" />
      </div>
      <div className="header_left">
        <Search />
        <Notification />
      </div>
    </div>
  );
};

export default DashboardHeader;
