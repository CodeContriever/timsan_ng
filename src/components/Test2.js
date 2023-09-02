import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, useDisclosure } from '@chakra-ui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Nav = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonName) => {
    if (buttonName === activeButton) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  const renderIcon = () => {
    if (activeButton === 'chevronUpIcon') {
      return (
        <ChevronUpIcon
          w={6}
          h={6}
          className="transition-opacity duration-200 ease-in delay-0 text-gray-700"
        />
      );
    } else {
      return (
        <ChevronDownIcon
          w={6}
          h={6}
          className="transition-opacity duration-200 ease-in delay-0 text-gray-700"
        />
      );
    }
  };

  return (
    <nav
      className="rounded-lg bg-white shadow-inner border border-gray-300 p-4 flex flex-row items-center justify-between "
    >

      {/* menu and logo */}
      <div className="flex flex-row  gap-4">

        {/* Hamburger menu */}
        <div className='flex md:hidden'>
          <button
            onClick={onToggle}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
              <path d="M1 13.5037H15.625M1 7.39578H13.375M1 1.28784H16.75" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <Collapse in={isOpen} animateOpacity>
            <div
              className=" items-center justify-start lg:hidden flex w-[100%]  bg-white"
              id="mobile-menu-2"
            >

              <ul
                className="w-full absolute top-24 z-10 flex flex-col justify-center items-center p-4 gap-4 font-medium  bg-white ">

                {/* Home */}
                <li>

                  <Link to={'/tilets'} className='text-base hover:text-[#A020F0]'
                  >
                    TILETS
                  </Link>

                </li>

                {/* E-library */}
                <li>
                  <Link to={'/library'} className='text-base hover:text-[#A020F0]'
                  >
                    E-LIBRARY
                  </Link>
                </li>

                {/* Chapters*/}
                <li>
                  <div className="relative flex flex-col  gap-4">

                    <div
                      className="flex gap-2 text-base hover:text-[#A020F0] "
                      onClick={() => handleButtonClick('chapters')}
                    >
                      CHAPTERS
                      {renderIcon()}
                    </div>

                    {/* <!-- Chapters items--> */}
                    {activeButton === 'chapters' && (
                      <ul
                        className="absolute top-10 left-4 flex flex-col gap-4 w-32  z-10  text-base list-none  shadow-lg bg-white "
                        id="dropdown"
                      >
                        <li>
                          <Link to={'/zonal'}>Zonal Chapters</Link>
                        </li>

                        <li>
                          <Link to={'/state'}>State Chapters</Link>
                        </li>

                        <li>
                          <Link to={'/local'}>Local Chapters</Link>
                        </li>
                      </ul>
                    )}

                  </div>
                </li>

                {/* Membership*/}
                <li>
                  <div className="relative flex flex-col  gap-4">

                    <div
                      className="flex gap-2 text-base hover:text-[#A020F0] "
                      onClick={() => handleButtonClick('membership')}
                    >
                      MEMBERSHIP
                      {renderIcon()}
                    </div>

                    {/* <!-- Chapters items--> */}
                    {activeButton === 'membership' && (
                      <ul
                        className="absolute top-8 left-4 flex flex-col gap-4 w-32 z-10  text-base list-none  shadow-lg bg-white "
                        id="dropdown"
                      >
                        <li>
                          <Link to={'/student'}>Studentship</Link>
                        </li>

                        <li>
                          <Link to={'/alumni'}>Alumni</Link>
                        </li>

                      </ul>
                    )}

                  </div>
                </li>

              </ul>

            </div>
          </Collapse>

        </div>

        {/* Timsan logo */}
        <div>

          <Link to={'/home'}>
            <img className="w-7 h-7" src="images/timsan-logo-2.png" alt="timsan-logo" />
          </Link>
        </div>

      </div>

      {/* Nav items */}
      <div className="hidden md:flex  gap-8 order-2" id="nav_items">

        <ul className="w-full flex flex-row  gap-8 font-medium ">

          {/* Home */}
          <li>

            <Link to={'/tilets'} className='text-base hover:text-[#A020F0]'
            >
              TILETS
            </Link>

          </li>

          {/* E-library */}
          <li>
            <Link to={'/library'} className='text-base hover:text-[#A020F0]'
            >
              E-LIBRARY
            </Link>
          </li>

          {/* Chapters*/}
          <li>
            <div className="relative flex flex-col justify-center items-center gap-4">

              <div
                className="flex gap-2 text-base hover:text-[#A020F0] "
                onClick={() => handleButtonClick('chapters')}
              >
                CHAPTERS
                {renderIcon()}
              </div>

              {/* <!-- Chapters items--> */}
              {activeButton === 'chapters' && (
                <ul
                  className="absolute top-16 left-4 flex flex-col gap-4 p-4 z-10  text-base list-none  shadow-lg bg-white"
                  id="dropdown"
                >
                  <li className=''>
                    <Link to={'/zonal'}>Zonal Chapters</Link>
                  </li>

                  <li>
                    <Link to={'/state'}>State Chapters</Link>
                  </li>

                  <li>
                    <Link to={'/local'}>Local Chapters</Link>
                  </li>
                </ul>
              )}

            </div>
          </li>

          {/* Membership*/}
          <li>
            <div className="relative flex flex-col justify-center items-center gap-4">

              <div
                className="flex gap-2 text-base hover:text-[#A020F0] "
                onClick={() => handleButtonClick('membership')}
              >
                MEMBERSHIP
                {renderIcon()}
              </div>

              {/* <!-- Membership items--> */}
              {activeButton === 'membership' && (
                <ul
                  className="absolute top-16 left-4 flex flex-col gap-4 p-4 z-10  text-base list-none  shadow-lg bg-white "
                  id="dropdown"
                >
                  <li>
                    <Link to={'/student'}>Studentship</Link>
                  </li>

                  <li>
                    <Link to={'/alumni'}>Alumni</Link>
                  </li>

                </ul>
              )}

            </div>
          </li>


        </ul>

      </div>

      {/* Buttons: About Us & Donate Now */}
      <div className=" order-3 flex flex-row gap-4">
        {/* about us */}
        <Link
          to={'/about'}
          className='hidden md:flex px-4 py-1 text-center text-[#444] font-lato font-semibold  cursor-pointer hover:text-[#38A926] border border-gray-300 rounded-lg'
        >
          About Us
        </Link>

        {/*donate now*/}
        <Link
          to={"/register"}
          className="px-3 py-1 text-center text-[#F2F2F2] rounded-lg bg-[#38A926] cursor-pointer"
        >
          Register
        </Link>

      </div>

      {/* </div> */}

    </nav>
  )
}

export default Nav