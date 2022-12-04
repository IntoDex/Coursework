import React from "react";
import {Col} from "react-bootstrap"
import {Container, Row, Card} from 'react-bootstrap'
import star from '../assets/star.png'
import cake from '../assets/Test.jpg'
import Image from "react-bootstrap/Image"
import {useNavigate} from "react-router-dom"
import { RECEPTE_ROUTE } from "../utils/consts";

const RecepteItem = ({recepte}) => {
    const history = useNavigate()
    return (
       <Col md={3} className={"mt-3"} onClick={() => history(RECEPTE_ROUTE + '/' + recepte.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + recepte.img} />
                <div className="text-black-50 mt-1 d-flex text-black-50 align-items-center justify-content-between">
                    <div>Пельмени</div>
                    
                </div>
                <div>
                        {recepte.name}
                    </div>
            </Card>
       </Col>
    )
}

export default RecepteItem;