import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Nav1 from "../components/Nav1";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Input from "../components/profile/Input"
import Button from "../components/Button";
import axios from "axios";

const Donate = () => {

  return (

    <div>

      <Header />

      <main>

        <Hero />

        <Form />

        <CTASection />

      </main>

      <Footer />

    </div>
  );
};

const Header = () => {
  return (

    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 bg-white border-b-2 border-gray-200 shadow-md z-[10001]"
    >

      <div className="container mx-auto px-8 py-8">

        <Nav1 />

      </div>

    </motion.header>

  );
};

const Hero = () => {

  return (
    <section className="relative bg-gradient-to-b from-white via-green-200 to-white bg-opacity-97 py-12">

      <div className="container mx-auto px-8">

        <div className="grid grid-rows-2 md:grid-cols-2 justify-between gap-x-40">
          <div className="flex items-center">
            {/* Texts  and button  */}
            <div className="flex flex-col gap-20">

              {/* Texts */}
              <div className="flex flex-col gap-12">

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  DONATE TO THE CAUSE <br /> OF ALLAH!
                </h2>

                <p className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
                  For those who give in charity, men and women, and loan to Allah a beautiful loan,

                  it shall be increased manifold (to their credit), and they shall have (besides) a liberal

                  reward.”
                </p>

              </div>

              {/* Button */}
              <Button
                // onClick={handleUpload}
                className="w-40 bg-[#38A926] hover:bg-white text-[#F2F2F2] hover:text-[#444] hover:border hover:border-gray-300"
              >
                Donate Now
              </Button>

            </div>

          </div>

          {/* Image */}
          <div>
            <img src="images/donation_box.png" alt="donation_box" />
          </div>
        </div>
      </div>
    </section>

  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = () => {
    // Simulate an API call to send formData
    axios
      .post("https://example.com/api/submit", formData) // Replace with your actual API endpoint

      .then((response) => {
        // Handle successful response,
        // alert("Form submitted successfully!");
        setSuccessModalVisible(true);

        setFormData({
          // Clear the form data after successful submission
          name: "",
          email: "",
          amount: "",
        });

      })

      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error("Error submitting form:", error);
      });

  };


  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const handleCloseSuccessModal = () => {
    setSuccessModalVisible(false); // Close the success modal
  };

  return (

    <section className="bg-white dark:bg-gray-900 mb-8">

      <div className="container mx-auto">

        <div className="rounded-lg bg-conic-gradient from-[rgba(83, 201, 64, 0.12)] via-[rgba(56, 169, 38, 0.02)] to-transparent shadow-md"
        >

          <div className="flex items-center justify-center ">

            {/* Texts and Form */}
            <div className="flex flex-col gap-12">

              {/* Texts */}
              <div className="flex flex-col gap-4 px-4 md:px-12">

                <h2 className="text-center font-lato text-[#38A926] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  WE ARE GLAD TO GET YOUR DONATION
                </h2>

                <p className="md:max-w-5xl text-center text-base font-medium leading-7">
                  You can help make a difference by donating to us. Your generous donations go directly towards the cause of Allah and help us continue to develop the association and facilitate different activities of the association.
                </p>

                <p className="text-center text-base font-medium leading-7">
                  Together, we can continue to fight and contribute to the cause of Allah.
                  Thank you for your support!
                </p>

              </div>


              {/* Form */}

              <div className="px-8 md:px-20 lg:px-64py-8 flex flex-col gap-y-4">

                {/* Name */}
                <div>

                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    label="Name"
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

                {/* Amount */}
                <div>

                  <Input
                    type="number"
                    name="amount"
                    id="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    label="Amount"
                    required
                    labelClasses="text-blue-500"
                    inputClasses="border border-gray-700 border-opacity-50 bg-white"
                  />

                </div>


                {/* Button */}
                <div className="py-4 flex flex-col gap-4 items-center justify-center">

                  <Button onClick={handleSubmit} className="bg-[#38A926] hover:bg-white text-[#F2F2F2] hover:text-[#444]  hover:border hover:border-gray-300">
                    Donate Now
                  </Button>

                </div>

              </div>

            </div>

          </div>

          {/* Success Modal */}
          {successModalVisible && (
            <div
              id="deleteModal"
              tabIndex="-1"
              aria-hidden="true"
              className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center"
            >
              <div className="relative p-4 w-full max-w-md">
                <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                  <button
                    type="button"
                    className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={handleCloseSuccessModal}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <h2>Success!</h2>
                  <p>Your donations has been processed successfully</p>
                </div>
              </div>
            </div>

          )}

        </div>

        {/* Bank Donation */}

        <div className="flex items-center justify-center mt-12 px-8 md:px-0 ">

          <div className="flex flex-col gap-y-8">

            {/* Heading */}
            <div className="mb-4">

              <h1 className="text-center text-base sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                DONATE DIRECTLY TO OUR BANK <br /> ACCOUNT
              </h1>

            </div>

            {/* Bank details */}
            <div className="flex flex-col gap-10">

              {/* Bank */}
              <div className="flex flex-col gap-4">
                <p className="w-40 rounded-md py-1 text-center bg-[#38A926] hover:bg-white text-[#F2F2F2] hover:text-[#444]  hover:border hover:border-gray-300">
                  Bank
                </p>

                <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
                  Guaranty Trust Bank
                </p>
              </div>

              {/* Account Name */}
              <div className="flex flex-col gap-4">
                <p className="w-40 rounded-md py-1 text-center bg-[#38A926] hover:bg-white text-[#F2F2F2] hover:text-[#444]  hover:border hover:border-gray-300">
                  Account Name
                </p>

                <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
                  TIJANIYYAH MUSLIM STUDENTS ASSOCIATION OF NIGERIA
                </p>
              </div>

              {/* Account Number */}
              <div className="flex flex-col gap-4">
                <p className="w-40 rounded-md py-1 text-center bg-[#38A926] hover:bg-white text-[#F2F2F2] hover:text-[#444]  hover:border hover:border-gray-300">
                  Account Number
                </p>

                <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
                  567258736Y89R5
                </p>
              </div>

            </div>

          </div>



        </div>

      </div>

    </section>

  );
}


const CTASection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mb-8">
      <div className="container mx-auto">
        <CTA />
      </div>
    </section>
  );
};

export default Donate;
