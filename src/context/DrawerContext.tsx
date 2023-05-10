import { createContext } from "react";

interface DrawerTypes {
  showDrawer: boolean;
  toggle: () => void;
}

const DrawerContext = createContext<DrawerTypes>({
  showDrawer: false,
  toggle: () => {},
});

export default DrawerContext;
