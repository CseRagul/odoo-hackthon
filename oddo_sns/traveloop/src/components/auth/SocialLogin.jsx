// src/components/auth/SocialLogin.jsx

import React from "react";
import { ArrowRight } from "lucide-react";

// IMAGE
import GoogleLogo from "../../assets/images/google.png";

const SocialLogin = () => {
  
  // HANDLE GOOGLE LOGIN
  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
  };

  return (
    <div className="w-full">
      
      {/* GOOGLE BUTTON */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="
          group
          relative
          
          w-full
          
          flex
          items-center
          justify-center
          gap-4
          
          px-6
          py-4
          
          rounded-2xl
          
          border
          border-slate-200
          
          bg-white/90
          backdrop-blur-md
          
          shadow-sm
          
          overflow-hidden
          
          transition-all
          duration-300
          
          hover:shadow-xl
          hover:border-teal-300
          hover:-translate-y-1
        "
      >
        
        {/* BACKGROUND HOVER EFFECT */}
        <div
          className="
            absolute
            inset-0
            
            bg-gradient-to-r
            from-teal-50
            via-cyan-50
            to-sky-50
            
            opacity-0
            group-hover:opacity-100
            
            transition
            duration-500
          "
        />

        {/* GOOGLE ICON */}
        <div
          className="
            relative
            z-10
            
            flex
            items-center
            justify-center
            
            w-12
            h-12
            
            rounded-full
            
            bg-white
            
            shadow-md
          "
        >
          <img
            src={GoogleLogo}
            alt="Google"
            className="
              w-6
              h-6
              object-contain
            "
          />
        </div>

        {/* TEXT */}
        <div
          className="
            relative
            z-10
            
            flex
            flex-col
            items-start
          "
        >
          <span
            className="
              text-base
              md:text-lg
              
              font-semibold
              
              text-slate-700
            "
          >
            Continue with Google
          </span>

          <span
            className="
              text-xs
              
              text-slate-400
            "
          >
            Fast and secure authentication
          </span>
        </div>

        {/* RIGHT ICON */}
        <div
          className="
            relative
            z-10
            
            ml-auto
            
            text-slate-400
            group-hover:text-teal-500
            
            transition
          "
        >
          <ArrowRight size={22} />
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;