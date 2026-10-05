import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Subject from "./pages/subject/Subject";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";

import Signin from "./pages/signin/Login";
import Signup from "./pages/signup/Signup";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

import PageNotFound from "./pages/pagenotfound/PageNotFound";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <Routes>

      {/* =========================
          HOME
      ========================= */}

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />


      {/* =========================
          DASHBOARD
      ========================= */}

  <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  }
>
  <Route
    path="subject"
    element={<Subject />}
  />
</Route>


      {/* =========================
          SIGNIN
      ========================= */}

      <Route
        path="/signin"
        element={
          <PublicRoute>
            <Signin />
          </PublicRoute>
        }
      />


      {/* =========================
          SIGNUP
      ========================= */}

      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />


      {/* =========================
          404
      ========================= */}

      <Route
        path="*"
        element={<PageNotFound />}
      />

    </Routes>

  </BrowserRouter>
);