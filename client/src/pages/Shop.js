import React, { useContext, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import CatBar from '../components/CatBar';
import TypeBar from '../components/TypeBar';
import RecepteList from '../components/RecepteList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchCats, fetchTypes, fetchIngs, fetchReceptes } from '../http/recepteAPI';

const Shop = () => {
  const {recepte} = React.useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => recepte.setTypes(data.rows))
    fetchCats().then(data => recepte.setCats(data.rows))
    fetchIngs().then(data => recepte.setIngs(data.rows))
    fetchReceptes().then(data => recepte.setReceptes(data.rows))
  }, [])

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

export default observer(Shop);