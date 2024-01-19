// import { useEffect } from "react";



// import React from 'react'
// import { useNavigate } from "react-router-dom";

// function Protected() {
//     const {Component} = props;
//     const navigate = useNavigate();
//     useEffect(()=>{
//         let login = 
//     })
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Protected



// import React, { useEffect, useState } from "react";
// import { RouterProvider, createBrowserRouter, Route, Navigate, useNavigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Text from './components/sources/Text';
// import Dropzone from "react-dropzone";
// import Website from './components/sources/Website';
// import Qa from "./components/sources/Qa";
// import Notion from "./components/sources/Notion";
// import Dashboard from "./pages/Dashboard";
// import Leads from "./components/dashboard/Leads";
// import ChatLogs from "./components/dashboard/ChatLogs";
// import Settings from "./pages/Settings";
// import General from "./components/settings/General";
// import Model from "./components/settings/Model";
// import ChatInterface from "./components/settings/ChatInterface";
// import SLeads from "./components/settings/Leads";
// import Sidebar from "./components/sources/Sidebar";
// import Files from "./components/sources/Files";
// import Chatbot from "./pages/Chatbot";
// import Sources from "./pages/Sources";
// import { BiLogIn } from "react-icons/bi";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import ChatbotCreate from "./pages/ChatbotCreate";
// import Security from "./components/settings/Security";
// import Cookies from 'js-cookie';

// const cookies = new Cookies();


// const isAuthenticated = () => {
//   const token = Cookies.get("token");
//   return !token; 
// };

// const ProtectedRoute = ({ element, path }) => {
//   const navigate = useNavigate();
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     setAuthenticated(isAuthenticated());
//   }, []);

//   if (!authenticated && !["/login", "/signup"].includes(path)) {
//     navigate("/login", { replace: true });
//     return null;
//   }
//   return <Route path={path} element={element} />;
// };


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/chatbot/:id/sources/sidebar",
//     element: <ProtectedRoute path="/chatbot/:id/sources/sidebar" element={<Sidebar />} />,
//   },
//   {
//     path: "/dropzone",
//     element: <ProtectedRoute path="/dropzone" element={<Dropzone />} />,
//   },
//   {
//     path: "/chatbot/:id/sources/files",
//     element: <ProtectedRoute path="/chatbot/:id/sources/files" element={<Files />} />,
//   },
//   {
//     path: "/chatbot/:id/sources/text",
//     element: <ProtectedRoute path="/chatbot/:id/sources/text" element={<Text />} />,
//   },
//   {
//     path: "/chatbot/:id/sources/website",
//     element: <ProtectedRoute path="/chatbot/:id/sources/website" element={<Website />} />,
//   },
//   {
//     path: "/chatbot/:id/sources/qa",
//     element: <ProtectedRoute path="/chatbot/:id/sources/qa" element={<Qa />} />,
//   },
//   {
//     path: "/chatbot/:id/sources/notion",
//     element: <ProtectedRoute path="/chatbot/:id/sources/notion" element={<Notion />} />,
//   },
//   {
//     path: "/chatbot/:id/dashboard/chatlogs",
//     element: <ProtectedRoute path="/chatbot/:id/dashboard/chatlogs" element={<ChatLogs />} />,
//   },
//   {
//     path: "/chatbot/:id/dashboard/leads",
//     element: <ProtectedRoute path="/chatbot/:id/dashboard/leads" element={<Leads />} />,
//   },
//   {
//     path: "/chatbot/:id/settings",
//     element: <ProtectedRoute path="/chatbot/:id/settings" element={<Settings />} />,
//   },
//   {
//     path: "/chatbot/:id/settings/general",
//     element: <ProtectedRoute path="/chatbot/:id/settings/general" element={<General />} />,
//   },
//   {
//     path: "/chatbot/:id/settings/model",
//     element: <ProtectedRoute path="/chatbot/:id/settings/model" element={<Model />} />,
//   },
//   {
//     path: "/chatbot/:id/settings/chatinterface",
//     element: <ProtectedRoute path="/chatbot/:id/settings/chatinterface" element={<ChatInterface />} />,
//   },
//   {
//     path: "/chatbot/:id/settings/leads",
//     element: <ProtectedRoute path="/chatbot/:id/settings/leads" element={<SLeads />} />,
//   },
//   {
//     path: "/chatbot/:id/settings/security",
//     element: <ProtectedRoute path="/chatbot/:id/settings/security" element={<Security />} />,
//   },
//   {
//     path: "/chatbot/:id",
//     element: <ProtectedRoute path="/chatbot/:id" element={<Chatbot />} />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
//   {
//     path: "/chatbotcreate",
//     element: <ChatbotCreate />,
//   },
// ]);

// function App() {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
