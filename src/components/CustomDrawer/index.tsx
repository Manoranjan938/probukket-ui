import { Drawer } from "@mui/material";
import { type ReactElement } from "react";

import "./style.css";
import { IoCloseSharp } from "react-icons/io5";

interface DrawerProps {
  open: boolean;
  toggle: () => void;
  children?: ReactElement;
}

const CustomDrawer = ({
  open,
  toggle,
  children,
}: DrawerProps): ReactElement => {
  return (
    <section className="drawer_section">
      <Drawer
        anchor={"right"}
        open={open}
        className="drawer_container"
        onClose={toggle}
      >
        <div className="drawer_header">
          <h2>My Title</h2>
          <div className="drawer_close_btn" onClick={toggle}>
            <IoCloseSharp />
          </div>
        </div>
        {children}
      </Drawer>
    </section>
  );
};

export default CustomDrawer;
