import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { CalenderContextProvider } from "src/context/CalenderContext";

const Home = lazy(async () => await import("src/pages/Dashboard/pages/Main"));
const ProjectTasks = lazy(
  async () => await import("src/pages/Dashboard/pages/Tasks"),
);
const Calender = lazy(
  async () => await import("src/pages/Dashboard/pages/Calenders"),
);

const DashboardRoutes = () => {
  return (
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
  );
};

export default DashboardRoutes;
