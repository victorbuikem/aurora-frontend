import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./App";
import Join from "./Creator/Join";
import NewContent from "./Creator/New";
import Creation from "./Creator/Creation";
import { Buffer } from "buffer";
import Arthakker1324 from "./Viewer/Arthakker1324";
import { CryptoProvider } from "./providers/web-3-provider";
window.Buffer = Buffer;

import process from "process";
window.process = process;

const queryClient = new QueryClient();

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
    element: (
      <CryptoProvider>
        <Join />
      </CryptoProvider>
    ),
  },

  {
    path: "/creator",
    element: (
      <CryptoProvider>
        <Creation />
      </CryptoProvider>
    ),
    children: [
      {
        path: "new",
        element: (
          <QueryClientProvider client={queryClient}>
            <NewContent />
          </QueryClientProvider>
        ),
      },
    ],
  },
  {
    path: "/:id",
    element: <Arthakker1324 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
