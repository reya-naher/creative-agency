import React, { useContext } from 'react';
import './CustomerOrder.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const CustomerOrder = ({ work }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // const history = useHistory()
  // const handleClickBtn = (work) => {
  //   history.push(`/customerlist/${work}`)
  // }

  const onSubmit = data => {
    const customerServices = data
    fetch('http://localhost:5000/addServices', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(customerServices)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Your Order place Successfully!')
          // history.push('/customerlist');
      }
    })
  }
  return (
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
          < br/>
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
          <p>{work}</p>
          <form  onSubmit={handleSubmit(onSubmit)}>
          
          <input
            name="name"
            className="order-input m-2 p-2"
            defaultValue={loggedInUser.name}
            ref={register({ required: true })}
            placeholder="Your Name/Company's Name" />
          {errors.name && <span className="error">
            Name is required
            </span>}   

          <input
            name="email"
            className="order-input m-2 p-2"
            defaultValue={loggedInUser.email}
            ref={register({ required: true })}
            placeholder="Your Email Address" />
          {errors.email && <span className="error">
              Email is required</span>} 
            
              <input
            name="work"
            className="order-input m-2 p-2"
            defaultValue={work}
            ref={register({ required: true })}
            placeholder={work} />
            
            <input
            name="details"
            className="order-input m-2 p-2"
            ref={register({ required: true })}
            placeholder="Project Details" />
          {errors.email && <span className="error">
              Details is required</span>}
            <br />
              <input
            name="price"
            className="order-input-price m-2 p-2"
            ref={register({ required: true })}
            placeholder="Price" />
          {errors.email && <span className="error">
              Price is required</span>}
            
            <label htmlFor="file upload" className="style-file-btn">Upload</label>
            <input className="order-fil-upload m-2 p-2" type="file" name="project file" id="" />
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
  );
};

export default CustomerOrder;