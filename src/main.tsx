import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Join from "./Creator/Join";
import Current from "./Creator/Current";
import { Buffer } from "buffer";
window.Buffer = Buffer;

import process from "process";
window.process = process;

const router = createBrowserRouter([
  {
    path: "/login",
    element: <div>Hello logins</div>,
    errorElement: <h1>Error could not locate resource </h1>,
  },
  {
    path: "/register",
    element: <div>Hello register</div>,
    errorElement: <h1>Sorry resource not found</h1>,
  },
  {
    path: "/",
    element: <div>Hello home page</div>,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/creator/join",
    element: <Join />,
  },
  {
    path: "/creator/new",
    element: <Current />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
