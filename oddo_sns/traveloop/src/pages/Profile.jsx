import React from "react";

import MainLayout from "../layouts/MainLayout";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

const Profile = () => {

  // GET USER
  const user =
    JSON.parse(
      localStorage.getItem("user")
    );



  // NO USER
  if (!user) {

    return (
      <MainLayout>
        <div className="py-24 text-center text-2xl font-bold text-red-500">
          User Not Found
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      {/* HEADER */}
      <section className="bg-white border border-slate-200 rounded-[36px] shadow-sm p-8">

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* PROFILE IMAGE */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
            {user.firstName
              ? user.firstName[0]
              : "U"}
          </div>

          {/* USER INFO */}
          <div className="flex-1">

            <h1 className="text-4xl font-bold text-slate-800">
              {user.firstName}{" "}
              {user.lastName}
            </h1>

            <p className="mt-3 text-slate-500 text-lg">
              Traveler Profile
            </p>

            <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-teal-50 text-teal-600 font-semibold">
              <ShieldCheck size={20} />
              Verified Account
            </div>
          </div>
        </div>
      </section>



      {/* DETAILS */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* FIRST NAME */}
        <ProfileCard
          icon={User}
          title="First Name"
          value={user.firstName}
        />

        {/* LAST NAME */}
        <ProfileCard
          icon={User}
          title="Last Name"
          value={user.lastName}
        />

        {/* EMAIL */}
        <ProfileCard
          icon={Mail}
          title="Email Address"
          value={user.email}
        />

        {/* PHONE */}
        <ProfileCard
          icon={Phone}
          title="Phone Number"
          value={user.phone}
        />

        {/* CITY */}
        <ProfileCard
          icon={MapPin}
          title="City"
          value={user.city}
        />

        {/* COUNTRY */}
        <ProfileCard
          icon={Globe}
          title="Country"
          value={user.country}
        />

        {/* CREATED */}
        <ProfileCard
          icon={CalendarDays}
          title="Joined On"
          value={
            user.createdAt
              ? new Date(
                  user.createdAt
                ).toDateString()
              : "Recently"
          }
          full
        />
      </section>

    </MainLayout>
  );
};




const ProfileCard = ({
  icon: Icon,
  title,
  value,
  full,
}) => {

  return (
    <div
      className={`
        bg-white
        border
        border-slate-200
        rounded-[30px]
        p-6
        shadow-sm

        ${
          full
            ? "md:col-span-2"
            : ""
        }
      `}
    >

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
          <Icon size={24} />
        </div>

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h3 className="mt-1 text-xl font-bold text-slate-800 break-all">
            {value || "Not Available"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;