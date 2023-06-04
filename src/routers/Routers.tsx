import { type ReactElement, lazy, Suspense } from "react";
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
import Main from "src/pages/Main";
import Root from "./Root";
import Signup from "src/pages/Signup";
import SignupSuccess from "src/pages/SuccessfulScreen";
import { CalenderContextProvider } from "src/context/CalenderContext";
import { ErrorBoundary } from "react-error-boundary";

const CreateProject = lazy(async () => await import("src/pages/CreateProject"));
const Dashboard = lazy(async () => await import("src/pages/Dashboard"));
const Home = lazy(async () => await import("src/pages/Dashboard/pages/Main"));
const ProjectTasks = lazy(
  async () => await import("src/pages/Dashboard/pages/Tasks"),
);
const Calender = lazy(
  async () => await import("src/pages/Dashboard/pages/Calenders"),
);

const Routers = (): ReactElement => {
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
                window.location.replace("/");
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
            <ErrorBoundary
              FallbackComponent={ErrorPage}
              onReset={() => {
                window.location.replace("/");
              }}
            >
              <Suspense fallback="loading">
                <Dashboard>
                  <Routes>
                    <Route
                      path="home"
                      element={
                        <Suspense fallback="loading">
                          <Home />
                        </Suspense>
                      }
                    />
                    <Route
                      path="tasks"
                      element={
                        <Suspense fallback="loading">
                          <ProjectTasks />
                        </Suspense>
                      }
                    />
                    <Route
                      path="calender"
                      element={
                        <Suspense fallback="loading">
                          <CalenderContextProvider>
                            <Calender />
                          </CalenderContextProvider>
                        </Suspense>
                      }
                    />
                  </Routes>
                </Dashboard>
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default Routers;
