import { createBrowserRouter } from "react-router-dom";
import { MainContent } from "../components/MainContent/MainContent";
import { Contact } from "../components/Contact/Contact";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Homepage } from "../components/Homepage/Homepage";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about-us", element: <AboutUs /> },
    ],
  },
]);
