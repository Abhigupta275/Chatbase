// App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./routes";

const router = createBrowserRouter([
  { path: "*", element: <AppRoutes /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    
    </div>
  );
}

export default App;
