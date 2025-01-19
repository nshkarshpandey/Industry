import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Home from './pages/home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </>
  );
};

export default App;
