import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import AdminServiceList from '../AdminServiceList/AdminServiceList';

const Admin = () => {
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
          < br/>
          < br />
            <Link to= '/adminallservice'> 
          <Button>
            {/* <PeopleIcon /> */}
            Service list
            </Button>
              </Link>
          <br />
          <Link to= '/addservice'>
          <Button>
            {/* <AddIcon /> */}
          Add  Service
            </Button>
          </Link>
          <Link to= '/makeadmin'>
          <Button>
            {/* <AddIcon /> */}
            Make Admin
            </Button>
            </Link>
          </Col>
          <Col md="9">
            <AdminServiceList></AdminServiceList>
          </Col>
        </Row>
        </Container>
    </>
  );
};

export default Admin;