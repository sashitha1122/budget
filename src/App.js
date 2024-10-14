import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Budget from './pages/Budget';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
        path: "Main",
        element: <Budget />,
  }
]);

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
