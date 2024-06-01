import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<App />}></Route>)
  );
  return <RouterProvider router={router} />;
};

export default index;
