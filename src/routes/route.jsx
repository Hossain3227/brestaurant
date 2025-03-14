import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/root";
import Home from "../pages/home";
import Menu from "../pages/menu";
import Order from "../pages/order";
import Login from "../pages/login/login";
import Register from "../pages/login/register";
import Dashboard from "../layout/dashboard";
import Mycart from "../pages/dashboard/mycart";
import AllUsers from "../layout/allUser";
import Privateroute from "./privateroute";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children : [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Register></Register>
            },
        ]
    },

    {
        path: 'dashboard',
        element: <Privateroute><Dashboard></Dashboard></Privateroute>, 
        children: [
          {
            path: 'mycart', 
            element: <Mycart></Mycart>
          },
          // admin routes
        {
            path: 'users',
            element: <AllUsers></AllUsers>
          }
        ]
      }

])

