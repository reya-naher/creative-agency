import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CustomerService = ({ item }) => {
  return (
    <>
      <Col md="6">
        <Card
          className="text-center m-2"
          style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{item.work}</Card.Title>
            <Card.Text>{item.details}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CustomerService;