import React, { useContext } from 'react';
import {Container, Row, Card} from 'react-bootstrap'
import {observer} from "mobx-react-lite";
import { Context } from '..';
import ListGroup from 'react-bootstrap/ListGroup';

const CatBar = () => {
    const {recepte} = React.useContext(Context)
    return (
        <Row className="d-flex">
            {recepte.cats.map(cat =>
                <Card
                    style={{cursor:'pointer'}}
                    key={cat.id}
                    className="p-3"
                    onClick={() => recepte.setSelectedCat(cat)}
                    border={cat.id === recepte.selectedCat.id ? 'danger' : 'light'}
                >
                    {cat.name}

                </Card>
                )}
        </Row>
      );
};

export default observer(CatBar);