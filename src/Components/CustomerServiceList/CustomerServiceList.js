import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import { Link,useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import CustomerService from '../CustomerService/CustomerService';

const CustomerServiceList = () => {
  const [order, setOrders] = useState([])
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  useEffect(() => {
    fetch('http://localhost:5000/services?email=' + loggedInUser.email)
      .then(res => res.json())
    .then(data => setOrders(data))
  },[])
 
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
          {
        order.map(item => <CustomerService item={item}></CustomerService>)
     }
          </Col>
        </Row>
        </Container>

    </>
  );
};

export default CustomerServiceList;