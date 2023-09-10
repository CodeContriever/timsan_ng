import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Nav3 from "../components/Nav3";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Input from "../components/profile/Input"
import Button from "../components/Button";
import axios from "axios";

const Profile = () => {

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

        <Nav3 />

      </div>

    </motion.header>

  );
};

const Hero = () => {
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      // Step 1: Create a new FileReader object to read the file
      const fileReader = new FileReader();

      // Step 2: Read the file as a Data URL, which will convert the file to a Base64-encoded string
      fileReader.readAsDataURL(file);

      // Step 3: When the file reading is complete, the onload event will be triggered
      fileReader.onload = () => {
        // Step 4: Resolve the promise with the Base64-encoded result of the file
        resolve(fileReader.result);
      };

      // Step 5: If there is an error while reading the file, the onerror event will be triggered
      fileReader.onerror = (error) => {
        // Step 6: Reject the promise with the error object
        reject(error);
      };
    });
  }

  const [file, setFile] = useState()
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  const handleUpload = () => {
    "Uploaded"
  };

  return (
    <section
      className="relative bg-gray-900 bg-opacity-40  py-32 mb-8"
    >
      <div className="container mx-auto px-8">

        <div className="flex items-center justify-center">

          <div className="flex flex-col justify-center items-center gap-8">

            {/* Profile avatar */}
            <div className='profile flex justify-center py-8'>
              <label htmlFor="profile">
                <img
                  src={file || `/images/avatar.png`}
                  className={`border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer hover:border-gray-200`}
                  alt="avatar"
                />
              </label>

              <input
                onChange={onUpload}
                type="file"
                id='profile'
                name='profile'
                className="hidden"
              />
            </div>

            {/* Upload button */}
            <Button
              onClick={handleUpload}
              className="bg-[#38A926] hover:bg-white text-[#F2F2F2] hover:text-[#444] hover:border hover:border-gray-300"
            >
              Upload
            </Button>



          </div>

        </div>
      </div>
    </section>
  );
};

const Form = () => {

  const [activeSection, setActiveSection] = useState("form1");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const isForm1Active = activeSection === "form1";

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


  const [formData, setFormData] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [successModalVisible, setSuccessModalVisible] = useState(false);


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

  const handleCloseSuccessModal = () => {
    setSuccessModalVisible(false); // Close the success modal
  };

  return (

    <section className="bg-white dark:bg-gray-900 mb-8">

      <div className="container mx-auto">

        <div
          className="rounded-lg border border-green-400 border-opacity-40 bg-white shadow-md"
        >

          {isForm1Active ? (

            <div className="px-4 py-2 md:px-0 md:py-0">

              <div className="rounded-lg border border-green-400 border-opacity-40 bg-white shadow-md">

                <div className="px-8 md:px-20 lg:px-64 py-8 flex flex-col gap-y-4">

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
                      labelClasses="text-blue-500"
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

                  {/*state Of Residence*/}
                  <div>

                    <Input
                      type="text"
                      name="stateOfResidence"
                      id="stateOfResidence"
                      value={formData.stateOfResidence}
                      onChange={handleInputChange}
                      label="state Of Residence"
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
                      label="state Of Origin"
                      required
                      labelClasses="text-blue-500"
                      inputClasses="border border-gray-700 border-opacity-50 bg-white"
                    />

                  </div>




                </div>

              </div>

            </div>

          ) : (

            <div className="px-4 py-2 md:px-0 md:py-0">

              <div className="rounded-lg border border-green-400 border-opacity-40 bg-white shadow-md">

                <div className="px-8 md:px-20 lg:px-64 py-8 flex flex-col gap-y-4">

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

                  {/* Occupation */}
                  <div>
                    <Input
                      type="text"
                      name="occupation"
                      id="occupation"
                      value={formData.occupation} // Use formData.occupation here
                      onChange={handleInputChange}
                      label="Occupation"
                      required
                      labelClasses="text-blue-500"
                      inputClasses="border border-gray-700 border-opacity-50 bg-white"
                    />
                  </div>

                  {/* Membership Status */}
                  <div>
                    <Input
                      type="text"
                      name="membershipStatus"
                      id="membershipStatus"
                      value={formData.membershipStatus} // Use formData.membershipStatus here
                      onChange={handleInputChange}
                      label="Membership Status"
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

                </div>

              </div>

            </div>

          )}

          {/* Buttons */}
          <div className="flex flex-row gap-4 items-center justify-center py-4">
            {isForm1Active && (
              <Button
                onClick={handleNext}
                className="bg-[#38A926] hover:bg-white text-[#F2F2F2] hover:text-[#444] hover:border hover:border-gray-300"
              >
                Next
              </Button>
            )}

            {!isForm1Active && (
              <>
                <Button
                  onClick={handleBack}
                  className="text-[#444] hover:text-white border border-gray-300 hover:bg-[#38A926]"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-[#38A926] hover:bg-white text-[#F2F2F2] hover:text-[#444] hover:border hover:border-gray-300"
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

export default Profile;
