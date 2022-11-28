import React from "react";
import {Col} from "react-bootstrap"
import {Container, Row, Card} from 'react-bootstrap'
import star from '../assets/star.png'
import cake from '../assets/Test.jpg'
import Image from "react-bootstrap/Image"

const RecepteItem = ({recepte}) => {
    ///////////
    return (
       <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={recepte.img} />
                <div className="text-black-50 mt-1 d-flex text-black-50 align-items-center justify-content-between">
                    <div>Пельмени</div>
                    <div className="d-flex align-items-center">
                        <div>{recepte.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>
                        {recepte.name}
                    </div>
            </Card>
       </Col>
    )
}

export default RecepteItem;