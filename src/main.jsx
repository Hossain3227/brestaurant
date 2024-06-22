import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { route } from './routes/route';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/authprovider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={route} />
    </div>
    </HelmetProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)
