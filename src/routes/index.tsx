import DashboardLayout from "Layouts/DashboardLayout";
import ProjectSettings from "pages/ProjectSettings";
import Login from "pages/Login";
import ProjectErrorDetails from "pages/ProjectErrorDetails";
import ProjectErrors from "pages/ProjectErrors";
import Projects from "pages/Projects";
import Register from "pages/Register";
import { Navigate } from "react-router-dom";
import Invitations from "pages/Invitations";

const routesConfig = [
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:projectId/errors",
        element: <ProjectErrors />,
      },
      {
        path: "/projects/:projectId/errors/:errorId",
        element: <ProjectErrorDetails />,
      },
      {
        path: "/projects/:projectId/settings/team",
        element: <ProjectSettings />,
      },
      {
        path: "/projects/:projectId/settings/general",
        element: <ProjectSettings />,
      },
      {
        path: "/invitations",
        element: <Invitations />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/projects" replace />,
  },
];

export default routesConfig;
