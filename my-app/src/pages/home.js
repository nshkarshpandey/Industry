import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';
import CardSlider from './cardslider';
import Services from './services';
import Info from './info';
import Fifth from './fifth';
import Btmnav from './btmnav';
import Button from 'react-bootstrap/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {

  return (
    <div className="container-fluid">
      {/* First Section */}
      <div className="container d-flex align-items-center">
        <div className="row w-100">
          {/* Left Side: Text and Button */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>Welcome to <span style={{color: "Orange"}}>Our</span> Website</h1>
            <p>
              Discover our services and offerings designed to meet your needs. We 
              strive to deliver the best experience for our users.
            </p>
           <Button variant="outline-secondary" id='btn-1'>Enquire Now</Button>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={logo} // Replace with your image path
              alt="Welcome"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    <Services />
    <Info />
    <CardSlider />
    <Fifth />
    <Btmnav />
    </div>
  );
};

export default Home;
