import React, {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

// LAYOUT
import MainLayout from "../layouts/MainLayout";

// COMPONENTS
import PackingHeader from "../components/packing/PackingHeader";
import PackingSearchBar from "../components/packing/PackingSearchBar";
import PackingFilterBar from "../components/packing/PackingFilterBar";
import TripSelector from "../components/packing/TripSelector";
import ChecklistProgress from "../components/packing/ChecklistProgress";
import PackingCategoryList from "../components/packing/PackingCategoryList";
import PackingActionButtons from "../components/packing/PackingActionButtons";

const PackingChecklist = () => {

  // GET TRIP ID
  const { id } = useParams();



  // TRIP STATE
  const [trip, setTrip] =
    useState(null);



  // LOADING
  const [loading, setLoading] =
    useState(true);




  // FETCH TRIP
  useEffect(() => {

    const fetchTrip =
      async () => {

        try {

          // TOKEN
          const token =
            localStorage.getItem(
              "token"
            );

          // API
          const response =
            await fetch(
              `http://localhost:5000/api/trips/${id}`,
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

            setTrip(
              data.trip
            );
          }

          setLoading(false);

        } catch (error) {

          console.log(error);

          setLoading(false);
        }
      };

    fetchTrip();

  }, [id]);




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
          Loading Checklist...
        </div>
      </MainLayout>
    );
  }




  // NO TRIP
  if (!trip) {

    return (
      <MainLayout>
        <div
          className="
            py-24
            text-center
            text-2xl
            font-bold
            text-red-500
          "
        >
          Trip Not Found
        </div>
      </MainLayout>
    );
  }




  return (
    <MainLayout>

      {/* HEADER */}
      <section>
        <PackingHeader />
      </section>



      {/* TRIP INFO */}
      <section
        className="
          mt-8

          bg-white

          border
          border-slate-200

          rounded-[36px]

          shadow-sm

          p-6
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

          {/* DESTINATION */}
          <div>
            <p
              className="
                text-sm
                text-slate-400
              "
            >
              Destination
            </p>

            <h3
              className="
                mt-1
                text-xl
                font-semibold
                text-slate-700
              "
            >
              {trip.destination}
            </h3>
          </div>



          {/* START DATE */}
          <div>
            <p
              className="
                text-sm
                text-slate-400
              "
            >
              Start Date
            </p>

            <h3
              className="
                mt-1
                text-xl
                font-semibold
                text-slate-700
              "
            >
              {trip.startDate}
            </h3>
          </div>



          {/* END DATE */}
          <div>
            <p
              className="
                text-sm
                text-slate-400
              "
            >
              End Date
            </p>

            <h3
              className="
                mt-1
                text-xl
                font-semibold
                text-slate-700
              "
            >
              {trip.endDate}
            </h3>
          </div>



          {/* BUDGET */}
          <div>
            <p
              className="
                text-sm
                text-slate-400
              "
            >
              Budget
            </p>

            <h3
              className="
                mt-1
                text-xl
                font-semibold
                text-slate-700
              "
            >
              ₹{trip.budget}
            </h3>
          </div>
        </div>
      </section>



      {/* SEARCH + FILTER */}
      <section
        className="
          mt-8

          bg-white

          border
          border-slate-200

          rounded-[36px]

          shadow-sm

          p-5
          md:p-6
        "
      >

        {/* SEARCH + FILTER */}
        <div
          className="
            flex
            flex-col
            xl:flex-row

            gap-5
          "
        >

          {/* SEARCH */}
          <div className="flex-1">
            <PackingSearchBar />
          </div>

          {/* FILTER */}
          <PackingFilterBar />
        </div>



        {/* TRIP SELECTOR */}
        <div className="mt-6">
          <TripSelector />
        </div>



        {/* PROGRESS */}
        <div className="mt-8">
          <ChecklistProgress />
        </div>
      </section>



      {/* CATEGORY LIST */}
      <section className="mt-10">
        <PackingCategoryList />
      </section>



      {/* ACTION BUTTONS */}
      <section className="mt-10 pb-28">
        <PackingActionButtons />
      </section>

    </MainLayout>
  );
};

export default PackingChecklist;