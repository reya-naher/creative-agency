import React, { useContext } from 'react';
import './CustomerReview.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import CustomerSidebar from '../../SharedComponents/CustomerSidebar';
import { UserContext } from '../../App';

const CustomerReview = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const { register, handleSubmit, errors } = useForm();


  const onSubmit = (data,e) => {
    e.target.reset();
    const customerReviews = data
    fetch('https://sheltered-inlet-71328.herokuapp.com/addReviews', {
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
                  <h3 className="mt-4">
              Review
        </h3>
        <h5 style={{ textAlign: 'right' }}>
              {loggedInUser.name}
            </h5>
            <form
              className="form2"
              onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                name="name"
                className="review-input m-2 p-2"
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