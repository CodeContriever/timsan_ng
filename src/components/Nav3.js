import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

// DropdownMenu component
const DropdownMenu = ({ title, links, active, onClick }) => (
  <div className="relative flex flex-col gap-4">

    <div
      className={`flex gap-2 text-base hover:text-[#A020F0] cursor-pointer ${active === title ? 'text-[#A020F0]' : ''}`}
      onClick={() => onClick(title)}
    >
      {title} {active === title ? '▲' : '▼'}
    </div>

    {active === title && (
      <ul className="absolute top-10 left-4 flex flex-col gap-4 w-32 z-10 text-base list-none shadow-lg bg-white px-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

// MainNavigationLinks component
const MainNavigationLinks = ({ activeButton, handleButtonClick }) => (
  <ul className="hidden md:flex gap-8 font-medium">
    <li>
      <Link to="/tilets" className="text-base hover:text-[#A020F0]">
        TILETS
      </Link>
    </li>
    <li>
      <Link to="/library" className="text-base hover:text-[#A020F0]">
        E-LIBRARY
      </Link>
    </li>

    <li>
      <DropdownMenu
        title="CHAPTERS"
        links={[
          { to: '/chapters', label: 'Zonal Chapters' },
          { to: '/chapters', label: 'State Chapters' },
          { to: '/chapters', label: 'Local Chapters' },
        ]}
        active={activeButton}
        onClick={handleButtonClick}
      />
    </li>
    <li>
      <DropdownMenu
        title="MEMBERSHIP"
        links={[
          { to: '/membership', label: 'Studentship' },
          { to: '/membership', label: 'Alumni' },
        ]}
        active={activeButton}
        onClick={handleButtonClick}
      />
    </li>
  </ul>
);

// MobileNavigationLinks component
const MobileNavigationLinks = ({ activeButton, handleButtonClick, isMobileMenuOpen }) => (
  <div className={`md:hidden ${isMobileMenuOpen ? 'flex relative' : 'hidden'}`}>

    <div
      // className='w-64 absolute top-5 right-40 left-1  p-4'
      className='w-64 absolute top-12 right-2 left-1 lg:right-12 my-4 text-base list-none bg-gray-400 divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl'
    >

      <ul className="flex flex-col gap-4 font-medium  bg-gray-400 divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl p-4">

        <li >
          <Link to="/tilets" className="text-base hover:text-[#A020F0]" onClick={() => handleButtonClick('')}>
            TILETS
          </Link>
        </li>

        <li className='w-full'>
          <Link to="/library" className="text-base hover:text-[#A020F0]" onClick={() => handleButtonClick('')}>
            E-LIBRARY
          </Link>
        </li>

        <li className='w-full'>
          <DropdownMenu
            title="CHAPTERS"
            links={[
              { to: '/chapters', label: 'Zonal Chapters' },
              { to: '/chapters', label: 'State Chapters' },
              { to: '/chapters', label: 'Local Chapters' },
            ]}
            active={activeButton}
            onClick={(title) => {
              handleButtonClick(title);
            }}
          />
        </li>

        <li className='w-[100%]'>
          <DropdownMenu
            title="MEMBERSHIP"
            links={[
              { to: '/membership', label: 'Studentship' },
              { to: '/membership', label: 'Alumni' },
            ]}
            active={activeButton}
            onClick={(title) => {
              handleButtonClick(title);
            }}
          />
        </li>

      </ul>

    </div>

  </div>
);

// render icon dynamically
const renderIcon = (isActive) => {
  const Icon = isActive ? ChevronUpIcon : ChevronDownIcon;
  return (
    <Icon
      w={6}
      h={6}
      className="transition-opacity duration-200 ease-in delay-0 text-gray-700"
    />
  );
};


// ProfileMenuButton component
const ProfileMenuButton = ({ onClick, isActive }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex flex-row gap-0.5 mx-3 text-sm bg-gray-800 p-1 rounded-full ${isActive ? 'text-[#A020F0]' : 'text-gray-500'
      }`}
  >
    {/* Your user profile button content */}
    <img className="w-8 h-8 rounded-full"
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png" alt="" />
    {renderIcon(isActive)}
  </button>
);

// UserProfileMenu component
const UserProfileMenu = ({ isActive }) => (
  isActive && (
    <div className="w-64 absolute top-12 right-12 lg:right-12 z-10 my-4 text-base list-none bg-gray-400 divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl">
      {/* User name and email */}
      <div className="py-3 px-4">

        <span className="block text-sm font-semibold text-gray-900 dark:text-white">Neil Sims</span>
        <span className="block text-sm text-gray-900 truncate dark:text-white">name@flowbite.com</span>
      </div>

      {/* User account details & settings */}
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
  )
);




// Nav component
const Nav3 = () => {
  const [activeButton, setActiveButton] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleButtonClick = (title) => {
    setActiveButton(activeButton === title ? '' : title);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="rounded-lg bg-white shadow-inner border border-gray-300 p-4 flex justify-between items-center">

      <div className='flex flex-row gap-2'>

        {/* Logo */}
        <Link to="/home" className=''>
          <img className="w-7 h-7 md:w-12 md:h-12" src="images/timsan-logo-2.png" alt="timsan-logo" />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden px-2 py-1 text-[#444] font-semibold cursor-pointer hover:text-[#38A926]"
        >
          ☰
        </button>

      </div>

      {/* Main navigation links for desktop */}
      <MainNavigationLinks activeButton={activeButton} handleButtonClick={handleButtonClick} />

      {/* Mobile navigation links */}
      <MobileNavigationLinks
        activeButton={activeButton}
        handleButtonClick={handleButtonClick}
        isMobileMenuOpen={isMobileMenuOpen}
      />


      <div className='flex flex-row gap-4'>

        {/* About Us & Register buttons */}
        <div
          // className="flex flex-row gap-4"
          className="hidden"
        >
          <Link
            to="/about"
            className="hidden md:flex px-4 py-1 text-center text-[#444] font-semibold cursor-pointer hover:text-[#38A926] border border-gray-300 rounded-lg"
          >
            About Us
          </Link>

          <Link
            to="/signup"
            className="px-3 py-1 text-center text-[#F2F2F2] rounded-lg bg-[#38A926] cursor-pointer"
          >
            Register
          </Link>

        </div>


        <div className="relative">
          <ProfileMenuButton onClick={() => handleButtonClick('profile')} isActive={activeButton === 'profile'} />
          <UserProfileMenu isActive={activeButton === 'profile'} />

        </div>

      </div>

    </nav>
  );
};

export default Nav3;
