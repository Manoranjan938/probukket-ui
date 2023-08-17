import { type ReactElement, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "src/pages/Error/ErrorPage";
import Forgot from "src/pages/Forgot";
import Login from "src/pages/Login";
import Main from "src/pages/Main";
import Root from "./Root";
import Signup from "src/pages/Signup";
import SignupSuccess from "src/pages/SuccessfulScreen";
import { ErrorBoundary } from "react-error-boundary";
import DashboardRoutes from "./DashboardRoutes";
import AdminRoutes from "./AdminRoutes";

const CreateProject = lazy(async () => await import("src/pages/CreateProject"));
const Dashboard = lazy(async () => await import("src/pages/Dashboard"));

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
                  <DashboardRoutes />
                </Dashboard>
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="admin/*"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorPage}
              onReset={() => {
                window.location.replace("/");
              }}
            >
              <Suspense fallback="loading">
                <Dashboard>
                  <AdminRoutes />
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
