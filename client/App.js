import React from 'react'
import Navbar from "./Navbar"
import Gallery from "./pages/Gallery"
import About from "./pages/Aboutus"
import Committee from "./pages/Committee"
import Member from "./pages/Member"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Memberform from './Memberform'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import View from './pages/View'
import Aboutus from './pages/Aboutus'
import Home from './pages/Home'





function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <ToastContainer position="top-center" />
        <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/Memberform" element={<Memberform />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Committee" element={<Committee />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/Aboutus" render={() => {window.location.href="C:\Users\Lenova\Desktop\dkvfinale\client\src\pages\Aboutus.html"}} />
          <Route path="/update/:id" element={<Memberform />} />
          <Route path="/view/:id" element={<View />} />
        
          
        </Routes>

      </div>

    </>
  );
}
export default App;
