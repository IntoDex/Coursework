import React, { useEffect, useState } from 'react';
import {Container, Row, Card, Col, Image, Button, ModalTitle} from 'react-bootstrap'
import cake from '../assets/Test.jpg'
import bigStar from '../assets/bigstar.svg'
import { useParams } from 'react-router-dom';
import { fetchOneRecepte } from '../http/recepteAPI';


const ReceptePage = () => {

  const [recepteData, setRecepte] = useState({})
  
  const {id} = useParams()
  useEffect( () => {
    fetchOneRecepte(id).then(data => setRecepte(data))
  }, [])

  return (
    <Container className='mt-3'>
      <Row>
      <Col md={3}>

        <Image width={300} height={300} src={ process.env.REACT_APP_API_URL + recepteData?.recepte?.img}/>
        <Row>
        <Card className="d-flex flex-column align-items-center justify-content-around mt-4"
          style={{width: 200, height: 50, fontSize: 32, border: '5px solid lightgray'}}>
            <h4>{recepteData?.type?.name}</h4>
        </Card>
        <Card className="d-flex flex-column align-items-center justify-content-around mt-4"
          style={{width: 200, height: 50, fontSize: 32, border: '5px solid lightgray'}}>
            <h4>{recepteData?.cats?.name}</h4>
        </Card>
        </Row>
      </Col>
      <Col md={4}>
          <Row className="d-flex flex-column align-content-center">
            <h2>{recepteData?.recepte?.name}</h2>
            <h2>Номер рецепта: "{recepteData?.recepte?.id}"</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${bigStar})` + 'no-repeat center center', width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
            >
                {recepteData?.recepte?.rating}
            </div>
          
          </Row>   
      </Col>
      <Col md={4}>  
        <Card
          className="d-flex flex-column align-items-center justify-content-around"
          style={{width: 490, height: 300, fontSize: 32, border: '5px solid lightgray'}}
        >
            <h3>{recepteData?.recepte?.description}</h3>
            

        </Card>
        <Button variant={'outline-dark'}>Добавить в избранное</Button>
      </Col>
      </Row>


      <Row className='d-flex flex-column m-3'>
        <h2>Список ингредиентов</h2>
        {recepteData?.ings?.map((ingredient, recepte)=>
          <Row key={ingredient.id} style={{background:'pink'}}>
            {ingredient.name} : {ingredient.id}

          </Row>
        )}
        
        
      </Row>
    </Container>
  );
};

export default ReceptePage;