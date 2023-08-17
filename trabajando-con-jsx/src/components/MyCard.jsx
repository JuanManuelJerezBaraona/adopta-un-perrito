import React from 'react'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Tags from './Tags';

const MyCard = ({image, name, description, color, texto}) => {
  return (
    <div>
      <Card className='shadow-lg'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Tags color={color} texto={texto}/>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MyCard