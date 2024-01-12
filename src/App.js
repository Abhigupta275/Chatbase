import "./App.css";

import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Text from './components/sources/Text'
import Dropzone from "react-dropzone";
import Website from './components/sources/Website'
import Qa from "./components/sources/Qa"
import Notion from "./components/sources/Notion"
import Dashboard from "./pages/Dashboard";
import Leads from "./components/dashboard/Leads";
import ChatLogs from "./components/dashboard/ChatLogs";
import Settings from "./pages/Settings";
import General from "./components/settings/General";
import Model from "./components/settings/Model";
import ChatInterface from "./components/settings/ChatInterface";
import SLeads from "./components/settings/Leads";
import Sidebar from "./components/sources/Sidebar";
import Files from "./components/sources/Files";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sources/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/dropzone",
    element: <Dropzone />,
  },
  {
    path: "/sources/files",
    element: <Files />,
  },
  {
    path: "/sources/text",
    element: <Text />,
  },
  {
    path: "/sources/website",
    element: <Website />,
  },
  {
    path: "/sources/qa",
    element: <Qa />,
  },
  {
    path: "/sources/notion",
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
