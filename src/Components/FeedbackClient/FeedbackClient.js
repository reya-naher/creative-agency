import React from 'react';
import { Card, Col, Media } from 'react-bootstrap';

const FeedbackClient = ({ item }) => {
  return (
    <Col md="4">
      <Card className="p-4">
        <Media>
          {/* <img
            width={64}
            height={64}
            className="mr-3"
            src={item.image}
            alt="client"
          /> */}
          <Media.Body>
            <h5>{item.name}</h5>
            <h6>{item.designation}</h6>
          </Media.Body>
        </Media>
        <Card.Text>
          {item.reviews}
        </Card.Text>
      </Card>
    </Col>
  );
};

export default FeedbackClient;