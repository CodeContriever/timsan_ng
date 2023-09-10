import React from "react";
import { Link } from "react-router-dom";
import Nav2 from "../components/Nav2";



const EmailVerificationSucess = () => {

  return (

    <div>

      {/* ... Header section ... */}
      <header className="sticky top-0 bg-white border-b-2 border-gray-200 shadow-md z-[10001]">
        <div className="container mx-auto px-8 py-8">
          <Nav2 />
        </div>
      </header>

      <main className="bg-[#38A926] md:bg-white min-h-screen flex items-center justify-center md:pt-12 md:pb-20">

        <div className="bg-[#38A926] md:rounded-2xl flex flex-col items-center pb-20">

          {/* Verification Success Modal */}

          <div
            className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center"
          >
            <div className="relative p-4 w-full max-w-md">

              <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

                <h2>Verification Successful</h2>
                <p>Your email has been successfully verified.</p>

                <Link to={'/signin'}> Continue to Sign In</Link>

              </div>
            </div>
          </div>

        </div>






      </main >
    </div >
  );
};

export default EmailVerificationSucess;
