import React from 'react';
import {Container, Row, Card, Col, Image, Button} from 'react-bootstrap'
import cake from '../assets/Test.jpg'
import bigStar from '../assets/bigstar.svg'


const ReceptePage = () => {
  const recepte = {id: 1, name: "Пельмени", description: "Описание", rating: 2, img: cake}
  const type = {id: 1, name: "Русская"}
  const category = {id: 1, name: "Выпечка"}
  const ingredient = [{id: 1, name: "Яблоко"},
    {id: 2, name: "Апельсин"}
    ]


  return (
    <Container className='mt-3'>
      <Row>
      <Col md={4}>

        <Image width={300} height={300} src={recepte.img}/>
        <Row>
        <Card className="d-flex flex-column align-items-center justify-content-around mt-4"
          style={{width: 200, height: 50, fontSize: 32, border: '5px solid lightgray'}}>
            <h4>{type.name}</h4>
        </Card>
        <Card className="d-flex flex-column align-items-center justify-content-around mt-4"
          style={{width: 200, height: 50, fontSize: 32, border: '5px solid lightgray'}}>
            <h4>{category.name}</h4>
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
        {ingredient.map((ingredient, recepte)=>
        <Row key={ingredient.id} style={{background:'pink' }}>
          {ingredient.name} : {ingredient.id}
        </Row>
        )}
        
      </Row>
    </Container>
  );
};

export default ReceptePage;