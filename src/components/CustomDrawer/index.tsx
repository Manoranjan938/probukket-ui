import { Drawer } from "@mui/material";
import { type ReactElement, useContext } from "react";

import "./style.css";
import { IoCloseSharp } from "react-icons/io5";
import DrawerContext from "src/context/DrawerContext";

interface DrawerProps {
  children?: ReactElement;
}

const CustomDrawer = ({ children }: DrawerProps): ReactElement => {
  const { showDrawer, toggle } = useContext(DrawerContext);

  return (
    <section className="drawer_section">
      <Drawer anchor={"right"} open={showDrawer} className="drawer_container">
        <div className="drawer_header">
          <h2>My Title</h2>
          <div
            className="drawer_close_btn"
            onClick={() => {
              toggle();
            }}
          >
            <IoCloseSharp />
          </div>
        </div>
        {children}
      </Drawer>
    </section>
  );
};

export default CustomDrawer;
