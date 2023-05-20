import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import { Blogs } from "../pages/Blogs/Blogs";
import Newsletter from "./../pages/Home/Newsletter/Newsletter";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/newsletter",
        element: <Newsletter></Newsletter>,
      },
      {
        path: "*",
        element: <Error></Error>
      }
    ],
  },
]);

export default router;
