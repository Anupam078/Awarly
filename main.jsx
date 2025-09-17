import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import RoleSelection from './components/RoleSelection.jsx';
import Dashboard from './components/Dashboard.jsx';
import ModuleView from './components/ModuleView.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RoleSelection />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      { 
        path: "/module/:moduleId",
        element: <ModuleView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
