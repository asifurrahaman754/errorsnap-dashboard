import Login from "pages/Login";
import ProjectErrorDetails from "pages/ProjectErrorDetails";
import ProjectErrors from "pages/ProjectErrors";
import Projects from "pages/Projects";
import Register from "pages/Register";
import { Navigate } from "react-router-dom";

const routesConfig = [
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
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
    path: "*",
    element: <Navigate to="/projects" replace />,
  },
];

export default routesConfig;
