import React from 'react';

// SocialIcons component
const SocialIcons = () => (
  <div className="flex gap-1 md:gap-3">
    <a href="/" className="text-white hover:text-gray-300">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* Facebook icon SVG */}
      </svg>
      <span className="sr-only">Facebook page</span>
    </a>
    <a href="/" className="text-white hover:text-gray-300">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* Instagram icon SVG */}
      </svg>
      <span className="sr-only">Instagram page</span>
    </a>
    <a href="/" className="text-white hover:text-gray-300">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {/* Twitter icon SVG */}
      </svg>
      <span className="sr-only">Twitter page</span>
    </a>
  </div>
);

// ContactInfo component
const ContactInfo = () => (
  <div className="flex flex-col gap-1 md:gap-3">
    <a href="/" className="flex text-[14px]">
      <svg className="w-8 h-6 md:mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        {/* Email icon SVG */}
      </svg>
      timsan.tuamm@gmail.com
    </a>
    <a href="/" className="flex text-[14px]">
      <svg className="w-8 h-6 md:mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        {/* Phone icon SVG */}
      </svg>
      +234-706-363-4744
    </a>
  </div>
);

// QuickLinks component
const QuickLinks = () => (
  <div className="mr-8 sm:mr-0">
    <h2 className="mb-6 text-[20px] font-semibold">Quick Links</h2>
    <ul className="flex flex-col gap-2 text-[14px]">
      <li><a href="/">About Us</a></li>
      <li><a href="/">FAQs</a></li>
      <li><a href="/">Membership</a></li>
      <li><a href="/">TILETS</a></li>
      <li><a href="/">Register</a></li>
    </ul>
  </div>
);

// Footer component
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20">

      <div className="flex flex-row md:flex-row justify-between mx-auto py-6 md:w-5/6 border-primary border-b-2 border-opacity-60 gap-12">

        <div className="sm:ml-0 flex flex-col items-start md:gap-3 w-full md:w-auto">

          <div className="w-24 md:w-full ml-12">
            <a href="/"><img alt="timsan logo" src="/logo.svg" /></a>
          </div>

          <SocialIcons />

          <ContactInfo />

        </div>

        <div className="hidden sm:flex justify-center items-center gap-2 sm:gap-3 min-w-max">
          <a href="/">
            <img src="/app-store.png" alt="app store" className="w-16 sm:w-24 md:w-32" />
          </a>
          <a href="/">
            <img src="/google-play.svg" alt="google play" className="w-16 sm:w-24 md:w-32" />
          </a>
        </div>

        <div className="md:mr-8">
          <QuickLinks />
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 min-w-max mt-4 md:hidden">
        <a href="/">
          <img src="/app-store.png" alt="app store" className="w-24" />
        </a>
        <a href="/">
          <img src="/google-play.svg" alt="google play" className="w-24" />
        </a>
      </div>

      <div className="py-3">
        <p className="text-center">&copy; TIMSAN 2022. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
