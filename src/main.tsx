import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Join from "./Creator/Join";
import NewContent from "./Creator/New";
import Creation from "./Creator/Creation";
import { Buffer } from "buffer";
<<<<<<< HEAD
import { VideoPlayer } from "./Viewer/video-player";
import process from "process";
import { CryptoProvider } from "./providers/web-3-provider";
import { Carousel } from "./components/carousel";

window.Buffer = Buffer;
=======
import CreatorID from "./Viewer/CreatorID";
import { CryptoProvider } from "./providers/web-3-provider";
window.Buffer = Buffer;

import process from "process";
>>>>>>> a6cb3ed504a9b504a90b937886a65a54256b9d94
window.process = process;

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
<<<<<<< HEAD
    path: "/",
    element: <Carousel />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
=======
>>>>>>> a6cb3ed504a9b504a90b937886a65a54256b9d94
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
<<<<<<< HEAD
    path: "/:id",
    element: <VideoPlayer />,
=======
    path: "/",
    element: <CreatorID />,
>>>>>>> a6cb3ed504a9b504a90b937886a65a54256b9d94
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
