import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";
import React, { useRef } from "react";
import { RootLayout } from "../layout/RootLayout";
import Home from "../pages/Home";
import Suggestions from "../pages/Suggestions";

const RouterProvider = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToHome = () =>
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContactUs = () =>
    contactUsRef.current?.scrollIntoView({ behavior: "smooth" });

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout
          onScrollToHomeMain={scrollToHome}
          onScrollToAbout={scrollToAbout}
          onScrollContactUs={scrollToContactUs}
        />
      ),
      children: [
        {
          index: true,
          element: (
            <Home
              homeRef={homeRef}
              aboutRef={aboutRef}
              contactUsRef={contactUsRef}
            />
          ),
        },
        {
          path: "/suggestions",
          element: <Suggestions />,
        },
      ],
    },
  ]);

  return <Router router={router} />;
};

export default RouterProvider;
