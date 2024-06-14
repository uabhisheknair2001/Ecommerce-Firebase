import React from "react";
import "./Slider.css"

const Slider = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://images.unsplash.com/photo-1657900785870-dd29fa61c84f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" className="d-block w-100" alt="image1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>DO YOU LOVE WATCHES</h5>
            <p>HERE IS YOUR LUXURY PIECES</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1602024305864-8a1a2e5fd90d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="d-block w-100" alt="image2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>BEST POLISHED WATCHES</h5>
            <p>YOU WILL NOT REGRET</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1614241404508-23ad4ca04009?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80" className="d-block w-100" alt="image3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>BUILD YOUR PERSONALITY</h5>
            <p>WEAR YOUR TIME IN WRIST</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
