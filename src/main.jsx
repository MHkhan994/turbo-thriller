import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider';
import Main from './Layouts/Main';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}>
      <Main></Main>
    </RouterProvider>
  </AuthProvider>
)
