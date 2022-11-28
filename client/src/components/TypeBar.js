import React, { useContext } from 'react';
import {Container, Row} from 'react-bootstrap'
import {observer} from "mobx-react-lite";
import { Context } from '..';
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = () => {
    const {recepte} = React.useContext(Context)
    return (
        <ListGroup>
            {recepte.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}} 
                    active={type.id === recepte.selectedType.id}
                    onClick={() => recepte.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                    </ListGroup.Item>
                )}
        </ListGroup>
      );
};

export default observer(TypeBar);