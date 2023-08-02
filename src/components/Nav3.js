import React from 'react'
import { useState } from "react";
import { Link, } from 'react-router-dom';

import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';



const Nav3 = () => {
  // const navigate = useNavigate()

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

    <nav className="flex items-center justify-between">

      {/* NavBar */}
      {/* <div class="flex flex-wrap justify-between items-center"> */}

      {/* logo */}
      <div className="order-1 lg:order-1 flex justify-start items-center gap-4 lg:gap-8">

        {/* Logo */}
        <a href="/home" className="flex items-center justify-between mr-4">
          <img
            src="/logo.svg"
            className="mr-3 h-6 lg:h-8"
            alt="TIMSAN Logo"
          />

          <span className="self-center text-md lg:text-2xl font-semibold whitespace-nowrap dark:text-white">TIMSAN</span>
        </a>

      </div>

      {/* Hamburger menu */}
      <div
        className=" order-3 box-border relative cursor-pointer  transition duration-300 "
        tabIndex="0"
      >
        <button
          onClick={() => handleButtonClick('menu')}
          data-drawer-target="drawer-navigation"
          data-drawer-toggle="drawer-navigation"
          aria-controls="drawer-navigation"
          className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="hidden w-6 h-6"
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

          <span className="sr-only">Toggle sidebar</span>

        </button>

        {activeButton === 'menu' && (
          <div
            className="items-center justify-start lg:hidden flex w-[100%] order-1 bg-white"
            id="mobile-menu-2"
            tabIndex="-1"
          >

            <ul
              className="bg-white w-64 absolute top-12 right-4 z-10 flex flex-col  p-4 gap-4 mt-4 font-medium  ">

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
                      className="absolute top-16 left-4 flex flex-col gap-4 w-32 p-2 z-10  text-base list-none  shadow-lg "
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
                <div className="relative flex flex-col justify-center items-center gap-4">

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
                      className="absolute top-16 left-4 flex flex-col gap-4 w-32 p-2 z-10  text-base list-none  shadow-lg "
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
        )}

      </div>

      {/* Nav items */}
      <div className="hidden lg:flex  gap-8 order-2 ml-64" id="nav_items">
        <ul className="flex flex-row items-center justify-center gap-8 font-medium ">

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
                  className="absolute top-16 left-4 flex flex-col gap-4 w-32 p-2 z-10  text-base list-none  shadow-lg "
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
                  className="absolute top-16 left-4 flex flex-col gap-4 w-32 p-2 z-10  text-base list-none  shadow-lg "
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


      {/* Notifications, Profile & Buttons */}
      <div className='hidden lg:flex flex-row lg:gap-8 order-2 lg:order-3'>

        <div className='order-2 flex flex-row lg:gap-8'>

          {/* User profile menu */}
          <div className="relative flex flex-col justify-center items-center gap-4">

            {/* User profile button */}
            <button
              type="button"
              onClick={() => handleButtonClick('profile')}
              className={`flex mx-3 text-sm bg-gray-800 p-0.5 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ${activeButton === 'apps' ? 'text-[#A020F0]' : 'text-gray-500'}`}
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                alt=""
              />
            </button>

            {/* <!-- User profile menu items--> */}
            {activeButton === 'profile' && (
              <div
                className=" w-64 absolute top-12 right-20 lg:right-12 z-10 my-4  text-base list-none bg-gray-500 text-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
                id="dropdown"
              >

                {/* User name and email */}
                <div className="py-3 px-4">

                  <span
                    className="block text-sm font-semibold text-gray-900 dark:text-white"
                  >Neil Sims</span
                  >
                  <span
                    className="block text-sm text-gray-900 truncate dark:text-white"
                  >name@flowbite.com</span
                  >
                </div>

                {/* User account details & settings */}
                {/*  */}
                <ul
                  className="py-1 text-gray-700 dark:text-gray-300"
                  aria-labelledby="dropdown"
                >

                  {/* Profile */}
                  <li>
                    <a
                      href="/profile"
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >My profile</a>
                  </li>

                  {/* Account settings */}
                  <li>
                    <a
                      href="/settings"
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >Account settings</a
                    >
                  </li>

                </ul>

                {/* Signout */}
                <ul
                  className="py-1 text-gray-700 dark:text-gray-300"
                  aria-labelledby="dropdown"
                >

                  <li>
                    <a
                      href="/signin"
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Sign out</a
                    >
                  </li>

                </ul>

              </div>
            )}
          </div>

        </div>

        {/*Buttons: About Us & Donate Now */}
        <div className="hidden relative lg:flex items-center gap-4" id="nav_buttons">

          {/*Buttons:About Us & Donate Now */}
          {/* About Us */}
          <Link
            to={"/about"}
            className='text-base text-center text-gray-900 px-8 py-2 font-semibold cursor-pointer hover:text-[#38A926] shadow-md rounded-md'
          >
            About Us
          </Link>

          {/* Donate now*/}
          <Link
            to={"/donate"}
            className="text-center text-[#F2F2F2] px-8 py-2 rounded-lg bg-[#38A926] cursor-pointer"
          >
            Donate Now
          </Link>
        </div>

      </div>

      {/* </div> */}



      {/* </div> */}

    </nav>

  )
}

export default Nav3