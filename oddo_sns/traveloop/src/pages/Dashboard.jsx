import React from "react";

// LAYOUT
import MainLayout from "../layouts/MainLayout";

// COMPONENTS
import HeroBanner from "../components/dashboard/HeroBanner";
import SearchBar from "../components/dashboard/SearchBar";
import FilterBar from "../components/dashboard/FilterBar";
import DestinationList from "../components/dashboard/DestinationList";
import PreviousTrips from "../components/dashboard/PreviousTrips";

const Dashboard = () => {

  // GET USER
  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (
    <MainLayout>

      {/* TOP BAR */}
      <div
        className="
          flex
          items-center
          justify-between
          gap-4

          mb-6

          flex-wrap
        "
      >

        {/* USER INFO */}
        <div>

          <h2
            className="
              text-2xl
              font-bold
              text-slate-800
            "
          >
            Welcome,
            {" "}
            {
              user?.firstName ||
              "Traveler"
            }
          </h2>

          <p
            className="
              text-slate-500
              mt-1
            "
          >
            Explore your next adventure
          </p>
        </div>

      </div>



      {/* HERO BANNER */}
      <section>
        <HeroBanner />
      </section>



      {/* SEARCH + FILTER */}
      <section
        className="
          mt-6

          bg-white/90
          backdrop-blur-xl

          rounded-[30px]

          border
          border-slate-200

          shadow-sm

          p-4
          md:p-5

          flex
          flex-col
          xl:flex-row

          gap-4
        "
      >

        {/* SEARCH */}
        <div className="flex-1">
          <SearchBar />
        </div>

        {/* FILTER */}
        <div
          className="
            flex
            items-center
            justify-end
          "
        >
          <FilterBar />
        </div>
      </section>



      {/* DESTINATIONS */}
      <section className="mt-12">
        <DestinationList />
      </section>



      {/* PREVIOUS TRIPS */}
      <section className="mt-14 pb-28">
        <PreviousTrips />
      </section>

    </MainLayout>
  );
};

export default Dashboard;