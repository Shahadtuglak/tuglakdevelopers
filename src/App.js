import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";




//Import Components

import Home from './Components/Home';
import Service from './Components/Service';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';


const App = () =>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/contact" element={<Contact/>} />
        
      

      </Routes>
     
      

    </>
  )

}
export default App;
