import React, { useEffect, useState } from 'react';
import {Container, Row, Card, Col, Image, Button, ModalTitle} from 'react-bootstrap'
import cake from '../assets/Test.jpg'
import bigStar from '../assets/bigstar.svg'
import { useNavigate, useParams } from 'react-router-dom';
import { addFav, fetchOneRecepte, fetchisFav } from '../http/recepteAPI';
import { FAVORITE_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { Context } from '..';


const ReceptePage = () => {

  const {favorite, user, isfavorite} = React.useContext(Context)

  const history = useNavigate()

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
            
          
          </Row>   
      </Col>
      <Col md={4}>  
        <Card
          className="d-flex flex-column align-items-center justify-content-around"
          style={{width: 490, height: 300, fontSize: 32, border: '5px solid lightgray'}}
        >
            <h3>{recepteData?.recepte?.description}</h3>
            

        </Card>
        <Button 
        onClick={() => {
          if(user.isAuth) {
          favorite.addFav(user.user.id, recepteData?.recepte?.id); 
          history(FAVORITE_ROUTE) 
        } else {
          history(LOGIN_ROUTE)
        }} }
        variant={'outline-dark'}>Добавить в избранное</Button>
      </Col>
      </Row>


      <Row className='d-flex flex-column m-3'>
        <h2>Список ингредиентов</h2>
        {recepteData?.ings?.map((ingredient, recepte)=>
          <Row key={ingredient.id} style={{background:'dark'}}>
            {ingredient.name} : {ingredient.id}

          </Row>
        )}
        
        
      </Row>
    </Container>
  );
};

export default ReceptePage;