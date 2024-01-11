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
import Dashboard from "./pages/Dashboard";
import Leads from "./components/dashboard/Leads";
import ChatLogs from "./components/dashboard/ChatLogs";
import Settings from "./pages/Settings";
import General from "./components/settings/General";
import Model from "./components/settings/Model";
import ChatInterface from "./components/settings/ChatInterface";
import SLeads from "./components/settings/Leads";

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
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/chatlogs",
    element: <ChatLogs />,
  },
  {
    path: "/dashboard/leads",
    element: <Leads />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/settings/general",
    element: <General />,
  },
  {
    path: "/settings/model",
    element: <Model />,
  },
  {
    path: "/settings/general",
    element: <General />,
  },
  
  {
    path: "/settings/chatinterface",
    element: <ChatInterface />,
  },
  {
    path: "/settings/leads",
    element: <SLeads />,
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
