import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import AppBar from "./components/AppBar";
import Home from './pages/Home';
import Tour from './pages/Tour';
import Footer from "./components/Footer";


function App() {
  return (


    <BrowserRouter>
    <AppBar  />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:Id" element={<Tour />} />
      
    </Routes>

    <Footer/>
    
    </BrowserRouter>

    
    
  );
}

export default App;
