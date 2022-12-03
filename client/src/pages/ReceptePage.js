import React, { useEffect, useState } from 'react';
import {Container, Row, Card, Col, Image, Button} from 'react-bootstrap'
import cake from '../assets/Test.jpg'
import bigStar from '../assets/bigstar.svg'
import { useParams } from 'react-router-dom';
import { fetchOneRecepte } from '../http/recepteAPI';


const ReceptePage = () => {

  const [recepte, setRecepte] = useState({})
  const {id} = useParams()
  useEffect( () => {
    fetchOneRecepte(id).then(data => setRecepte(data))
  }, [])

  return (
    <Container className='mt-3'>
      <Row>
      <Col md={4}>

        <Image width={300} height={300} src={ process.env.REACT_APP_API_URL + recepte.img}/>
        <Row>
        <Card className="d-flex flex-column align-items-center justify-content-around mt-4"
          style={{width: 200, height: 50, fontSize: 32, border: '5px solid lightgray'}}>
            <h4>{}</h4>
        </Card>
        <Card className="d-flex flex-column align-items-center justify-content-around mt-4"
          style={{width: 200, height: 50, fontSize: 32, border: '5px solid lightgray'}}>
            <h4>Тут должна быть категория</h4>
        </Card>
        </Row>
      </Col>
      <Col md={4}>
          <Row className="d-flex flex-column align-content-center">
            <h2>{recepte.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${bigStar})` + 'no-repeat center center', width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
            >
                {recepte.rating}
            </div>
          
          </Row>   
      </Col>
      <Col md={4}>  
        <Card
          className="d-flex flex-column align-items-center justify-content-around"
          style={{width: 490, height: 300, fontSize: 32, border: '5px solid lightgray'}}
        >
            <h3>{recepte.description}</h3>
            

        </Card>
        <Button variant={'outline-dark'}>Добавить в избранное</Button>
      </Col>
      </Row>


      <Row className='d-flex flex-column m-3'>
        <h2>Список ингредиентов</h2>
        
        
      </Row>
    </Container>
  );
};

export default ReceptePage;