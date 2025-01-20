import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Home from './pages/home';
import Contact from './pages/contact';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
