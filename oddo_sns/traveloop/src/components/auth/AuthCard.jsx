// src/components/auth/AuthCard.jsx

import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import Logo from "../common/Logo";
import Divider from "../common/Divider";

import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";

// IMAGES
import Luggage from "../../assets/images/luggage.png";

const AuthCard = () => {
  return (
    <div
      className="
        relative
        
        w-full
        max-w-xl
        
        px-8
        md:px-10
        
        py-10
        
        rounded-[36px]
        
        bg-white/85
        backdrop-blur-2xl
        
        border
        border-white/40
        
        shadow-[0_20px_80px_rgba(15,23,42,0.15)]
        
        overflow-hidden
      "
    >
      
      {/* TOP GLOW */}
      <div
        className="
          absolute
          top-[-100px]
          right-[-80px]
          
          w-60
          h-60
          
          bg-cyan-300/30
          
          rounded-full
          
          blur-3xl
        "
      />

      {/* BOTTOM GLOW */}
      <div
        className="
          absolute
          bottom-[-100px]
          left-[-80px]
          
          w-60
          h-60
          
          bg-teal-300/20
          
          rounded-full
          
          blur-3xl
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        
        {/* LOGO */}
        <div className="flex justify-center">
          <Logo />
        </div>

        {/* TRAVEL IMAGE */}
        <div className="flex justify-center mt-8">
          <div
            className="
              relative
              
              flex
              items-center
              justify-center
              
              w-36
              h-36
              
              rounded-full
              
              bg-gradient-to-br
              from-teal-100
              via-cyan-50
              to-sky-100
              
              shadow-inner
            "
          >
            
            {/* ROTATING BORDER */}
            <div
              className="
                absolute
                inset-0
                
                rounded-full
                
                border-2
                border-dashed
                border-teal-300
                
                animate-spin
                [animation-duration:15s]
              "
            />

            {/* IMAGE */}
            <img
              src={Luggage}
              alt="Travel"
              className="
                w-24
                h-24
                object-contain
                
                relative
                z-10
                
                animate-float
              "
            />
          </div>
        </div>

        {/* HEADING */}
        <div className="text-center mt-8">
          
          <h2
            className="
              text-4xl
              md:text-5xl
              
              font-extrabold
              
              text-slate-800
              
              leading-tight
            "
          >
            Welcome Back
          </h2>

          <p
            className="
              mt-4
              
              text-slate-500
              
              text-base
              md:text-lg
              
              leading-7
            "
          >
            Login to continue planning your
            next amazing travel experience.
          </p>
        </div>

        {/* FORM */}
        <div className="mt-10">
          <LoginForm />
        </div>

        {/* DIVIDER */}
        <Divider text="OR SIGN IN WITH" />

        {/* SOCIAL LOGIN */}
        <SocialLogin />

        {/* SIGNUP */}
        <div className="mt-8 text-center">
          <p
            className="
              text-slate-500
              text-sm
              md:text-base
            "
          >
            Don’t have an account?{" "}
            
            <Link
              to="/register"
              className="
                font-bold
                
                bg-gradient-to-r
                from-teal-600
                to-cyan-500
                
                bg-clip-text
                text-transparent
                
                hover:opacity-80
                
                transition
              "
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;