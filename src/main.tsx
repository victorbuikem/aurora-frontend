import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Join from "./Creator/Join";
import NewContent from "./Creator/New";
import Creation from "./Creator/Creation";
import { Buffer } from "buffer";
import { VideoPlayer } from "./Viewer/video-player";
import process from "process";
import { CryptoProvider } from "./providers/web-3-provider";
import { Carousel } from "./components/carousel";

window.Buffer = Buffer;
window.process = process;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Carousel />,
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
    element: <VideoPlayer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CryptoProvider>
      <RouterProvider router={router} />
    </CryptoProvider>
  </React.StrictMode>
);
