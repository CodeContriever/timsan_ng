import React from "react";
// import { useState } from "react";
import { Link, } from "react-router-dom";
// import Footer from "../components/Footer"
// import CTA from "../components/CTA"
import News from "../components/News"
import Executives from "../components/Executives";
import Location from "../components/Location";

import Wrapper from "../components/Wrapper"
import Container from "../components/Container"
// import Nav from "../components/Nav";
import Nav3 from "../components/Nav3";

import { Card } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react";



const LandingPage = () => {
  // const navigate = useNavigate()

  // const [activeButton, setActiveButton] = useState(null);
  // const handleButtonClick = (buttonName) => {
  //   if (buttonName === activeButton) {
  //     setActiveButton(null);
  //   } else {
  //     setActiveButton(buttonName);
  //   }
  // };

  return (
    <div
      className="">

      <header
        className='box-border w-[100%]  py-8 mb-12 flex justify-center items-center bg-white  sticky top-0 left-0 right-0 z-[10001] border-b-2 border-gray-200 my-0 shadow-[inset 0 -1px #e9eaea]'
      >

        {/* Wrapper */}
        <div className="container mx-auto px-4">
          <Nav3 />

        </div>

      </header>


      <main className="bg-[#F9FAFB]">

        {/* Hero section */}
        <section className="bg-white dark:bg-gray-900 py-12">

          {/* Wrapper */}
          <Wrapper className="container mx-auto px-4">


            {/* Hero heading & desc */}
            <Container className=" mx-auto max-w-screen-xl text-center">

              <Box>

                {/* Hero heading */}
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#A020F0] md:text-5xl lg:text-6xl dark:text-white">Tijaniyyah Muslim Students’ Association of Nigeria</h1>

                {/* Hero desc */}
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Our vision is to establish an Islamic Sufi inclined community governed by the teachings of the Quran and Sunnah tailored towards the spiritual, moral, economic and social uprightness of Tijaniyyah adherents and its lovers which will be a model worthy of emulation. And our mission is to develop a united and enlightened society of Tijanniyah adherents on campus fostered by true understanding of principles of Islam and Tijanniyah doctrines for the spiritual upliftment of its members through its peaceful congregational obligatory worships and nurturing the love and characters of Prophet (SAW) in them.</p>

              </Box>

            </Container>

            {/* Hero CTA */}
            <Container className="mx-auto max-w-screen-xl text-center space-x-8">
              {/* <Box class="flex flex-row gap-8"> */}

              {/*Buttons: Register & Donate Now */}
              <Link
                to={"/signin"}
                className="text-center text-[#F2F2F2] px-8 py-2 rounded-lg bg-[#38A926] cursor-pointer"
              >
                Regsiter
              </Link>

              {/* Donate now*/}
              <Link
                to={"/about"}
                className='text-base text-center text-gray-900 px-8 py-2 font-semibold cursor-pointer hover:text-[#38A926] shadow-md rounded-md'
              >
                Donate Now
              </Link>

              {/* </Box> */}

            </Container>

          </Wrapper>

        </section>


        {/* Stat */}
        <section className="bg-white dark:bg-gray-900 mb-8 py-12">

          {/* Wrapper */}
          <Wrapper className="container mx-auto px-4">

            <Container class=" mx-auto max-w-screen-xl text-center">
              <Box className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Card 1 */}
                <Card className='border-2 border-solid border-primary rounded-lg flex-1  px-5 py-12'>
                  <div className="flex flex-col items-start">

                    <h5 className="mb-1 text-xl font-medium text-primary dark:text-white">
                      15
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Zonal chapters
                    </span>
                  </div>
                </Card>

                {/* card 2 */}
                <Card className='border-2 border-solid border-primary rounded-lg flex-1  px-5 py-12'>
                  <div className="flex flex-col items-start">

                    <h5 className="mb-1 text-xl font-medium text-primary dark:text-white">
                      15
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Zonal chapters
                    </span>
                  </div>
                </Card>

                {/* card 3 */}
                <Card className='border-2 border-solid border-primary rounded-lg flex-1   px-5 py-12'>
                  <div className="flex flex-col items-start">

                    <h5 className="mb-1 text-xl font-medium text-primary dark:text-white">
                      15
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Zonal chapters
                    </span>
                  </div>
                </Card>

                {/* card 4 */}
                <Card className='border-2 border-solid border-primary rounded-lg flex-1  px-5 py-12'>
                  <div className="flex flex-col items-start">

                    <h5 className="mb-1 text-xl font-medium text-primary dark:text-white">
                      15
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Zonal chapters
                    </span>
                  </div>
                </Card>

              </Box>
            </Container>

          </Wrapper>

        </section>

        {/* Carousel/Slider */}
        <section className="bg-white dark:bg-gray-900 mb-8 py-12">

          {/* Wrapper */}
          <Wrapper className="container mx-auto px-4">
          </Wrapper>
        </section>

        {/*News Section */}
        <section className="bg-white dark:bg-gray-900 mb-8 py-12">

          {/* Wrapper */}
          <Wrapper className="container mx-auto px-4">

            <News />

          </Wrapper>

        </section>


        {/* Executive Section */}
        <section className="bg-white dark:bg-gray-900 mb-8 py-12">

          {/* Wrapper */}
          <Wrapper className="container mx-auto px-4">

            <Executives />

          </Wrapper>
        </section>

        {/* Find chapterSection */}
        <section
          className="bg-white dark:bg-gray-900 mb-8 py-12"
          style={{
            backgroundImage: "url(/map.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}>

          {/* Wrapper */}
          <Wrapper className="container mx-auto px-4">

            <Location />

          </Wrapper>
        </section>

      </main>


      {/* Footer */}
      <footer
        className="border-t-2 border-gray-200"
      >

        {/* <CTA /> */}
        {/* <Footer /> */}


      </footer >

    </div>
  )
}

export default LandingPage

