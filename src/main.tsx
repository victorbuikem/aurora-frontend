import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Join from "./Creator/Join";
import NewContent from "./Creator/New";
import Creation from "./Creator/Creation";
import { Buffer } from "buffer";
import Arthakker1324 from "./Viewer/Arthakker1324";
window.Buffer = Buffer;

import process from "process";
import { CryptoProvider } from "./providers/web-3-provider";
import CreatorID from "./Viewer/CreatorID";
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
    path: "/creator",
    element: <Creation />,
    children: [
      {
        path: "new",
        element: <NewContent />,
      },
    ],
  },
  {
    path: "/:id",
    element: <Arthakker1324 />,
  },
  {
    path: "/creatorid",
    element: <CreatorID/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CryptoProvider>
      <RouterProvider router={router} />
    </CryptoProvider>
  </React.StrictMode>
);
