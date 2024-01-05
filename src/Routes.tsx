import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DashboardMainDarkMode = React.lazy(
  () => import("pages/DashboardMainDarkMode"),
);
const DashboardLoginDarkMode = React.lazy(
  () => import("pages/DashboardLoginDarkMode"),
);
const DashboardMain = React.lazy(() => import("pages/DashboardMain"));
const DashboardLogin = React.lazy(() => import("pages/DashboardLogin"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboardlogin" element={<DashboardLogin />} />
          <Route path="/dashboardmain" element={<DashboardMain />} />
          <Route
            path="/dashboardlogindarkmode"
            element={<DashboardLoginDarkMode />}
          />
          <Route
            path="/dashboardmaindarkmode"
            element={<DashboardMainDarkMode />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
