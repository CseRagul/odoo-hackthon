import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  useNavigate
} from "react-router-dom";

import {
  ArrowLeft,
  CheckCircle,
  LayoutDashboard,
} from "lucide-react";
import {
  useParams,
} from "react-router-dom";

// LAYOUT
import MainLayout from "../layouts/MainLayout";

// COMPONENTS
import ActivitySearchBar from "../components/activities/ActivitySearchBar";
import ActivityFilterBar from "../components/activities/ActivityFilterBar";
import ActivityResultsHeader from "../components/activities/ActivityResultsHeader";
import ActivityList from "../components/activities/ActivityList";
import EmptyActivityState from "../components/activities/EmptyActivityState";

// IMAGES
import BirBilling from "../assets/images/bir-billing.jpg";
import Oludeniz from "../assets/images/oludeniz.jpg";
import Interlaken from "../assets/images/interlaken.jpg";
import Pokhara from "../assets/images/pokhara.jpg";
import Goa from "../assets/images/goa-paragliding.jpg";

const Activities = () => {

  // GET TRIP ID
  const { id } = useParams();

const navigate =
  useNavigate();

 

  // SEARCH STATE
  const [search, setSearch] =
    useState("Paragliding");



  // SORT STATE
  const [sortBy, setSortBy] =
    useState("Popular");



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

          const token =
            localStorage.getItem(
              "token"
            );

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




  // ACTIVITIES DATA
  const activities = [
    {
      id: 1,
      title:
        "Paragliding in Bir Billing",
      location:
        "Bir Billing, Himachal Pradesh, India",
      image: BirBilling,
      rating: 4.8,
      reviews: "1.2k reviews",
      duration: "1 - 2 hours",
      price: 3500,
      oldPrice: 4800,
      tags: [
        "Adventure",
        "Best for Beginners",
        "Scenic Views",
      ],
      description:
        "Experience the world’s second highest paragliding site.",
    },

    {
      id: 2,
      title:
        "Paragliding in Oludeniz",
      location:
        "Oludeniz, Turkey",
      image: Oludeniz,
      rating: 4.7,
      reviews: "856 reviews",
      duration: "30 - 45 mins",
      price: 90,
      oldPrice: 140,
      tags: [
        "Adventure",
        "Popular",
      ],
      description:
        "Soar above the blue lagoon.",
    },

    {
      id: 3,
      title:
        "Paragliding in Interlaken",
      location:
        "Interlaken, Switzerland",
      image: Interlaken,
      rating: 4.9,
      reviews: "1.5k reviews",
      duration: "15 - 30 mins",
      price: 150,
      oldPrice: 220,
      tags: [
        "Adventure",
        "Scenic Views",
      ],
      description:
        "Fly over the Swiss Alps.",
    },

    {
      id: 4,
      title:
        "Paragliding in Pokhara",
      location:
        "Pokhara, Nepal",
      image: Pokhara,
      rating: 4.8,
      reviews: "987 reviews",
      duration: "20 - 30 mins",
      price: 6000,
      oldPrice: 8200,
      tags: [
        "Adventure",
      ],
      description:
        "Enjoy views of Phewa Lake.",
    },

    {
      id: 5,
      title:
        "Paragliding in Goa",
      location:
        "North Goa, India",
      image: Goa,
      rating: 4.6,
      reviews: "642 reviews",
      duration: "10 - 20 mins",
      price: 2800,
      oldPrice: 3900,
      tags: [
        "Adventure",
        "Beach Views",
      ],
      description:
        "Fly over Goa beaches.",
    },
  ];




  // FILTER + SEARCH
  const filteredActivities =
    useMemo(() => {

      let filtered =
        activities.filter(
          (activity) =>
            activity.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            activity.location
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        );



      // SORTING
      if (
        sortBy ===
        "Highest Rated"
      ) {

        filtered.sort(
          (a, b) =>
            b.rating - a.rating
        );
      }



      if (
        sortBy ===
        "Lowest Price"
      ) {

        filtered.sort(
          (a, b) =>
            a.price - b.price
        );
      }

      return filtered;

    }, [search, sortBy]);




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
          Loading Activities...
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

        <p
          className="
            mt-3
            text-slate-500
            text-lg
          "
        >
          {trip.destination}
        </p>
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

        {/* SEARCH + SORT */}
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
            <ActivitySearchBar
              value={search}
              onChange={setSearch}
            />
          </div>



          {/* FILTERS */}
          <ActivityFilterBar
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
      </section>



      {/* RESULTS */}
      <section className="mt-10">
        <ActivityResultsHeader
          search={search}
          count={
            filteredActivities.length
          }
        />
      </section>



      {/* ACTIVITY LIST */}
      <section className="mt-8 pb-28">
        {filteredActivities.length ===
        0 ? (
          <EmptyActivityState />
        ) : (
          <ActivityList
            activities={
              filteredActivities
            }
          />
        )}
      </section>
      {/* FINAL ACTIONS */}
<section className="pb-24">

  <div className="mt-10 bg-white border border-slate-200 rounded-[36px] shadow-sm p-6 grid grid-cols-1 md:grid-cols-3 gap-5">

    {/* BACK */}
    <button
      onClick={() =>
        navigate(`/trip-notes/${id}`)
      }
      className="flex items-center justify-center gap-3 px-6 py-5 rounded-2xl border border-slate-200 hover:border-teal-400 transition-all"
    >
      <ArrowLeft size={22} />
      Trip Notes
    </button>

    {/* COMPLETE */}
    <button
      onClick={() =>
        alert("Trip Planning Completed")
      }
      className="flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition-all"
    >
      <CheckCircle size={22} />
      Complete Trip
    </button>

    {/* DASHBOARD */}
    <button
      onClick={() =>
        navigate("/dashboard")
      }
      className="flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all"
    >
      <LayoutDashboard size={22} />
      Dashboard
    </button>

  </div>
</section>

    </MainLayout>
  );
};

export default Activities;