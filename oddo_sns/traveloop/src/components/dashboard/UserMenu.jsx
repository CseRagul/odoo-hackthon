import React, {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  User,
  Settings,
  Heart,
  Map,
  LogOut,
  ChevronDown,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const UserMenu = () => {

  // NAVIGATE
  const navigate =
    useNavigate();

  // USER DATA
  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  // MENU STATE
  const [open, setOpen] =
    useState(false);

  // REF
  const menuRef =
    useRef(null);




  // CLOSE MENU
  useEffect(() => {

    const handleClickOutside =
      (event) => {

        if (
          menuRef.current &&
          !menuRef.current.contains(
            event.target
          )
        ) {

          setOpen(false);
        }
      };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);




  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/");
  };




  // MENU ITEMS
  const menuItems = [
    {
      id: 1,
      icon: User,
      title: "My Profile",
      action: () =>
        navigate("/profile"),
    },

    {
      id: 2,
      icon: Map,
      title: "My Trips",
      action: () =>
        navigate("/my-trips"),
    },

    {
      id: 3,
      icon: Heart,
      title: "Create Trip",
      action: () =>
        navigate("/create-trip"),
    },

    {
      id: 4,
      icon: Settings,
      title: "Dashboard",
      action: () =>
        navigate("/dashboard"),
    },
  ];




  return (
    <div
      ref={menuRef}
      className="relative"
    >

      {/* PROFILE BUTTON */}
      <button
        type="button"
        onClick={() =>
          setOpen(!open)
        }
        className="
          flex
          items-center
          gap-3

          px-3
          py-2

          rounded-2xl

          bg-white

          border
          border-slate-200

          shadow-sm

          hover:border-teal-300
          hover:shadow-md

          transition-all
          duration-300
        "
      >

        {/* AVATAR */}
        <div
          className="
            w-12
            h-12

            rounded-full

            bg-gradient-to-br
            from-teal-500
            to-cyan-500

            flex
            items-center
            justify-center

            text-white
            font-bold
            text-lg
          "
        >
          {user.firstName
            ? user.firstName[0]
            : "U"}
        </div>



        {/* USER INFO */}
        <div
          className="
            hidden
            sm:flex

            flex-col
            items-start
          "
        >

          <span
            className="
              text-xs
              text-slate-400
            "
          >
            Welcome Back
          </span>

          <h3
            className="
              text-base
              font-semibold
              text-slate-800
            "
          >
            Hi, {
              user.firstName ||
              "User"
            }
          </h3>
        </div>



        {/* ARROW */}
        <ChevronDown
          size={18}
          className={`
            hidden
            sm:block

            text-slate-500

            transition-transform
            duration-300

            ${
              open
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>



      {/* DROPDOWN */}
      {open && (

        <div
          className="
            absolute
            right-0
            top-[78px]

            w-[280px]

            rounded-3xl

            bg-white

            border
            border-slate-200

            shadow-[0_20px_60px_rgba(15,23,42,0.15)]

            overflow-hidden

            z-50
          "
        >

          {/* TOP INFO */}
          <div
            className="
              px-6
              py-5

              border-b
              border-slate-100

              flex
              items-center
              gap-4
            "
          >

            {/* IMAGE */}
            <div
              className="
                w-16
                h-16

                rounded-full

                bg-gradient-to-br
                from-teal-500
                to-cyan-500

                flex
                items-center
                justify-center

                text-white
                text-2xl
                font-bold
              "
            >
              {user.firstName
                ? user.firstName[0]
                : "U"}
            </div>



            {/* INFO */}
            <div>

              <h3
                className="
                  text-lg
                  font-bold
                  text-slate-800
                "
              >
                {user.firstName}{" "}
                {user.lastName}
              </h3>

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                {user.email}
              </p>
            </div>
          </div>



          {/* MENU */}
          <div className="p-3">

            {menuItems.map(
              (item) => {

                const Icon =
                  item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {

                      setOpen(false);

                      item.action();
                    }}

                    className="
                      w-full

                      flex
                      items-center
                      gap-4

                      px-4
                      py-4

                      rounded-2xl

                      text-slate-700

                      hover:bg-slate-100
                      hover:text-teal-600

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

                        bg-slate-100

                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon size={20} />
                    </div>

                    {/* TEXT */}
                    <span className="font-medium">
                      {item.title}
                    </span>
                  </button>
                );
              }
            )}
          </div>



          {/* LOGOUT */}
          <div
            className="
              p-3

              border-t
              border-slate-100
            "
          >

            <button
              type="button"
              onClick={
                handleLogout
              }
              className="
                w-full

                flex
                items-center
                gap-4

                px-4
                py-4

                rounded-2xl

                text-red-500

                hover:bg-red-50

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

                  bg-red-50

                  flex
                  items-center
                  justify-center
                "
              >
                <LogOut size={20} />
              </div>

              {/* TEXT */}
              <span className="font-semibold">
                Logout
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;