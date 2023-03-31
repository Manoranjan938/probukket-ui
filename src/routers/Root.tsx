import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

const Root = (): ReactElement => {
  return <Outlet />;
};

export default Root;
