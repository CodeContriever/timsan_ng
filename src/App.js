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

import SignIn from "./pages/SignIn";

import HomePage from "./pages/HomePage";

import Tilets from "./pages/Tilets";

import Library from "./pages/Library";

import Chapters from "./pages/Chapters";

import Membership from "./pages/Membership";

import Profile from "./pages/Profile";

import Settings from "./pages/Settings";










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

        <Route path="/home" element={<HomePage />} />

        <Route path="/tilets" element={<Tilets />} />

        <Route path="/library" element={<Library />} />

        <Route path="/chapters" element={<Chapters />} />

        <Route path="/membership" element={<Membership />} />

        <Route path="/profile" element={<Profile />} />


        <Route path="/settings" element={<Settings />} />




      </Routes>
    </div>
  )
}

export default App



