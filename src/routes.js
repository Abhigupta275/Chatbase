// routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Text from "./components/sources/Text";
import Dropzone from "react-dropzone";
import Website from "./components/sources/Website";
import Qa from "./components/sources/Qa";
import Notion from "./components/sources/Notion";
import Leads from "./components/dashboard/Leads";
import ChatLogs from "./components/dashboard/ChatLogs";
import Settings from "./pages/Settings";
import Model from "./components/settings/Model";
import ChatInterface from "./components/settings/ChatInterface";
import SLeads from "./components/settings/Leads";
import Sidebar from "./components/sources/Sidebar";
import Files from "./components/sources/Files";
import Chatbot from "./pages/Chatbot";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ChatbotCreate from "./pages/ChatbotCreate";
import Security from "./components/settings/Security";
import Home from "./pages/Home";
import PrivateRoutes from "./components/PrivateRoutes";
import PublicRoutes from "./components/PublicRoutes";
import General from "./components/settings/General";
import NotFound from "./NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route index element={<Home />} />
        <Route path="chatbot/:id/sources/sidebar" element={<Sidebar />} />
        <Route path="dropzone" element={<Dropzone />} />
        <Route path="chatbot/:id/sources/files" element={<Files />} />
        <Route path="chatbot/:id/sources/text" element={<Text />} />
        <Route path="chatbot/:id/sources/website" element={<Website />} />
        <Route path="chatbot/:id/sources/qa" element={<Qa />} />
        <Route path="chatbot/:id/sources/notion" element={<Notion />} />
        <Route path="chatbot/:id/dashboard/chatlogs" element={<ChatLogs />} />
        <Route path="chatbot/:id/dashboard/leads" element={<Leads />} />
        <Route path="chatbot/:id/settings" element={<Settings />} />
        <Route path="chatbot/:id/settings/general" element={<General />} />
        <Route path="chatbot/:id/settings/model" element={<Model />} />
        <Route path="chatbot/:id/settings/chatinterface" element={<ChatInterface />} />
        <Route path="chatbot/:id/settings/leads" element={<SLeads />} />
        <Route path="chatbot/:id/settings/security" element={<Security />} />
        <Route path="chatbot/:id" element={<Chatbot />} />
      </Route>
      <Route path="/login" element={<PublicRoutes />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/signup" element={<PublicRoutes />}>
        <Route index element={<SignUp />} />
      </Route>
      <Route path="/chatbotcreate" element={<PrivateRoutes />}>
        <Route index element={<ChatbotCreate />} />
      </Route>
      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
