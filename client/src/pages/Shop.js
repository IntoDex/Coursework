import React, { useContext, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import CatBar from '../components/CatBar';
import TypeBar from '../components/TypeBar';
import RecepteList from '../components/RecepteList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchCats, fetchTypes, fetchIngs, fetchReceptes } from '../http/recepteAPI';
import Pages from '../components/Pages';

const Shop = () => {
  const {recepte} = React.useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => recepte.setTypes(data.rows))
    fetchCats().then(data => recepte.setCats(data.rows))
    fetchIngs().then(data => recepte.setIngs(data.rows))
    fetchReceptes(null, null, 1, 2).then(data => {
      recepte.setReceptes(data.rows)
      recepte.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchReceptes(recepte.selectedType.id, recepte.selectedCat.id, recepte.page, 2).then(data => {
      recepte.setReceptes(data.rows)
      recepte.setTotalCount(data.count)
    })
  }, [recepte.page,recepte.selectedType, recepte.selectedCat ])





  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
            <CatBar />
            <RecepteList />
            <Pages />
        </Col>
      </Row>
    </Container>
  );
};

export default observer(Shop);