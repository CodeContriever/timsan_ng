import React from 'react';
import { Routes, Route, } from "react-router-dom"

import NotFoundPage from "./pages/NotFoundPage";

import Testing from "./pages/Testing";

import LandingPage from "./pages/LandingPage";

import About from "./pages/About";

import Donate from "./pages/Donate";

import SignUp from './pages/SignUp';

import SignUpMember from "./pages/SignUpMember";

import SignUpInstitution from "./pages/SignUpInstitution";

import SignUpState from "./pages/SignUpState";

import SignUpZone from "./pages/SignUpZone";

import SignUpNec from "./pages/SignUpNec";

import Sucess from "./pages/EmailVerificationSuccess";

import SignIn from "./pages/SignIn";

import HomePage from "./pages/HomePage";

import Tilets from "./pages/Tilets";

import Library from "./pages/Library";

import Chapters from "./pages/Chapters";

import Membership from "./pages/Membership";

import Profile from "./pages/Profile";

import EditProfile from './pages/EditProfile';

import Settings from "./pages/Settings";

import FAQ from './pages/FAQ';

import Dues from './pages/Dues';











const App = () => {


  return (
    <div className="">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route element={<Testing />} path="/Testing" />

        <Route exact path='/' element={<LandingPage />} />

        <Route exact path='/about' element={<About />} />

        <Route path="/donate" element={<Donate />} />

        <Route path='/signin' element={<SignIn />} />

        <Route path='/signup' element={<SignUp />} />

        <Route path='/signup_as_member' element={<SignUpMember />} />

        <Route path='/signup_as_institution' element={<SignUpInstitution />} />

        <Route path='/signup_as_state' element={<SignUpState />} />

        <Route path='/signup_as_zone' element={<SignUpZone />} />

        <Route path='/signup_as_nec' element={<SignUpNec />} />

        <Route path='/sucess' element={<Sucess />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/tilets" element={<Tilets />} />

        <Route path="/library" element={<Library />} />

        <Route path="/chapters" element={<Chapters />} />

        <Route path="/membership" element={<Membership />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/edit_profile" element={<EditProfile />} />

        <Route path="/annual_dues" element={<Dues />} />


        <Route path="/settings" element={<Settings />} />

        <Route path="/faq" element={<FAQ />} />




      </Routes>
    </div>
  )
}

export default App



