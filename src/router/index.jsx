import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error";
import HomePage from "../pages/home";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
import LeaderBoardPage from "../pages/leaderboard";
import SubmitPage from "../pages/submit";
import ThreadPage from "../pages/thread";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route errorElement={<ErrorPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/leaderboard" element={<LeaderBoardPage />} />
      <Route path="/submit" element={<SubmitPage />} />
      <Route path="/thread/:id" element={<ThreadPage />} />
      {/* <Route path="/*" element={<ErrorPage />} /> */}
    </Route>,
  ),
);
