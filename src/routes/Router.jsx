import { createBrowserRouter } from "react-router-dom";
import Showdata from "../Components/Showdata";
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
        element: <h1>Login Here</h1>,
      },
      {
        path: "signup",
        element: <h1>SignUp Here</h1>,
      },
    ],
  },
]);

export default router;
