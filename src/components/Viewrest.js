import React, { useEffect, useState } from "react";
import { Col, Image, Row, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Restop from "./Restop";
import Restreview from "./Restreview";
import "./Viewrest.css";

function Viewrest() {
  const { id } = useParams();
  const [allRestaurants, setAllRestaurants] = useState([]);

  const getRestaurants = async () => {
    const res = await fetch("/restaurants.json");
    const data = await res.json();
    setAllRestaurants(data.restaurants);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const viewrest = allRestaurants.find((item) => item.id === Number(id));
  console.log(viewrest);

  return (
    <div className="viewrest-page">
      {viewrest ? (
        <Row className="viewrest-container g-0 w-100 m-0">
          {/* Restaurant Image */}
          {/* Restaurant Image */}
          <Col md={4} className="p-3">
            <div className="image-card">
              <Image
                src={viewrest.photograph}
                fluid
                rounded
                className="shadow-sm restaurant-image"
              />
            </div>
          </Col>

          {/* Restaurant Info */}
          <Col md={8} className="p-3">
            <div className="restaurant-details shadow-lg rounded p-4">
              <h1 className="fw-bold mb-2">
                {viewrest.name}{" "}
                <Badge bg="warning" text="dark" className="fs-6 align-middle">
                  ⭐ {Math.floor(Math.random() * 2) + 4}.{Math.floor(Math.random() * 9)}
                </Badge>
              </h1>
              <h4 className="text-muted mb-3">{viewrest.cuisine_type}</h4>
              <p className="text-secondary mb-1">
                <i className="bi bi-geo-alt-fill me-2"></i>
                {viewrest.neighborhood}
              </p>
              <p className="text-secondary mb-3">{viewrest.address}</p>

              {/* Operating Hours */}
              <div className="operating-hours p-3 rounded shadow-sm mb-4">
                <h6 className="fw-bold mb-2 text-dark">Operating Hours:</h6>
                <Restop operate={viewrest.operating_hours} />
              </div>

              {/* Reviews Section */}
              <div className="reviews-section">
                <h5 className="fw-bold mb-3">Customer Reviews</h5>
                <Restreview review={viewrest.reviews} />
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <h3 className="text-center text-muted mt-5">Loading...</h3>
      )}
    </div>
  );
}

export default Viewrest;
