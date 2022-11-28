import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import CatBar from '../components/CatBar';
import TypeBar from '../components/TypeBar';
import RecepteList from '../components/RecepteList';

const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
            <CatBar />
            <RecepteList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;