import React from 'react';
import './CustomerReview.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import CustomerSidebar from '../../SharedComponents/CustomerSidebar';

const CustomerReview = () => {
  const { register, handleSubmit, errors } = useForm();

  const handleBlur = (inputText) => {
    const letters = /^[A-Za-z]+$/;
    if (inputText.value.match(letters)) {
      return true;
    }
    else {
      alert('Please input alphabet characters only');
      return false;
    }
  }

  const onSubmit = data => {
    const customerReviews = data
    fetch('http://localhost:5000/addReviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customerReviews)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Review accepted!')
        }
      })
  }
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <CustomerSidebar></CustomerSidebar>
          </Col>
          <Col
            className="pb-5" style={{ backgroundColor: "#F4F7FC" }}
            md={9}>
            <h3 className="mt-4 mb-5">Review</h3>
            <form
              className="form2"
              onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                name="name"
                className="review-input m-2 p-2"
                onBlur={() => handleBlur(document.form2.name)}
                ref={register({ required: true })}
                placeholder="Your Name"
              />
              {errors.name && <p className="error">
                Name is required
            </p>}
              <input
                name="designation"
                className="review-input m-2 p-2"
                ref={register({ required: true })}
                placeholder="Your Company's Name/Designation"
              />
              {errors.designation && <p className="error">
                Designation is required
            </p>}
              <textarea
                name="reviews"
                type="text"
                cols="50" rows="3"
                placeholder="Your Review"
                className="order-input m-2 p-2"
                ref={register({ required: true })}
              />
              {errors.reviews && <p className="error">
                Reviews is required
            </p>}
              <br />
              <Button
                className="pr-5 pl-5 m-2"
                variant="dark"
                type="submit">
                Submit
          </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CustomerReview;