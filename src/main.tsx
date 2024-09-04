import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Buffer } from "buffer";
import process from "process";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Carousel } from "./components/carousel";
import { NewDrawer } from "./components/new-drawer";
import Creation from "./Creator/Creation";
import Join from "./Creator/Join";
import "./index.css";
import { CryptoProvider } from "./providers/web-3-provider";
import User from "./Viewer/user";
import { VideoPlayer } from "./Viewer/video-player";
window.Buffer = Buffer;
window.Buffer = Buffer;

window.process = process;
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Carousel />,
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
        element: <NewDrawer />,
      },
    ],
  },
  {
    path: "/:id",
    element: <VideoPlayer />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CryptoProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </CryptoProvider>
  </React.StrictMode>
);
