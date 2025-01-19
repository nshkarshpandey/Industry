import logo from '../assets/images/logo.png';
import React, { useState } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Redirect the base path to "/home" if at the root
  if (location.pathname === '/') {
    return <Navigate to="/home" replace />;
  }

  // Toggle the dropdown menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to determine the active link class
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'nav-link fw-bold active' : 'nav-link';
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler d-lg-none" // Hide toggle on large screens
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span
              className={`navbar-toggler-icon ${menuOpen ? 'open' : ''}`}
            ></span>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="dropdown-menu dropdown-menu-end position-absolute mt-2 small-screen-menu" id='drop'>
              <Link
                className={getNavLinkClass('/home')}
                to="/home"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className={getNavLinkClass('/about')}
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                className={getNavLinkClass('/services')}
                to="/services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                className={getNavLinkClass('/contact')}
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}

          {/* Normal Links for Larger Screens */}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={getNavLinkClass('/home')} to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={getNavLinkClass('/about')} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={getNavLinkClass('/services')} to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className={getNavLinkClass('/contact')} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
