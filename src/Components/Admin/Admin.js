import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSidebar from '../../SharedComponents/AdminSidebar';
import AdminServiceList from '../AdminServiceList/AdminServiceList';

const Admin = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <AdminSidebar></AdminSidebar>
          </Col>
          <Col
            className="pb-5"
            style={{ backgroundColor: "#F4F7FC" }}
            md={9}>
            <AdminServiceList></AdminServiceList>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;