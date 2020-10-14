import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import fake from '../../FakeData/FakeFeedbacks';
import FeedbackClient from '../FeedbackClient/FeedbackClient';


const Feedbacks = () => {
  const [clientReview, setClientReview] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
  .then(data => setClientReview(data))
  }, [])
  return (
          <Container>
      <h1 className="text-center m-5">Clients Feedback</h1>
      <Row className="d-flex justify-content-center">
      {
  clientReview.map((item,index) => <FeedbackClient key={index} item={item}></FeedbackClient>)
        }
        </Row>
</Container>

  );
};

export default Feedbacks;