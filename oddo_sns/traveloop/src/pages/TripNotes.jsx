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
import NotesHeader from "../components/notes/NotesHeader";
import NotesSearchBar from "../components/notes/NotesSearchBar";
import NotesFilterBar from "../components/notes/NotesFilterBar";
import NotesTripSelector from "../components/notes/NotesTripSelector";
import NotesTabs from "../components/notes/NotesTabs";
import AddNoteButton from "../components/notes/AddNoteButton";

const TripNotes = () => {

  // GET TRIP ID
  const { id } = useParams();



  // NOTES STATE
  const [notes, setNotes] =
    useState([]);

  // TRIP STATE
  const [trip, setTrip] =
    useState(null);

  // LOADING
  const [loading, setLoading] =
    useState(true);




  // FETCH DATA
  useEffect(() => {

    const fetchData =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "token"
            );



          // FETCH TRIP
          const tripResponse =
            await fetch(
              `http://localhost:5000/api/trips/${id}`,
              {
                headers: {
                  Authorization:
                    `Bearer ${token}`,
                },
              }
            );

          const tripData =
            await tripResponse.json();

          if (tripData.success) {

            setTrip(
              tripData.trip
            );
          }



          // FETCH NOTES
          const notesResponse =
            await fetch(
              `http://localhost:5000/api/notes/${id}`,
              {
                headers: {
                  Authorization:
                    `Bearer ${token}`,
                },
              }
            );

          const notesData =
            await notesResponse.json();

          if (notesData.success) {

            setNotes(
              notesData.notes
            );
          }

          setLoading(false);

        } catch (error) {

          console.log(error);

          setLoading(false);
        }
      };

    fetchData();

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
          Loading Notes...
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
        <NotesHeader />
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

        <p
          className="
            mt-2
            text-lg
            text-slate-500
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

        {/* SEARCH + FILTER BAR */}
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
            <NotesSearchBar />
          </div>

          {/* FILTER */}
          <NotesFilterBar />
        </div>



        {/* TRIP SELECTOR */}
        <div className="mt-6">
          <NotesTripSelector />
        </div>



        {/* TABS */}
        <div className="mt-6">
          <NotesTabs />
        </div>
      </section>



      {/* NOTES LIST */}
      <section className="mt-10">

        {notes.length === 0 ? (

          <div
            className="
              text-center
              text-2xl
              font-bold
              text-slate-400
            "
          >
            No Notes Found
          </div>

        ) : (

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2

              gap-6
            "
          >

            {notes.map((note) => (

              <div
                key={note._id}
                className="
                  bg-white

                  border
                  border-slate-200

                  rounded-[28px]

                  shadow-sm

                  p-6
                "
              >

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-slate-800
                  "
                >
                  {note.title}
                </h2>

                <p
                  className="
                    mt-4
                    text-slate-600
                    leading-7
                  "
                >
                  {note.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>



      {/* ADD NOTE */}
      <section className="mt-10 pb-28">
        <AddNoteButton />
      </section>

    </MainLayout>
  );
};

export default TripNotes;