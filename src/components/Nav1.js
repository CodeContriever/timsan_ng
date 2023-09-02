import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// DropdownMenu component
const DropdownMenu = ({ title, links, active, onClick }) => (
  <div className="relative flex flex-col gap-4">
    <div
      className={`flex gap-2 text-base hover:text-[#A020F0] cursor-pointer ${active === title ? 'text-[#A020F0]' : ''}`}
      onClick={() => onClick(title)}
    >
      {title} {active === title ? '▲' : '▼'} {/* Conditional arrow icons */}
    </div>
    {active === title && (
      <ul className="absolute top-10 left-4 flex flex-col gap-4 w-32 z-10 text-base list-none shadow-lg bg-white">
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

// Nav component
const Nav1 = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (title) => {
    setActiveButton(activeButton === title ? '' : title);
  };

  return (
    <nav className="rounded-lg bg-white shadow-inner border border-gray-300 p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/home">
        <img className="w-7 h-7" src="images/timsan-logo-2.png" alt="timsan-logo" />
      </Link>

      {/* Main navigation links */}
      <MainNavigationLinks activeButton={activeButton} handleButtonClick={handleButtonClick} />

      {/* About Us & Register buttons */}
      <div className="flex flex-row gap-4">
        <Link
          to="/about"
          className="hidden md:flex px-4 py-1 text-[#444] font-semibold cursor-pointer hover:text-[#38A926] border border-gray-300 rounded-lg"
        >
          About Us
        </Link>
        <Link
          to="/register"
          className="px-3 py-1 text-center text-[#F2F2F2] rounded-lg bg-[#38A926] cursor-pointer"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Nav1;
