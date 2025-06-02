import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Apps from "../Pages/app/Apps";
import Profile from "../Pages/Profile/Profile";
import AuthLayout from "../Pages/AuhtLayout/AuthLayout";
import Login from "../Pages/AuhtLayout/Login";
import Register from "../Pages/AuhtLayout/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: ()=> fetch('/apps.json'),

    children: [
      // {
      //     path: '/apps',
      //     Component: Apps,
      // },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      
    ],
  },
  {
        path: "/apps",
        Component: Apps,
        loader: ()=> fetch('/apps.json'),
        
      },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
