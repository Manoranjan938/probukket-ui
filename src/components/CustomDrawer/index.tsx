import { Drawer } from "@mui/material";
import { type ReactElement } from "react";

import "./style.css";
import { IoCloseSharp } from "react-icons/io5";

interface DrawerProps {
  open: boolean;
  setOpen: (data: boolean) => void;
}

const CustomDrawer = ({ open, setOpen }: DrawerProps): ReactElement => {
  const toggleDrawer = (
    event: React.KeyboardEvent | React.MouseEvent,
  ): void => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(false);
  };
  return (
    <section className="drawer_section">
      <Drawer
        anchor={"right"}
        open={open}
        className="drawer_container"
        onClose={toggleDrawer}
      >
        <div className="drawer_header">
          <h2>My Title</h2>
          <div className="srawer_close_btn" onClick={toggleDrawer}>
            <IoCloseSharp />
          </div>
        </div>
      </Drawer>
    </section>
  );
};

export default CustomDrawer;
