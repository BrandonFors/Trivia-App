import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from "./assets/footer/Footer";
import TriviaPage from "./assets/trivia_page/TriviaPage";
import HomePage from "./assets/home_page/HomePage";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trivia/:category" element={<TriviaPage />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App
