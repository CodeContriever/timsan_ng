import React from 'react';
import { Routes, Route, } from "react-router-dom"

import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Register from "./pages/Register";
import SignUpMember from "./pages/SignUpMember";
import SignUpInstitution from "./pages/SignUpInstitution";
import SignUpState from "./pages/SignUpState";
import SignUpZone from "./pages/SignUpZone";
import LogIn from "./pages/LogIn";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Testing from "./pages/Testing";









const App = () => {


  return (
    <div className="">
      <Routes>
        <Route element={<Testing />} path="/Testing" />
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/about' element={<About />} />

        <Route path="/home" element={<HomePage />} />

        <Route path='/register' element={<Register />} />
        <Route path='/register_as_member' element={<SignUpMember />} />
        <Route path='/register_as_institution' element={<SignUpInstitution />} />
        <Route path='/register_as_state' element={<SignUpState />} />
        <Route path='/register_as_zone' element={<SignUpZone />} />
        <Route path='/login' element={<LogIn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App



