// src/layouts/MainLayout.jsx

import React from "react";

// COMPONENTS
import Navbar from "../components/dashboard/Navbar";
import FloatingActionButton from "../components/dashboard/FloatingActionButton";

const MainLayout = ({ children }) => {
  return (
    <div
      className="
        min-h-screen
        
        bg-[#f7f9fb]
        
        relative
        overflow-x-hidden
      "
    >
      
      {/* BACKGROUND GLOW TOP */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-120px]
          
          w-96
          h-96
          
          bg-cyan-200/20
          
          rounded-full
          
          blur-3xl
          
          pointer-events-none
        "
      />

      {/* BACKGROUND GLOW BOTTOM */}
      <div
        className="
          absolute
          bottom-[-120px]
          left-[-120px]
          
          w-96
          h-96
          
          bg-teal-200/20
          
          rounded-full
          
          blur-3xl
          
          pointer-events-none
        "
      />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main
        className="
          relative
          z-10
          
          w-full
          
          px-4
          sm:px-6
          lg:px-8
          
          py-6
        "
      >
        {/* CONTAINER */}
        <div
          className="
            max-w-[1600px]
            mx-auto
          "
        >
          {children}
        </div>
      </main>

      {/* FLOATING BUTTON */}
      <FloatingActionButton />
    </div>
  );
};

export default MainLayout;