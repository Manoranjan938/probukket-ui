import { type ReactElement } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import Main from "../pages/Main/Main";
import Root from "./Root";

const Routers = (): ReactElement => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Main />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default Routers;
