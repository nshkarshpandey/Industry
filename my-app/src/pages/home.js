import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/banner.png";
import CardSlider from "./cardslider";
import Services from "./services";
import Info from "./info";
import Fifth from "./fifth";
import Btmnav from "./btmnav";
import Button from "react-bootstrap/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import numb from "../assets/images/home-img-1.png";

const Home = () => {
  return (
    <div className="container-fluid">
      {/* First Section */}
      <div
        className="container d-flex align-items-center pt-4"
        style={{ marginBottom: "50px" }}
      >
        <div className="row w-100">
          {/* Left Side: Text and Button */}
          <div className="col-md-6 d-flex flex-column home-font">
            <p style={{ }}>
              Enquire Now for <span style={{ color: "#EB9D00" }}>Power</span>{" "}
              Solutions!
            </p>
            <p
              className="home-font-1"
              style={{
                
              }}
            >
              Powering your world with reliable, BIS-certified transformers.
            </p>
            <Button
              variant="outline-secondary"
              id="btn-1"
              href="tel:9419140984"
              style={{
                
              }}
            >
              Enquire Now
            </Button>
            <img
              src={numb}
              alt=""
              id="home-img-1"
              style={{
                width: "100%",
                maxWidth: "500px",
                alignSelf: "left",
                marginTop: "80px",
              }}
            />
          </div>

          {/* Right Side: Image */}
          <div className="col-md-6 d-flex justify-content-center align-items-center pt-2">
            <img
              src={logo} // Replace with your image path
              alt="Welcome"
              className="img-fluid"
              style={{ maxWidth: "450px", width: "100%" }} // Adjusting the image size
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-5 bg-light">
        <Services />
      </section>

      {/* Info Section */}
      <section id="about" className="py-5">
        <Info />
      </section>

      {/* Other Components */}
      <CardSlider />
      <Fifth />
      <Btmnav />
    </div>
  );
};

export default Home;
