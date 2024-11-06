import {createBrowserRouter} from "react-router-dom";
import LandingPage from "./pages/Landing/index";
import Editor from "./pages/Editor/index";
import Dashboard from "./pages/Dashboard/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/editor",
    element: <Editor/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  }
]);


export default router;