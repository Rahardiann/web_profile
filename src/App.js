import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.js";
import Gallery from "./pages/Galery/Galery.js";
import Aboutme from "./pages/aboutme/aboutme.js";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/galerry" element={<Gallery/>}/>
      <Route path="/aboutme" element={<Aboutme/>}/>
    </Routes>
   </Router>
  );
}

export default App;
