import React from 'react';
import './Service.css'
import { Card, Col } from 'react-bootstrap';

const Service = ({ item }) => {
  const handleClick = () => {
    console.log("clicked")
  }
  return (
        <Col onClick={handleClick} md="4">
        <Card className="service text-center" style={{ width: '18rem' }}>
  <Card.Img className="mx-auto m-2"  variant="top"  src={item.logo} />
  <Card.Body>
          <Card.Title>{item.name}</Card.Title>
    <Card.Text>{item.description}
    </Card.Text>
  </Card.Body>
</Card>
        </Col>
  );
};

export default Service;