import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, useDisclosure } from '@chakra-ui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Nav3 = () => {
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
        <ChevronUpIcon w={6} h={6} className="transition-opacity duration-200 ease-in delay-0 text-gray-700" />
      );
    } else {
      return (
        <ChevronDownIcon w={6} h={6} className="transition-opacity duration-200 ease-in delay-0 text-gray-700" />
      );
    }
  };

  return (
    <nav
      className="rounded-lg bg-white shadow-inner border border-gray-300 p-4  flex flex-row items-center justify-between ">

      {/* menu and logo */}
      <div className="flex flex-row  gap-4">

        {/* Hamburger menu */}
        <div className='flex md:hidden'>
          <button onClick={onToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
              <path d="M1 13.5037H15.625M1 7.39578H13.375M1 1.28784H16.75" stroke="#111111" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <Collapse in={isOpen} animateOpacity>
            <div className=" items-center justify-start lg:hidden flex w-[100%]  bg-white" id="mobile-menu-2">

              <ul
                className="w-full absolute top-24 z-10 flex flex-col justify-center items-center p-4 gap-4 font-medium  bg-white ">

                {/* Home */}
                <li>

                  <Link to={'/tilets'} className='text-base hover:text-[#A020F0]'>
                    TILETS
                  </Link>

                </li>

                {/* E-library */}
                <li>
                  <Link to={'/library'} className='text-base hover:text-[#A020F0]'>
                    E-LIBRARY
                  </Link>
                </li>

                {/* Chapters*/}
                <li>
                  <div className="relative flex flex-col  gap-4">

                    <div className="flex gap-2 text-base hover:text-[#A020F0] " onClick={() => handleButtonClick('chapters')}
                    >
                      CHAPTERS
                      {renderIcon()}
                    </div>

                    {/* <!-- Chapters items--> */}
                    {activeButton === 'chapters' && (
                      <ul
                        className="absolute top-10 left-4 flex flex-col gap-4 w-32  z-10  text-base list-none  shadow-lg bg-white "
                        id="dropdown">
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

                    <div className="flex gap-2 text-base hover:text-[#A020F0] " onClick={() =>
                      handleButtonClick('membership')}
                    >
                      MEMBERSHIP
                      {renderIcon()}
                    </div>

                    {/* <!-- Chapters items--> */}
                    {activeButton === 'membership' && (
                      <ul
                        className="absolute top-8 left-4 flex flex-col gap-4 w-32 z-10  text-base list-none  shadow-lg bg-white "
                        id="dropdown">
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
      <div className="hidden md:flex items-center justify-center gap-8 order-2" id="nav_items">

        <ul className="w-full flex flex-row  items-center justify-center gap-8 font-medium ">

          {/* Home */}
          <li>

            <Link to={'/tilets'} className=' hover:text-[#A020F0]'>
              TILETS
            </Link>

          </li>

          {/* E-library */}
          <li>
            <Link to={'/library'} className='  hover:text-[#A020F0]'>
              E-LIBRARY
            </Link>
          </li>

          {/* Chapters*/}
          <li>
            <div className="relative flex flex-col justify-center items-center gap-4">

              <div className="flex gap-2 text-base hover:text-[#A020F0] " onClick={() => handleButtonClick('chapters')}
              >
                CHAPTERS
                {renderIcon()}
              </div>

              {/* <!-- Chapters items--> */}
              {activeButton === 'chapters' && (
                <ul className="absolute top-16 left-4 flex flex-col gap-4 p-4 z-10  text-base list-none  shadow-lg bg-white"
                  id="dropdown">
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

              <div className="flex gap-2 text-base hover:text-[#A020F0] " onClick={() => handleButtonClick('membership')}
              >
                MEMBERSHIP
                {renderIcon()}
              </div>

              {/* <!-- Membership items--> */}
              {activeButton === 'membership' && (
                <ul className="absolute top-16 left-4 flex flex-col gap-4 p-4 z-10  text-base list-none  shadow-lg bg-white "
                  id="dropdown">
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

      {/* Buttons: About Us, Donate Now & User profile */}
      <div className=" order-3 flex flex-row gap-4">
        {/* about us */}
        <Link to={'/about'}
          className='hidden md:flex px-4 py-1 text-center text-[#444] font-lato font-semibold  cursor-pointer hover:text-[#38A926] border border-gray-300 rounded-lg'>
          About Us
        </Link>

        {/*donate now*/}
        <Link to={"/donate"} className="px-3 py-1 text-center text-[#F2F2F2] rounded-lg bg-[#38A926] cursor-pointer">
          Donate Now
        </Link>


        {/* User profile menu */}
        <div class="relative flex flex-col justify-center items-center gap-4">

          {/* User profile button */}
          <button type="button" onClick={() => handleButtonClick('profile')}
            class={`flex flex-row gap-0.5 mx-3 text-sm bg-gray-800 p-0.5 rounded-full md:mr-0 focus:ring-4
        focus:ring-gray-300 dark:focus:ring-gray-600 ${activeButton === 'apps' ? 'text-[#A020F0]' : 'text-gray-500'}`}
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span class="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png" alt="" />
            {renderIcon}
          </button>

          {/* <!-- User profile menu items--> */}
          {activeButton === 'profile' && (
            <div
              className=" w-64 absolute top-12 right-20 lg:right-12 z-10 my-4  text-base list-none bg-gray-400 divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
              id="dropdown">

              {/* User name and email */}
              <div className="py-3 px-4">

                <span className="block text-sm font-semibold text-gray-900 dark:text-white">Neil Sims</span>
                <span className="block text-sm text-gray-900 truncate dark:text-white">name@flowbite.com</span>
              </div>

              {/* User account details & settings */}
              {/* */}
              <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">

                {/* Profile */}
                <li>
                  <a href="/profile"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                    profile</a>
                </li>

                {/* Account settings */}
                <li>
                  <a href="/settings"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Account
                    settings</a>
                </li>

              </ul>

              {/* Signout */}
              <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">

                <li>
                  <a href="/signin"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                    out</a>
                </li>

              </ul>

            </div>
          )}
        </div>

      </div>



      {/* </div> */}

    </nav>
  )
}

export default Nav3