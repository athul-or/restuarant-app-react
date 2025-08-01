import React, { useEffect } from 'react';
import Restcard from './Restcard';
import { Row, Container } from 'react-bootstrap';
import { RestListAction } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.reducer);
  const { restList } = result;

  useEffect(() => {
    dispatch(RestListAction());
  }, [dispatch]);

  return (
    <Container className="my-5">
      <Row className="g-4 justify-content-center">
        {restList?.map((item, index) => (
          <Restcard key={index} restaurant={item} />
        ))}
      </Row>
    </Container>
  );
}

export default Home;
