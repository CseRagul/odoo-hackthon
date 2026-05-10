// src/layouts/AuthLayout.jsx

import React from "react";
import { Plane } from "lucide-react";

// IMAGES
import LoginBg from "../assets/images/login-bg.jpg";

const AuthLayout = ({ children }) => {
  return (
    <div
      className="
        min-h-screen
        flex
        overflow-hidden
        auth-bg
        relative
      "
    >
      
      {/* LEFT SIDE IMAGE SECTION */}
      <div
        className="
          hidden
          lg:flex
          w-[40%]
          relative
          overflow-hidden
        "
      >
        
        {/* BACKGROUND IMAGE */}
        <img
          src={LoginBg}
          alt="Travel Background"
          className="
            w-full
            h-full
            object-cover
            rounded-r-[70px]
            scale-105
          "
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/20
            to-transparent
            rounded-r-[70px]
          "
        />

        {/* FLOATING GRADIENT */}
        <div
          className="
            absolute
            top-10
            left-10
            w-40
            h-40
            bg-cyan-400/20
            rounded-full
            blur-3xl
          "
        />

        {/* CONTENT */}
        <div
          className="
            absolute
            bottom-16
            left-10
            z-10
            text-white
            max-w-md
          "
        >
          <p
            className="
              text-sm
              uppercase
              tracking-[6px]
              text-cyan-200
              font-medium
            "
          >
            Welcome To Traveloop
          </p>

          <h1
            className="
              mt-4
              text-5xl
              font-bold
              leading-tight
            "
          >
            Explore The World With Smart Travel Planning
          </h1>

          <p
            className="
              mt-5
              text-lg
              text-gray-200
              leading-8
            "
          >
            Organize trips, manage itineraries,
            calculate budgets, and create unforgettable
            travel experiences with ease.
          </p>

          {/* STATS */}
          <div className="flex gap-10 mt-10">
            
            <div>
              <h2 className="text-3xl font-bold">
                100+
              </h2>

              <p className="text-gray-300 text-sm mt-1">
                Destinations
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                10K+
              </h2>

              <p className="text-gray-300 text-sm mt-1">
                Happy Travelers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE AUTH SECTION */}
      <div
        className="
          flex-1
          flex
          items-center
          justify-center
          relative
          px-6
          py-10
        "
      >
        
        {/* TOP RIGHT CIRCLE */}
        <div
          className="
            absolute
            top-0
            right-0
            w-80
            h-80
            bg-teal-200/40
            rounded-full
            blur-3xl
          "
        />

        {/* BOTTOM LEFT CIRCLE */}
        <div
          className="
            absolute
            bottom-0
            left-10
            w-72
            h-72
            bg-cyan-200/40
            rounded-full
            blur-3xl
          "
        />

        {/* SMALL DECORATIVE DOTS */}
        <div
          className="
            absolute
            top-20
            left-1/2
            w-4
            h-4
            bg-teal-300
            rounded-full
            opacity-60
          "
        />

        <div
          className="
            absolute
            bottom-20
            right-20
            w-6
            h-6
            bg-cyan-300
            rounded-full
            opacity-50
          "
        />

        {/* PLANE ICON */}
        <div
          className="
            absolute
            top-12
            right-16
            hidden
            md:flex
          "
        >
          <Plane
            size={42}
            className="
              text-teal-400
              rotate-12
              animate-float
            "
          />
        </div>

        {/* MAIN CARD */}
        <div
          className="
            relative
            z-10
            w-full
            flex
            justify-center
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;