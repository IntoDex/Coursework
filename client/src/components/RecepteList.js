import React, { useContext } from 'react';
import {Container, Row} from 'react-bootstrap'
import {observer} from "mobx-react-lite";
import { Context } from '..';
import ListGroup from 'react-bootstrap/ListGroup';
import RecepteItem from './RecepteItem';
import star from '../assets/star.png'
import cake from '../assets/Test.jpg'

const RecepteList = () => {
    const {recepte} = React.useContext(Context)
    return (
        <Row className="d-flex">
            {recepte.receptes.map(recepte =>
                    <RecepteItem key={recepte.id} recepte={recepte}/>
                )}

        </Row>
      );
};

export default observer(RecepteList);