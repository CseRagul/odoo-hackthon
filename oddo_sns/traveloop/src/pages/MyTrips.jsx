import React, {
  useEffect,
  useState,
} from "react";

// LAYOUT
import MainLayout from "../layouts/MainLayout";

// COMPONENTS
import MyTripsHeader from "../components/myTrips/MyTripsHeader";
import TripSearchBar from "../components/myTrips/TripSearchBar";
import TripFilterBar from "../components/myTrips/TripFilterBar";
import TripSection from "../components/myTrips/TripSection";

const MyTrips = () => {

  // TRIPS STATE
  const [trips, setTrips] =
    useState([]);

  // LOADING
  const [loading, setLoading] =
    useState(true);




  // FETCH TRIPS
  useEffect(() => {

    const fetchTrips =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "token"
            );

          const response =
            await fetch(
              "https://spingame-production.up.railway.app/api/trips",
              {
                headers: {
                  Authorization:
                    `Bearer ${token}`,
                },
              }
            );

          const data =
            await response.json();

          if (data.success) {

            setTrips(
              data.trips
            );
          }

          setLoading(false);

        } catch (error) {

          console.log(error);

          setLoading(false);
        }
      };

    fetchTrips();

  }, []);




  // LOADING UI
  if (loading) {

    return (
      <MainLayout>
        <div
          className="
            py-24
            text-center
            text-2xl
            font-bold
          "
        >
          Loading Trips...
        </div>
      </MainLayout>
    );
  }




  return (
    <MainLayout>

      {/* HEADER */}
      <section>
        <MyTripsHeader />
      </section>



      {/* SEARCH + FILTER */}
      <section
        className="
          mt-8

          bg-white

          border
          border-slate-200

          rounded-[34px]

          shadow-sm

          p-5

          flex
          flex-col
          xl:flex-row

          gap-5
        "
      >

        {/* SEARCH */}
        <div className="flex-1">
          <TripSearchBar />
        </div>

        {/* FILTERS */}
        <TripFilterBar />
      </section>



      {/* TRIPS */}
      <section className="mt-10 pb-28">

        <TripSection
          trips={trips}
        />

      </section>

    </MainLayout>
  );
};

export default MyTrips;