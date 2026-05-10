// src/components/dashboard/DestinationCard.jsx

import React, { useState } from "react";

import {
  Heart,
  MapPin,
  Star,
} from "lucide-react";

const DestinationCard = ({
  image,
  title,
  country,
  rating = "4.8",
  places = "120+ Places",
}) => {
  
  // WISHLIST STATE
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="
        group
        relative
        
        min-w-[290px]
        md:min-w-[320px]
        
        h-[390px]
        
        rounded-[32px]
        
        overflow-hidden
        
        bg-white
        
        shadow-sm
        
        hover:shadow-2xl
        
        transition-all
        duration-500
        
        hover:-translate-y-2
      "
    >
      
      {/* IMAGE */}
      <div className="relative h-full w-full">
        
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
            from-black/85
            via-black/20
            to-transparent
          "
        />

        {/* TOP ACTIONS */}
        <div
          className="
            absolute
            top-5
            left-5
            right-5
            
            flex
            items-center
            justify-between
          "
        >
          
          {/* RATING */}
          <div
            className="
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
              
              font-semibold
            "
          >
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />

            <span>{rating}</span>
          </div>

          {/* FAVORITE */}
          <button
            onClick={() =>
              setLiked(!liked)
            }
            className="
              w-12
              h-12
              
              rounded-full
              
              bg-white/15
              backdrop-blur-md
              
              border
              border-white/20
              
              flex
              items-center
              justify-center
              
              transition-all
              duration-300
              
              hover:scale-110
            "
          >
            <Heart
              size={22}
              className={`
                transition-all
                duration-300
                
                ${
                  liked
                    ? "fill-red-500 text-red-500"
                    : "text-white"
                }
              `}
            />
          </button>
        </div>

        {/* CONTENT */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            
            p-6
          "
        >
          
          {/* COUNTRY */}
          <div
            className="
              flex
              items-center
              gap-2
              
              text-slate-200
              
              text-sm
              
              mb-3
            "
          >
            <MapPin size={16} />

            <span>{country}</span>
          </div>

          {/* TITLE */}
          <h2
            className="
              text-3xl
              
              font-extrabold
              
              text-white
              
              leading-tight
            "
          >
            {title}
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3
              
              text-slate-300
              
              text-sm
              
              leading-6
            "
          >
            Explore breathtaking landscapes,
            luxury stays, and unforgettable
            travel experiences.
          </p>

          {/* FOOTER */}
          <div
            className="
              mt-6
              
              flex
              items-center
              justify-between
            "
          >
            
            {/* PLACES */}
            <div>
              <p
                className="
                  text-slate-400
                  
                  text-xs
                "
              >
                Available Spots
              </p>

              <h4
                className="
                  mt-1
                  
                  text-lg
                  
                  font-bold
                  
                  text-white
                "
              >
                {places}
              </h4>
            </div>

            {/* BUTTON */}
            <button
              className="
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
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;