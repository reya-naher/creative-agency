import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { UserContext } from '../../App';
import AdminSidebar from '../../SharedComponents/AdminSidebar';
import './AdminAddService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const AdminAddService = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [info, setInfo] = useState({})
  const [file, setFile] = useState(null);

  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo)
  }
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile)
  }
  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', info.name)
    formData.append('description', info.description)

    fetch('http://localhost:5000/adminAddService', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={3} sm={6} xs={12} >
            <AdminSidebar></AdminSidebar>
          </Col>
          <Col
            className="pb-5"
            style={{ backgroundColor: "#F4F7FC" }}
            md={9}
            sm={6}
            xs={12}>
            <h3 className="mt-4">
              Add Service
              </h3>
            <h5 style={{ textAlign: 'right' }}>
              {loggedInUser.name}
            </h5>
            <form onSubmit={handleSubmit}>
              <label
                className="m-2"
                htmlFor="name">
                <b>Service Name</b>
              </label>
              <br />
              <input
                onBlur={handleBlur}
                type="text"
                name="name"
                className="input-admin m-2 p-2"
                id="name"
                placeholder="Service Name" />
              <span className="icon-label">
                <b>icon</b>
              </span>
              <label
                htmlFor="file upload"
                className="style-file-btn">
                <FontAwesomeIcon
                  className="icon-style"
                  icon={faUpload} />
              Upload Icon
              </label>
              <input
                onChange={handleFileChange} className="order-fil-upload m-2 p-2"
                type="file"
                name="project file"
                id="file upload" />
              <br />
              <label
                className="m-2"
                htmlFor="description">
                <b>Description</b>
              </label>
              <br />
              <textarea
                onBlur={handleBlur}
                type="text"
                className="m-2 p-2"
                placeholder="Description"
                name="description"
                id="description"
                cols="50"
                rows="3">
              </textarea>
              <br />
              <Button
                type="submit"
                className="admin-submit m-2"
                variant="success">
                Submit
                </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminAddService;