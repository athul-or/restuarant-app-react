import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';

function Viewrest() {

  const urlparams = useParams()

  const [allRestaurants, setAllRestaurants] = useState([])



  const getRestaurants = async () => {
    await fetch('/restaurants.json').then(
      (data) => {
        data.json().then(
          (result) => {
            setAllRestaurants(result.restaurants)
          }
        )
      }
    )
  }

  useEffect(() => {
    getRestaurants()
  }, [])



  const viewrest = allRestaurants.find(item => item.id == urlparams.id)
  console.log(viewrest)

  return (
    <div>
      {
        viewrest ? (
          <Row className='p-5'>
            <Col md={4}>
              <Image src={viewrest.photograph} fluid/>
            </Col>
            <Col md={7}>
              <ListGroup>
                <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
                <ListGroup.Item><h3>{viewrest.cuisine_type}</h3></ListGroup.Item>
                <ListGroup.Item><h4>{viewrest.neighborhood}</h4></ListGroup.Item>
                <ListGroup.Item><h6>{viewrest.address}</h6></ListGroup.Item>
                <ListGroup.Item><h6><Restop operate={viewrest.operating_hours}/></h6></ListGroup.Item> 
                <Restreview review={viewrest.reviews}/>
              </ListGroup>
            </Col>
          </Row>
        ) : 'null'

      }
    </div>
  )
}

export default Viewrest