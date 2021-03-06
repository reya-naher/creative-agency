import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { UserContext } from '../../App';
import CustomerSidebar from '../../SharedComponents/CustomerSidebar';
import CustomerService from '../CustomerService/CustomerService';

const CustomerServiceList = () => {
  const [order, setOrders] = useState([])
  const {loggedInUser} = useContext(UserContext)

  useEffect(() => {
    fetch('https://sheltered-inlet-71328.herokuapp.com/services?email=' + loggedInUser.email)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])


  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <CustomerSidebar></CustomerSidebar>
          </Col>
          <Col className="p-5" style={{ backgroundColor: "#F4F7FC" }} md={9}>
            <h3 className="mt-4">
              Orders
            </h3>
            <h5
              style={{ textAlign: 'right' }}>
              {loggedInUser.name}
            </h5>
            <Row className="d-flex justify-content-center">
              {
                order.map((item, index) => <CustomerService key={index} item={item}></CustomerService>)
              }
            </Row>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default CustomerServiceList;