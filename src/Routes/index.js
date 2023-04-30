import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Auth/login";
import Blogs from "../Pages/Blog/Blogs";
import ResetPassword from "../Pages/Auth/ResetPassword";
import ChangePassword from "../Pages/Auth/ChangePassword";
import SignUp from "../Pages/Auth/SignUp";
import VerificationEmail from "../Pages/Auth/VerificationEmail";
import BlogDetail from "../Pages/BlogDetail";
import Pricing from "../Pages/Pricing";
import Feature from "../Pages/Feature";
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" replace={true} />} />
    <Route path="/login" element={<Login />} />
    <Route path="/blog" element={<Blogs />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path="/change-password" element={<ChangePassword />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/verify-email" element={<VerificationEmail />} />

    <Route path="/blog-detail" element={<BlogDetail />} />
<Route path="/pricing" element={<Pricing />} />
    <Route path="/feature" element={<Feature />} />

    

  </Routes>
);

export default AppRouter;
