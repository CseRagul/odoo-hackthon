// src/pages/BuildItinerary.jsx

import React, {
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import ItineraryHeader from "../components/itinerary/ItineraryHeader";
import SectionList from "../components/itinerary/SectionList";
import AddSectionButton from "../components/itinerary/AddSectionButton";
import ItineraryActions from "../components/itinerary/ItineraryActions";

const BuildItinerary = () => {

  // GET ID
  const { id } =
    useParams();

  // TRIP MOCK
  const trip = {
    title: "Goa Trip",
    destination: "Goa, India",
    budget: 50000,
  };



  // MAIN STATE
  const [sections, setSections] =
    useState([
      {
        day: 1,
        title: "Arrival Day",
        activities: "",
        budget: 5000,
        place: "Goa Beach",
      },
    ]);



  return (
    <MainLayout>

      {/* HEADER */}
      <section>
        <ItineraryHeader />
      </section>



      {/* TRIP INFO */}
      <section
        className="
          mt-8
          bg-white
          border
          border-slate-200
          rounded-[32px]
          p-6
          shadow-sm
        "
      >

        <h2
          className="
            text-3xl
            font-bold
            text-slate-800
          "
        >
          {trip.title}
        </h2>

        <div
          className="
            mt-5
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >

          <div>

            <p className="text-sm text-slate-400">
              Destination
            </p>

            <h3 className="mt-1 text-xl font-semibold text-slate-700">
              {trip.destination}
            </h3>
          </div>

          <div>

            <p className="text-sm text-slate-400">
              Budget
            </p>

            <h3 className="mt-1 text-xl font-semibold text-slate-700">
              ₹{trip.budget}
            </h3>
          </div>
        </div>
      </section>



      {/* SECTION LIST */}
      <section className="mt-8">

        <SectionList
          sections={sections}
          setSections={setSections}
        />
      </section>



      {/* ADD BUTTON */}
      <section className="mt-8">

        <AddSectionButton
          sections={sections}
          setSections={setSections}
        />
      </section>



      {/* ACTIONS */}
      <section className="mt-8 pb-28">
        <ItineraryActions />
      </section>

    </MainLayout>
  );
};

export default BuildItinerary;