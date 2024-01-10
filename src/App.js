import "./App.css";

import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";import Dropzone from "./components/UploadFile";
import Files from "./components/Files";
import Text from "./components/Text";
import Website from "./components/Website";
import Qa from "./components/Qa";
import Notion from "./components/Notion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/dropzone",
    element: <Dropzone />,
  },
  {
    path: "/files",
    element: <Files />,
  },
  {
    path: "/text",
    element: <Text />,
  },
  {
    path: "/website",
    element: <Website />,
  },
  {
    path: "/qa",
    element: <Qa />,
  },
  {
    path: "/notion",
    element: <Notion />,
  },
 
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
