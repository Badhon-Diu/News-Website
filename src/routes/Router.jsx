import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../Components/Login";
import Showdata from "../Components/Showdata";
import SignUp from "../Components/SignUp";
import AuthLayout from "../Layout/AuthLayout";
import HomeLayout from "../Layout/HomeLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <h1> This is Error</h1>,
    children: [
      {
        path: "category/:id",
        element: <Showdata></Showdata>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
      {
        path:"",
        element:<Navigate to ={`category/01`}></Navigate>
      }
    ],
  },
  {
    path: "/news",
    element: <h1>OK</h1>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
