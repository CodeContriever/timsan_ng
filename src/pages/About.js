import React from "react";
import Stats from "../components/Stats";
import Executives from "../components/Executives";
import Location from "../components/Location";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Nav3 from "../components/Nav3";



const About = () => {

  return (
    <div
      className="">

      <header
        className='box-border w-[100%]  py-8 flex bg-white  sticky top-0 left-0 right-0 z-[10001] border-b-2 border-gray-200 my-0 shadow-[inset 0 -1px #e9eaea]'
      >
        {/* Wrapper */}
        <div className="container mx-auto px-8 py-8">

          <Nav3 />

        </div>

      </header>


      <main className="bg-[#F9FAFB]">

        {/* Hero section */}
        <section
          className="relative bg-white dark:bg-gray-900 py-64 mb-8"
          style={{
            backgroundImage: "url(images/mosque.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >

          {/* Wrapper */}
          <div className="container mx-auto px-8">

            {/* Layout */}
            <div className="flex flex-col gap-6 lg:gap-12 justify-center text-center">

              {/* Heading */}
              <div className="">
                <h3 className="text-4xl lg:text-6xl font-semibold font-lato leading-6 text-white">About</h3>
              </div>


            </div>

          </div>

        </section>

        {/* Statistics section */}
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-24 mb-8">

          {/* Wrapper */}
          <div className="container mx-auto px-8">


            <Stats />

          </div>

        </section>

        {/* gallery section 1 */}
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-12 mb-8">

          <div className="container mx-auto px-6">

            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">

              {/* Image Gallery */}
              <div className="order-2 lg:w-3/5 flex flex-col gap-y-8">

                <div className="grid grid-cols-2 ">

                  {/* grid 1 */}
                  <div className="w-5/6">
                    <img src="images/image-15.png" alt="" className="w-full" />
                  </div>

                  <div className="w-5/6 mt-20">
                    <img src="images/image-13.png" alt="" className="w-full" />
                  </div>

                </div>

                {/* grid 2 */}
                <div className="grid grid-cols-2 gap-4">

                  <div className="w-5/6">
                    <img src="images/image-14.png" alt="" className="w-full" />
                  </div>

                  <div className="w-5/6 mt-20">
                    <img src="images/image-12.png" alt="" className="w-full" />
                  </div>

                </div>
              </div>

              {/* Section Description */}
              <div className="order-1 lg:w-2/5 flex items-center">
                <div className="flex flex-col gap-4">
                  <p className="text-2xl lg:text-4xl font-bold text-[#38A926]">OUR MISSION</p>
                  <h2 className="text-xl lg:text-3xl font-bold">
                    Develop a United and Enlightened Society
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building Tijanniyah adherents on campus fostered by true
                    understanding of principles of Islam and Tijanniyah doctrines for
                    the spiritual upliftment of its members through its peaceful
                    congregational obligatory worships and nurturing the love and
                    characters of Prophet (SAW) in them.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* gallery section 2 */}
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-12">

          <div className="container mx-auto px-6">

            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">

              {/* Image Gallery */}
              <div className="lg:w-3/5 flex flex-col gap-y-8">

                <div className="grid grid-cols-2 ">

                  {/* grid 1 */}
                  <div className="w-5/6">
                    <img src="images/image-15.png" alt="" className="w-full" />
                  </div>

                  <div className="w-5/6 mt-20">
                    <img src="images/image-13.png" alt="" className="w-full" />
                  </div>

                </div>

                {/* grid 2 */}
                <div className="grid grid-cols-2 gap-4">

                  <div className="w-5/6">
                    <img src="images/image-14.png" alt="" className="w-full" />
                  </div>

                  <div className="w-5/6 mt-20">
                    <img src="images/image-12.png" alt="" className="w-full" />
                  </div>

                </div>
              </div>

              {/* Section Description */}
              <div className="lg:w-2/5 flex items-center">
                <div className="flex flex-col gap-4">
                  <p className="text-2xl lg:text-4xl font-bold text-[#38A926]">OUR MISSION</p>
                  <h2 className="text-xl lg:text-3xl font-bold">
                    Develop a United and Enlightened Society
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building Tijanniyah adherents on campus fostered by true
                    understanding of principles of Islam and Tijanniyah doctrines for
                    the spiritual upliftment of its members through its peaceful
                    congregational obligatory worships and nurturing the love and
                    characters of Prophet (SAW) in them.
                  </p>
                </div>
              </div>
            </div>
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

export default About