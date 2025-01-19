import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Home from './pages/home';


const App = () => {
  return (
    <Router>
     <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
