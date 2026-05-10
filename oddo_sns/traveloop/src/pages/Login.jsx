// src/pages/Login.jsx

import React from "react";

// LAYOUT
import AuthLayout from "../layouts/AuthLayout";

// COMPONENTS
import AuthCard from "../components/auth/AuthCard";

const Login = () => {
  
  return (
    <AuthLayout>
      
      {/* LOGIN CARD */}
      <AuthCard />

    </AuthLayout>
  );
};

export default Login;