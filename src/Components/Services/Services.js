import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetch('https://sheltered-inlet-71328.herokuapp.com/adminServices')
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [])
  return (
    <Container>
      <h1
        className="text-center m-5">
        Provide Awesome 
        <span style={{ color: "#7AB259" }}>
           Services
          </span>
      </h1>
      <Row className="d-flex justify-content-center">
        {
          tasks.length === 0 && <Spinner animation="border" variant="success" />
        }
        {
          tasks.map((item, index) => <Service key={index} item={item}></Service>)
        }
      </Row>
    </Container>
  );
};

export default Services;