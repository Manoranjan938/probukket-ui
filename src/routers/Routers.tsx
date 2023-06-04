import { type ReactElement, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import Calender from "src/pages/Dashboard/pages/Calenders";
import ErrorPage from "src/pages/Error/ErrorPage";
import Forgot from "src/pages/Forgot";
import Home from "src/pages/Dashboard/pages/Main";
import Login from "src/pages/Login";
import Main from "src/pages/Main";
import ProjectTasks from "src/pages/Dashboard/pages/Tasks";
import Root from "./Root";
import Signup from "src/pages/Signup";
import SignupSuccess from "src/pages/SuccessfulScreen";
import { CalenderContextProvider } from "src/context/CalenderContext";
import { ErrorBoundary } from "react-error-boundary";

const CreateProject = lazy(async () => await import("src/pages/CreateProject"));
const Dashboard = lazy(async () => await import("src/pages/Dashboard"));

const Routers = (): ReactElement => {
  const nav = useNavigate();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="success" element={<SignupSuccess />} />
        <Route
          path="create-project"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorPage}
              onReset={() => {
                nav("/");
              }}
            >
              <Suspense fallback="loading">
                <CreateProject />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="dashboard/*"
          element={
            <Suspense fallback="loading">
              <Dashboard>
                <Routes>
                  <Route path="home" element={<Home />} />
                  <Route path="tasks" element={<ProjectTasks />} />
                  <Route
                    path="calender"
                    element={
                      <CalenderContextProvider>
                        <Calender />
                      </CalenderContextProvider>
                    }
                  />
                </Routes>
              </Dashboard>
            </Suspense>
          }
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default Routers;
