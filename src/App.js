import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Main, { MainLoader } from './pages/Main';
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { logoutAction } from './actions/logout';
import Dashboard from './pages/Dashboard';
import Budget from './components/Budget';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Main />,
    children:[
      {
        index:true,
        element:<Dashboard />,
      },
      {
        path:"logout",
        action: logoutAction
      }
    ]
  },
]);

function App () {
  return (
    <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
   </div>
  );
};

export default App;
