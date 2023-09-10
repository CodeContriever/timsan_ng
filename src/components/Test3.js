import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav2 from "../components/Nav2";
import Input from "../components/profile/Input"
import Button from "../components/Button";




const SignUpMember = () => {
  const [activeSection, setActiveSection] = useState("form1");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const isForm1Active = activeSection === "form1";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    phoneNumber: "",
    email: "",
    address: "",
    stateOfOrigin: "",
    password: "",
    institution: "",
    courseOfStudy: "",
    yearOfGraduation: "",

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleNext = () => {
    if (isForm1Active) {
      handleSectionChange("form2");
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    handleSectionChange("form1");
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
          firstName: "",
          lastName: "",
          otherName: "",
          phoneNumber: "",
          email: "",
          address: "",
          stateOfResidence: "",
          stateOfOrigin: "",
          password: "",
          institution: "",
          courseOfStudy: "",
          occupation: "",
          membershipStatus: "",
          yearOfGraduation: "",
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
    <div>
      {/* ... Header section ... */}
      <header className="sticky top-0 bg-white border-b-2 border-gray-200 shadow-md z-[10001]">
        <div className="container mx-auto px-8 py-8">
          <Nav2 />
        </div>
      </header>

      <main className="bg-[#38A926] md:bg-white min-h-screen flex items-center justify-center md:pt-12 md:pb-20">

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


            {isForm1Active ? (

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

                {/* Other Name */}
                <div>

                  <Input
                    type="text"
                    name="otherName"
                    id="otherName"
                    value={formData.otherName}
                    onChange={handleInputChange}
                    label="Other Name"
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

                {/* Phone Number */}
                <div>

                  <Input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    label="Phone Number"
                    required
                    labelClasses="text-blue-500"
                    inputClasses="border border-gray-700 border-opacity-50 bg-white"
                  />

                </div>

                {/*state Of Origin */}
                <div>

                  <Input
                    type="text"
                    name="stateOfOrigin"
                    id="stateOfOrigin"
                    value={formData.stateOfOrigin}
                    onChange={handleInputChange}
                    label="State Of Origin"
                    required
                    labelClasses="text-blue-500"
                    inputClasses="border border-gray-700 border-opacity-50 bg-white"
                  />

                </div>

                {/*Address */}
                <div>

                  <Input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    label="Address"
                    required
                    labelClasses="text-blue-500"
                    inputClasses="border border-gray-700 border-opacity-50 bg-white"
                  />

                </div>


              </div>

            ) : (

              <div className="flex flex-col gap-4">

                {/* institution */}
                <div>
                  <Input
                    type="text"
                    name="institution"
                    id="institution"
                    value={formData.institution} // Use formData.institution here
                    onChange={handleInputChange}
                    label="Institution"
                    required
                    labelClasses="text-blue-500"
                    inputClasses="border border-gray-700 border-opacity-50 bg-white"
                  />
                </div>

                {/* Course of Study */}
                <div>
                  <Input
                    type="text"
                    name="courseOfStudy" // Correct field name
                    id="course"
                    value={formData.courseOfStudy} // Use formData.courseOfStudy here
                    onChange={handleInputChange}
                    label="Course of Study"
                    required
                    labelClasses="text-blue-500"
                    inputClasses="border border-gray-700 border-opacity-50 bg-white"
                  />
                </div>

                {/* Year of Graduation */}
                <div>
                  <Input
                    type="text"
                    name="yearOfGraduation"
                    id="yearOfGraduation"
                    value={formData.yearOfGraduation} // Use formData.yearOfGraduation here
                    onChange={handleInputChange}
                    label="Year of Graduation"
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

              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-row gap-4 items-center justify-center py-4">
              {isForm1Active && (
                <Button
                  onClick={handleNext}
                  className="bg-[#38A926] hover:bg-white border border-gray-300 text-white hover:text-[#444] "
                >
                  Next
                </Button>
              )}

              {!isForm1Active && (
                <>
                  <Button
                    onClick={handleBack}
                    className="text-white hover:border hover:border-gray-300"
                  >
                    Back
                  </Button>

                  <Button
                    onClick={handleSubmit}
                    className="bg-white text-[#444]"
                  >
                    Submit
                  </Button>
                </>
              )}
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
                    <p>Your form has been submitted successfully.</p>
                  </div>
                </div>
              </div>
            )}

          </form>

          <div className="flex gap-2">
            <p className="text-white">Do you have an account?</p>
            <Link to={"/signin"}>Sign In</Link>
          </div>
        </div>
      </main >
    </div >
  );
};

export default SignUpMember;
