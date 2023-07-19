import React from "react";
import "./mainbody.css";
var image_url = "http://127.0.0.1:8000/media/images/tamanna-rumee-mIqyYpSNq3o-unsplash.jpg"


export default function Intro() {
  return (
    <div className="row intro-container">
      <div className="col-lg-6 col-md-12 col-sm-12">
        <img className='intro-img' src = {image_url}></img>
      </div>
      <div className="bg-light text-secondary col-lg-6 col-sm-12 col-md-12  text-center intro">
        <div className="py-4">
          <h1 className="display-5 fw-bold text-dark">The All-in-One Ecommerce</h1>
          <div className="col-lg-10 mx-auto">
            <p className="intro-text lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
            </p>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-outline-dark btn-sm me-sm-3 fw-bol"
              >
                SHOP NOW
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-cart mx-2"
                  viewBox="0 2 15 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </button>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm"
              >
                LEARN MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="mx-2 bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}
