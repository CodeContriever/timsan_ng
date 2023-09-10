import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Nav3 from "../components/Nav3";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Button from "../components/Button";
// import axios from "axios";
import { useNavigate } from "react-router-dom";


const EditProfile = () => {

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

  // const handleUpload = () => {
  //   "Uploaded"
  // };

  const navigate = useNavigate();
  const handleEdit = () => {
    navigate('/profile');
  };

  return (
    <section
      className="relative bg-gray-900 bg-opacity-40  py-32 mb-8"
    >
      <div className="container mx-auto px-8">

        {/*Edit profile button */}
        <Button
          onClick={handleEdit}
          className="bg-[#38A926] hover:bg-white text-[#F2F2F2] hover:text-[#444] hover:border hover:border-gray-300"
        >
          Edit profile
        </Button>

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

            {/* Profile name and status */}
            <div className="flex flex-col gap-4 items-center justify-center">

              <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">
                Oyedeji Adekunle
              </h4>

              <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
                Member
              </p>
            </div>

            {/* Profile socials */}
            <div className="flex flex-row gap-2">

              {/* facebook */}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 37 37" fill="none">
                  <g clip-path="url(#clip0_477_3988)">
                    <path d="M6.66247 -0.000457764C2.97176 -0.000457764 0 2.94407 0 6.60097V29.5517C0 33.2086 2.97176 36.1532 6.66247 36.1532H19.2166V22.0194H15.4447V16.9307H19.2166V12.5833C19.2166 9.16766 21.4453 6.03155 26.5792 6.03155C28.6578 6.03155 30.1949 6.22928 30.1949 6.22928L30.074 10.9812C30.074 10.9812 28.5064 10.9666 26.7958 10.9666C24.9444 10.9666 24.6476 11.8118 24.6476 13.2149V16.9308H30.2211L29.9782 22.0194H24.6476V36.1532H29.8254C33.5162 36.1532 36.4879 33.2087 36.4879 29.5518V6.60101C36.4879 2.94411 33.5162 -0.00042161 29.8254 -0.00042161L6.66247 -0.000457764Z" fill="#FFF9F8" />
                  </g>
                  <defs>
                    <clipPath id="clip0_477_3988">
                      <rect width="36.4879" height="36.1536" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              {/* Linkedln*/}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 38 37" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.21094 4.27524C2.21094 3.54092 2.50534 2.83667 3.02939 2.31743C3.55343 1.79818 4.26419 1.50647 5.0053 1.50647H32.8608C33.2281 1.50588 33.5918 1.57707 33.9313 1.71596C34.2708 1.85486 34.5793 2.05873 34.8391 2.31592C35.0989 2.5731 35.305 2.87854 35.4456 3.21475C35.5861 3.55095 35.6584 3.91133 35.6582 4.27524V31.8755C35.6586 32.2395 35.5866 32.6 35.4462 32.9363C35.3059 33.2727 35.1 33.5783 34.8403 33.8358C34.5806 34.0932 34.2722 34.2974 33.9328 34.4367C33.5934 34.5759 33.2296 34.6475 32.8623 34.6473H5.0053C4.63821 34.6473 4.27472 34.5756 3.93559 34.4364C3.59647 34.2971 3.28835 34.093 3.02885 33.8358C2.76935 33.5785 2.56355 33.2731 2.42321 32.937C2.28287 32.6009 2.21074 32.2407 2.21094 31.877V4.27524ZM15.45 14.1422H19.979V16.3957C20.6328 15.1002 22.3051 13.9343 24.8182 13.9343C29.6362 13.9343 30.7779 16.5147 30.7779 21.2494V30.0196H25.9022V22.3279C25.9022 19.6315 25.2485 18.11 23.5883 18.11C21.285 18.11 20.3272 19.7505 20.3272 22.3279V30.0196H15.45V14.1422ZM7.08816 29.8132H11.9654V13.9343H7.08816V29.8117V29.8132ZM12.6632 8.75527C12.6724 9.16904 12.5981 9.58046 12.4446 9.96538C12.2912 10.3503 12.0617 10.701 11.7696 10.9968C11.4775 11.2927 11.1287 11.5278 10.7437 11.6882C10.3587 11.8487 9.94522 11.9314 9.52752 11.9314C9.10983 11.9314 8.69634 11.8487 8.31133 11.6882C7.92632 11.5278 7.57753 11.2927 7.28545 10.9968C6.99336 10.701 6.76386 10.3503 6.61041 9.96538C6.45696 9.58046 6.38265 9.16904 6.39184 8.75527C6.40989 7.9431 6.74819 7.17022 7.33427 6.60215C7.92036 6.03408 8.70765 5.71598 9.52752 5.71598C10.3474 5.71598 11.1347 6.03408 11.7208 6.60215C12.3069 7.17022 12.6452 7.9431 12.6632 8.75527Z" fill="#FFF9F8" />
                </svg>
              </button>

              {/* Instagram */}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 37 36" fill="none">
                  <path d="M18.6203 11.9077C15.2702 11.9077 12.5363 14.5849 12.5363 17.8654C12.5363 21.1459 15.2702 23.8231 18.6203 23.8231C21.9703 23.8231 24.7042 21.1459 24.7042 17.8654C24.7042 14.5849 21.9703 11.9077 18.6203 11.9077ZM36.8674 17.8654C36.8674 15.3983 36.8902 12.9535 36.7487 10.4909C36.6073 7.6305 35.9409 5.09189 33.8049 3.00022C31.6644 0.904083 29.0765 0.256023 26.1555 0.117472C23.6362 -0.0210786 21.1396 0.00126836 18.6248 0.00126836C16.1054 0.00126836 13.6089 -0.0210786 11.0941 0.117472C8.17309 0.256023 5.5807 0.908553 3.44471 3.00022C1.30416 5.09636 0.642369 7.6305 0.500883 10.4909C0.359397 12.958 0.382217 15.4028 0.382217 17.8654C0.382217 20.328 0.359397 22.7772 0.500883 25.2399C0.642369 28.1003 1.30872 30.6389 3.44471 32.7305C5.58526 34.8267 8.17309 35.4748 11.0941 35.6133C13.6135 35.7519 16.11 35.7295 18.6248 35.7295C21.1442 35.7295 23.6407 35.7519 26.1555 35.6133C29.0765 35.4748 31.6689 34.8222 33.8049 32.7305C35.9455 30.6344 36.6073 28.1003 36.7487 25.2399C36.8948 22.7772 36.8674 20.3325 36.8674 17.8654ZM18.6203 27.0321C13.44 27.0321 9.25934 22.9381 9.25934 17.8654C9.25934 12.7926 13.44 8.69868 18.6203 8.69868C23.8005 8.69868 27.9812 12.7926 27.9812 17.8654C27.9812 22.9381 23.8005 27.0321 18.6203 27.0321ZM28.3645 10.4641C27.1551 10.4641 26.1784 9.50764 26.1784 8.32326C26.1784 7.13887 27.1551 6.18242 28.3645 6.18242C29.574 6.18242 30.5507 7.13887 30.5507 8.32326C30.5511 8.60449 30.4948 8.88304 30.3851 9.14294C30.2753 9.40283 30.1143 9.63898 29.9112 9.83784C29.7081 10.0367 29.467 10.1944 29.2016 10.3018C28.9362 10.4093 28.6517 10.4644 28.3645 10.4641Z" fill="#FFF9F8" />
                </svg>
              </button>

            </div>


          </div>

        </div>
      </div>
    </section>
  );
};


const Form = () => {

  return (

    <section className="bg-white dark:bg-gray-900 mb-8">

      <div className="container mx-auto">


        {/* Texts and Profile Details*/}
        <div className="flex flex-col gap-12">

          {/* Text */}
          <div className="">

            <h2 className="font-lato text-[#38A926] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              About me
            </h2>

          </div>

          <div className="flex flex-col gap-y-6">
            {/* Profile Details */}
            <div className="border-2 border-opacity-40 border-[#38A926] bg-white px-8 py-24">

              <div>

                <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">
                  You are yet to add any info.
                </h4>

              </div>

            </div>

            <div className="border-2 border-opacity-40 border-[#38A926] bg-white px-8 py-24">

              <div className="flex flex-col gap-y-4">

                <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">
                  Institution: <span>University of Ilorin, Ilorin</span>
                </h4>


                <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">
                  Email: <span>xxxxxx@gmail.com</span>
                </h4>

                <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">
                  Phone number: <span>+2437---------------</span>
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section >

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



export default EditProfile;
