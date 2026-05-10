// src/components/dashboard/HeroBanner.jsx

import React from "react";

import {
  Plane,
  MapPin,
  Star,
  Globe2,
  ArrowRight,
} from "lucide-react";

// IMAGE
import HeroImage from "../../assets/images/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section
      className="
        relative
        
        w-full
        
        h-[320px]
        md:h-[420px]
        xl:h-[500px]
        
        overflow-hidden
        
        rounded-[40px]
        
        shadow-[0_20px_70px_rgba(15,23,42,0.18)]
      "
    >
      
      {/* BACKGROUND IMAGE */}
      <img
        src={HeroImage}
        alt="Travel Banner"
        className="
          absolute
          inset-0
          
          w-full
          h-full
          
          object-cover
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          
          bg-gradient-to-r
          from-black/80
          via-black/40
          to-black/10
        "
      />

      {/* EXTRA GLOW */}
      <div
        className="
          absolute
          top-0
          right-0
          
          w-[400px]
          h-[400px]
          
          bg-cyan-400/20
          
          rounded-full
          
          blur-3xl
        "
      />

      {/* HOT AIR BALLOON */}
      <div
        className="
          absolute
          top-10
          right-10
          
          hidden
          lg:flex
          
          items-center
          justify-center
          
          w-24
          h-24
          
          rounded-full
          
          bg-white/10
          backdrop-blur-xl
          
          border
          border-white/20
          
          animate-float
        "
      >
        <span className="text-6xl">
          🎈
        </span>
      </div>

      {/* PLANE DECORATION */}
      <div
        className="
          absolute
          left-[45%]
          top-[28%]
          
          hidden
          xl:flex
          
          items-center
          gap-3
        "
      >
        
        {/* DASHED PATH */}
        <div
          className="
            w-40
            
            border-t-2
            border-dashed
            border-white/70
          "
        />

        {/* PLANE ICON */}
        <Plane
          size={38}
          className="
            text-white
            
            rotate-[20deg]
          "
        />
      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          
          h-full
          
          flex
          flex-col
          justify-center
          
          px-6
          md:px-12
          xl:px-16
        "
      >
        
        {/* BADGE */}
        <div
          className="
            flex
            items-center
            gap-3
            
            w-fit
            
            px-5
            py-3
            
            rounded-full
            
            bg-white/10
            backdrop-blur-xl
            
            border
            border-white/20
            
            text-white
            
            text-sm
            md:text-base
            
            font-medium
          "
        >
          <MapPin size={18} />

          <span>
            Discover Beautiful Destinations
          </span>
        </div>

        {/* TITLE */}
        <h1
          className="
            mt-6
            
            max-w-3xl
            
            text-4xl
            md:text-6xl
            xl:text-7xl
            
            font-extrabold
            
            text-white
            
            leading-tight
          "
        >
          Explore The World Your Way
        </h1>

        {/* SUBTITLE */}
        <p
          className="
            mt-5
            
            max-w-2xl
            
            text-base
            md:text-xl
            
            text-slate-200
            
            leading-8
          "
        >
          Discover dream destinations,
          organize unforgettable adventures,
          and manage your travel experiences
          with Traveloop.
        </p>

        {/* ACTION BUTTONS */}
        <div
          className="
            mt-8
            
            flex
            flex-wrap
            items-center
            
            gap-4
          "
        >
          
          {/* PRIMARY BUTTON */}
          <button
            className="
              group
              
              flex
              items-center
              gap-3
              
              px-8
              py-4
              
              rounded-2xl
              
              bg-gradient-to-r
              from-teal-500
              to-cyan-500
              
              text-white
              
              font-semibold
              
              shadow-xl
              
              hover:scale-105
              
              transition-all
              duration-300
            "
          >
            <span>Start Exploring</span>

            <ArrowRight
              size={20}
              className="
                transition-transform
                duration-300
                
                group-hover:translate-x-1
              "
            />
          </button>

          {/* SECONDARY BUTTON */}
          <button
            className="
              px-8
              py-4
              
              rounded-2xl
              
              bg-white/10
              backdrop-blur-xl
              
              border
              border-white/20
              
              text-white
              
              font-semibold
              
              hover:bg-white/20
              
              transition-all
              duration-300
            "
          >
            View Trips
          </button>
        </div>

        {/* STATS */}
        <div
          className="
            hidden
            md:flex
            
            items-center
            gap-5
            
            mt-10
          "
        >
          
          {/* CARD 1 */}
          <div
            className="
              flex
              items-center
              gap-4
              
              px-5
              py-4
              
              rounded-2xl
              
              bg-white/10
              backdrop-blur-xl
              
              border
              border-white/20
            "
          >
            <div
              className="
                w-12
                h-12
                
                rounded-xl
                
                bg-gradient-to-br
                from-yellow-400
                to-orange-500
                
                flex
                items-center
                justify-center
                
                text-white
              "
            >
              <Star size={22} />
            </div>

            <div>
              <h3
                className="
                  text-xl
                  
                  font-bold
                  
                  text-white
                "
              >
                4.9
              </h3>

              <p
                className="
                  text-sm
                  
                  text-slate-200
                "
              >
                Traveler Rating
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="
              flex
              items-center
              gap-4
              
              px-5
              py-4
              
              rounded-2xl
              
              bg-white/10
              backdrop-blur-xl
              
              border
              border-white/20
            "
          >
            <div
              className="
                w-12
                h-12
                
                rounded-xl
                
                bg-gradient-to-br
                from-teal-500
                to-cyan-500
                
                flex
                items-center
                justify-center
                
                text-white
              "
            >
              <Globe2 size={22} />
            </div>

            <div>
              <h3
                className="
                  text-xl
                  
                  font-bold
                  
                  text-white
                "
              >
                120+
              </h3>

              <p
                className="
                  text-sm
                  
                  text-slate-200
                "
              >
                Destinations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;