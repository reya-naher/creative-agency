import React from 'react';
import './LogoGroup.css';
import { ListGroup } from 'react-bootstrap';


const LogoGroup = () => {
  return (
<ListGroup horizontal className= "d-flex justify-content-center m-5">
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
  );
};

export default LogoGroup;