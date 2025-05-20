import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <h1> This is Error</h1>,
  },
  {
    path: "/news",
    element: <h1>OK</h1>,
  },
  {
    path: "/auth",
    element: <h1>OK</h1>,
  },
]);

export default router;
