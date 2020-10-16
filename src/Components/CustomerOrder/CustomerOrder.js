import React, { useContext } from 'react';
import './CustomerOrder.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import CustomerSidebar from '../../SharedComponents/CustomerSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const CustomerOrder = ({ work }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

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
    const customerServices = data
    fetch('http://localhost:5000/addServices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customerServices)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Your Order place Successfully!')

        }
      })
  }
  return (
    <Container>
      <Row>
        <Col md={3}>
          <CustomerSidebar></CustomerSidebar>
        </Col>
        <Col className="pb-5" style={{ backgroundColor: "#F4F7FC" }} md={9}>
          <h3 className="mt-4 mb-5">
            Order
          <span style={{
              textAlign: 'right'
            }}>
              {loggedInUser.name}
            </span>
          </h3>
          <form name="form1" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="name"
              className="order-input m-2 p-2"
              onBlur={() => handleBlur(document.form1.name)}
              defaultValue={loggedInUser.name}
              ref={register({ required: true })}
              placeholder="Your Name/Company's Name" />
            {errors.name && <p className="error">
              Name is required
            </p>}
            <input
              type="email"
              name="email"
              className="order-input m-2 p-2"
              defaultValue={loggedInUser.email}
              ref={register({ required: true })}
              placeholder="Your Email Address" />
            {errors.email && <p className="error">
              Email is required
            </p>}
            <input
              name="work"
              className="order-input m-2 p-2"
              defaultValue={work}
              ref={register({ required: true })}
              placeholder={work} />
            {errors.work && <p className="error">
              Work is required
            </p>}
            <textarea
              name="details"
              type="text"
              className="order-input m-2 p-2"
              cols="50"
              rows="3"
              ref={register({ required: true })}
              placeholder="Project Details" />
            {errors.details && <p className="error">
              Details is required
            </p>}
            <br />
            <input
              name="price"
              type="number"
              className="order-input-price m-2 p-2"
              ref={register({ required: true })}
              placeholder="Price" />
            {errors.price && <p className="error">
              Price is required</p>}
            <label
              htmlFor="file upload"
              className="style-file-btn">
              <FontAwesomeIcon
                className="icon-style"
                icon={faUpload} />
              Upload Project File
              </label>
            <input
              className="order-fil-upload m-2 p-2"
              type="file"
              name="project file"
              id="file upload" />
            <br />
            <Button
              className="pr-5 pl-5 m-2"
              variant="dark"
              type="submit">
              send
          </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerOrder;