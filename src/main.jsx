import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
     <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
     </AuthProvider>
   
  </React.StrictMode>,
)
