import { type ReactElement } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import ErrorPage from "src/pages/Error/ErrorPage";
import Forgot from "src/pages/Forgot";
import Login from "src/pages/Login";
import Main from "src/pages/Main/Main";
import Signup from "src/pages/Signup";
import Root from "./Root";
import Dashboard from "src/pages/Dashboard";
import Home from "src/pages/Dashboard/pages/Main";

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
