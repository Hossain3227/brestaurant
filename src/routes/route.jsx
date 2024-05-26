import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/root";
import Home from "../pages/home";
import Menu from "../pages/menu";
import Order from "../pages/order";
import Login from "../pages/login/login";

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
        ]
    }
])

