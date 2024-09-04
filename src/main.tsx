import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Join from "./Creator/Join";
import NewContent from "./Creator/New";
import Creation from "./Creator/Creation";
import { Buffer } from "buffer";
import CreatorID from "./Viewer/CreatorID";
import { CryptoProvider } from "./providers/web-3-provider";
window.Buffer = Buffer;

import process from "process";
window.process = process;

const queryClient = new QueryClient();

const router = createBrowserRouter([
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
    path: "/",
    element: (
      <CryptoProvider>
        <CreatorID />,
      </CryptoProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
