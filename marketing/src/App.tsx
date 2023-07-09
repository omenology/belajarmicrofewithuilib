import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import NotFoundPage from "./pages/404";

const router = createBrowserRouter([
  {
    path:"/pricing",
    Component:Pricing
  },
  {
    path: "/",
    Component: Landing,
    errorElement: <NotFoundPage/>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
