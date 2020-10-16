import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CustomerService = ({ item }) => {
 
  return (
    <>
      <Col md={6} sm={12} xs={12}>
        <Card
          className="m-2"
          style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title><b>{item.work}</b></Card.Title>
            <Card.Text>{item.details}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CustomerService;