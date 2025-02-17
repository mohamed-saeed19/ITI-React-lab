import {RouterProvider,createBrowserRouter,} from "react-router-dom";
import "./App.css";
import SingleCard from "./components/SingleCard/SingleCard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Category from "./components/Category/Category";
import Layout from "./components/Layout/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import NotFound from "./components/NotFound/NotFound";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element:<ProtectedRoutes><Home /></ProtectedRoutes>  },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/category",
          element:<ProtectedRoutes><Category /></ProtectedRoutes> ,
        },
        {
          path: "/product-details/:id",
          element:<ProtectedRoutes><SingleCard /></ProtectedRoutes> ,
        },
        {
          path: "*",
          element:<NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
