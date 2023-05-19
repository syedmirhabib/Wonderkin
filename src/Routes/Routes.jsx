import Main from "../Layout/Main";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',  
            element: <Home></Home>
        }
     ]
    }
  ]);

export default Router;