import "./App.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, element: <Home /> },
      // {path: "/about-us",  element: <AboutUs /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />,
    </>
  );
}

export default App;
