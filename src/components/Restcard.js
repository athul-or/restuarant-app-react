import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Restcard.css'; // custom styles

function Restcard({ restaurant }) {
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      <Card className="my-4 rest-card">
        <div className="image-container">
          <Card.Img variant="top" src={restaurant.photograph} className="card-img-top" />
          <div className="overlay">
            <Link to={`viewrest/${restaurant.id}`}>
              <Button variant="light" className="view-btn">
                View More
              </Button>
            </Link>
          </div>
        </div>
        <Card.Body className="text-center">
          <Card.Title className="fw-bold fs-5 mb-2">{restaurant.name}</Card.Title>
          <Card.Text className="text-muted mb-1">{restaurant.neighborhood}</Card.Text>
          <Card.Text className="small text-secondary">{restaurant.address}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Restcard;
