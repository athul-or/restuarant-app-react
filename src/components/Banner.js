import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="position-relative">
      {/* Banner Image */}
      <img
        src={banner}
        alt="Restaurant Banner"
        className="w-100"
        style={{ height: "500px", objectFit: "cover", marginTop:"70px" }}
      />

      {/* Overlay Content */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "rgba(0, 0, 0, 0.18)", // semi-transparent black
        }}
      ></div>

      {/* Text Content */}
      <div
        className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
        style={{ maxWidth: "700px" }}
      >
        <h1 className="display-4 fw-bold mb-3 banner-text">Welcome to Flavor Haven</h1>
        <p className="lead mb-4 banner-text">
          Savor authentic dishes crafted with love and served with a smile. Experience a
          culinary journey like never before.
        </p>
        <button className="btn btn-danger btn-lg">Explore Menu</button>
      </div>
    </div>
  );
};

export default Banner;
