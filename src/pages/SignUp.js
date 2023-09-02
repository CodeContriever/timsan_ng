import React from "react";
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav2 from "../components/Nav2";






const SignUp = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption) {
      navigate(selectedOption);
    }
  };

  return (
    <div
      className="">

      <header
        className='box-border w-[100%]  py-8 flex bg-white  sticky top-0 left-0 right-0 z-[10001] border-b-2 border-gray-200 my-0 shadow-[inset 0 -1px #e9eaea]'
      >
        {/* Wrapper */}
        <div className="container mx-auto px-8">

          <Nav2 />

        </div>

      </header>

      <main className="bg-[#38A926] md:bg-[#FFFFFF] md:pt-12  md:pb-20 min-h-screen flex items-center justify-center">

        <div className="bg-[#38A926] md:rounded-2xl flex flex-col items-center pb-20">

          {/* logo */}
          <div className="mt-6 mb-4">
            <img className="w-20 h-20" src="images/timsan-logo-1.png" alt="timsan_logo" />
          </div>

          {/* Text: Log In */}
          <div className="flex flex-col gap-1 text-center px-8 mb-4">

            <h2 className="text-[#FFF9F8] text-xl font-semibold font-lato">Register</h2>

            <p className="text-[#FFF9F8] text-md ">
              Let’s get you started! Register with a social account to begin.
            </p>
          </div>

          {/* Socials */}
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

          {/* OR */}
          <div className="flex flex-row gap-3 items-center mb-4">

            <div>
              <img className="w-32" src="images/rectangle-1038.png" alt="" />
            </div>

            <p className="text-base text-[#B3F7FC]">OR</p>

            <div>
              <img className="w-32" src="images/rectangle-1038.png" alt="" />
            </div>
          </div>

          {/* Register form */}
          <form className="self-start px-10 w-full mb-4">

            <div className="flex flex-col gap-4">

              {/* Register as */}
              <div className="flex flex-col gap-0.5">

                <label
                  for="register"
                  className="text-sm font-medium text-white dark:text-white">Register as</label>

                <select
                  id="register"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleSelectChange}
                >

                  <option value="">Select an option</option>
                  <option value="/signup_as_member">Student</option>
                  <option value="/signup_as_institution">Institution</option>
                  <option value="/signup_as_zone">Zone</option>
                  <option value="/signup_as_state">State</option>
                </select>


              </div>

            </div>

          </form>



          <div className="flex gap-2">
            <p className="text-white">Already have an account?</p>
            <Link to={'/signin'}>Log In</Link>
          </div>


        </div>


      </main>

    </div >
  )
}

export default SignUp