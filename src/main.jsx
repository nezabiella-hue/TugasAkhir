import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";

import Home from "./Pages/Home.jsx";
import ProjectSelection from "./Pages/ProjectSelection.jsx";
import BidPage from "./Pages/BidPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout with Navbar + <Outlet />
    children: [
      { index: true, element: <Home /> }, // http://localhost:5173/
      { path: "projects", element: <ProjectSelection /> }, // http://localhost:5173/projects
      { path: "projects/:id", element: <BidPage /> }, // http://localhost:5173/projects/123
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
