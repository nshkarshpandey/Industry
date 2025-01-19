import logo from '../logo.svg';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const location = useLocation(); // Hook to get the current location

  if (location.pathname === '/') {
    return <Navigate to="/home" replace />;
  }

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'nav-link fw-bold' : 'nav-link';
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              style={{ height: '40px' }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={getNavLinkClass('/home')} href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className={getNavLinkClass('/about')} href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className={getNavLinkClass('/services')} href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className={getNavLinkClass('/contact')} href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

