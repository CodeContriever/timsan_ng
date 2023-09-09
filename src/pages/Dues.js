import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Nav1 from "../components/Nav1";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Input from "../components/profile/Input"
import Button from "../components/Button";
import axios from "axios";

const Dues = () => {

  return (
    <div>

      <Header />

      <main>
        <div className="container mx-auto px-4 py-20">

          <div className="grid grid-cols-3 gap-4">

            <div>
              <SideMenu />
            </div>

            <div className="col-span-3 lg:col-span-2 w-[100%]">
              <PaymentOption />
            </div>

          </div>

        </div>

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

const SideMenu = () => {

  return (
    <aside className="bg-[#38A926] shadow-xl box-border hidden lg:flex transition-transform duration-300 ease-in-out bottom-0 flex-shrink-0 w-80 max-h-screen-[calc(100vh-88px)] left-0 top-0 overflow-hidden sticky z-10 transform-none rounded-xl px-4 py-12">

      <div className="flex flex-col gap-12">

        <div>
          <img src="images/donation_box.png" alt="donation_box" />
        </div>

        <div>

          <p className="text-center text-white text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
            Want to pay directly into our bank account
          </p>

        </div>

        {/* Bank details */}
        <div className="flex flex-col gap-6 justify-start">

          {/* Bank */}
          <div className="flex flex-col gap-4">
            <p className="w-40 rounded-md py-1 text-center bg-white text-[#444]  hover:border hover:border-gray-300">
              Bank
            </p>

            <p className="text-base font-medium leading-7 text-white">
              Guaranty Trust Bank
            </p>
          </div>

          {/* Account Name */}
          <div className="flex flex-col gap-4">
            <p className="w-40 rounded-md py-1 text-center bg-white text-[#444]  hover:border hover:border-gray-300">
              Account Name
            </p>

            <p className="text-base font-medium leading-7  text-white">
              TIJANIYYAH MUSLIM STUDENTS ASSOCIATION OF NIGERIA
            </p>
          </div>

          {/* Account Number */}
          <div className="flex flex-col gap-4">
            <p className="w-40 rounded-md py-1 text-center bg-white text-[#444]  hover:border hover:border-gray-300">
              Account Number
            </p>

            <p className="text-base font-medium leading-7  text-white">
              567258736Y89R5
            </p>
          </div>

        </div>

      </div>

    </aside>

  );
};

const PaymentOption = () => {
  const [formData, setFormData] = useState({
    chapterName: "",
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

    <div className="bg-gradient-to-t from-rgba-228-250-230-97 via-rgba-255-255-255-97"
    >

      <div className="flex flex-col justify-start gap-4">

        {/* Payment option*/}
        <div className="flex flex-col justify-start gap-12">

          {/* Heading */}
          <div className="">

            <h2 className="font-lato text-[#38A926] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              Select Your Payement Option:
            </h2>

          </div>

          <div className="flex flex-row gap-6">

            <Button onClick={handleSubmit} className="bg-[#38A926] hover:bg-white text-[#F2F2F2] hover:text-[#444]  hover:border hover:border-gray-300">
              paystack
            </Button>

            <Button onClick={handleSubmit} className="bg-[#38A926] hover:bg-white text-[#F2F2F2] hover:text-[#444]  hover:border hover:border-gray-300">
              Interswitch
            </Button>

          </div>

        </div>


        {/* Form */}
        <div className="md:pr-10 lg:pr-80 py-8 flex flex-col gap-y-4">

          {/* Chapter Name */}
          <div>

            <Input
              type="text"
              name="name"
              id="name"
              value={formData.chapterName}
              onChange={handleInputChange}
              label="Chapter Name"
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
          <div className="mt-4">

            <Button onClick={handleSubmit} className="bg-[#38A926] hover:bg-white text-[#F2F2F2] hover:text-[#444]  hover:border hover:border-gray-300">
              Donate Now
            </Button>

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

export default Dues;
