import React, { useState } from "react";

import {
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  Globe,
  FileText,
  ShieldCheck,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import InputField from "../common/InputField";
import Button from "../common/Button";

const RegisterForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "India",
    additionalInfo: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);



  // HANDLE CHANGE
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };



  // VALIDATION
  const validateForm = () => {

    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName =
        "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName =
        "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Email is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        "Phone number is required";
    }

    if (!formData.city.trim()) {
      newErrors.city =
        "City is required";
    }

    if (!formData.country.trim()) {
      newErrors.country =
        "Country is required";
    }

    if (!formData.password.trim()) {

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
      Object.keys(newErrors).length === 0
    );
  };



  // REGISTER
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    try {

      setLoading(true);

      const response = await fetch(
        "https://spingame-production.up.railway.app/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {

        alert(data.message);

        setLoading(false);

        return;
      }

      alert("User Registered Successfully");

      setLoading(false);

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert("Server Error");

      setLoading(false);
    }
  };



  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <InputField
        label="First Name"
        type="text"
        name="firstName"
        placeholder="Enter your first name"
        icon={User}
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
        required
      />



      <InputField
        label="Last Name"
        type="text"
        name="lastName"
        placeholder="Enter your last name"
        icon={User}
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
        required
      />



      <InputField
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter your email address"
        icon={Mail}
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />



      <InputField
        label="Phone Number"
        type="text"
        name="phone"
        placeholder="Enter your phone number"
        icon={Phone}
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        required
      />



      <InputField
        label="City"
        type="text"
        name="city"
        placeholder="Enter your city"
        icon={MapPin}
        value={formData.city}
        onChange={handleChange}
        error={errors.city}
        required
      />



      <InputField
        label="Country"
        type="text"
        name="country"
        placeholder="Enter your country"
        icon={Globe}
        value={formData.country}
        onChange={handleChange}
        error={errors.country}
        required
      />



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



      <InputField
        label="Additional Information"
        type="text"
        name="additionalInfo"
        placeholder="Testing details"
        icon={FileText}
        value={formData.additionalInfo}
        onChange={handleChange}
        error={errors.additionalInfo}
      />



      <Button
        type="submit"
        text="Create Account"
        loading={loading}
        icon={ShieldCheck}
      />
    </form>
  );
};

export default RegisterForm;