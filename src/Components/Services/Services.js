import React from 'react';
import { Container, Row } from 'react-bootstrap';
import data from '../../FakeData/FakeServices'
import Service from '../Service/Service';

const Services = () => {
  return (
    <Container>
      <h1 className="text-center m-5">Provide Awesome Services</h1>
    <Row className="d-flex justify-content-center">
      {
        data.map((item,index )=> <Service key={index} item={item}></Service>)
      }
        </Row>
</Container>
  );
};

export default Services;