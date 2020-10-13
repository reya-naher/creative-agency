import React from 'react';
import { Container, Row } from 'react-bootstrap';
import fake from '../../FakeData/FakeFeedbacks';
import FeedbackClient from '../FeedbackClient/FeedbackClient';


const Feedbacks = () => {
  return (
          <Container>
      <h1 className="text-center m-5">Clients Feedback</h1>
      <Row className="d-flex justify-content-center">
      {
  fake.map((item,index) => <FeedbackClient key={index} item={item}></FeedbackClient>)
        }
        </Row>
</Container>

  );
};

export default Feedbacks;