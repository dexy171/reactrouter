import { createBrowserRouter } from "react-router-dom";
import { MainContent } from "../components/MainContent/MainContent";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
    children: [
      { index: true, element: <div>Homepage</div> },
      { path: "/contact", element: <div>Contact</div> },
      { path: "/about-us", element: <div>About us</div> },
    ],
  },
]);
