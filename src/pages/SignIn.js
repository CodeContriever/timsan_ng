import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Nav2 from "../components/Nav2";
import Input from "../components/profile/Input"
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../utils/auth';



const SignIn = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const handleSignIn = async () => {

    try {
      // Send the POST request to the server
      const response = await fetch('https://api.timsan.com.ng/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });


      // Check if the response indicates a successful login
      if (response.ok) {
        // Parse the response to JSON format
        const data = await response.json();

        if (data.success) {
          auth.login(data.user);
          navigate(redirectPath, { replace: true });
        } else {
          navigate('/verify_OTP');
        }

      } else {
        // Handle the case when the login is not successful
        toast.error('Login failed. Please check your credentials and try again.');
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

    handleSignIn();
  };



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
            <h2 className="text-white text-xl font-semibold font-lato">Log In</h2>
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
                <PasswordInput
                  name="password"
                  label="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  labelClasses="text-gray-800 text-md font-medium"
                  inputClasses="border border-gray-700 border-opacity-50 rounded-l-lg"
                />

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
            <p className="text-white">Don't have an account yet?</p>
            <Link to={"/signup"}>Sign Up</Link>
          </div>

        </div>




      </main >
    </div >
  );
};

export default SignIn;
