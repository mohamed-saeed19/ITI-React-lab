import React, { lazy, Suspense, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Layout from "./components/Layout/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import NotFound from "./components/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import useWindowSize from "./Hook/useWindowSize"; 
import Button from "react-bootstrap/Button"; 
import "bootstrap/dist/css/bootstrap.min.css"; 


const Home = lazy(() => import("./components/Home/Home"));
const SingleCard = lazy(() => import("./components/SingleCard/SingleCard"));
const Category = lazy(() => import("./components/Category/Category"));

function App() {
  const { width, height } = useWindowSize(); 
  const [isVisible, setIsVisible] = useState(true); 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout windowWidth={width} />,
      children: [
        {
          index: true,
          element: (
            // <ProtectedRoutes>
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            // </ProtectedRoutes>
          ),
        },
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
          element: (
            // <ProtectedRoutes>
              <Suspense fallback={<div>Loading...</div>}>
                <Category />
              </Suspense>
            // </ProtectedRoutes>
          ),
        },
        {
          path: "/product-details/:id",
          element: (
            // <ProtectedRoutes>
              <Suspense fallback={<div>Loading...</div>}>
                <SingleCard />
              </Suspense>
            // </ProtectedRoutes>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      {isVisible && (
        <div
          className="bg-dark text-white p-3 rounded shadow"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <p className="mb-0">
            Window Size: <strong>{width}px</strong> x <strong>{height}px</strong>
          </p>
        </div>
      )}

      <Button
        variant="primary"
        onClick={() => setIsVisible(!isVisible)}
        style={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        {isVisible ? "Hide Size" : "Show Size"}
      </Button>

      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;