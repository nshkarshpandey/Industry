import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';

function Info() {
  return (
    <div>
      <div className="container-fluid py-5"  id='inf'>
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={logo}// Replace with your image path
              alt="About Us"
              className="img-fluid"
            />
          </div>

          {/* Right Side: Header and Text */}
          <div className="col-md-6">
            <h2>About Our Mission</h2>
            <p>
              Learn more about our mission to provide exceptional services and solutions.
              We are dedicated to creating a positive impact for our clients and community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
