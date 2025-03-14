import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { route } from './routes/route';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/authprovider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={route} />
    </div>
    <Toaster></Toaster>
    </HelmetProvider>  
    </QueryClientProvider>
    
    </AuthProvider>
    
  </React.StrictMode>,
)
