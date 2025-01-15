import { createBrowserRouter } from "react-router-dom";
import { MainContent } from "../components/MainContent/MainContent";
import { Contact } from "../components/Contact/Contact";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Homepage } from "../components/Homepage/Homepage";
import { ErrorAlert } from "../components/ErrorAlert/ErrorAlert";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
    errorElement: <ErrorAlert />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about-us", element: <AboutUs /> },
    ],
  },
]);
