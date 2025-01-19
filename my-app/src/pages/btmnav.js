import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Btmnav() {
  return (
    <div>
      <div className="container-fluid py-5" style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
        <div className="row">
          {/* Left Column: Navigation */}
          <div className="col-md-4">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><Link to="/home" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none">Our Services</Link></li>
             <li><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
              
             
            </ul>
          </div>

          {/* Middle Column: Contact Info */}
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> <a href="mailto:info@company.com" className="text-white text-decoration-none">info@company.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+123456789" className="text-white text-decoration-none">+123 456 789</a></li>
              <li><strong>Address:</strong> 123 Main Street, City, Country</li>
            </ul>
          </div>

          {/* Right Column: Map */}
          <div className="col-md-4">
            <h5>Find Us</h5>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093177!2d144.95592831536026!3d-37.8172098797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c7b5b78075a7!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1634197685664!5m2!1sen!2sau"
              width="100%"
              height="200"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Btmnav
