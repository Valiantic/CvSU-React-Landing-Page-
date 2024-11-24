import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComponent = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className='pamagat display-1'>Cavite State University</Card.Title>
        <Card.Text className='display-6'>
            Truth, Excellence and Service
        </Card.Text>
        <Button variant="success" size="lg">Learn More</Button>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
