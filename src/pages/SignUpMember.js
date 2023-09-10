import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav2 from "../components/Nav2";
import Input from "../components/profile/Input"
import Button from "../components/Button";
import { accountTypes } from '../constants/index';
import toast, { Toaster } from 'react-hot-toast';



const SignUpMember = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    account_type: ""

  });


  const handleSelectChange = (e) => {
    const selectedAccountType = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      account_type: selectedAccountType,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleRegister = async () => {

    try {
      // Send the POST request to the server
      const response = await fetch('https://api.timsan.com.ng/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });


      if (response.ok) {
        // Handle successful registration

        // Clear the form data
        setFormData({
          firstName: "",
          lastName: "TIMSAN",
          email: "",
          password: "",
          confirmPassword: "",
          account_type: "",
        });

        setVerifyEmailModal(true);

      }

      else {
        toast.error('An error occurred, please try again later.');
      }

    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('An error occurred, please try again later.');
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, account_type } = formData;

    if (!firstName || !lastName || !email || !password || !account_type) {
      toast.error('Please fill in all the required fields correctly');
      return;
    }


    // Call the handleRegister function to initiate the registration process
    handleRegister();
  };



  const [verifyEmailModal, setVerifyEmailModal] = useState(false);

  return (

    <div>

      {/* ... Header section ... */}
      <header className="sticky top-0 bg-white border-b-2 border-gray-200 shadow-md z-[10001]">
        <div className="container mx-auto px-8 py-8">
          <Nav2 />
        </div>
      </header>

      <main className="bg-[#38A926] md:bg-white min-h-screen flex items-center justify-center md:pt-12 md:pb-20">


        <div className="">
          <Toaster position='bottom-center' reverseOrder={false}></Toaster>
        </div>

        <div className="bg-[#38A926] md:rounded-2xl flex flex-col items-center pb-20">

          {/* ... Logo*/}
          <div className="mt-6 mb-4">
            <img className="w-20 h-20" src="images/timsan-logo-1.png" alt="timsan_logo" />
          </div>

          {/* Form header*/}
          <div className="flex flex-col gap-1 text-center px-8 mb-4">
            <h2 className="text-white text-xl font-semibold font-lato">Register</h2>
            <p className="text-white text-md">Let’s get you started! Register with a social account to begin.</p>
          </div>

          {/* Social buttons */}
          <div className="flex gap-6 mb-4">

            <button className="bg-[#D9D9D9] rounded-full px-4 py-4">
              <img src="images/flat-color-icons-google.png" alt="google" />
            </button>

            <button className="bg-[#D9D9D9] rounded-full px-3">
              <img src="images/apple-logo.png" alt="apple" />
            </button>

            <button className="bg-[#D9D9D9] rounded-full px-3">
              <img src="images/facebook-logo.png" alt="facebook" />
            </button>
          </div>

          {/* Register form */}
          <form className="self-start px-10 w-full mb-4" onSubmit={handleSubmit}>

            <div className="flex flex-col gap-4">

              {/* First Name */}
              <div>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  label="First Name"
                  required
                  labelClasses="text-gray-800"
                  inputClasses="border border-gray-700 border-opacity-50 bg-white"
                />

              </div>

              {/* Last Name */}
              <div>

                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  label="Last Name"
                  required
                  labelClasses="text-blue-500"
                  inputClasses="border border-gray-700 border-opacity-50 bg-white"
                />

              </div>

              {/* Email Address*/}
              <div>

                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  label="Email Address"
                  required
                  labelClasses="text-blue-500"
                  inputClasses="border border-gray-700 border-opacity-50 bg-white"
                />

              </div>

              {/* Password field */}
              <div>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  label="Password"
                  required
                  labelClasses="text-blue-500"
                  inputClasses="border border-gray-700 border-opacity-50"
                />
              </div>

              {/* Confrim Password field */}
              <div>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  label="Confirm Password"
                  required
                  labelClasses="text-blue-500"
                  inputClasses="border border-gray-700 border-opacity-50"
                />
              </div>

              {/* Account type */}
              <div className="flex flex-col gap-0.5">

                <label
                  for="account_type"
                  className="text-md font-medium text-gray-800 dark:text-white">Account Type</label>

                <select
                  id="account_type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleSelectChange}
                >

                  <option value="">Select an account type</option>
                  {accountTypes.map((accountType, index) => (
                    <option key={index} value={accountType}>
                      {accountType}
                    </option>
                  ))}
                </select>


              </div>


            </div>

            {/* Submit Button */}
            <div className="flex flex-row gap-4 items-center justify-center py-4">

              <Button
                onClick={handleSubmit}
                className="bg-white text-[#444]"
              >
                Submit
              </Button>


            </div>


          </form>

          <div className="flex gap-2">
            <p className="text-white">Do you have an account?</p>
            <Link to={"/signin"}>Sign In</Link>
          </div>

        </div>

        {/* Success Modal */}
        {verifyEmailModal && (
          <div
            id="successModal"
            className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center"
          >
            <div className="relative p-4 w-full max-w-md">

              <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

                <h2>Check Your Email!</h2>
                <p>
                  A verification email has been sent to your email address. Please check your email to proceed.
                </p>


              </div>
            </div>
          </div>
        )}


      </main >
    </div >
  );
};

export default SignUpMember;
