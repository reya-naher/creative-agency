import React from 'react';
import './Service.css';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Service = ({ item }) => {
  const history = useHistory()
  const handleService = (work) => {
    history.push(`/customer/${work}`);
  }
  return (
    <Col
      onClick={() => handleService(item.name)}
      md={4}
      sm={6}
      xs={12}>
      <Card
        className="service text-center"
        style={{ width: '18rem' }}>
        <Card.Img
          className="mx-auto m-2 animated"
          variant="top"
          src={`data:image/png;base64,${item.image.img}`} />
        <Card.Body>
          <Card.Title>
            {item.name}
          </Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>

        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;