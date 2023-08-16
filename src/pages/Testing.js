import React from "react";
import { Link } from "react-router-dom";
import News from "../components/News";
import TiletSession from "../components/TiletSession";
import Stats from "../components/Stats";
import Executives from "../components/Executives";
import Location from "../components/Location";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Nav from "../components/Nav";






const Testing = () => {

  return (
    <div
      className="">

      <header
        className='box-border w-[100%]  py-8 flex bg-white  sticky top-0 left-0 right-0 z-[10001] border-b-2 border-gray-200 my-0 shadow-[inset 0 -1px #e9eaea]'
      >
        {/* Wrapper */}
        <div className="container mx-auto px-8">

          <Nav />

        </div>

      </header>

      <main className="bg-[#F9FAFB]">

        {/* Hero section */}
        <section className="bg-white dark:bg-gray-900 pt-8 lg:pt-12 pb-12 lg:pb-24 ">

          {/* Wrapper */}
          <div className="container mx-auto px-8">

            {/* Layout */}
            <div className="flex flex-col gap-6 lg:gap-12 justify-center text-center">

              {/* Heading */}
              <div className="">
                <h3 className="text-2xl lg:text-6xl font-semibold font-lato leading-6 text-[#1A1A1A]">Tijaniyyah
                  <span className="text-[#38A926]"> Muslim </span> Students’ <span className="text-[#38A926]"> Association </span> of Nigeria </h3>
              </div>

              {/* Paragraph */}
              <div className="">
                <p className="font-medium font-montserrat text-lg lg:text-xl text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>

              {/* CTA - Buttons: About Us & Donate Now  */}
              <div className=" flex flex-row justify-center gap-6">
                {/* about us */}
                <Link
                  to={'/about'}
                  className='px-6 py-1 text-center text-[#444] font-lato font-semibold  cursor-pointer hover:text-[#38A926] border border-gray-300 rounded-lg'
                >
                  About Us
                </Link>

                {/*donate now*/}
                <Link
                  to={"/donate"}
                  className="px-3 py-1 text-center text-[#F2F2F2] rounded-lg bg-[#38A926] cursor-pointer"
                >
                  Donate Now
                </Link>

              </div>


            </div>

          </div>

        </section>

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

            <TiletSession />

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

export default Testing

