import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Fifth() {
  return (
    <div>
      <div
        className="container-fluid py-5 position-relative text-white fif-bg"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="row align-items-center justify-content-between px-5">
          {/* Left Section: Text */}
          <div className="col-md-6">
            <p className='fif-txt-1'>Accurate Industries welcomes you!!</p>
            <p className='fif-para-1'>
              Share your E-mail & Contact No. — let's team up! 🚀
            </p>
          </div>

          {/* Right Section: Form */}
          <div className="col-md-4">
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email..."
                  style={{
                    borderRadius: '20px',
                    padding: '10px 15px',
                    fontSize: '16px',
                    border: 'none',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                    fontFamily : "Montserrat",
                    color: "#888",
                    fontStyle:" normal",
                    fontWeight:"400",
                    lineHeight: "32px",
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Contact Number..."
                  style={{
                    borderRadius: '20px',
                    padding: '10px 15px',
                    fontSize: '16px',
                    border: 'none',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                    fontFamily : "Montserrat",
                    color: "#888",
                    fontStyle:" normal",
                    fontWeight:"400",
                    lineHeight: "32px",
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark fif-btn"
                style={{
                  width : "40%",
                  borderRadius: '12px',
                  fontSize: '16px',
                  backgroundColor: "transparent",
                  border: "1px solid #fff",
                }}
              >
                Share Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fifth;
