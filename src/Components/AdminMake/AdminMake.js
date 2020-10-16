import React, { useContext, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import AdminSidebar from '../../SharedComponents/AdminSidebar';

const AdminMake = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    const addAdminData = data
    fetch('http://localhost:5000/addAdmins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addAdminData)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('New Admin Added!')
        }
      })
  }

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
            <h3 className="mt-4">
              Make Admin
              </h3>
            <h5 style={{ textAlign: 'right' }}>
              {loggedInUser.name}
            </h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="email"
                type="email"
                className="order-input m-2 p-2"
                ref={register({ required: true })}
                placeholder="Add A Email" />
              {errors.email && <p style={{ color: "red" }} className="error">
                Email is required</p>}
              <Button type="submit" variant="success">Submit</Button>
            </form>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default AdminMake;