import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Restcard({ restaurant }) {
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      
        <Card className='px-3 my-4 rounded' >
          <Card.Img className='p-2' variant="top" src={restaurant.photograph} />
          <Card.Body>
            <Card.Title>{restaurant.name}</Card.Title>
            <Card.Text>
              {restaurant.neighborhood}
            </Card.Text>
            <Card.Text>
              {restaurant.address}
            </Card.Text>
            <Link to={`viewrest/${restaurant.id}`}>
            <Button variant="primary">View More</Button>
            </Link>
          </Card.Body>
        </Card>
    </Col>
  )
}

export default Restcard