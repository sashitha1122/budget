import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Main from './pages/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
        path: "Main",
        element: <Main />,
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
