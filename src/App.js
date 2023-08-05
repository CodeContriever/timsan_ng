import React from 'react';
import { Routes, Route, } from "react-router-dom"

import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Testing from "./pages/Testing";









const App = () => {


  return (
    <div className="">
      <Routes>
        <Route element={<Testing />} path="/Testing" />
        <Route exact path='/' element={<LandingPage />} />

        <Route element={<HomePage />} path="/home" />


        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App



