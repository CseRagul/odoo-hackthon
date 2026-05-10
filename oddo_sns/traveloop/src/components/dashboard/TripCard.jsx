// src/components/dashboard/TripCard.jsx

import React from "react";

import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

const TripCard = ({
  image,
  title,
  country,
  date,
  duration,
  progress = 70,
}) => {
  return (
    <div
      className="
        group
        relative
        
        w-full
        
        rounded-[30px]
        
        overflow-hidden
        
        bg-white
        
        border
        border-slate-200
        
        shadow-sm
        
        hover:shadow-2xl
        
        transition-all
        duration-500
        
        hover:-translate-y-2
      "
    >
      
      {/* IMAGE */}
      <div className="relative h-[240px] overflow-hidden">
        
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            
            object-cover
            
            transition-transform
            duration-700
            
            group-hover:scale-110
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        {/* LOCATION BADGE */}
        <div
          className="
            absolute
            top-5
            left-5
            
            flex
            items-center
            gap-2
            
            px-4
            py-2
            
            rounded-full
            
            bg-white/15
            backdrop-blur-md
            
            border
            border-white/20
            
            text-white
            
            text-sm
            
            font-medium
          "
        >
          <MapPin size={16} />

          <span>{country}</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        
        {/* TITLE */}
        <h2
          className="
            text-2xl
            
            font-bold
            
            text-slate-800
          "
        >
          {title}
        </h2>

        {/* DETAILS */}
        <div
          className="
            mt-5
            
            flex
            flex-wrap
            
            items-center
            
            gap-5
          "
        >
          
          {/* DATE */}
          <div
            className="
              flex
              items-center
              gap-2
              
              text-slate-500
              
              text-sm
            "
          >
            <CalendarDays size={18} />

            <span>{date}</span>
          </div>

          {/* DURATION */}
          <div
            className="
              flex
              items-center
              gap-2
              
              text-slate-500
              
              text-sm
            "
          >
            <Clock3 size={18} />

            <span>{duration}</span>
          </div>
        </div>

        {/* PROGRESS SECTION */}
        <div className="mt-6">
          
          {/* LABEL */}
          <div
            className="
              flex
              items-center
              justify-between
              
              mb-3
            "
          >
            <span
              className="
                text-sm
                
                font-medium
                
                text-slate-500
              "
            >
              Trip Planning Progress
            </span>

            <span
              className="
                text-sm
                
                font-bold
                
                text-teal-600
              "
            >
              {progress}%
            </span>
          </div>

          {/* PROGRESS BAR */}
          <div
            className="
              w-full
              h-3
              
              rounded-full
              
              bg-slate-200
              
              overflow-hidden
            "
          >
            <div
              className="
                h-full
                
                rounded-full
                
                bg-gradient-to-r
                from-teal-500
                to-cyan-500
                
                transition-all
                duration-700
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="
            mt-7
            
            flex
            items-center
            justify-between
          "
        >
          
          {/* STATUS */}
          <div>
            <p
              className="
                text-xs
                
                text-slate-400
              "
            >
              Status
            </p>

            <h4
              className="
                mt-1
                
                text-base
                
                font-bold
                
                text-emerald-500
              "
            >
              Active Planning
            </h4>
          </div>

          {/* BUTTON */}
          <button
            className="
              group/button
              
              flex
              items-center
              gap-2
              
              px-5
              py-3
              
              rounded-2xl
              
              bg-gradient-to-r
              from-teal-500
              to-cyan-500
              
              text-white
              
              text-sm
              
              font-semibold
              
              shadow-lg
              
              hover:scale-105
              
              transition-all
              duration-300
            "
          >
            <span>View Trip</span>

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                
                group-hover/button:translate-x-1
              "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;