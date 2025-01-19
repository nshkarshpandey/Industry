import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Fifth() {
  return (
    <div>
      <div
        className="container-fluid py-5 position-relative" id='home-bg-img'
        style={{  }}
      >
        <div className="row align-items-center">
          <div className="col-md-6" >
            <h2>Contact Us</h2>
            <p>We would love to hear from you. Please fill out the form below to get in touch.</p>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">Contact Number</label>
                <input type="text" className="form-control" id="contact" placeholder="Enter your contact number" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Fifth
