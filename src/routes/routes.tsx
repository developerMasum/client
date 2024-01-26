import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Test from "../pages/test";
import Products from "../pages/Products/Products";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ProductTest from "../pages/notFound/test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Test />,
      },
      {
        path: "/product",
        element: <Products />,
      },
    ],
    
  },
  {
    path:'/register',
    element:<Register />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/test',
    element:<ProductTest />
  },
]);
export default router;
