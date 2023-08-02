import React from 'react';
import { Routes, Route, } from "react-router-dom"

// import ProtectedRoutes from './utils/ProtectedRoutes'

import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";









const App = () => {


  return (
    <div className="">
      <Routes>
        <Route exact path='/' element={<LandingPage />} />

        {/* <Route element={<ProtectedRoutes />}> */}
          <Route element={<HomePage />} path="/home" />
        {/* </Route> */}

        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App



