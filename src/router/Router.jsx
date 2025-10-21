import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Suppots from "../Pages/Home/Suppots/Suppots";
import Advertise from "../Pages/Home/AdvertiseSection/Advertise";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import AuthLayout from "../layouts/AuthLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: Home
        },
       {
        path: '/about',
        Component: About
       },
       {
        path: '/support',
        Component: Suppots
       },
       {
        path: '/advertise',
        Component: Advertise
       }
    ]
  },

  {
    path:'/',
    Component: AuthLayout,
    children:[
      {
        path:'/login',
        Component: Login
      },
      {
        path:'/register',
        Component: Register
      }
    ]
  }
]);