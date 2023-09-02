import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav2 from "../components/Nav2";

const SignUpInstitution = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <header className="sticky top-0 bg-white border-b-2 border-gray-200 shadow-md">
        <div className="container mx-auto px-8">
          <Nav2 />
        </div>
      </header>

      <main className="bg-[#38A926] md:bg-white min-h-screen flex items-center justify-center md:pt-12 md:pb-20">
        <div className="bg-[#38A926] md:rounded-2xl flex flex-col items-center pb-20">
          <div className="mt-6 mb-4">
            <img className="w-20 h-20" src="images/timsan-logo-1.png" alt="timsan_logo" />
          </div>
          <div className="flex flex-col gap-1 text-center px-8 mb-4">
            <h2 className="text-white text-xl font-semibold font-lato">Register</h2>
            <p className="text-white text-md">Let’s get you started! Register with a social account to begin.</p>
          </div>
          <div className="flex gap-6 mb-4">
            {/* Social buttons */}
          </div>
          {/* Animation */}
          {/* Register form */}
          <form className="self-start px-10 w-full mb-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">

              {/* Email field */}
              <div className="flex flex-col gap-0.5">
                <label htmlFor="email" className="text-sm font-medium text-white dark:text-white">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  // ... Other attributes ...
                  required
                />
              </div>

              {/* Password field */}
              <div className="flex flex-col gap-0.5">
                <label htmlFor="password" className="text-sm font-medium text-white dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  // ... Other attributes ...
                  required
                />
              </div>
            </div>

            <button type="submit" className="bg-white px-8 py-1.5 rounded-xl mb-6">
              Log In
            </button>
          </form>

          {/* Register button */}
          <button type="submit" className="bg-white px-8 py-1.5 rounded-xl mb-6">
            Register
          </button>
          <div className="flex gap-2">
            <p className="text-white">Do you have an account?</p>
            <Link to={"/signin"}>Sign In</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpInstitution;
