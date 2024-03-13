import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error";
import HomePage from "../pages/home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route errorElement={<ErrorPage />} />
    </Route>,
  ),
);
