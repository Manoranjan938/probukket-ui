import { type ReactElement } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Dashboard from "src/pages/Dashboard";
import ErrorPage from "src/pages/Error/ErrorPage";
import Forgot from "src/pages/Forgot";
import Home from "src/pages/Dashboard/pages/Main";
import Login from "src/pages/Login";
import Main from "src/pages/Main";
import Root from "./Root";
import Signup from "src/pages/Signup";
import SignupSuccess from "src/pages/SuccessfulScreen";
import CreateProject from "src/pages/CreateProject";
import ProjectTasks from "src/pages/Dashboard/pages/Tasks";

const Routers = (): ReactElement => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="success" element={<SignupSuccess />} />
        <Route path="create-project" element={<CreateProject />} />
        <Route
          path="dashboard/*"
          element={
            <Dashboard>
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="tasks?f=all" element={<ProjectTasks />} />
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
