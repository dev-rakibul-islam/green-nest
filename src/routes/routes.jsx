import { createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import Loader from "../components/Loader";

const HomePage = lazy(() => import("../pages/HomePage"));
const PlantsPage = lazy(() => import("../pages/PlantsPage"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Profile = lazy(() => import("../pages/Profile"));
const PlantDetails = lazy(() => import("../pages/PlantDetails"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Support = lazy(() => import("../pages/Support"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "plants",
        element: (
          <Suspense fallback={<Loader />}>
            <PlantsPage />
          </Suspense>
        ),
      },
      {
        path: "plants/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <PlantDetails />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "forgot",
        element: (
          <Suspense fallback={<Loader />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Loader />}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "privacy",
        element: (
          <Suspense fallback={<Loader />}>
            <Privacy />
          </Suspense>
        ),
      },
      {
        path: "support",
        element: (
          <Suspense fallback={<Loader />}>
            <Support />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
