import React from 'react';
import { Card } from 'react-bootstrap';

const CustomerService = ({item}) => {
  return (
    <>
        <Card className="text-center" style={{ width: '18rem' }}>
  <Card.Body>
          <Card.Title>{item.work}</Card.Title>

  </Card.Body>
</Card>
      
    </>
  );
};

export default CustomerService;