import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about-us", element: <Aboutus /> },
  { path: "/services/:service", element: <Services /> },
]);

export default router;
