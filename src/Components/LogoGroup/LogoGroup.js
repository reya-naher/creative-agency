import React from 'react';
import './LogoGroup.css';
import { ListGroup } from 'react-bootstrap';

const LogoGroup = () => {
  
  return (
    ['sm'].map((breakpoint, idx) => (
      <ListGroup
        horizontal={breakpoint}
        key={idx}
        className="d-flex justify-content-center  m-5 my-2">
      <ListGroup.Item>
        <img
          height="30"
          width="100"
          src="https://i.imgur.com/r91ic37.png"
          alt="" />
      </ListGroup.Item>
      <ListGroup.Item>
        <img
          height="30"
          width="100"
          src="https://i.imgur.com/pFbxZev.png"
          alt="" />
      </ListGroup.Item>
      <ListGroup.Item>
        <img
          height="30"
          width="100"
          src="https://i.imgur.com/iC8qsP1.png"
          alt="" />
      </ListGroup.Item>
      <ListGroup.Item>
        <img
          height="30"
          width="100"
          src="https://i.imgur.com/Lz2XCrw.png"
          alt="" />
      </ListGroup.Item>
      <ListGroup.Item>
        <img
          height="30"
          width="100"
          src="https://i.imgur.com/YYWVool.png"
          alt="" />
      </ListGroup.Item>
      </ListGroup>
    ))
  );
};

export default LogoGroup;