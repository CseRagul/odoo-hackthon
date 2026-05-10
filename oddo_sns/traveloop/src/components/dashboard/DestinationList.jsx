// src/components/dashboard/DestinationList.jsx

import React from "react";

// COMPONENTS
import SectionHeader from "./SectionHeader";
import DestinationCard from "./DestinationCard";

// IMAGES
import IndiaImage from "../../assets/images/india.jpg";
import MaldivesImage from "../../assets/images/maldives.jpg";
import UAEImage from "../../assets/images/uae.jpg";
import SwitzerlandImage from "../../assets/images/switzerland.jpg";
import BaliImage from "../../assets/images/bali.jpg";

const DestinationList = () => {
  
  // DESTINATION DATA
  const destinations = [
    {
      id: 1,
      title: "Goa Beaches",
      country: "India",
      image: IndiaImage,
      rating: "4.9",
      places: "180+ Places",
    },

    {
      id: 2,
      title: "Maldives Escape",
      country: "Maldives",
      image: MaldivesImage,
      rating: "4.8",
      places: "95+ Resorts",
    },

    {
      id: 3,
      title: "Dubai Luxury",
      country: "UAE",
      image: UAEImage,
      rating: "4.7",
      places: "140+ Attractions",
    },

    {
      id: 4,
      title: "Swiss Alps",
      country: "Switzerland",
      image: SwitzerlandImage,
      rating: "4.9",
      places: "120+ Adventures",
    },

    {
      id: 5,
      title: "Bali Paradise",
      country: "Indonesia",
      image: BaliImage,
      rating: "4.8",
      places: "160+ Experiences",
    },
  ];

  return (
    <section>
      
      {/* SECTION HEADER */}
      <SectionHeader
        title="Top Regional Selections"
        subtitle="Explore the most popular destinations loved by travelers around the world."
        buttonText="View All Destinations"
      />

      {/* DESTINATION LIST */}
      <div
        className="
          flex
          gap-6
          
          overflow-x-auto
          
          pb-4
          
          scrollbar-hide
        "
      >
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            image={destination.image}
            title={destination.title}
            country={destination.country}
            rating={destination.rating}
            places={destination.places}
          />
        ))}
      </div>
    </section>
  );
};

export default DestinationList;