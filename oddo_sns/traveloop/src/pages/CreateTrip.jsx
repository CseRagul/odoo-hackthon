// src/pages/CreateTrip.jsx

import React from "react";

// LAYOUT
import MainLayout from "../layouts/MainLayout";

// COMPONENTS
import CreateTripHeader from "../components/trip/CreateTripHeader";
import TripForm from "../components/trip/TripForm";
import SuggestedPlaces from "../components/trip/SuggestedPlaces";

const CreateTrip = () => {
  return (
    <MainLayout>
      
      {/* HEADER */}
      <section>
        <CreateTripHeader />
      </section>

      {/* TRIP FORM */}
      <section className="mt-8">
        <TripForm />
      </section>

      {/* SUGGESTED PLACES */}
      <section className="mt-10 pb-28">
        <SuggestedPlaces />
      </section>

    </MainLayout>
  );
};

export default CreateTrip;