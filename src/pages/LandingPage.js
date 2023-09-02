import React from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import News from "../components/News";
import Session from "../components/TiletSession";
import Stats from "../components/Stats";
import Executives from "../components/Executives";
import Location from "../components/Location";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Nav1 from "../components/Nav1";






const LandingPage = () => {

  return (
    <div
      className="">

      <header
        className='box-border w-[100%]  py-8 flex bg-white  sticky top-0 left-0 right-0 z-[10001] border-b-2 border-gray-200 my-0 shadow-[inset 0 -1px #e9eaea]'
      >
        {/* Wrapper */}
        <div className="container mx-auto px-8">

          <Nav1 />

        </div>

      </header>


      <main className="bg-[#F9FAFB]">

        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 pt-8 lg:pt-12 pb-12 lg:pb-24"
        >
          <Box className="container mx-auto px-8">
            <Box className="flex flex-col gap-6 lg:gap-12 justify-center text-center">
              <h3 className="text-2xl lg:text-6xl font-semibold font-lato leading-6 text-[#1A1A1A]">
                Tijaniyyah <span className="text-[#38A926]">Muslim</span> Students’{' '}
                <span className="text-[#38A926]">Association</span> of Nigeria
              </h3>

              <p className="text-justify md:text-center font-medium font-montserrat text-lg lg:text-xl text-gray-500">
                Our vision is to establish an Islamic Sufi inclined community governed by the teachings of the Quran and
                Sunnah tailored towards the spiritual, moral, economic and social uprightness of Tijaniyyah adherents and
                its lovers which will be a model worthy of emulation. And our mission is to develop a united and enlightened
                society of Tijanniyah adherents on campus fostered by true understanding of principles of Islam and
                Tijanniyah doctrines for the spiritual upliftment of its members through its peaceful congregational
                obligatory worships and nurturing the love and characters of Prophet (SAW) in them.
              </p>

              <div className="flex flex-row justify-center gap-6">
                <Link
                  to={'/about'}
                  className="px-6 py-1 text-center text-[#444] font-lato font-semibold cursor-pointer hover:text-[#38A926] border border-gray-300 rounded-lg"
                >
                  About Us
                </Link>

                <Link
                  to={'/donate'}
                  className="px-3 py-1 text-center text-[#F2F2F2] rounded-lg bg-[#38A926] cursor-pointer"
                >
                  Donate Now
                </Link>
              </div>
            </Box>
          </Box>
        </motion.section>

        {/* Statistics section */}
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-12">

          {/* Wrapper */}
          <div className="container mx-auto px-8">

            <Stats />

          </div>

        </section>

        {/* News section */}
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-12">

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            <News />

          </div>
        </section>

        {/* Tilets section */}
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-12">

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            <Session />

          </div>
        </section>


        {/* Executives section */}
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-12">

          {/* Wrapper */}
          <div className="container mx-auto px-8">

            <Executives />


          </div>
        </section>


        {/* Map section */}
        <section
          className="bg-white dark:bg-gray-900 py-24"
          style={{
            backgroundImage: "url(/map.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            <Location />

          </div>
        </section>

        {/* CTA section */}
        <section className="bg-white dark:bg-gray-900 mb-8">

          <CTA />

        </section>


      </main>


      {/* Footer */}
      <footer>
        <Footer />
      </footer >

    </div >
  )
}

export default LandingPage

