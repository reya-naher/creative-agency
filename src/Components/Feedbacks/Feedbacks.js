import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
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
      <h1
        className="text-center m-5">
        Clients 
        <span style={{ color: "#7AB259" }}> Feedback</span>
      </h1>
      <Row className="d-flex justify-content-center">
        {
          clientReview.length === 0 && <Spinner animation="border" variant="success" />
        }
        {
          clientReview.map((item, index) => <FeedbackClient key={index} item={item}></FeedbackClient>)
        }
      </Row>
    </Container>

  );
};

export default Feedbacks;