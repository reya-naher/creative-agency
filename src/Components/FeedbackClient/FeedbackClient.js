import React from 'react';
import './FeedbackClient.css';
import { Card, Col, Media } from 'react-bootstrap';

const FeedbackClient = ({ item }) => {

  return (
    <Col md="4" sm={6} xs={12}>
      <Card className="feedback-card p-4">
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src="https://i.imgur.com/4GJFDHA.png"
            alt="client"
          />
          <Media.Body>
            <h5><b>{item.name}</b></h5>
            <h6><b>{item.designation}</b></h6>
          </Media.Body>
        </Media>
        <Card.Text className="text-secondary">
          {item.reviews}
        </Card.Text>
      </Card>
    </Col>
  );
};

export default FeedbackClient;