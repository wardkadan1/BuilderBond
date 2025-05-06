import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import SignInPage from "../pages/LoginPage/SignIn";
import SignUpPage from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutUsPage /> },
      { path: "sign-in", element: <SignInPage /> },
      { path: "sign-up", element: <SignUpPage /> },
    ],
  },
]);

const RouterProvider = () => {
  return <Router router={router} />;
};

export default RouterProvider;
