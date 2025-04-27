import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Sigin from './pages/Sigin'
import ForgotPassword from './pages/ForgotPassword'
import FAQ from './pages/FAQ'
import AboutUs from './pages/AboutUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsCondition'
import Cart from './pages/Cart'
import Orders from './pages/Orders'

import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sigin" element={<Sigin/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/termscondition" element={<TermsConditions/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
