import React from 'react';
import './CustomerReview.css';
import { Button,Container,Row,Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link} from 'react-router-dom';

const CustomerReview = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    const customerReviews = data
    fetch('http://localhost:5000/addReviews', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(customerReviews)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Review accepted!')
          // history.push('/customerlist');
      }
    })
  }
  return (
    <>
                <Container>
      <Row>
        <Col md="3">
          <Link to="/">
            <img
              className="imgAdmin"
              src="https://i.imgur.com/C2lhwy9.png"
              height="50"
              width="150"
              alt="" />
          </Link>
            < br />
            <Link to= '/order'> 
          <Button>
            {/* <PeopleIcon /> */}
            Orders
            </Button>
              </Link>
          <br />
          <Link to= '/customerservicelist'>
          <Button>
            {/* <AddIcon /> */}
            Service List
            </Button>
          </Link>
          <Link to= '/review'>
          <Button>
            {/* <AddIcon /> */}
            Review
            </Button>
            </Link>
          </Col>
          <Col md="9">
          <form  onSubmit={handleSubmit(onSubmit)}>
          
          <input
            name="name"
            className="review-input m-2 p-2"
            ref={register({ required: true })}
            placeholder="Your Name" />
          {errors.name && <span className="error">
            Name is required
            </span>}   

          <input
            name="designation"
            className="review-input m-2 p-2"
            ref={register({ required: true })}
          placeholder="Your Company's Name/Designation"
                required />
                 {errors.designation && <span className="error">
            Designation is required
            </span>} 
             
            <textarea
          name="reviews"
          cols="50" rows="3"
          placeholder="Your Review"
            className="order-input m-2 p-2"
            ref={register({ required: true })}
             />

          <br />
          
          <Button
            className="p-2"
            variant="dark"
            type="submit">
            send
          </Button>
          
        </form> 
          </Col>
        </Row>
        </Container>

    </>
  );
};

export default CustomerReview;