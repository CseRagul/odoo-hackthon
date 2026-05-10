import React, {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  User,
  Lock,
  ShieldCheck,
} from "lucide-react";

// COMPONENTS
import InputField from "../common/InputField";
import Button from "../common/Button";

const LoginForm = () => {

  // NAVIGATE
  const navigate =
    useNavigate();



  // FORM DATA
  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });



  // ERRORS
  const [errors, setErrors] =
    useState({});



  // LOADING
  const [loading, setLoading] =
    useState(false);




  // HANDLE CHANGE
  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };




  // VALIDATE
  const validateForm = () => {

    let newErrors = {};

    if (!formData.email.trim()) {

      newErrors.email =
        "Email is required";
    }

    if (
      !formData.password.trim()
    ) {

      newErrors.password =
        "Password is required";

    } else if (
      formData.password.length < 6
    ) {

      newErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors)
        .length === 0
    );
  };




  // HANDLE LOGIN
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      if (!validateForm())
        return;

      try {

        setLoading(true);

        const response =
          await fetch(
            "http://localhost:5000/api/auth/login",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body:
                JSON.stringify({
                  email:
                    formData.email,

                  password:
                    formData.password,
                }),
            }
          );

        const data =
          await response.json();

        // ERROR
        if (!response.ok) {

          alert(
            data.message
          );

          setLoading(false);

          return;
        }

        // SAVE TOKEN
        localStorage.setItem(
          "token",
          data.token
        );

        // SAVE USER
        localStorage.setItem(
          "user",
          JSON.stringify(
            data.user
          )
        );

        alert(
          "Login Successful"
        );

        // CLEAR FORM
        setFormData({
          email: "",
          password: "",
        });

        setLoading(false);

        // NAVIGATE DASHBOARD
        navigate(
          "/dashboard"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Server Error"
        );

        setLoading(false);
      }
    };




  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      {/* EMAIL */}
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        icon={User}
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />



      {/* PASSWORD */}
      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        icon={Lock}
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        required
      />



      {/* OPTIONS */}
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          flex-wrap
        "
      >

        {/* REMEMBER */}
        <label
          className="
            flex
            items-center
            gap-2

            text-sm
            text-slate-500
          "
        >
          <input
            type="checkbox"
            className="
              w-4
              h-4

              accent-teal-500
            "
          />

          Remember me
        </label>



        {/* FORGOT */}
        <button
          type="button"
          className="
            text-sm
            font-semibold

            bg-gradient-to-r
            from-teal-600
            to-cyan-500

            bg-clip-text
            text-transparent
          "
        >
          Forgot Password?
        </button>
      </div>



      {/* BUTTON */}
      <Button
        type="submit"
        text="Login To Account"
        loading={loading}
        icon={ShieldCheck}
      />



      {/* SECURITY */}
      <div
        className="
          flex
          items-center
          justify-center
          gap-2

          text-sm
          text-slate-400

          pt-2
        "
      >
        <ShieldCheck size={16} />

        <span>
          Secure login protected
        </span>
      </div>
    </form>
  );
};

export default LoginForm;