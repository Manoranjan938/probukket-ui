import { type ReactElement } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import Forgot from "../pages/Forgot";
import Login from "../pages/Login";
import Main from "../pages/Main/Main";
import Signup from "../pages/Signup";
import Root from "./Root";
import Dashboard from "src/pages/Dashboard";
import Home from "src/pages/Dashboard/components/Main";

const Routers = (): ReactElement => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot" element={<Forgot />} />
        <Route
          path="dashboard/*"
          element={
            <Dashboard>
              <Routes>
                <Route path="home" element={<Home />} />
              </Routes>
            </Dashboard>
          }
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default Routers;
