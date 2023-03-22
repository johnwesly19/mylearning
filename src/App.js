import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Body from "../src/components/Body";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Menupage from "./components/Menupage";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Menupage/:resid",
        element: <Menupage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
