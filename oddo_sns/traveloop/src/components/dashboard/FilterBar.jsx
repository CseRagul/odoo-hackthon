// src/components/dashboard/FilterBar.jsx

import React, { useState } from "react";

import {
  SlidersHorizontal,
  ChevronDown,
  ArrowUpDown,
} from "lucide-react";

const FilterBar = () => {
  
  // STATES
  const [groupBy, setGroupBy] =
    useState("Region");

  const [sortBy, setSortBy] =
    useState("Popular");

  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        gap-4
      "
    >
      
      {/* GROUP BY */}
      <div
        className="
          flex
          items-center
          gap-3
          
          px-5
          py-4
          
          rounded-2xl
          
          bg-white
          
          border
          border-slate-200
          
          shadow-sm
          
          hover:border-teal-300
          
          transition-all
          duration-300
        "
      >
        
        {/* ICON */}
        <div
          className="
            w-11
            h-11
            
            rounded-xl
            
            bg-gradient-to-br
            from-teal-500
            to-cyan-500
            
            text-white
            
            flex
            items-center
            justify-center
            
            shadow-md
          "
        >
          <SlidersHorizontal size={20} />
        </div>

        {/* CONTENT */}
        <div>
          <p
            className="
              text-xs
              text-slate-400
              font-medium
            "
          >
            Group By
          </p>

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <select
              value={groupBy}
              onChange={(e) =>
                setGroupBy(e.target.value)
              }
              className="
                bg-transparent
                outline-none
                
                text-slate-700
                font-semibold
                
                appearance-none
                
                cursor-pointer
              "
            >
              <option>
                Region
              </option>

              <option>
                Country
              </option>

              <option>
                Budget
              </option>

              <option>
                Popularity
              </option>
            </select>

            <ChevronDown
              size={18}
              className="text-slate-500"
            />
          </div>
        </div>
      </div>

      {/* SORT BY */}
      <div
        className="
          flex
          items-center
          gap-3
          
          px-5
          py-4
          
          rounded-2xl
          
          bg-white
          
          border
          border-slate-200
          
          shadow-sm
          
          hover:border-teal-300
          
          transition-all
          duration-300
        "
      >
        
        {/* ICON */}
        <div
          className="
            w-11
            h-11
            
            rounded-xl
            
            bg-gradient-to-br
            from-orange-400
            to-pink-500
            
            text-white
            
            flex
            items-center
            justify-center
            
            shadow-md
          "
        >
          <ArrowUpDown size={20} />
        </div>

        {/* CONTENT */}
        <div>
          <p
            className="
              text-xs
              text-slate-400
              font-medium
            "
          >
            Sort By
          </p>

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="
                bg-transparent
                outline-none
                
                text-slate-700
                font-semibold
                
                appearance-none
                
                cursor-pointer
              "
            >
              <option>
                Popular
              </option>

              <option>
                Trending
              </option>

              <option>
                Budget Friendly
              </option>

              <option>
                Newest
              </option>
            </select>

            <ChevronDown
              size={18}
              className="text-slate-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;