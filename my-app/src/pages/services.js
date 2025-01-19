import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';

function Services() {
  return (
    <div>
      <div className="container py-5" id='ser'>
        <h2 className="text-center mb-4">Our <span style={{color: "Orange"}}>Services</span></h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="card-title">Service 1</h5>
                <p className="card-text">Description of Service 1 goes here.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="Service 2" />
              <div className="card-body">
                <h5 className="card-title">Service 2</h5>
                <p className="card-text">Description of Service 2 goes here.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="Service 3" />
              <div className="card-body">
                <h5 className="card-title">Service 3</h5>
                <p className="card-text">Description of Service 3 goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
